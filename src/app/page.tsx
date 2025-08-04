// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import FAQSection from "@/components/sections/FAQSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import VideoSection from "@/components/sections/VideoSection";
import CallToActionSection from "@/components/sections/CallToActionSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#DFE5E5] text-[#002432]">
      {/* Hero: título, formulário e imagem */}
      <HeroSection />

      {/* Benefícios da Aurabox (ícones grandes, cards coloridos) */}
      <FAQSection />

      {/* Quando contratar uma agência? */}
      <BenefitsSection />

      {/* Vídeo + FAQ extra */}
      <VideoSection />

      {/* CTA final com formulário e contato */}
      <CallToActionSection />
    </main>
  );
}
