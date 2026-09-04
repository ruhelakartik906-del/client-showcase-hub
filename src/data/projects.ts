import caseHocco from "@/assets/case-hocco.png";
import caseVastra from "@/assets/case-vastra.png";
import caseDodesk from "@/assets/case-dodesk.png";
import caseStreet9 from "@/assets/case-street9.png";
import caseKirtilals from "@/assets/case-kirtilals.png";
import caseLal from "@/assets/case-lal.png";
import caseXpert from "@/assets/case-xpert.png";
import caseInfinity from "@/assets/case-infinity.png";

export const projectCategories = [
  "ALL",
  "WEBSITES",
  "SOFTWARE",
  "AUTOMATION",
  "AI",
  "CRM",
  "WHATSAPP",
  "MARKETING",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  name: string;
  category: Exclude<ProjectCategory, "ALL">;
  image: string;
  imageFit?: "cover" | "contain";
  url?: string;
  description: string;
  services: string[];
  tech: string[];
  outcome?: string;
};

export const projects: Project[] = [
  {
    id: "vastra",
    name: "Vastra",
    category: "WEBSITES",
    image: caseVastra,
    url: "https://vastrahometextile.com/",
    description:
      "An e-commerce website for a premium bedding brand — with product collections, a trust section and a clean path from browsing to checkout.",
    services: ["E-commerce website", "UX design", "Performance"],
    tech: ["React", "Payments", "GA4"],
    outcome: "Faster catalogue browsing and a cleaner path to checkout.",
  },
  {
    id: "street9",
    name: "Street9",
    category: "WEBSITES",
    image: caseStreet9,
    url: "https://street9.com/",
    description:
      "A fashion e-commerce website with quick-buy product cards, category discovery and built-in WhatsApp support for shoppers.",
    services: ["Website", "UX", "Conversion"],
    tech: ["React", "Responsive UI", "Analytics"],
    outcome: "A polished storefront that keeps shoppers moving to checkout.",
  },
  {
    id: "do-desk",
    name: "Do Desk",
    category: "SOFTWARE",
    image: caseDodesk,
    url: "https://www.dailyobjects.com/",
    description:
      "A large-catalogue commerce platform with organised category systems, merchandising blocks and offer management for the team.",
    services: ["Product design", "Web app", "Deployment"],
    tech: ["React", "Node", "PostgreSQL"],
    outcome: "Manual coordination replaced by a single operating surface.",
  },
  {
    id: "kirtilals",
    name: "Kirtilals",
    category: "MARKETING",
    image: caseKirtilals,
    url: "https://www.kirtilals.com/",
    description:
      "Digital presence work for a heritage jewellery brand — festive campaigns, website experience improvements and content across channels.",
    services: ["Campaign strategy", "Content", "Growth"],
    tech: ["Meta Ads", "Content ops", "Analytics"],
    outcome: "A consistently premium presence across digital touchpoints.",
  },
  {
    id: "lal",
    name: "LAL Sweets",
    category: "AI",
    image: caseLal,
    url: "https://www.lalsweets.com/",
    description:
      "A sweets e-commerce website with an AI-assisted enquiry flow that qualifies orders and routes them directly to the team.",
    services: ["AI agent", "Website", "Integrations"],
    tech: ["LLM APIs", "WhatsApp API", "Commerce"],
    outcome: "Qualified conversations reach the team already contextualised.",
  },
  {
    id: "hocco",
    name: "Hocco Ice Cream",
    category: "MARKETING",
    image: caseHocco,
    url: "https://www.hocco.in/",
    description:
      "A brand-led website and campaign system for a fast-growing ice cream brand, built to carry the same playful identity across web and social.",
    services: ["Content", "UGC", "Campaigns"],
    tech: ["Meta Ads", "Content ops"],
    outcome: "Brand storytelling that carries across web and social.",
  },
  {
    id: "xpert-awards",
    name: "Xpert Awards",
    category: "WEBSITES",
    image: caseXpert,
    url: "https://xpertawards.com/",
    description:
      "A website for a trophy manufacturer built around quote requests, product range browsing and WhatsApp-first enquiries.",
    services: ["Website", "Lead capture", "SEO"],
    tech: ["React", "WhatsApp API", "GA4"],
    outcome: "Enquiries now arrive qualified through quote and WhatsApp flows.",
  },
  {
    id: "infinity-boards",
    name: "Infinity Boards",
    category: "WEBSITES",
    image: caseInfinity,
    url: "https://infinityboards.in/",
    description:
      "A website for a wood panel manufacturer — product range, dealer trust proof and direct call/WhatsApp routing for buyers.",
    services: ["Website", "Brand integration", "Lead routing"],
    tech: ["React", "WhatsApp API", "Analytics"],
    outcome: "Dealers and buyers reach the right team in one tap.",
  },
];
