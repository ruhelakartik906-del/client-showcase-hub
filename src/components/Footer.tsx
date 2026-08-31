import logo from "@/assets/unknownhat-logo-v3.png.asset.json";
import { site, whatsappLink } from "@/data/site";

const columns = [
  {
    title: "Services",
    links: [
      "Website Development",
      "Software Development",
      "CRM",
      "Automation & n8n",
      "WhatsApp API",
      "AI Agents",
      "Growth & Content",
    ].map((l) => ({ label: l, href: "#services" })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Founder", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Work", href: "#work" },
      { label: "Reels", href: "#reels" },
      { label: "FAQ", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      "Business Automation",
      "AI Systems",
      "Workflow Systems",
      "SaaS",
      "E-commerce",
      "Web Applications",
    ].map((l) => ({ label: l, href: "#services" })),
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink pt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <img
              src={logo.url}
              alt="UnknownHat Agency logo"
              className="h-9 w-auto [filter:invert(1)_hue-rotate(180deg)_saturate(1.5)_brightness(1.15)_drop-shadow(0_0_14px_rgba(255,255,255,0.25))]"
              loading="lazy"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Digital technology, automation, software and growth systems for modern businesses.
            </p>

          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/8 py-8 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</p>
            <a href={`mailto:${site.email}`} className="mt-1 block text-sm hover:text-brand">
              {site.email}
            </a>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-1 block text-sm hover:text-brand">
              {site.phone}
            </a>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Location</p>
            <p className="mt-1 text-sm">{site.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 py-7">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-brand"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
