import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import { services } from "@/data/services";
import { SectionHeading } from "./ui-kit/SectionHeading";
import { MagneticButton } from "./ui-kit/Magnetic";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  budget: string;
  message: string;
};

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  need: "",
  budget: "",
  message: "",
};

const budgets = ["Under ₹50k", "₹50k – ₹1.5L", "₹1.5L – ₹5L", "₹5L+", "Not sure yet"];

export function ConsultationForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(values.email)) e.email = "Enter a valid email address.";
    if (values.phone.replace(/\D/g, "").length < 8) e.phone = "Enter a reachable phone or WhatsApp number.";
    if (!values.need) e.need = "Select what you need.";
    if (values.message.trim().length < 20) e.message = "A few more details help us respond properly (20+ characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  return (
    <section id="contact" className="relative border-t border-white/8 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            label="14 — Free consultation"
            title={
              <>
                Tell us what <span className="text-brand">you're building.</span>
              </>
            }
            sub="Tell us about your business, challenge or idea. We'll understand the requirement and suggest the right approach."
          />

          <div className="mt-10 space-y-4">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <ContactRow icon={<Phone className="h-4 w-4" />} label="WhatsApp" value={site.phone} href={whatsappLink} />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value={site.location} />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-card p-6 sm:p-9">
          {sent ? (
            <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
              <span className="glow-brand flex h-16 w-16 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <Check className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Brief received</h3>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                We'll review your requirement and get back with the next steps. For
                anything urgent, message us directly on WhatsApp.
              </p>
              <MagneticButton href={whatsappLink} target="_blank" className="mt-7">
                Continue on WhatsApp <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input className={inputCls(!!errors.name)} value={values.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
              </Field>
              <Field label="Company">
                <input className={inputCls(false)} value={values.company} onChange={(e) => set("company", e.target.value)} placeholder="Company (optional)" />
              </Field>
              <Field label="Email" error={errors.email}>
                <input type="email" className={inputCls(!!errors.email)} value={values.email} onChange={(e) => set("email", e.target.value)} placeholder="you@company.com" />
              </Field>
              <Field label="Phone / WhatsApp" error={errors.phone}>
                <input className={inputCls(!!errors.phone)} value={values.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 ..." />
              </Field>
              <Field label="What do you need?" error={errors.need}>
                <select className={inputCls(!!errors.need)} value={values.need} onChange={(e) => set("need", e.target.value)}>
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
              </Field>
              <Field label="Budget range">
                <select className={inputCls(false)} value={values.budget} onChange={(e) => set("budget", e.target.value)}>
                  <option value="">Select a range</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Tell us about your project" error={errors.message} full>
                <textarea
                  rows={5}
                  className={cn(inputCls(!!errors.message), "resize-none")}
                  value={values.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder="What are you building, what's the problem, and what does success look like?"
                />
              </Field>

              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <MagneticButton type="submit">
                  Send Project Brief <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <p className="text-xs text-muted-foreground">
                  We'll review your requirement and get back with the next steps.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full rounded-lg border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/70 focus:border-brand",
    hasError ? "border-destructive" : "border-white/12",
  );
}

function Field({
  label,
  error,
  children,
  full,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={cn("block", full && "sm:col-span-2")}>
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors duration-300 hover:border-brand/40">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/12 text-brand">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 text-sm">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
