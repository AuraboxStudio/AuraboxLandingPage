// components/sections/CallToActionSection.tsx
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DollarSign, Mail, Shield, User } from "lucide-react";
import React from "react";

export default function CallToActionSection(): React.JSX.Element {
  return (
    <section className="py-24 w-full bg-[#DFE5E5] relative">
      <div className="max-w-[800px] mx-auto px-4 text-center">
        <h2 className="text-[40px] md:text-[48px] font-['Bebas_Neue_Pro-Bold'] text-[#002432] leading-tight mb-4">
          PRONTO PARA <br /> <span className="text-[#f78837]">TRANSFORMAR SEU NEGÓCIO?</span>
        </h2>
        <p className="text-lg text-[#002432] opacity-80 font-['Schibsted_Grotesk-Medium'] max-w-[500px] mx-auto mb-10">
          Solicite seu orçamento personalizado e descubra como podemos impulsionar sua marca.
        </p>

        <div className="bg-white rounded-[30px] shadow-lg p-8 border-[3px] border-[#002432]">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-5 h-5" />
              <Input
                className="h-[50px] pl-12 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] text-sm"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-5 h-5" />
              <Input
                className="h-[50px] pl-12 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] text-sm"
                placeholder="Seu melhor email"
                type="email"
              />
            </div>
          </div>

          <Button className="w-full h-[64px] bg-gradient-to-r from-[#f78837] to-[#ff9d4a] hover:from-[#e67827] hover:to-[#f08d3a] text-[#002432] font-bold text-lg rounded-full shadow-md">
            <div className="absolute left-6 flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-[#002432]" />
              </div>
            </div>
            <span className="ml-8">Solicitar Orçamento Gratuito</span>
          </Button>

          <div className="flex items-center justify-center gap-2 pt-4 text-sm text-[#002432] opacity-80">
            <Shield className="w-4 h-4 text-[#26c7b7]" />
            <p>
              Seus dados estão protegidos pela <strong>Lei Geral de Proteção de Dados</strong>
            </p>
          </div>
        </div>

        {/* Trust markers */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#f78837]">24h</p>
            <p className="text-xs text-[#002432] opacity-70">Resposta</p>
          </div>
          <div className="w-px h-8 bg-[#002432] opacity-20" />
          <div className="text-center">
            <p className="text-2xl font-bold text-[#26c7b7]">100%</p>
            <p className="text-xs text-[#002432] opacity-70">Gratuito</p>
          </div>
          <div className="w-px h-8 bg-[#002432] opacity-20" />
          <div className="text-center">
            <p className="text-2xl font-bold text-[#f78837]">0</p>
            <p className="text-xs text-[#002432] opacity-70">Compromisso</p>
          </div>
        </div>

        {/* Logo e contato */}
        <div className="mt-10">
          <img
            src="/logo_aurabox_marca.png"
            alt="Logo Aurabox"
            className="w-[80px] mx-auto mb-2 drop-shadow-lg"
          />
          <p className="text-[#002432] font-bold">Fale conosco agora mesmo!</p>
          <p className="text-[#002432] opacity-70">comercial@auraboxstudio.com</p>
        </div>
      </div>
    </section>
  );
}
