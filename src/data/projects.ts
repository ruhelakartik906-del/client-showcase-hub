import caseHocco from "@/assets/case-hocco.png.asset.json";
import caseVastra from "@/assets/case-vastra.png.asset.json";
import caseDodesk from "@/assets/case-dodesk.png.asset.json";
import caseStreet9 from "@/assets/case-street9.png.asset.json";
import caseKirtilals from "@/assets/case-kirtilals.png.asset.json";
import caseLal from "@/assets/case-lal.png.asset.json";
import caseXpert from "@/assets/case-xpert.png.asset.json";
import caseInfinity from "@/assets/case-infinity.png.asset.json";

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
    image: caseVastra.url,
    description:
      "Premium bedding e-commerce storefront — collection browsing, trust bar and a clean path to checkout.",
    services: ["E-commerce build", "UX", "Performance"],
    tech: ["React", "Payments", "GA4"],
    outcome: "Faster catalogue browsing and a cleaner path to checkout.",
  },
  {
    id: "street9",
    name: "Street9",
    category: "WEBSITES",
    image: caseStreet9.url,
    description:
      "Fashion e-commerce with quick-buy product cards, category discovery and WhatsApp support built in.",
    services: ["Website", "UX", "Conversion"],
    tech: ["React", "Responsive UI", "Analytics"],
    outcome: "A polished storefront that keeps shoppers moving to checkout.",
  },
  {
    id: "do-desk",
    name: "Do Desk",
    category: "SOFTWARE",
    image: caseDodesk.url,
    description:
      "Large-catalogue commerce platform with category systems, merchandising blocks and offer management.",
    services: ["Product design", "Web app", "Deployment"],
    tech: ["React", "Node", "PostgreSQL"],
    outcome: "Manual coordination replaced by a single operating surface.",
  },
  {
    id: "kirtilals",
    name: "Kirtilals",
    category: "MARKETING",
    image: caseKirtilals.url,
    description:
      "Heritage jewellery brand experience — festive campaigns, virtual try-on entry points and trust signals.",
    services: ["Campaign strategy", "Content", "Growth"],
    tech: ["Meta Ads", "Content ops", "Analytics"],
    outcome: "A consistently premium presence across digital touchpoints.",
  },
  {
    id: "lal",
    name: "LAL Sweets",
    category: "AI",
    image: caseLal.url,
    description:
      "Sweets e-commerce with an AI-assisted enquiry flow that qualifies orders and routes them to the team.",
    services: ["AI agent", "Website", "Integrations"],
    tech: ["LLM APIs", "WhatsApp API", "Commerce"],
    outcome: "Qualified conversations reach the team already contextualised.",
  },
  {
    id: "hocco",
    name: "Hocco Ice Cream",
    category: "MARKETING",
    image: caseHocco.url,
    description:
      "Playful brand-led site and campaign system for a fast-moving consumer ice cream brand.",
    services: ["Content", "UGC", "Campaigns"],
    tech: ["Meta Ads", "Content ops"],
    outcome: "Brand storytelling that carries across web and social.",
  },
  {
    id: "xpert-awards",
    name: "Xpert Awards",
    category: "WEBSITES",
    image: caseXpert.url,
    description:
      "Trophy manufacturer website built around quote generation, product range and WhatsApp-first enquiries.",
    services: ["Website", "Lead capture", "SEO"],
    tech: ["React", "WhatsApp API", "GA4"],
    outcome: "Enquiries now arrive qualified through quote and WhatsApp flows.",
  },
  {
    id: "infinity-boards",
    name: "Infinity Boards",
    category: "WEBSITES",
    image: caseInfinity.url,
    description:
      "Manufacturer site for wood panels — product range, dealer trust proof and direct call/WhatsApp routing.",
    services: ["Website", "Brand integration", "Lead routing"],
    tech: ["React", "WhatsApp API", "Analytics"],
    outcome: "Dealers and buyers reach the right team in one tap.",
  },
];
