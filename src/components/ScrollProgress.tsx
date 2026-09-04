import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const value = max > 0 ? (window.scrollY / max) * 100 : 0;
        setProgress(value);
        setShowTop(window.scrollY > window.innerHeight * 1.2);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-brand shadow-[0_0_18px_var(--brand)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%`, visibility: progress <= 0.05 ? "hidden" : "visible" }}
        />
      </div>


      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-6 left-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand/30 bg-background/80 text-brand backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-brand hover:text-brand-foreground",
          showTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  );
}
