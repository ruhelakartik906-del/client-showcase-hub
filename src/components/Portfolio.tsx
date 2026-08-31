import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { Reveal } from "./ui-kit/Reveal";
import { SectionHeading } from "./ui-kit/SectionHeading";
import { MagneticButton } from "./ui-kit/Magnetic";
import { cn } from "@/lib/utils";

function BrowserChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.04] px-4 py-2.5">
      <span className="h-2 w-2 rounded-full bg-white/20" />
      <span className="h-2 w-2 rounded-full bg-white/20" />
      <span className="h-2 w-2 rounded-full bg-white/20" />
      <span className="ml-3 truncate font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<ProjectCategory>("ALL");
  const [open, setOpen] = useState<Project | null>(null);

  const list = useMemo(
    () => (filter === "ALL" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="work" className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Selected work"
          title={
            <>
              Work that <span className="text-brand">speaks for itself.</span>
            </>
          }
          sub="Real digital experiences built for real businesses."
        />

        <div className="hide-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300",
                filter === c
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-white/12 text-muted-foreground hover:border-white/30 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 60, 240)}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-colors duration-500 hover:border-brand/35">
                <div className="p-4 pb-0">
                  <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_30px_70px_-45px_rgba(0,0,0,1)]">
                    <BrowserChrome label={p.name} />
                    <div className="relative aspect-16/10 overflow-hidden bg-ink">
                      <img
                        src={p.image}
                        alt={`${p.name} — ${p.categoryLabel} project built by UnknownHat`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                    {p.categoryLabel}
                  </p>
                  <h3 className="mt-2.5 text-2xl font-bold transition-colors duration-300 group-hover:text-brand">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-5 pt-6">
                    <button
                      onClick={() => setOpen(p)}
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand"
                    >
                      View Case Study
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Live Website <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {open ? <CaseStudy project={open} onClose={() => setOpen(null)} /> : null}
    </section>
  );
}

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-ink/85 backdrop-blur-sm" />
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl border border-white/12 bg-card sm:rounded-2xl">
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-5 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-5 pb-0 sm:p-7 sm:pb-0">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <BrowserChrome label={project.liveUrl ?? project.name} />
            <img
              src={project.image}
              alt={`${project.name} case study — ${project.categoryLabel}`}
              className="aspect-16/9 w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="p-7 sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
            {project.categoryLabel}
          </p>
          <h3 className="mt-2 text-3xl font-bold">{project.name}</h3>

          <dl className="mt-6 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/8 sm:grid-cols-2">
            <Meta label="Client" value={project.name} />
            <Meta label="Industry" value={project.industry} />
          </dl>

          <div className="mt-8 space-y-7">
            <Para title="Challenge" text={project.challenge} />
            <Para title="Approach" text={project.approach} />
          </div>

          <div className="mt-8 grid gap-7 sm:grid-cols-2">
            <Block title="What we built" items={project.built} />
            <Block title="Key features" items={project.features} />
            <Block title="Technology / systems" items={project.tech} />
            <Block title="Services delivered" items={project.services} />
          </div>

          <div className="mt-8 space-y-7">
            <Para title="Business objective" text={project.objective} />
            <Para title="Final result" text={project.result} />
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#contact" onClick={onClose}>
              Build something like this
            </MagneticButton>
            {project.liveUrl ? (
              <MagneticButton href={project.liveUrl} target="_blank" variant="ghost">
                Live Website <ExternalLink className="h-4 w-4" />
              </MagneticButton>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card px-5 py-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium">{value}</dd>
    </div>
  );
}

function Para({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </h4>
      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-foreground/85">{text}</p>
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-3 space-y-2 text-sm text-foreground/85">
        {items.map((i) => (
          <li key={i} className="flex gap-2.5">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
