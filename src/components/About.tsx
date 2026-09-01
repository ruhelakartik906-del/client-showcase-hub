import aboutVideo from "@/assets/more-than-website.mp4.asset.json";
import { Reveal } from "./ui-kit/Reveal";
import { SectionLabel } from "./ui-kit/SectionHeading";

const pillars = [
  { k: "Custom Built", v: "We build around your requirements instead of forcing your business into a template." },
  { k: "Business Focused", v: "Every system is designed around a real business objective." },
  { k: "Automation Ready", v: "We remove repetitive manual work wherever technology can handle it." },
  { k: "Long-Term Support", v: "We can continue improving and maintaining the system after launch." },
];

export function About() {
  return (
    <section className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="group relative overflow-hidden rounded-2xl border border-white/12 bg-ink">
            <video
              src={aboutVideo.url}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="mx-auto aspect-9/16 max-h-[560px] w-auto max-w-full object-contain"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <p className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              Behind the build
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>05 — Behind the build</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
              More than just <span className="text-brand">a website.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A website is only one part of a digital business. We can connect your
              website with CRM, WhatsApp, AI, automation, software and other tools
              so your entire customer and business workflow works together.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              UnknownHat is led by Nitin Raghav, who started freelancing in 2023 by
              building websites and solving real problems for businesses. That work
              grew beyond websites into software, automation, CRM, WhatsApp systems
              and AI — and today runs as UnknownHat Agency and Hatflow.
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
