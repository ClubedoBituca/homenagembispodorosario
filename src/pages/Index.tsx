import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import PillarsSection from "@/components/PillarsSection";
import MantoSection from "@/components/MantoSection";
import CatalogSection from "@/components/CatalogSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <IntroSection />
      <PillarsSection />
      <MantoSection />
      <CatalogSection />
      <FooterSection />
    </main>
  );
};

export default Index;
