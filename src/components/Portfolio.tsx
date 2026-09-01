import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
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

function projectImageClass(project: Project, modal = false) {
  return cn(
    modal ? "aspect-16/9 w-full" : "h-full w-full",
    "object-top",
    project.imageFit === "contain"
      ? "bg-white object-contain p-8 sm:p-12"
      : "object-cover",
    !modal && "transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]",
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
          label="08 — Real work"
          title={
            <>
              Work that <span className="text-brand">speaks for itself.</span>
            </>
          }
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

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 60, 240)}>
              <button
                onClick={() => setOpen(p)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-card text-left"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} project preview`}
                    loading="lazy"
                    className={projectImageClass(p)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
                  <span className="absolute left-5 top-5 rounded-full border border-brand/40 bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                    {p.category}
                  </span>
                </div>

                <div className="relative -mt-16 p-6">
                  <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-brand">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
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
                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
                    View Case Study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </button>
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
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={project.image}
              alt={`${project.name} case study cover`}
              className={projectImageClass(project, true)}
            />
          </a>
        ) : (
          <img
            src={project.image}
            alt={`${project.name} case study cover`}
            className={projectImageClass(project, true)}
          />
        )}
        <div className="p-7 sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
            {project.category}
          </p>
          <h3 className="mt-2 text-3xl font-bold">{project.name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Block title="Services" items={project.services} />
            <Block title="Technology" items={project.tech} />
            {project.outcome ? (
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Outcome
                </h4>
                <p className="mt-3 text-sm text-foreground/85">{project.outcome}</p>
              </div>
            ) : null}
          </div>

          <div className="mt-9">
            <MagneticButton href="#contact" onClick={onClose}>
              Build something like this
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
