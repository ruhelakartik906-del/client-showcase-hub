import { ArrowRight, ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { MagneticButton } from "./ui-kit/Magnetic";
import { Reveal } from "./ui-kit/Reveal";
import { SectionLabel } from "./ui-kit/SectionHeading";

const capabilities = ["Websites", "Software", "CRM", "Automation", "WhatsApp", "AI"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-32 lg:pb-36 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.5] [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/12 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <SectionLabel>Digital Technology &amp; Automation Studio</SectionLabel>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-[2.5rem] font-extrabold leading-[1.0] sm:text-6xl xl:text-[4.2rem]">
              Digital systems for businesses ready to{" "}
              <span className="text-brand text-glow">move faster.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              We design and build websites, software, AI, CRM, WhatsApp and automation
              systems — connected around how your business actually works.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton href="#contact">
                Start a Project <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#work" variant="ghost">
                Explore Our Work <ArrowDown className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-70 [animation:uh-pulse-node_2.4s_ease-in-out_infinite]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {site.availability}
              </span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-10 flex max-w-lg flex-wrap gap-x-5 gap-y-2 border-t border-white/8 pt-6">
              {capabilities.map((c) => (
                <li
                  key={c}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <WorkCollage />
        </Reveal>
      </div>
    </section>
  );
}

function BrowserFrame({
  src,
  alt,
  label,
  className,
  eager,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <figure
      className={`group overflow-hidden rounded-xl border border-white/12 bg-card shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out hover:-translate-y-1 ${className ?? ""}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.04] px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
      </div>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="aspect-16/11 w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
    </figure>
  );
}

function WorkCollage() {
  const [a, b, c] = [
    projects.find((p) => p.id === "vastra")!,
    projects.find((p) => p.id === "kirtilals")!,
    projects.find((p) => p.id === "street9")!,
  ];

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

      <div className="relative grid grid-cols-5 gap-4">
        <BrowserFrame
          eager
          src={a.image}
          alt={`${a.name} — ${a.categoryLabel} built by UnknownHat`}
          label={a.name}
          className="col-span-5"
        />
        <BrowserFrame
          src={b.image}
          alt={`${b.name} — ${b.categoryLabel} built by UnknownHat`}
          label={b.name}
          className="col-span-3"
        />
        <BrowserFrame
          src={c.image}
          alt={`${c.name} — ${c.categoryLabel} built by UnknownHat`}
          label={c.name}
          className="col-span-2"
        />
      </div>

      <div className="glass float-slow absolute -left-6 -bottom-6 hidden rounded-xl px-3.5 py-2.5 sm:block">
        <p className="font-mono text-[10px] text-brand">workflow.run()</p>
        <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">lead → ai → crm</p>
      </div>
      <div className="glass float-slow absolute -right-6 -top-6 hidden rounded-xl px-3.5 py-2.5 [animation-delay:1.4s] sm:block">
        <p className="font-mono text-[10px] text-muted-foreground">systems shipped</p>
        <p className="mt-0.5 font-mono text-[11px] font-semibold text-brand">web · crm · ai</p>
      </div>
    </div>
  );
}
