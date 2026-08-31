import { useEffect, useState } from "react";
import { stats } from "@/data/stats";
import { useInView } from "./ui-kit/Reveal";

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  return (
    <section className="relative border-t border-white/8 py-20 lg:py-24">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 px-0 sm:grid-cols-2 lg:mx-auto lg:max-w-6xl lg:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-background px-6 py-10 text-center">
            <p className="font-display text-4xl font-extrabold text-brand text-glow sm:text-5xl">
              <Counter to={s.value} run={inView} />
              {s.suffix}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ to, run }: { to: number; run: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);

  return <>{value}</>;
}
