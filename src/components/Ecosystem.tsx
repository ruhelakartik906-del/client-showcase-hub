import { ecosystem } from "@/data/process";
import { Reveal } from "./ui-kit/Reveal";
import { SectionHeading } from "./ui-kit/SectionHeading";

export function Ecosystem() {
  return (
    <section className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="09 — Work categories"
          title={
            <>
              We build <span className="text-brand">systems</span>, not isolated
              services.
            </>
          }
          sub="Every category below connects to the others. That connection is where most of the value shows up."
        />

        <div className="relative mt-14">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full text-brand lg:block"
            fill="none"
            aria-hidden="true"
          >
            <line x1="16%" y1="22%" x2="50%" y2="52%" stroke="currentColor" strokeWidth="1" opacity="0.18" className="flow-dash" />
            <line x1="50%" y1="22%" x2="50%" y2="52%" stroke="currentColor" strokeWidth="1" opacity="0.18" className="flow-dash" />
            <line x1="84%" y1="22%" x2="50%" y2="52%" stroke="currentColor" strokeWidth="1" opacity="0.18" className="flow-dash" />
            <line x1="50%" y1="52%" x2="20%" y2="82%" stroke="currentColor" strokeWidth="1" opacity="0.18" className="flow-dash" />
            <line x1="50%" y1="52%" x2="80%" y2="82%" stroke="currentColor" strokeWidth="1" opacity="0.18" className="flow-dash" />
          </svg>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((group, i) => (
              <Reveal key={group.key} delay={Math.min(i * 50, 250)}>
                <div className="group h-full rounded-xl border border-white/10 bg-background/70 p-6 backdrop-blur-sm transition-all duration-500 hover:border-brand/40 hover:bg-white/[0.03]">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand transition-shadow duration-500 group-hover:shadow-[0_0_14px_var(--brand)]" />
                    <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-brand">
                      {group.key}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
