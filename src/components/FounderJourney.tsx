import { journey } from "@/data/process";
import { Reveal } from "./ui-kit/Reveal";
import { SectionHeading } from "./ui-kit/SectionHeading";
import { cn } from "@/lib/utils";

export function FounderJourney() {
  return (
    <section id="about" className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Journey"
          title={
            <>
              Started with freelancing.{" "}
              <span className="text-brand">Built a system around it.</span>
            </>
          }
          sub="Started by solving individual client problems. Expanded into websites, software, automation, AI and growth systems. Today UnknownHat focuses on building connected digital systems for businesses."
        />

        <ol className="relative mt-16 border-l border-white/10 pl-8 sm:pl-12">
          {journey.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 60} className="relative pb-12 last:pb-0">
              <span
                className={cn(
                  "absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border sm:-left-[57px]",
                  step.current
                    ? "border-brand bg-brand shadow-[0_0_22px_var(--brand)]"
                    : "border-white/25 bg-background",
                )}
              >
                {step.current ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-foreground" />
                ) : null}
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">
                {step.year}
              </p>
              <h3
                className={cn(
                  "mt-2 text-xl font-bold sm:text-2xl",
                  step.current && "text-brand text-glow",
                )}
              >
                {step.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
