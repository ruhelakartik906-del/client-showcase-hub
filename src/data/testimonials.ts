import hocco from "@/assets/hocco.png";
import stoa from "@/assets/stoa.avif";
import bedsheets from "@/assets/bedsheets.webp";
import vastra from "@/assets/vastra.webp";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  logo?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They understood the business before touching the design. The site loads fast and the enquiries are far better qualified.",
    name: "Operations Lead",
    role: "Operations",
    company: "Bedsheets India",
    logo: bedsheets,
  },
  {
    quote:
      "The CRM and automations replaced a pile of spreadsheets. Nothing falls through the cracks now.",
    name: "Sales Head",
    role: "Sales",
    company: "Stoa",
    logo: stoa,
  },
  {
    quote:
      "Communication was clear, timelines were kept, and the WhatsApp system started paying for itself quickly.",
    name: "Marketing Manager",
    role: "Marketing",
    company: "Hocco",
    logo: hocco,
  },
  {
    quote:
      "Nitin works like a technical partner, not a vendor. He suggested a simpler approach that saved us weeks.",
    name: "Founder",
    role: "Founder",
    company: "Vastra",
    logo: vastra,
  },
];
