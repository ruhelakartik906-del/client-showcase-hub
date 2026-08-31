import { useEffect, useRef, useState } from "react";
import { processStages } from "@/data/process";
import { SectionHeading } from "./ui-kit/SectionHeading";
import { cn } from "@/lib/utils";

export function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset["idx"]);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const progress = ((active + 1) / processStages.length) * 100;

  return (
    <section id="process" className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Process"
          title={
            <>
              From idea to <span className="text-brand">launch.</span>
            </>
          }
          sub="A clear process from first conversation to ongoing optimization."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* HUD panel */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>Mission status</span>
                <span className="text-brand">{processStages[active]?.hud}</span>
              </div>

              <p className="mt-6 font-mono text-5xl font-bold text-brand text-glow">
                {processStages[active]?.id}
              </p>
              <h3 className="mt-2 text-2xl font-bold">{processStages[active]?.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {processStages[active]?.text}
              </p>

              <div className="mt-7 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-brand transition-[width] duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-3 flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>Stage {active + 1} / {processStages.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>

              <svg viewBox="0 0 240 60" className="mt-6 w-full text-brand" fill="none" aria-hidden="true">
                {processStages.map((_, i) => (
                  <g key={i}>
                    {i < processStages.length - 1 && (
                      <line
                        x1={20 + i * 40}
                        y1="30"
                        x2={60 + i * 40}
                        y2="30"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        opacity={i < active ? 0.9 : 0.2}
                      />
                    )}
                    <circle
                      cx={20 + i * 40}
                      cy="30"
                      r={i === active ? 7 : 4}
                      fill={i <= active ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity={i <= active ? 1 : 0.3}
                      className="transition-all duration-500"
                    />
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Stage list */}
          <div>
            {processStages.map((stage, i) => (
              <div
                key={stage.id}
                data-idx={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={cn(
                  "border-l py-10 pl-7 transition-all duration-500 first:pt-0",
                  i === active ? "border-brand" : "border-white/10",
                )}
              >
                <p
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.24em] transition-colors duration-500",
                    i === active ? "text-brand" : "text-muted-foreground",
                  )}
                >
                  Stage {stage.id}
                </p>
                <h3
                  className={cn(
                    "mt-2 text-2xl font-bold transition-all duration-500 sm:text-3xl",
                    i === active ? "text-foreground" : "text-foreground/35",
                  )}
                >
                  {stage.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 max-w-md text-sm leading-relaxed transition-opacity duration-500",
                    i === active ? "text-muted-foreground opacity-100" : "text-muted-foreground opacity-45",
                  )}
                >
                  {stage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
