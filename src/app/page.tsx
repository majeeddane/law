import { PageLoader } from "@/components/law-firm/PageLoader";
import { Header } from "@/components/law-firm/Header";
import { HeroSection } from "@/components/law-firm/HeroSection";
import { PracticeAreas } from "@/components/law-firm/PracticeAreas";
import { WhyChooseUs } from "@/components/law-firm/WhyChooseUs";
import { AboutFounder } from "@/components/law-firm/AboutFounder";
import { SuccessStories } from "@/components/law-firm/SuccessStories";
import { LegalInsights } from "@/components/law-firm/LegalInsights";
import { ContactSection } from "@/components/law-firm/ContactSection";
import { Footer } from "@/components/law-firm/Footer";
import { FloatingActions } from "@/components/law-firm/FloatingActions";
import { LanguageProvider } from "@/components/law-firm/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <PageLoader />
        <Header />
        <main className="flex-1">
          <HeroSection />
          <PracticeAreas />
          <WhyChooseUs />
          <AboutFounder />
          <SuccessStories />
          <LegalInsights />
          <ContactSection />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
