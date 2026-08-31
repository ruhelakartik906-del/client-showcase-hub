import { Play } from "lucide-react";
import work3 from "@/assets/work-3.jpg";
import { Reveal } from "./ui-kit/Reveal";
import { SectionLabel } from "./ui-kit/SectionHeading";

const pillars = [
  { k: "Technology", v: "Engineering-first delivery, not template assembly." },
  { k: "Automation", v: "Systems that remove repetitive human work." },
  { k: "Strategy", v: "Scope built around business outcomes." },
  { k: "Partnership", v: "Long-term ownership after launch." },
];

export function About() {
  return (
    <section className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="group relative overflow-hidden rounded-2xl border border-white/12">
            <img
              src={work3}
              alt="Behind the build at UnknownHat Agency"
              loading="lazy"
              className="aspect-4/3 w-full object-cover opacity-70 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="glow-brand flex h-20 w-20 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform duration-500 group-hover:scale-110">
                <Play className="ml-1 h-6 w-6 fill-current" />
              </span>
            </button>
            <p className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              Watch the UnknownHat Story
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>05 — Behind the build</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
              More than <span className="text-brand">an agency.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              UnknownHat is a technology-focused agency building digital products,
              automation systems and growth infrastructure for businesses. We stay
              involved after launch, because systems only compound when someone keeps
              improving them.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/8 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.k} delay={i * 60} className="bg-background p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                  {p.k}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{p.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
