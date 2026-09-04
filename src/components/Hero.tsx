import { ArrowRight, ArrowDown } from "lucide-react";
import founderAsset from "@/assets/founder-new.png";
import { site } from "@/data/site";
import { MagneticButton } from "./ui-kit/Magnetic";
import { Reveal } from "./ui-kit/Reveal";
import { SectionLabel } from "./ui-kit/SectionHeading";

const founderStats = [
  { k: "Started freelancing", v: "2023" },
  { k: "Current", v: "Founder, UnknownHat" },
  { k: "Also building", v: "Hatflow" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-32 lg:pb-36 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.5] [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/12 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <SectionLabel>{site.tagline}</SectionLabel>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-[2.6rem] font-extrabold leading-[0.98] sm:text-6xl xl:text-7xl">
              We build <span className="text-brand text-glow">websites</span>,{" "}
              <span className="text-brand text-glow">software</span>,{" "}
              <span className="text-brand text-glow">AI</span> &amp;{" "}
              <span className="text-brand text-glow">automation</span>
              <br className="hidden sm:block" /> systems for businesses.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              From high-performance websites and custom software to AI agents, CRM
              systems, WhatsApp automation and business workflows — we build digital
              systems around your actual business needs.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton href="#contact">
                Start a Project <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#work" variant="ghost">
                View Our Work <ArrowDown className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-3">
              {founderStats.map((s) => (
                <div key={s.k} className="bg-background/80 px-4 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {s.k}
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <FounderVisual />
        </Reveal>
      </div>
    </section>
  );
}

function FounderVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <svg
        viewBox="0 0 400 460"
        className="pointer-events-none absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] text-brand"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="40" cy="70" r="4" fill="currentColor" className="origin-center [animation:uh-pulse-node_3s_ease-in-out_infinite]" />
        <circle cx="360" cy="150" r="4" fill="currentColor" className="origin-center [animation:uh-pulse-node_3.6s_ease-in-out_infinite]" />
        <circle cx="30" cy="380" r="4" fill="currentColor" className="origin-center [animation:uh-pulse-node_4.2s_ease-in-out_infinite]" />
        <path d="M40 70 L120 70 L120 140" stroke="currentColor" strokeWidth="1" opacity="0.4" className="flow-dash" />
        <path d="M360 150 L300 150 L300 220" stroke="currentColor" strokeWidth="1" opacity="0.4" className="flow-dash" />
        <path d="M30 380 L110 380 L110 320" stroke="currentColor" strokeWidth="1" opacity="0.4" className="flow-dash" />
      </svg>

      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-card">
        <img
          src={founderAsset}
          alt="Nitin Raghav, Founder and Technology Lead at UnknownHat Agency"
          className="aspect-4/5 w-full object-cover grayscale-[0.25] transition-all duration-700 hover:grayscale-0"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
            {site.founder.role}
          </p>
          <h2 className="mt-1.5 text-2xl font-bold">{site.founder.name}</h2>
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm">
            “{site.founder.quote}”
          </p>
        </div>
      </div>

      <div className="glass float-slow absolute -left-5 top-10 hidden rounded-xl px-3.5 py-2.5 sm:block">
        <p className="font-mono text-[10px] text-brand">workflow.run()</p>
        <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">lead → ai → crm</p>
      </div>
      <div className="glass float-slow absolute -right-4 bottom-24 hidden rounded-xl px-3.5 py-2.5 [animation-delay:1.4s] sm:block">
        <p className="font-mono text-[10px] text-muted-foreground">uptime</p>
        <p className="mt-0.5 font-mono text-[11px] font-semibold text-brand">99.9%</p>
      </div>
    </div>
  );
}
