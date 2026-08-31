import { Reveal } from "./ui-kit/Reveal";
import { SectionHeading } from "./ui-kit/SectionHeading";

const flows = [
  {
    title: "Inbound lead system",
    steps: [
      "Lead comes in",
      "AI qualification",
      "CRM update",
      "WhatsApp response",
      "Follow-up sequence",
      "Team notification",
      "Reporting",
    ],
  },
  {
    title: "WhatsApp sales agent",
    steps: [
      "Customer",
      "WhatsApp",
      "AI Agent",
      "Product information",
      "Lead capture",
      "CRM",
      "Human handoff",
    ],
  },
];

export function AutomationShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="10 — AI & automation"
          title={
            <>
              Automate the work that <span className="text-brand">slows your business down.</span>
            </>
          }
          sub="We connect AI, WhatsApp, CRM, APIs and automation tools to handle repetitive business tasks automatically. These are real workflows we deploy — each step is a live integration, not a diagram."
        />

        <div className="mt-14 space-y-6">
          {flows.map((flow, fi) => (
            <Reveal key={flow.title} delay={fi * 80}>
              <div className="rounded-2xl border border-white/10 bg-background/70 p-6 backdrop-blur-sm sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                  {flow.title}
                </p>
                <div className="hide-scrollbar mt-6 flex items-stretch gap-3 overflow-x-auto pb-2">
                  {flow.steps.map((step, i) => (
                    <div key={step} className="flex shrink-0 items-center gap-3">
                      <div className="group relative min-w-[9.5rem] rounded-lg border border-white/12 bg-card px-4 py-3.5 transition-colors duration-300 hover:border-brand/50">
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-1 text-sm font-medium leading-snug">{step}</p>
                        <span
                          className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-brand"
                          style={{ animation: `uh-pulse-node 2.4s ease-in-out ${i * 0.25}s infinite` }}
                        />
                      </div>
                      {i < flow.steps.length - 1 ? (
                        <svg width="26" height="8" className="shrink-0 text-brand" aria-hidden="true">
                          <line x1="0" y1="4" x2="26" y2="4" stroke="currentColor" strokeWidth="1.5" className="flow-dash" />
                        </svg>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
