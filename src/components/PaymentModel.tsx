import { Reveal } from "./ui-kit/Reveal";
import { SectionHeading } from "./ui-kit/SectionHeading";

const phases = ["Planning", "Design", "Build", "Testing", "Delivery"];

export function PaymentModel() {
  return (
    <section className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-brand/6 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="06 — Engagement"
          title={
            <>
              Simple. Transparent. <span className="text-brand">50 / 50.</span>
            </>
          }
          sub="Transparent project-based engagement. Payment terms are agreed in writing before any work begins."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal className="flex items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-14">
            <div className="text-center">
              <p className="font-mono text-6xl font-extrabold text-brand text-glow sm:text-7xl">50%</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Upfront
              </p>
            </div>
            <span className="text-4xl font-light text-muted-foreground">+</span>
            <div className="text-center">
              <p className="font-mono text-6xl font-extrabold sm:text-7xl">50%</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                On delivery
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                50% is paid upfront to reserve the team and begin work. The remaining
                50% is paid on successful completion, or at the agreed delivery
                milestone for larger builds.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-10">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {phases.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
              <div className="relative mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-brand-dim to-brand" />
              </div>
              <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
                <span className="text-brand">Kickoff payment</span>
                <span>Final payment</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
