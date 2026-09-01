import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "brand" | "ghost";
  target?: string;
  strength?: number;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "brand",
  target,
  strength = 0.25,
  type = "button",
  disabled = false,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-[transform,background-color,color,box-shadow] duration-300 ease-out will-change-transform",
    variant === "brand"
      ? "bg-brand text-brand-foreground hover:shadow-[0_16px_60px_-16px_var(--brand)]"
      : "border border-white/15 bg-white/[0.03] text-foreground hover:border-brand/60 hover:text-brand",
    disabled && "pointer-events-none opacity-60",
    className,
  );

  if (href) {
    return (
      <a
        ref={ref as never}
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        onMouseMove={move}
        onMouseLeave={reset}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as never}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={reset}
      className={classes}
    >
      {children}
    </button>
  );
}
