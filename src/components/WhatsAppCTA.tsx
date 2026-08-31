import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";
import { Reveal } from "./ui-kit/Reveal";
import { MagneticButton } from "./ui-kit/Magnetic";

export function WhatsAppCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="glow-brand relative overflow-hidden rounded-2xl border border-brand/25 bg-ink p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-[90px]" />
            <div className="relative flex flex-wrap items-center justify-between gap-8">
              <div>
                <h2 className="max-w-xl text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
                  Want to build <span className="text-brand text-glow">something real?</span>
                </h2>
                <p className="mt-4 max-w-md text-sm text-muted-foreground">
                  Skip the forms. Message us directly and get a straight answer on
                  scope, timeline and cost.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <MagneticButton href={whatsappLink} target="_blank">
                  <MessageCircle className="h-4 w-4" /> Chat With Us on WhatsApp
                </MagneticButton>
                <MagneticButton href="#contact" variant="ghost">
                  Talk to a Consultant <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
