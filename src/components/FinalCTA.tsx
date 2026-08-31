import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";
import { Reveal } from "./ui-kit/Reveal";
import { MagneticButton } from "./ui-kit/Magnetic";
import { ServiceMascot } from "./ui-kit/ServiceMascot";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[130px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <ServiceMascot type="agent" className="mx-auto h-28 w-28 text-brand float-slow" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 text-balance text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">
            Have a business problem <span className="text-brand text-glow">worth solving?</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground sm:text-base">
            Let's turn it into a system.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <MagneticButton href="#contact">
              Start a Project <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={whatsappLink} target="_blank" variant="ghost">
              <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
