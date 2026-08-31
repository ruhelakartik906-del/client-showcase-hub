import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  Bot,
  Megaphone,
  Code2,
  Workflow,
  MessageCircle,
  Video,
  Quote,
  Check,
} from "lucide-react";

import agencyLogo from "@/assets/unknownhat.jpeg.asset.json";
import founder from "@/assets/founder.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import hocco from "@/assets/hocco.png.asset.json";
import stoa from "@/assets/stoa.avif.asset.json";
import bedsheets from "@/assets/bedsheets.webp.asset.json";
import vastra from "@/assets/vastra.webp.asset.json";
import dodesk from "@/assets/dodesk.svg.asset.json";
import street9 from "@/assets/street9.avif.asset.json";
import kk from "@/assets/kk.avif.asset.json";
import lal from "@/assets/lal.avif.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unknown Hat Agency — Websites, Automation & Growth" },
      {
        name: "description",
        content:
          "Unknown Hat Agency builds websites, software, CRM, n8n automation and WhatsApp systems for growing brands. Book a free consultation.",
      },
      { property: "og:title", content: "Unknown Hat Agency — Websites, Automation & Growth" },
      {
        property: "og:description",
        content:
          "We build, automate and grow digital businesses — websites, CRM, AI agents, WhatsApp automation and performance marketing.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Clients", href: "#clients" },
  { label: "Services", href: "#services" },
  { label: "Reels", href: "#reels" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const clients = [
  { name: "Hocco Ice Cream", src: hocco.url },
  { name: "Stoa", src: stoa.url },
  { name: "Bedsheets India", src: bedsheets.url },
  { name: "Vastra", src: vastra.url },
  { name: "Do Desk", src: dodesk.url },
  { name: "Street9", src: street9.url },
  { name: "KK", src: kk.url },
  { name: "Lal", src: lal.url },
];

const services = [
  {
    icon: Globe,
    title: "Website Development",
    items: ["Business Websites", "Landing Pages", "E-commerce", "WordPress / Shopify"],
  },
  {
    icon: Code2,
    title: "Software Development",
    items: ["Custom Software", "Web Applications", "SaaS Platforms", "API Development"],
  },
  {
    icon: Workflow,
    title: "Automation & n8n",
    items: ["n8n Workflows", "API Integrations", "CRM Pipelines", "Business Automation"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp API & Chatbots",
    items: ["WhatsApp Business API", "AI Chatbots", "Auto-Reply Systems", "Broadcast Campaigns"],
  },
  {
    icon: Bot,
    title: "AI Agents & CRM",
    items: ["AI Sales Agents", "Custom CRM", "Lead Scoring", "Reports & Analytics"],
  },
  {
    icon: Megaphone,
    title: "Growth & Content",
    items: ["Meta & Google Ads", "SEO & CRO", "Reels & UGC", "Ad Creatives"],
  },
];

const reels = [
  { tag: "Automation", title: "n8n workflow for lead management", time: "0:38" },
  { tag: "Website", title: "Before vs after website redesign", time: "0:42" },
  { tag: "AI Agent", title: "AI agent for WhatsApp business", time: "0:45" },
  { tag: "Behind the scenes", title: "A day at Unknown Hat", time: "0:37" },
  { tag: "Marketing", title: "Meta ads strategy that works", time: "0:44" },
];

const projects = [
  {
    tag: "E-commerce",
    title: "Bedsheets India",
    desc: "Store revamp + WhatsApp order automation",
    img: work1,
  },
  {
    tag: "Automation",
    title: "Do Desk",
    desc: "n8n lead routing across sales pipeline",
    img: work2,
  },
  {
    tag: "Software",
    title: "Stoa CRM",
    desc: "Custom CRM with reports & follow-ups",
    img: work3,
  },
];

const team = [
  { name: "Nitin Raghav", role: "Founder & Tech Lead" },
  { name: "Anjali Sharma", role: "Automation Lead" },
  { name: "Rohit Verma", role: "Full Stack Developer" },
  { name: "Priya Singh", role: "UI/UX Designer" },
  { name: "Arjun Mehta", role: "AI & Backend Engineer" },
  { name: "Kavya Rao", role: "Performance Marketer" },
];

const testimonials = [
  {
    quote:
      "They rebuilt our website and automated our entire lead process. We save 100+ hours every month.",
    name: "Rahul Mehta",
    company: "Bedsheets India",
  },
  {
    quote: "They understood our business and built a CRM that actually fits our workflow.",
    name: "Dr. Anjali Verma",
    company: "Stoa",
  },
  {
    quote: "The WhatsApp chatbot and automations improved our lead handling by 3x.",
    name: "Ajay Singh",
    company: "Hocco",
  },
];

const steps = [
  "We understand your mission",
  "We plan the perfect solution",
  "We build, automate and grow",
  "You win, we scale together",
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <img
              src={agencyLogo.url}
              alt="Unknown Hat Agency logo"
              width={140}
              height={40}
              className="h-9 w-auto rounded-md object-contain"
            />
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Let's Talk <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Digital technology & automation studio
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
              We build, automate &amp; grow{" "}
              <span className="text-brand">digital businesses.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground">
              Websites, software, CRM, AI systems, WhatsApp automation, marketing and content —
              all engineered around your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
              >
                View our work
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                ["150+", "Businesses served"],
                ["4.7x", "Avg. ROAS delivered"],
                ["100+", "Hours saved / month"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="font-display text-2xl font-extrabold">{k}</div>
                  <div className="text-xs text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-[1fr_1fr] sm:items-end">
              <img
                src={founder}
                alt="Nitin Raghav, Founder of Unknown Hat Agency"
                width={900}
                height={1000}
                className="w-full rounded-2xl object-cover"
              />
              <div>
                <h2 className="text-xl font-bold">Hi, I'm Nitin Raghav</h2>
                <p className="mt-1 text-sm font-medium text-brand">Founder &amp; Technology Lead</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  I build systems that help businesses move forward — faster, leaner and more
                  profitable.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Trusted by 150+ businesses worldwide
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="border-y border-border bg-card py-10">
          <p className="px-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by businesses worldwide
          </p>
          <div className="mt-8 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-14 pr-14">
              {[...clients, ...clients].map((c, i) => (
                <img
                  key={`${c.name}-${i}`}
                  src={c.src}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="h-12 w-auto max-w-[150px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Consultation form */}
        <section id="contact" className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
          <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Free consultation
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Tell us about your project. We'll take care of the rest.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Fill the form and our consultant will reach out within 24 hours with a clear plan
                and pricing.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-brand" /> +91 98765 43210
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-brand" /> hello@unknownhat.com
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-brand" /> New Delhi, India
                </div>
              </div>

              <ol className="mt-10 space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-3 text-sm">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent font-semibold text-accent-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-4 rounded-2xl bg-secondary p-5 sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name" name="name" placeholder="Nitin Raghav" required />
                <Field label="Company" name="company" placeholder="Company name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
                <Field label="Phone / WhatsApp" name="phone" placeholder="+91 00000 00000" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium">
                  What do you need?
                  <select
                    name="need"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-ring/30"
                  >
                    <option>Website Development</option>
                    <option>Software / SaaS</option>
                    <option>Automation & n8n</option>
                    <option>WhatsApp API & Chatbot</option>
                    <option>CRM / AI Agents</option>
                    <option>Marketing & Content</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Budget range
                  <select
                    name="budget"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-ring/30"
                  >
                    <option>Under ₹50k</option>
                    <option>₹50k – ₹2L</option>
                    <option>₹2L – ₹5L</option>
                    <option>₹5L+</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium">
                Tell us about your project
                <textarea
                  name="message"
                  rows={4}
                  placeholder="A short description of what you want to build..."
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-ring/30"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Send project brief <ArrowRight className="h-4 w-4" />
              </button>

              {sent && (
                <p className="flex items-center gap-2 text-sm font-medium text-brand">
                  <Check className="h-4 w-4" /> Thanks! Our consultant will contact you shortly.
                </p>
              )}
            </form>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-5 pb-16 lg:pb-24">
          <SectionHead
            eyebrow="What we do"
            title="Complete digital solutions under one roof."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {s.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
                <ArrowUpRight className="mt-6 h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand" />
              </div>
            ))}
          </div>
        </section>

        {/* Reels */}
        <section id="reels" className="border-y border-border bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Founder reels" title="Ideas, insights & behind the build." />
            <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4">
              {reels.map((r) => (
                <article
                  key={r.title}
                  className="relative aspect-[9/14] w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl bg-ink"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,color-mix(in_oklab,var(--brand)_45%,transparent),transparent_65%)]" />
                  <span className="absolute left-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-foreground">
                    {r.tag}
                  </span>
                  <span className="absolute right-3 bottom-3 rounded-md bg-background/85 px-2 py-0.5 text-[11px] font-semibold">
                    {r.time}
                  </span>
                  <Play className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-brand-foreground" />
                  <h3 className="absolute inset-x-3 bottom-10 text-sm font-semibold text-brand-foreground">
                    {r.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
          <SectionHead eyebrow="Our recent work" title="Work that speaks for itself." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={p.img}
                  alt={`${p.title} project preview`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="border-y border-border bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Our amazing team" title="People behind your success." />
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {team.map((m) => (
                <div
                  key={m.name}
                  className="rounded-2xl border border-border bg-background p-5 text-center"
                >
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent font-display text-xl font-extrabold text-accent-foreground">
                    {m.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <h3 className="mt-4 text-sm font-bold">{m.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
                  <div className="mt-3 flex justify-center gap-2 text-muted-foreground">
                    <Linkedin className="h-4 w-4" />
                    <Instagram className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
          <SectionHead eyebrow="What our clients say" title="Loved by founders & growing teams." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6">
                <Quote className="h-6 w-6 text-brand" />
                <blockquote className="mt-4 text-sm text-muted-foreground">{t.quote}</blockquote>
                <figcaption className="mt-5 text-sm font-semibold">
                  {t.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {t.company}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-ink py-12 text-brand-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src={agencyLogo.url}
              alt="Unknown Hat Agency logo"
              loading="lazy"
              className="h-10 w-auto rounded-md object-contain"
            />
            <p className="mt-4 max-w-sm text-sm opacity-70">
              We build, automate and grow digital businesses with technology, creativity and
              strategy.
            </p>
            <div className="mt-5 flex gap-3 opacity-80">
              <Linkedin className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
              <Youtube className="h-5 w-5" />
              <Video className="h-5 w-5" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest">Services</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-70">
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest">Company</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-70">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl px-5 text-xs opacity-60">
          © 2026 Unknown Hat Agency. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-ring/30"
      />
    </label>
  );
}
