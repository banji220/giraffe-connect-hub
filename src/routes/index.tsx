import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy-load everything below the fold
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const TerritorySection = lazy(() => import("@/components/TerritorySection"));
const PainPoints = lazy(() => import("@/components/PainPoints"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const StatsBanner = lazy(() => import("@/components/StatsBanner"));
const ExtrasSection = lazy(() => import("@/components/ExtrasSection"));
const SocialProof = lazy(() => import("@/components/SocialProof"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const CtaSection = lazy(() => import("@/components/CtaSection"));
const Footer = lazy(() => import("@/components/Footer"));
const CustomCursor = lazy(() => import("@/components/CustomCursor"));

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
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-96" />}>
          <HowItWorks />
          <TerritorySection />
          <PainPoints />
          <FeaturesSection />
          <StatsBanner />
          <ExtrasSection />
          <SocialProof />
          <PricingSection />
          <CtaSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}