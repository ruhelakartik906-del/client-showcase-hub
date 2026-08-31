import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "./ui-kit/SectionHeading";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            label="12 — Testimonials"
            title={
              <>
                Trusted by founders. <span className="text-brand">Built for results.</span>
              </>
            }
          />
          <div className="flex gap-2">
            <button
              aria-label="Previous testimonial"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 transition-colors hover:border-brand/50 hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => scrollBy(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 transition-colors hover:border-brand/50 hover:text-brand"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {testimonials.map((t) => (
            <figure
              key={t.company}
              className="w-[20rem] shrink-0 snap-start rounded-2xl border border-white/10 bg-card p-7 transition-colors duration-500 hover:border-brand/35 sm:w-[24rem]"
            >
              <blockquote className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-white/8 pt-5">
                {t.logo ? (
                  <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white/90 p-1">
                    <img src={t.logo} alt={`${t.company} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </span>
                ) : null}
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
