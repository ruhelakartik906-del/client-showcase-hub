import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { About } from "@/components/About";
import { FounderJourney } from "@/components/FounderJourney";
import { Services } from "@/components/Services";
import { Ecosystem } from "@/components/Ecosystem";
import { Portfolio } from "@/components/Portfolio";
import { AutomationShowcase } from "@/components/AutomationShowcase";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { PaymentModel } from "@/components/PaymentModel";
import { Reels } from "@/components/Reels";
import { FAQ } from "@/components/FAQ";
import { ConsultationForm } from "@/components/ConsultationForm";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const title = "UnknownHat — Digital Systems, Automation & AI for Business";
const description =
  "UnknownHat builds digital systems that help businesses sell, operate and scale — websites, software, CRM, automation, WhatsApp and AI, connected end to end.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "UnknownHat",
          description,
          email: "hello@unknownhat.agency",
          founder: {
            "@type": "Person",
            name: "Nitin Raghav",
            jobTitle: "Founder & Technology Lead",
          },
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <About />
        <FounderJourney />
        <Services />
        <Ecosystem />
        <Portfolio />
        <AutomationShowcase />
        <Process />
        <WhyUs />
        <PaymentModel />
        <Reels />
        <FAQ />
        <ConsultationForm />
        <WhatsAppCTA />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
