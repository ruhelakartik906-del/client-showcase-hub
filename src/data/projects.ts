import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

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
    id: "bedsheets-india",
    name: "Bedsheets India",
    category: "WEBSITES",
    image: work1,
    description:
      "E-commerce storefront rebuilt around speed, product discovery and checkout clarity.",
    services: ["E-commerce build", "UX", "Performance"],
    tech: ["Shopify", "Liquid", "GA4"],
    outcome: "Faster catalogue browsing and a cleaner path to checkout.",
  },
  {
    id: "do-desk",
    name: "Do Desk",
    category: "SOFTWARE",
    image: work2,
    description:
      "Custom workspace platform with role-based access and operational dashboards.",
    services: ["Product design", "Web app", "Deployment"],
    tech: ["React", "Node", "PostgreSQL"],
    outcome: "Manual coordination replaced by a single operating surface.",
  },
  {
    id: "stoa-crm",
    name: "Stoa CRM",
    category: "CRM",
    image: work3,
    description:
      "Lead pipeline with automated follow-ups, ownership rules and reporting.",
    services: ["CRM build", "Automation", "Reporting"],
    tech: ["Custom CRM", "n8n", "APIs"],
    outcome: "Every lead tracked from first touch to closure.",
  },
  {
    id: "street9",
    name: "Street9",
    category: "WEBSITES",
    image: work1,
    description:
      "A focused digital presence designed to make the brand clear, credible and easy to discover.",
    services: ["Website", "UX", "Brand integration"],
    tech: ["React", "Responsive UI", "Analytics"],
    outcome: "A polished digital destination aligned with the brand identity.",
  },
  {
    id: "kirtilals",
    name: "Kirtilals",
    category: "MARKETING",
    image: work2,
    description:
      "Premium digital campaign support built around a heritage jewellery brand and its audience.",
    services: ["Campaign strategy", "Content", "Growth"],
    tech: ["Meta Ads", "Content ops", "Analytics"],
    outcome: "A more consistent premium presence across digital touchpoints.",
  },
  {
    id: "lal",
    name: "LAL",
    category: "AI",
    image: work3,
    description:
      "An intelligent enquiry experience that qualifies conversations and routes them to the right team.",
    services: ["AI agent", "Knowledge base", "Integrations"],
    tech: ["LLM APIs", "RAG", "Vector DB"],
    outcome: "Qualified conversations reach the team already contextualised.",
  },
  {
    id: "vastra",
    name: "Vastra",
    category: "MARKETING",
    image: work1,
    description:
      "Growth system pairing a conversion-focused site with paid and content channels.",
    services: ["Landing system", "Meta Ads", "Content"],
    tech: ["React", "Meta Ads", "GA4"],
  },
  {
    id: "hocco",
    name: "Hocco",
    category: "MARKETING",
    image: work2,
    description:
      "Brand-led content and campaign support for a fast-moving consumer brand.",
    services: ["Content", "UGC", "Campaigns"],
    tech: ["Meta Ads", "Content ops"],
  },
];
