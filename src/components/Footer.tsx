import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import logo from "@/assets/unknownhat.jpeg.asset.json";
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
      { label: "Founder", href: "#home" },
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
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) setDone(true);
  };

  return (
    <footer className="relative border-t border-white/10 bg-ink pt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <span className="inline-block rounded-md bg-white p-1.5">
              <img src={logo.url} alt="UnknownHat Agency logo" className="h-8 w-auto" loading="lazy" />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>

            <form onSubmit={submit} className="mt-8 max-w-sm">
              <p className="text-sm font-semibold">Get insights that help your business grow.</p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-white/12 bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform hover:scale-105"
                >
                  {done ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
              {done ? <p className="mt-2 text-xs text-brand">You're on the list.</p> : null}
            </form>
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
