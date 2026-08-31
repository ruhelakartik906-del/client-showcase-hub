import { clients } from "@/data/clients";
import { SectionHeading } from "./ui-kit/SectionHeading";

export function Clients() {
  return (
    <section id="clients" className="relative border-t border-white/8 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="07 — Trust"
          title={
            <>
              Trusted by businesses <span className="text-brand">we've built with.</span>
            </>
          }
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {clients.map((c) => {
            const Tag = c.url ? "a" : "div";
            return (
              <Tag
                key={c.name}
                {...(c.url ? { href: c.url, target: "_blank", rel: "noreferrer" } : {})}
                aria-label={c.url ? `${c.name} website` : undefined}
                className="group relative flex min-h-28 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white px-5 py-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_18px_50px_-24px_var(--brand)] sm:min-h-32"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="eager"
                  decoding="async"
                  className="max-h-16 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
