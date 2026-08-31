import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import reel1 from "@/assets/reel-1.mp4.asset.json";
import reel2 from "@/assets/reel-2.mp4.asset.json";
import reel3 from "@/assets/reel-3.mp4.asset.json";
import poster1 from "@/assets/reel-1-poster.jpg.asset.json";
import poster2 from "@/assets/reel-2-poster.jpg.asset.json";
import poster3 from "@/assets/reel-3-poster.jpg.asset.json";

export type Reel = {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumb: string;
  /** Real video file — when present the card previews and plays it. */
  video?: string;
  href?: string;
};

export const reels: Reel[] = [
  {
    id: "r1",
    title: "How one n8n workflow replaced 4 hours of daily work",
    category: "Automation",
    duration: "0:34",
    thumb: poster1.url,
    video: reel1.url,
  },
  {
    id: "r2",
    title: "Building an AI agent that qualifies leads",
    category: "AI",
    duration: "0:36",
    thumb: poster2.url,
    video: reel2.url,
  },
  {
    id: "r3",
    title: "Behind the build: shipping systems that scale",
    category: "Behind the Scenes",
    duration: "0:13",
    thumb: poster3.url,
    video: reel3.url,
  },
  { id: "r4", title: "What makes a website actually convert", category: "Website", duration: "0:39", thumb: work1 },
  { id: "r5", title: "WhatsApp API vs WhatsApp Business: the real difference", category: "Business", duration: "1:04", thumb: work2 },
  { id: "r6", title: "The ad creative test we run for every client", category: "Marketing", duration: "0:44", thumb: work3 },
];
