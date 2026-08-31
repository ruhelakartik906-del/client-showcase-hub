import { useEffect, useState } from "react";
import { ArrowUpRight, X, ArrowRight } from "lucide-react";
import { services, type Service } from "@/data/services";
import { ServiceMascot } from "./ui-kit/ServiceMascot";
import { Reveal } from "./ui-kit/Reveal";
import { SectionHeading } from "./ui-kit/SectionHeading";
import { MagneticButton } from "./ui-kit/Magnetic";

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="services" className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="03 — What we build"
          title={
            <>
              Seven systems. <span className="text-brand">One stack.</span>
            </>
          }
          sub="Each capability is built to connect with the others — a website that feeds a CRM, a CRM that triggers automation, automation that talks to your customers."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i * 50, 250)} className="bg-background">
              <button
                onClick={() => setActive(s)}
                className="group relative flex h-full w-full flex-col items-start gap-4 p-7 text-left transition-colors duration-500 hover:bg-white/[0.03]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/12 blur-3xl" />
                </div>

                <div className="flex w-full items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                    {s.index}
                  </span>
                  <ServiceMascot
                    type={s.mascot}
                    className="h-20 w-20 text-foreground/70 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105"
                  />
                </div>

                <h3 className="relative text-lg font-bold transition-colors duration-300 group-hover:text-brand">
                  {s.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>

                <span className="relative mt-auto inline-flex translate-y-1 items-center gap-1.5 pt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-brand opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View details <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </Reveal>
          ))}

          <Reveal className="bg-background">
            <div className="flex h-full flex-col justify-between gap-6 bg-brand/8 p-7">
              <p className="text-lg font-bold leading-snug">
                Not sure which piece you need?
              </p>
              <p className="text-sm text-muted-foreground">
                Describe the problem. We'll map the system around it.
              </p>
              <MagneticButton href="#contact" className="self-start">
                Talk it through <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>

      {active ? <ServiceModal service={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
      />
      <div className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-white/12 bg-card p-7 sm:rounded-2xl sm:p-10">
        <button
          onClick={onClose}
          aria-label="Close service details"
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-4">
          <ServiceMascot type={service.mascot} className="h-16 w-16 text-brand" />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              Service {service.index}
            </p>
            <h3 className="mt-1 text-2xl font-bold">{service.title}</h3>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{service.short}</p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <ModalList title="What we build" items={service.build} />
          <ModalList title="Use cases" items={service.useCases} />
          <ModalList title="Deliverables" items={service.deliverables} />
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Technologies
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/12 px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9">
          <MagneticButton href="#contact" onClick={onClose}>
            Start with {service.title} <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

function ModalList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex gap-2.5 text-sm text-foreground/85">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
