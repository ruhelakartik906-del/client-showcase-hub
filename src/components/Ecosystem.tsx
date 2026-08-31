import { Reveal } from "./ui-kit/Reveal";
import { SectionHeading } from "./ui-kit/SectionHeading";

const chain = [
  { key: "Website", note: "Generates the lead" },
  { key: "Lead", note: "Captured with context" },
  { key: "AI Qualification", note: "Scored and enriched" },
  { key: "CRM", note: "Organised in a pipeline" },
  { key: "WhatsApp", note: "First response and follow-up" },
  { key: "Automation", note: "Keeps the process moving" },
  { key: "Team", note: "Steps in at the right moment" },
  { key: "Reporting", note: "Shows what is working" },
];

const copy = [
  "A website can generate the lead.",
  "AI can qualify it.",
  "CRM can organize it.",
  "WhatsApp can follow up.",
  "Automation can keep the process moving.",
  "Reporting can show what is working.",
];

export function Ecosystem() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(60%_55%_at_50%_45%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Systems, not services"
          title={
            <>
              We build <span className="text-brand">systems</span>, not isolated
              services.
            </>
          }
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ol className="relative space-y-3">
            <span className="pointer-events-none absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-brand/60 via-brand/25 to-transparent" />
            {chain.map((n, i) => (
              <Reveal key={n.key} delay={Math.min(i * 50, 300)}>
                <li className="group relative flex items-center gap-5 rounded-xl border border-white/10 bg-background/70 px-4 py-3.5 backdrop-blur-sm transition-colors duration-300 hover:border-brand/45">
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-background font-mono text-[10px] text-brand">
                    {String(i + 1).padStart(2, "0")}
                    <span
                      className="absolute inset-0 rounded-full border border-brand/30"
                      style={{ animation: `uh-pulse-node 2.8s ease-in-out ${i * 0.2}s infinite` }}
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-brand">
                      {n.key}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{n.note}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120} className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-2xl border border-white/10 bg-background/70 p-7 backdrop-blur-sm sm:p-9">
              <ul className="space-y-3">
                {copy.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-white/8 pt-6 text-base font-semibold leading-snug sm:text-lg">
                That connection is where the{" "}
                <span className="text-brand">real value appears.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
