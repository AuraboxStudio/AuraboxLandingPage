import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DollarSign, Shield, Mail, User } from "lucide-react";
import React from "react";

export default function CallToActionSection(): React.JSX.Element {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#dfe5e5] to-[#f0f5f5] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-[#002432] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#f78837] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-[#26c7b7] rounded-full"></div>
        <div className="absolute top-1/4 left-1/3 w-12 h-12 border border-[#f78837] rounded-full"></div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-[#002432] text-[40px] lg:text-[48px] leading-tight mb-4">
            PRONTO PARA
            <br />
            <span className="text-[#f78837]">TRANSFORMAR SEU NEGÓCIO?</span>
          </h2>
          <p className="font-['Schibsted_Grotesk-Medium',Helvetica] font-medium text-[#002432] text-lg opacity-80 max-w-[500px] mx-auto">
            Solicite seu orçamento personalizado e descubra como podemos impulsionar sua marca
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[30px] shadow-[0_20px_40px_rgba(0,36,50,0.15)] p-8 lg:p-10 border-[3px] border-[#002432] relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 w-32 h-32 border-2 border-[#f78837] rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-[#26c7b7] rounded-full"></div>
          </div>

          <div className="relative z-10">
            {/* Form Fields */}
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a7a7aa]" />
                  <Input
                    className="h-[50px] pl-12 rounded-[25px] bg-[#f5f5f5] border-2 border-[#e0e0e0] focus:border-[#26c7b7] text-[#002432] font-['Schibsted_Grotesk-Regular',Helvetica] text-lg placeholder:text-[#a7a7aa] transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a7a7aa]" />
                  <Input
                    className="h-[50px] pl-12 rounded-[25px] bg-[#f5f5f5] border-2 border-[#e0e0e0] focus:border-[#26c7b7] text-[#002432] font-['Schibsted_Grotesk-Regular',Helvetica] text-lg placeholder:text-[#a7a7aa] transition-all duration-300"
                    placeholder="Seu melhor email"
                    type="email"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative">
                <Button className="relative w-full h-[64px] bg-gradient-to-r from-[#f78837] to-[#ff9d4a] hover:from-[#e67827] hover:to-[#f08d3a] text-[#002432] font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-xl rounded-[32px] border-none shadow-[0_8px_25px_rgba(247,136,55,0.4)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(247,136,55,0.5)] hover:transform hover:-translate-y-1 group">
                  <div className="absolute left-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                    <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="w-5 h-5 text-[#002432]" />
                    </div>
                  </div>
                  <span className="ml-8">Solicitar Orçamento Gratuito</span>
                </Button>
              </div>

              {/* Privacy Text */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <Shield className="w-5 h-5 text-[#26c7b7]" />
                <p className="text-sm text-center text-[#002432] font-['Schibsted_Grotesk-Medium',Helvetica] opacity-80">
                  <span className="font-medium">Seus dados estão protegidos pela </span>
                  <span className="font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-[#26c7b7]">
                    Lei Geral de Proteção de Dados
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Logo and Contact */}
        <div className="flex flex-col items-center mt-12 space-y-6">
          {/* Logo */}
          <div className="relative group">
            <img 
              className="w-[120px] h-auto group-hover:scale-110 transition-transform duration-300" 
              alt="Logo aurabox" 
              src="/logo_aurabox_marca.png" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f78837]/20 to-[#26c7b7]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-2">
            <p className="font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-[#002432] text-lg">
              Fale conosco agora mesmo!
            </p>
            <p className="font-['Schibsted_Grotesk-Medium',Helvetica] font-medium text-[#002432] opacity-70">
              comercial@auraboxstudio.com
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 pt-4">
            <div className="text-center">
              <p className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-[#f78837] text-2xl">24h</p>
              <p className="font-['Schibsted_Grotesk-Medium',Helvetica] text-xs text-[#002432] opacity-70">Resposta</p>
            </div>
            <div className="w-px h-8 bg-[#002432] opacity-20"></div>
            <div className="text-center">
              <p className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-[#26c7b7] text-2xl">100%</p>
              <p className="font-['Schibsted_Grotesk-Medium',Helvetica] text-xs text-[#002432] opacity-70">Gratuito</p>
            </div>
            <div className="w-px h-8 bg-[#002432] opacity-20"></div>
            <div className="text-center">
              <p className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-[#f78837] text-2xl">0</p>
              <p className="font-['Schibsted_Grotesk-Medium',Helvetica] text-xs text-[#002432] opacity-70">Compromisso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}