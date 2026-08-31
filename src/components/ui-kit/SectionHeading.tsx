import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
      <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_12px_var(--brand)]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  label,
  title,
  sub,
  className,
  align = "left",
}: {
  label?: string;
  title: ReactNode;
  sub?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label ? <SectionLabel>{label}</SectionLabel> : null}
      <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {sub ? (
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
