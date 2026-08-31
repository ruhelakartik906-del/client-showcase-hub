import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { FounderJourney } from "@/components/FounderJourney";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { PaymentModel } from "@/components/PaymentModel";
import { Clients } from "@/components/Clients";
import { Portfolio } from "@/components/Portfolio";
import { Ecosystem } from "@/components/Ecosystem";
import { AutomationShowcase } from "@/components/AutomationShowcase";
import { Reels } from "@/components/Reels";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ConsultationForm } from "@/components/ConsultationForm";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Stats } from "@/components/Stats";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const title = "UnknownHat Agency — Websites, Automation & AI Systems";
const description =
  "Founder-led technology studio building websites, software, CRM, automation, WhatsApp and AI systems for businesses that want to scale.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <FounderJourney />
        <Services />
        <Process />
        <About />
        <PaymentModel />
        <Clients />
        <Portfolio />
        <Ecosystem />
        <AutomationShowcase />
        <Reels />
        <Testimonials />
        <Stats />
        <FAQ />
        <ConsultationForm />
        <WhatsAppCTA />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
