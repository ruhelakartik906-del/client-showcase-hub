import hocco from "@/assets/hocco.png.asset.json";
import stoa from "@/assets/stoa.avif.asset.json";
import bedsheets from "@/assets/bedsheets.webp.asset.json";
import vastra from "@/assets/vastra.webp.asset.json";
import dodesk from "@/assets/dodesk.svg.asset.json";
import street9 from "@/assets/street9.avif.asset.json";
import kk from "@/assets/kk.avif.asset.json";
import lal from "@/assets/lal.avif.asset.json";

// `url` optional hai — jahan URL add karoge wahan logo clickable ho jayega.
export type Client = { name: string; logo: string; url?: string };

export const clients: Client[] = [
  { name: "Hocco Ice Cream", logo: hocco.url, url: "https://www.hocco.in" },
  { name: "Stoa", logo: stoa.url, url: "https://www.stoa.school" },
  { name: "Bedsheets India", logo: bedsheets.url },
  { name: "Vastra", logo: vastra.url },
  { name: "Do Desk", logo: dodesk.url },
  { name: "Street9", logo: street9.url },
  { name: "Kirtilals", logo: kk.url, url: "https://www.kirtilals.com" },
  { name: "LAL", logo: lal.url },
];
