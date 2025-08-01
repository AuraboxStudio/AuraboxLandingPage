import { Play } from "lucide-react";
import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import { VideoSection } from "@/components/sections/VideoSection";
import FAQSection from "@/components/sections/FAQSection";
import CallToActionSection from "@/components/sections/CallToActionSection";

export default function LandingPage() {
  return (
    <div className="bg-[#dfe5e5] flex flex-row justify-center w-full">
      <div className="bg-[#dfe5e5] w-full max-w-[1920px] relative">
        {/* Header and Logo */}
        <div className="w-full max-w-[1341px] mx-auto pt-10 px-4">
          <div className="flex items-center mb-8">
            <div className="relative w-[79px] h-[100px] bg-[url(/vector.png)] bg-[100%_100%]">
              <img
                className="absolute w-[75px] h-[83px] top-0.5 left-0.5"
                alt="Aurabox Logo"
                src="/logo_aurabox_marca.png"
              />
            </div>
            <img
              className="w-[114px] h-[34px] ml-2"
              alt="Aurabox Name"
              src="/logotipo_aurabox_nome.png"
            />
          </div>

          {/* Hero Section */}
          <HeroSection />
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Video Section */}
        <div className="w-full max-w-[1232px] h-auto aspect-video mx-auto my-16 relative bg-[url(/rectangle-23.svg)] bg-[100%_100%] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-[75px] h-[83px] text-teal-500" />
          </div>
        </div>
        <VideoSection />

        {/* Call To Action Section */}
        <CallToActionSection />

        {/* Footer */}
        <footer className="w-full text-center py-8 mt-8">
          <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-normal">
            Contato: comercial@auraboxstudio.com
            <br />
            Todos Direitos Reservados
            <br />
            CNPJ 61.598.874/0001-87
            <br />
            Termos de Uso | Políticas de Coockies | Termo de Privacidade
          </p>
        </footer>
      </div>
    </div>
  );
}