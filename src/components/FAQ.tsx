import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { SectionHeading } from "./ui-kit/SectionHeading";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <SectionHeading
          label="FAQ"
          title={
            <>
              Questions, <span className="text-brand">answered.</span>
            </>
          }
          className="lg:sticky lg:top-28 lg:h-fit"
        />

        <div className="divide-y divide-white/8 border-y border-white/8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={cn(
                      "text-base font-semibold transition-colors duration-300 sm:text-lg",
                      isOpen ? "text-brand" : "text-foreground",
                    )}
                  >
                    {f.q}
                  </span>
                  <Plus
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-400",
                      isOpen ? "rotate-45 text-brand" : "text-muted-foreground",
                    )}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
