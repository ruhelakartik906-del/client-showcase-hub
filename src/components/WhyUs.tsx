import { Cpu, Workflow, Target, Handshake } from "lucide-react";
import { Reveal } from "./ui-kit/Reveal";
import { SectionHeading } from "./ui-kit/SectionHeading";

const pillars = [
  {
    icon: Cpu,
    title: "Engineering",
    text: "Built around your actual requirements, not templates.",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Remove repetitive work and keep processes moving.",
  },
  {
    icon: Target,
    title: "Strategy",
    text: "Technology tied directly to business objectives.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "Support and optimisation after launch.",
  },
];

export function WhyUs() {
  return (
    <section className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Why UnknownHat"
          title={
            <>
              Not another <span className="text-brand">website agency.</span>
            </>
          }
          sub="We don't just deliver a website and disappear. We design, build and connect the digital infrastructure your business actually needs."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} className="bg-background">
              <div className="group h-full p-7 transition-colors duration-500 hover:bg-white/[0.03]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-brand/10 text-brand transition-transform duration-500 group-hover:-translate-y-0.5">
                  <p.icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
