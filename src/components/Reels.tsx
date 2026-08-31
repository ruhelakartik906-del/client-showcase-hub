import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import { reels, type Reel } from "@/data/reels";
import { Reveal } from "./ui-kit/Reveal";
import { SectionHeading } from "./ui-kit/SectionHeading";

export function Reels() {
  const [open, setOpen] = useState<Reel | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="reels" className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="11 — Founder reels"
          title={
            <>
              Ideas, insights &amp; <span className="text-brand">behind the build.</span>
            </>
          }
        />
      </div>

      <div className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:px-8">
        {reels.map((r, i) => (
          <Reveal key={r.id} delay={Math.min(i * 50, 200)} className="snap-start">
            <button
              onClick={() => setOpen(r)}
              className="group relative block w-[15rem] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-card text-left sm:w-[17rem]"
            >
              <div className="relative aspect-9/16 overflow-hidden">
                <img
                  src={r.thumb}
                  alt={r.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:opacity-100"
                />
                {r.video ? (
                  <video
                    src={r.video}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                    onMouseEnter={(e) => void e.currentTarget.play().catch(() => {})}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-brand/35 bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                  {r.category}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-2 py-1 font-mono text-[10px] text-muted-foreground">
                  {r.duration}
                </span>
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand/90 text-brand-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <Play className="ml-0.5 h-5 w-5 fill-current" />
                </span>
                <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold leading-snug">
                  {r.title}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-5">
          <button aria-label="Close" onClick={() => setOpen(null)} className="absolute inset-0 bg-ink/90 backdrop-blur-sm" />
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/12 bg-card">
            <button
              onClick={() => setOpen(null)}
              aria-label="Close reel"
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            {open.video ? (
              <video
                src={open.video}
                poster={open.thumb}
                controls
                autoPlay
                playsInline
                className="aspect-9/16 w-full bg-ink object-cover"
              />
            ) : (
              <img src={open.thumb} alt={open.title} className="aspect-9/16 w-full object-cover" />
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-5 pb-14">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                {open.category} · {open.duration}
              </p>
              <p className="mt-1.5 text-sm font-semibold">{open.title}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
