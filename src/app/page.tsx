import { Header } from "@/components/law-firm/Header";
import { HeroSection } from "@/components/law-firm/HeroSection";
import { PracticeAreas } from "@/components/law-firm/PracticeAreas";
import { AboutFounder } from "@/components/law-firm/AboutFounder";
import { SuccessStories } from "@/components/law-firm/SuccessStories";
import { LegalInsights } from "@/components/law-firm/LegalInsights";
import { ContactSection } from "@/components/law-firm/ContactSection";
import { Footer } from "@/components/law-firm/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PracticeAreas />
        <AboutFounder />
        <SuccessStories />
        <LegalInsights />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
