import { clients } from "@/data/clients";
import { SectionHeading } from "./ui-kit/SectionHeading";

export function Clients() {
  const row = [...clients, ...clients];
  return (
    <section id="clients" className="relative border-t border-white/8 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="07 — Trust"
          title={
            <>
              Trusted by businesses <span className="text-brand">we've built with.</span>
            </>
          }
        />
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max gap-4 hover:[animation-play-state:paused]">
          {row.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="group relative flex h-24 w-48 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white px-6 transition-all duration-500 hover:border-brand/60 hover:shadow-[0_0_40px_-8px_var(--brand)]"
            >
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                className="max-h-14 w-auto max-w-[8.5rem] object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full border border-brand/30 bg-background px-2.5 py-1 font-mono text-[10px] text-brand opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
