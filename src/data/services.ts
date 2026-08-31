export type Service = {
  id: string;
  index: string;
  title: string;
  short: string;
  mascot:
    | "browser"
    | "code"
    | "dashboard"
    | "nodes"
    | "chat"
    | "agent"
    | "growth";
  build: string[];
  useCases: string[];
  tech: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "web",
    index: "01",
    title: "Website Development",
    short: "We build fast, responsive and conversion-focused websites designed around your business and customers.",
    mascot: "browser",
    build: [
      "Business and brand websites",
      "High-intent landing pages",
      "E-commerce storefronts",
      "Headless / CMS-driven sites",
    ],
    useCases: [
      "Launching a new brand presence",
      "Replacing a slow, outdated site",
      "Scaling paid traffic to a landing system",
    ],
    tech: ["React", "TypeScript", "Next / TanStack", "Tailwind", "Shopify", "WordPress"],
    deliverables: ["Design system", "Responsive build", "SEO setup", "Analytics", "Handover docs"],
  },
  {
    id: "software",
    index: "02",
    title: "Software Development",
    short: "We build custom web applications, dashboards and internal tools based on your specific requirements.",
    mascot: "code",
    build: [
      "Web applications",
      "Custom internal platforms",
      "SaaS products",
      "Admin dashboards",
    ],
    useCases: [
      "Replacing spreadsheets and manual ops",
      "Productising an internal process",
      "Multi-role team platforms",
    ],
    tech: ["React", "Node", "PostgreSQL", "Supabase", "REST / GraphQL", "Cloud"],
    deliverables: ["Architecture", "Auth & roles", "Core modules", "Deployment", "Support window"],
  },
  {
    id: "crm",
    index: "03",
    title: "CRM Development",
    short: "We build CRM systems that help your team manage leads, customers, follow-ups and sales from one place.",
    mascot: "dashboard",
    build: [
      "Lead management systems",
      "Custom sales pipelines",
      "Automated follow-up engines",
      "Reporting dashboards",
    ],
    useCases: [
      "Leads leaking between channels",
      "No visibility on sales performance",
      "Manual follow-up chaos",
    ],
    tech: ["Custom CRM", "Supabase", "HubSpot", "Zoho", "APIs"],
    deliverables: ["Pipeline design", "Role-based access", "Automations", "Dashboards", "Training"],
  },
  {
    id: "automation",
    index: "04",
    title: "Automation & n8n",
    short: "We connect your apps, APIs and business processes so repetitive work happens automatically.",
    mascot: "nodes",
    build: [
      "n8n workflow systems",
      "API integrations",
      "Lead routing systems",
      "Ops & reporting automation",
    ],
    useCases: [
      "Copy-paste work between tools",
      "Slow lead response times",
      "Manual reporting every week",
    ],
    tech: ["n8n", "Make", "Webhooks", "REST APIs", "Google Workspace", "Cloud functions"],
    deliverables: ["Workflow map", "Live automations", "Error handling", "Monitoring", "Docs"],
  },
  {
    id: "whatsapp",
    index: "05",
    title: "WhatsApp API & Chatbots",
    short: "We build WhatsApp systems for customer enquiries, lead qualification, notifications, support and follow-ups.",
    mascot: "chat",
    build: [
      "WhatsApp Cloud API setup",
      "Broadcast & campaign systems",
      "Conversational chatbots",
      "CRM-connected conversations",
    ],
    useCases: [
      "Sales happening in DMs with no tracking",
      "Bulk campaigns without spam risk",
      "24/7 first-response coverage",
    ],
    tech: ["WhatsApp Cloud API", "Meta Business", "n8n", "AI models", "CRM APIs"],
    deliverables: ["API onboarding", "Templates", "Bot flows", "CRM sync", "Analytics"],
  },
  {
    id: "ai",
    index: "06",
    title: "AI Agents & Business Systems",
    short: "We build AI agents that can answer questions, qualify leads, handle conversations, process information and work with your existing business systems.",
    mascot: "agent",
    build: [
      "AI sales & support agents",
      "Document / knowledge assistants",
      "AI-powered qualification",
      "Business intelligence layers",
    ],
    useCases: [
      "High enquiry volume, small team",
      "Knowledge trapped in documents",
      "Manual lead scoring",
    ],
    tech: ["LLM APIs", "RAG", "Vector DB", "n8n", "Custom tooling"],
    deliverables: ["Agent design", "Knowledge base", "Guardrails", "Integrations", "Evaluation"],
  },
  {
    id: "growth",
    index: "07",
    title: "Growth Marketing & Content",
    short: "We help businesses improve their online presence through SEO, content, social media and performance-focused digital growth.",
    mascot: "growth",
    build: ["Meta & Google Ads", "SEO", "Content systems", "UGC and short-form"],
    useCases: [
      "Traffic without conversions",
      "No consistent content engine",
      "Scaling a proven offer",
    ],
    tech: ["Meta Ads", "Google Ads", "GA4", "Search Console", "Content ops"],
    deliverables: ["Channel strategy", "Creative", "Campaign builds", "Tracking", "Monthly reporting"],
  },
];
