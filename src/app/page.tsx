import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import { VideoSection } from "@/components/sections/VideoSection";
import FAQSection from "@/components/sections/FAQSection";
import CallToActionSection from "@/components/sections/CallToActionSection";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-[#dfe5e5] to-[#f0f5f5] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-transparent w-full max-w-[1920px] relative">
        {/* Header and Logo */}
        <header className="w-full max-w-[1341px] mx-auto pt-8 lg:pt-12 px-4">
          <div className="flex items-center mb-12 group">
            <div className="relative w-[79px] h-[100px] mr-4">
              {/* Logo background with subtle animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#26c7b7] to-[#f78837] rounded-[20px] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative w-[79px] h-[100px] bg-[url(/vector.png)] bg-[100%_100%] group-hover:scale-105 transition-transform duration-300">
                <img
                  className="absolute w-[75px] h-[83px] top-0.5 left-0.5 drop-shadow-lg"
                  alt="Aurabox Logo"
                  src="/logo_aurabox_marca.png"
                />
              </div>
            </div>
            <img
              className="w-[114px] h-[34px] group-hover:scale-105 transition-transform duration-300"
              alt="Aurabox Name"
              src="/logotipo_aurabox_nome.png"
            />
          </div>
        </header>

        {/* Main Content Wrapper */}
        <main className="space-y-0">
          {/* Hero Section */}
          <div className="w-full max-w-[1341px] mx-auto px-4">
            <HeroSection />
          </div>

          {/* Benefits Section */}
          <BenefitsSection />

          {/* FAQ/Benefits Cards Section */}
          <FAQSection />

          {/* Video and FAQ Section */}
          <VideoSection />

          {/* Call To Action Section */}
          <div className="w-full max-w-[1341px] mx-auto px-4">
            <CallToActionSection />
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-gradient-to-r from-[#002432] to-[#003d56] py-12 mt-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-1/4 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-4 right-1/4 w-12 h-12 bg-[#f78837] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-[#26c7b7] rounded-full"></div>
          </div>

          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            {/* Footer Content */}
            <div className="text-center space-y-6">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <img 
                    className="w-[100px] h-auto group-hover:scale-110 transition-transform duration-300" 
                    alt="Logo Aurabox" 
                    src="/logo_aurabox_marca.png" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f78837]/30 to-[#26c7b7]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <p className="font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-[#26c7b7] text-lg">
                  Contato: comercial@auraboxstudio.com
                </p>
                
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 text-white/80 text-sm font-['Schibsted_Grotesk-Medium',Helvetica]">
                  <span>Todos Direitos Reservados</span>
                  <span className="hidden lg:block">•</span>
                  <span>CNPJ 61.598.874/0001-87</span>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 pt-6 border-t border-white/20">
                <a 
                  href="#" 
                  className="text-white/60 hover:text-[#26c7b7] text-sm font-['Schibsted_Grotesk-Medium',Helvetica] transition-colors duration-300"
                >
                  Termos de Uso
                </a>
                <span className="hidden lg:block text-white/40">|</span>
                <a 
                  href="#" 
                  className="text-white/60 hover:text-[#26c7b7] text-sm font-['Schibsted_Grotesk-Medium',Helvetica] transition-colors duration-300"
                >
                  Políticas de Cookies
                </a>
                <span className="hidden lg:block text-white/40">|</span>
                <a 
                  href="#" 
                  className="text-white/60 hover:text-[#26c7b7] text-sm font-['Schibsted_Grotesk-Medium',Helvetica] transition-colors duration-300"
                >
                  Termo de Privacidade
                </a>
              </div>

              {/* Bottom tagline */}
              <div className="pt-6">
                <p className="text-white/50 text-xs font-['Schibsted_Grotesk-Regular',Helvetica] italic">
                  Transformando negócios através do marketing digital
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}