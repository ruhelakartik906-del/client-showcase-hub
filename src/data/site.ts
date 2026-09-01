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
  email: "contact@unknownhat.com",
  // Where the website contact form submissions are delivered
  formEmail: "unknownhatagency@gmail.com",
  phone: "+91 63958 55214",
  whatsappNumber: "916395855214",
  whatsappMessage:
    "Hi UnknownHat 👋 I'm interested in getting a website for my business. I'd like to know more about your services and see some previous work.",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/unknownhat_agency_/" },
  ],

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
