import hocco from "@/assets/hocco.png";
import stoa from "@/assets/stoa.avif";
import bedsheets from "@/assets/bedsheets.webp";
import vastra from "@/assets/vastra.webp";
import dodesk from "@/assets/dodesk.svg";
import street9 from "@/assets/street9.avif";
import kk from "@/assets/kk.avif";
import lal from "@/assets/lal.avif";

// `url` optional hai — jahan URL add karoge wahan logo clickable ho jayega.
export type Client = { name: string; logo: string; url?: string };

export const clients: Client[] = [
  { name: "Hocco Ice Cream", logo: hocco, url: "https://www.hocco.in" },
  { name: "Stoa", logo: stoa, url: "https://www.stoa.school" },
  { name: "Bedsheets India", logo: bedsheets },
  { name: "Vastra", logo: vastra },
  { name: "Do Desk", logo: dodesk },
  { name: "Street9", logo: street9 },
  { name: "Kirtilals", logo: kk, url: "https://www.kirtilals.com" },
  { name: "LAL", logo: lal },
];
