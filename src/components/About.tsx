import founder from "@/assets/founder.jpg";
import { site } from "@/data/site";
import { Reveal } from "./ui-kit/Reveal";
import { SectionLabel } from "./ui-kit/SectionHeading";

const focus = [
  "Websites & e-commerce",
  "Software & internal platforms",
  "CRM & customer systems",
  "Automation, WhatsApp & AI",
];

export function About() {
  return (
    <section id="about" className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <figure className="group relative overflow-hidden rounded-2xl border border-white/12 bg-card">
            <img
              src={founder}
              alt="Nitin Raghav, Founder and Technology Lead at UnknownHat"
              loading="lazy"
              decoding="async"
              className="aspect-4/5 w-full object-cover grayscale-[0.3] transition-all duration-[1200ms] ease-out group-hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                {site.founder.role}
              </p>
              <p className="mt-1.5 text-2xl font-bold">{site.founder.name}</p>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>Founder</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
              Built from real <span className="text-brand">business problems.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              UnknownHat started by solving individual client problems and grew into a
              technology studio focused on building the digital systems behind modern
              businesses.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Today, UnknownHat works across websites, software, automation, AI, CRM and
              customer communication — connecting them into practical systems that help
              businesses operate better.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <blockquote className="mt-9 border-l-2 border-brand pl-6 text-lg font-medium leading-snug text-foreground/95 sm:text-xl">
              “{site.founder.quote}”
              <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {site.founder.name} — {site.founder.role}
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={160}>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/8 sm:grid-cols-2">
              {focus.map((f) => (
                <li key={f} className="bg-background px-5 py-4 text-sm text-muted-foreground">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
