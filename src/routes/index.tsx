import { createFileRoute } from "@tanstack/react-router";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TerritorySection from "@/components/TerritorySection";
import PainPoints from "@/components/PainPoints";
import FeaturesSection from "@/components/FeaturesSection";
import StatsBanner from "@/components/StatsBanner";
import ExtrasSection from "@/components/ExtrasSection";
import SocialProof from "@/components/SocialProof";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Giraffe CRM — Built for the Boots on the Ground" },
      { name: "description", content: "Mobile-first CRM for door-to-door sales. Fast lead capture, GPS auto-fill, auto-pricing, and route tracking." },
      { property: "og:title", content: "Giraffe CRM — Built for the Boots on the Ground" },
      { property: "og:description", content: "The CRM built for door knockers. Quote on the spot, capture leads in seconds." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="cursor-none overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <TerritorySection />
        <PainPoints />
        <FeaturesSection />
        <StatsBanner />
        <ExtrasSection />
        <SocialProof />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
      
    </div>
  );
}