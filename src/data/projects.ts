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
  "E-COMMERCE",
  "WEBSITES",
  "SOFTWARE",
  "AI",
  "BRAND",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  name: string;
  category: Exclude<ProjectCategory, "ALL">;
  categoryLabel: string;
  industry: string;
  image: string;
  liveUrl?: string;
  description: string;
  services: string[];
  tech: string[];
  challenge: string;
  approach: string;
  built: string[];
  features: string[];
  objective: string;
  result: string;
};

export const projects: Project[] = [
  {
    id: "vastra",
    name: "Vastra",
    category: "E-COMMERCE",
    categoryLabel: "E-commerce / Website",
    industry: "Home textiles",
    image: caseVastra.url,
    description:
      "Premium home textile e-commerce experience focused on collection discovery, trust and a clean path to purchase.",
    services: ["E-commerce build", "UX design", "Performance"],
    tech: ["React", "Payments", "GA4"],
    challenge:
      "A wide bedding catalogue was hard to browse, and the storefront did not communicate the quality of the product range.",
    approach:
      "We restructured the catalogue around collections and use cases, then rebuilt the storefront with a calmer visual system and a shorter route to checkout.",
    built: [
      "Collection-led storefront",
      "Product and category templates",
      "Trust and delivery messaging",
      "Checkout flow refinement",
    ],
    features: ["Collection browsing", "Responsive product grid", "Trust bar", "Analytics tracking"],
    objective: "Make the range easy to explore and the purchase decision easy to make.",
    result: "A faster catalogue experience with a clear, uninterrupted path to checkout.",
  },
  {
    id: "street9",
    name: "Street9",
    category: "E-COMMERCE",
    categoryLabel: "Fashion E-commerce",
    industry: "Fashion retail",
    image: caseStreet9.url,
    description:
      "Fashion storefront designed around quick product discovery, category browsing and direct customer support.",
    services: ["Website", "UX design", "Conversion"],
    tech: ["React", "Responsive UI", "WhatsApp", "Analytics"],
    challenge:
      "Shoppers had to work too hard to move between categories, and support questions were slowing down purchases.",
    approach:
      "We designed quick-buy product cards, tightened category navigation and put customer support one tap away on every page.",
    built: [
      "Category-first navigation",
      "Quick-buy product cards",
      "WhatsApp support entry points",
      "Mobile-first layout system",
    ],
    features: ["Fast product discovery", "Sticky support access", "Optimised mobile browsing"],
    objective: "Reduce friction between discovery and purchase.",
    result: "A storefront that keeps shoppers moving instead of stalling on navigation.",
  },
  {
    id: "do-desk",
    name: "Do Desk",
    category: "SOFTWARE",
    categoryLabel: "Commerce Platform",
    industry: "Consumer accessories",
    image: caseDodesk.url,
    description:
      "Large-catalogue commerce experience with structured categories, merchandising blocks and offer management.",
    services: ["Product design", "Web application", "Deployment"],
    tech: ["React", "Node", "PostgreSQL"],
    challenge:
      "A large product catalogue and frequent campaigns were being coordinated manually across disconnected tools.",
    approach:
      "We designed a structured category system and merchandising blocks the team can rearrange, then built it as a single operating surface.",
    built: [
      "Category and taxonomy system",
      "Merchandising blocks",
      "Offer and campaign management",
      "Admin workflows",
    ],
    features: ["Structured catalogue", "Configurable homepage modules", "Offer scheduling"],
    objective: "Give the team one place to run the catalogue and its campaigns.",
    result: "Manual coordination replaced by a single operating surface.",
  },
  {
    id: "kirtilals",
    name: "Kirtilals",
    category: "BRAND",
    categoryLabel: "Jewellery / Digital Experience",
    industry: "Jewellery retail",
    image: caseKirtilals.url,
    liveUrl: "https://www.kirtilals.com",
    description:
      "Heritage jewellery brand experience combining premium visual storytelling, campaigns and digital shopping.",
    services: ["Campaign strategy", "Content", "Growth"],
    tech: ["Meta Ads", "Content ops", "Analytics"],
    challenge:
      "A heritage brand needed a digital presence that felt as considered as the product, across campaigns and shopping alike.",
    approach:
      "We built a campaign and content system around the brand's visual language, with clear entry points into the shopping experience.",
    built: [
      "Festive campaign system",
      "Virtual try-on entry points",
      "Content and creative pipeline",
      "Performance tracking",
    ],
    features: ["Campaign landing experiences", "Editorial storytelling", "Trust signals"],
    objective: "Keep the brand premium across every digital touchpoint.",
    result: "A consistently premium presence across campaigns and shopping journeys.",
  },
  {
    id: "lal",
    name: "LAL Sweets",
    category: "AI",
    categoryLabel: "E-commerce / AI",
    industry: "Food & confectionery",
    image: caseLal.url,
    description:
      "Sweets e-commerce experience with AI-assisted enquiry handling and customer routing.",
    services: ["AI agent", "Website", "Integrations"],
    tech: ["LLM APIs", "WhatsApp API", "Commerce"],
    challenge:
      "Bulk and festive enquiries arrived with too little context, and the team spent the first exchange just collecting basics.",
    approach:
      "We added an AI-assisted enquiry flow that collects requirements conversationally and routes the enquiry to the right person.",
    built: [
      "AI enquiry assistant",
      "Requirement capture flow",
      "WhatsApp routing",
      "Storefront integration",
    ],
    features: ["Conversational qualification", "Automatic routing", "Human handoff"],
    objective: "Let the team start every conversation already informed.",
    result: "Qualified conversations reach the team already contextualised.",
  },
  {
    id: "hocco",
    name: "Hocco Ice Cream",
    category: "BRAND",
    categoryLabel: "Brand Experience / Marketing",
    industry: "FMCG",
    image: caseHocco.url,
    liveUrl: "https://www.hocco.in",
    description:
      "Playful digital brand experience built around storytelling, campaigns and customer engagement.",
    services: ["Content", "UGC", "Campaigns"],
    tech: ["Meta Ads", "Content ops"],
    challenge:
      "A fast-moving consumer brand needed its digital presence to carry the same personality as its packaging and stores.",
    approach:
      "We built a brand-led site experience and a repeatable campaign system so web and social tell one story.",
    built: ["Brand-led site sections", "Campaign templates", "UGC content system"],
    features: ["Story-driven layout", "Campaign modules", "Social-first creative"],
    objective: "Carry one brand voice across web and social.",
    result: "Brand storytelling that stays consistent across every channel.",
  },
  {
    id: "xpert-awards",
    name: "Xpert Awards",
    category: "WEBSITES",
    categoryLabel: "Website / Lead Generation",
    industry: "Manufacturing",
    image: caseXpert.url,
    description:
      "Trophy manufacturer website designed around product discovery, quote generation and WhatsApp-first enquiries.",
    services: ["Website", "Lead capture", "SEO"],
    tech: ["React", "WhatsApp API", "GA4"],
    challenge:
      "Enquiries arrived without product, quantity or timeline details, so every quote needed several rounds of messages.",
    approach:
      "We structured the product range for browsing and built a quote flow that captures the details before the conversation starts.",
    built: ["Product range pages", "Quote request flow", "WhatsApp-first enquiry routing", "SEO foundation"],
    features: ["Structured product discovery", "Quote capture", "One-tap WhatsApp"],
    objective: "Turn raw enquiries into ready-to-quote requests.",
    result: "Enquiries now arrive qualified through the quote and WhatsApp flows.",
  },
  {
    id: "infinity-boards",
    name: "Infinity Boards",
    category: "WEBSITES",
    categoryLabel: "Manufacturing / Website",
    industry: "Building materials",
    image: caseInfinity.url,
    description:
      "Manufacturer website focused on product range, dealer trust and direct enquiry routing.",
    services: ["Website", "Brand integration", "Lead routing"],
    tech: ["React", "WhatsApp API", "Analytics"],
    challenge:
      "Dealers and buyers had different needs, but every visitor landed on the same undifferentiated contact path.",
    approach:
      "We presented the product range clearly, layered in dealer trust proof and routed each enquiry type to the right team.",
    built: ["Product range presentation", "Dealer trust section", "Call and WhatsApp routing"],
    features: ["Range browsing", "Trust proof", "Direct enquiry routing"],
    objective: "Get each visitor to the right team in one step.",
    result: "Dealers and buyers reach the right team in one tap.",
  },
];
