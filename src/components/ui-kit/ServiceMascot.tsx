import type { Service } from "@/data/services";

/**
 * Lightweight vector "robot" mascots. Each mascot keeps the same robot head
 * silhouette but carries a different interface panel representing the service.
 */
export function ServiceMascot({
  type,
  className,
}: {
  type: Service["mascot"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`mg-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* antenna */}
      <line x1="60" y1="10" x2="60" y2="22" stroke="var(--brand)" strokeWidth="2" />
      <circle cx="60" cy="8" r="3.5" fill="var(--brand)" className="origin-center [animation:uh-pulse-node_2.6s_ease-in-out_infinite]" />

      {/* head */}
      <rect x="30" y="22" width="60" height="44" rx="12" stroke="currentColor" strokeWidth="2" opacity="0.55" />
      <rect x="38" y="32" width="44" height="24" rx="7" fill={`url(#mg-${type})`} opacity="0.35" />
      <circle cx="50" cy="44" r="4" fill="var(--brand)" />
      <circle cx="70" cy="44" r="4" fill="var(--brand)" />
      <path d="M52 55h16" stroke="currentColor" strokeWidth="2" opacity="0.5" strokeLinecap="round" />

      {/* body / interface panel */}
      <rect x="24" y="74" width="72" height="36" rx="10" stroke="currentColor" strokeWidth="2" opacity="0.45" />

      {type === "browser" && (
        <g stroke="var(--brand)" strokeWidth="2" strokeLinecap="round">
          <path d="M34 84h52" opacity="0.8" />
          <path d="M34 93h20M34 101h34" opacity="0.5" />
          <circle cx="82" cy="98" r="5" fill="none" opacity="0.7" />
        </g>
      )}
      {type === "code" && (
        <g stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M46 86l-8 6 8 6" />
          <path d="M74 86l8 6-8 6" />
          <path d="M64 84l-8 16" opacity="0.6" />
        </g>
      )}
      {type === "dashboard" && (
        <g stroke="var(--brand)" strokeWidth="2" strokeLinecap="round">
          <path d="M36 102v-8M48 102v-16M60 102v-11M72 102v-19M84 102v-6" />
        </g>
      )}
      {type === "nodes" && (
        <g stroke="var(--brand)" strokeWidth="2">
          <path d="M38 92h18M64 92h18" className="flow-dash" />
          <circle cx="34" cy="92" r="4" fill="var(--brand)" />
          <circle cx="60" cy="92" r="5" fill="none" />
          <circle cx="86" cy="92" r="4" fill="var(--brand)" opacity="0.7" />
        </g>
      )}
      {type === "chat" && (
        <g stroke="var(--brand)" strokeWidth="2" strokeLinejoin="round" fill="none">
          <path d="M36 84h34a6 6 0 016 6v6a6 6 0 01-6 6H50l-8 6v-6h-6a6 6 0 01-6-6v-6a6 6 0 016-6z" />
          <path d="M44 93h22" opacity="0.6" strokeLinecap="round" />
        </g>
      )}
      {type === "agent" && (
        <g stroke="var(--brand)" strokeWidth="2" fill="none">
          <circle cx="60" cy="92" r="9" />
          <path d="M60 83v-4M60 105v-4M51 92h-5M74 92h-5M53 85l-3-3M70 102l3 3M67 85l3-3M53 99l-3 3" opacity="0.7" strokeLinecap="round" />
        </g>
      )}
      {type === "growth" && (
        <g stroke="var(--brand)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M34 102l14-12 10 8 16-18" />
          <path d="M68 80h10v10" />
        </g>
      )}
    </svg>
  );
}
