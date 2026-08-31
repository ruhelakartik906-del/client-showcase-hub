import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export type Reel = {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumb: string;
  href?: string;
};

export const reels: Reel[] = [
  { id: "r1", title: "How one n8n workflow replaced 4 hours of daily work", category: "Automation", duration: "0:48", thumb: work3 },
  { id: "r2", title: "Building an AI agent that qualifies leads", category: "AI", duration: "1:12", thumb: work2 },
  { id: "r3", title: "What makes a website actually convert", category: "Website", duration: "0:39", thumb: work1 },
  { id: "r4", title: "WhatsApp API vs WhatsApp Business: the real difference", category: "Business", duration: "1:04", thumb: work2 },
  { id: "r5", title: "Behind the build: shipping a CRM in 3 weeks", category: "Behind the Scenes", duration: "0:57", thumb: work3 },
  { id: "r6", title: "The ad creative test we run for every client", category: "Marketing", duration: "0:44", thumb: work1 },
];
