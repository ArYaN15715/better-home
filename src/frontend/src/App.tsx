import { useRef } from "react";
import { Navbar } from "./components/Navbar";
import { StickyMobileBar } from "./components/StickyMobileBar";
import { AboutSection } from "./sections/AboutSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LeadCaptureSection } from "./sections/LeadCaptureSection";
import { MapSection } from "./sections/MapSection";
import { PropertiesSection } from "./sections/PropertiesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TrustBar } from "./sections/TrustBar";
import { WhyUsSection } from "./sections/WhyUsSection";

export default function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background pb-mobile-bar">
      <Navbar />

      <main>
        <HeroSection onGetOptions={scrollToContact} />
        <TrustBar />
        <PropertiesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <div ref={contactRef}>
          <LeadCaptureSection />
        </div>
        <AboutSection />
        <MapSection />
      </main>

      <FooterSection />
      <StickyMobileBar onGetOptions={scrollToContact} />
    </div>
  );
}
