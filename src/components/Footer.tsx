import logo from "@/assets/unknownhat-logo-v3.png.asset.json";
import { site, whatsappLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink pt-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <img
              src={logo.url}
              alt="UnknownHat Agency logo"
              className="h-10 w-auto [filter:invert(1)_hue-rotate(180deg)_saturate(1.5)_brightness(1.15)_drop-shadow(0_0_14px_rgba(255,255,255,0.25))]"
              loading="lazy"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1.5 block text-sm transition-colors hover:text-brand"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">WhatsApp</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 block text-sm transition-colors hover:text-brand"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 py-7">
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
