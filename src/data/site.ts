// ============================================================
// ✏️  MAIN SITE INFO — yahan se poori website ki basic
//     information control hoti hai (naam, contact, WhatsApp,
//     social links, navbar). Bas value change karo, save karo.
// ============================================================
export const site = {
  name: "UnknownHat Agency",
  shortName: "UnknownHat",
  tagline: "Digital Technology & Automation Studio",
  description:
    "Technology, automation, software and growth systems for modern businesses.",
  founder: {
    name: "Nitin Raghav",
    role: "Founder & Technology Lead",
    quote:
      "I build digital systems that help businesses move faster, operate smarter and scale.",
  },
  availability: "Available for selected projects",
  email: "hello@unknownhat.agency",
  phone: "+91 90000 00000",
  whatsappNumber: "919000000000",
  whatsappMessage:
    "Hi UnknownHat, I'm interested in working with you. I'd like to discuss a project.",
  location: "India — working worldwide",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X", href: "https://x.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Reels", href: "#reels" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
