// components/sections/HeroSection.tsx
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DollarSign } from "lucide-react";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 w-full relative">
      <div className="max-w-[1341px] mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
        {/* Esquerda */}
        <div className="flex-1 space-y-6">
          <h1 className="text-[48px] md:text-[64px] font-bebas-nue-pro font-bold leading-[0.9] text-[#002432]">
            SOLUÇÕES FORA DA CAIXA<br />
            PARA O <span className="text-[#f78837]">SEU NEGÓCIO</span>
          </h1>

          <p className="text-xl font-sans font-bold text-[#002432] max-w-[500px]">
            Expanda sua marca com uma equipe dedicada a consolidar a presença da sua empresa.
          </p>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-[500px]">
              <Input
                placeholder="Nome"
                className="h-[50px] px-4 rounded-full bg-[#f5f5f5] border border-[#c1c1c1] text-sm"
              />
              <Input
                placeholder="Email"
                className="h-[50px] px-4 rounded-full bg-[#f5f5f5] border border-[#c1c1c1] text-sm"
              />
            </div>
            <Button className="w-full sm:w-[300px] h-[56px] rounded-full bg-gradient-to-r from-[#26c7b7] to-[#003d56] text-white font-bold text-lg shadow-md">
              Solicitar meu orçamento
            </Button>
            <p className="text-sm text-[#002432]">
              Seus dados estão protegidos pela <strong className="font-extrabold">Lei Geral de Proteção de Dados</strong>.
            </p>
          </div>

          <div className="flex gap-6 pt-6 max-w-[520px]">
            <div className="text-center">
              <p className="text-2xl text-[#002432] font-bold">78%</p>
              <p className="text-sm text-[#002432] font-bold">das decisões começam online</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-[#002432] font-bold">2.8x</p>
              <p className="text-sm text-[#002432] font-bold">mais crescimento com agências</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-[#002432] font-bold">45%</p>
              <p className="text-sm text-[#002432] font-bold">redução em CAC</p>
            </div>
          </div>
        </div>

        {/* Direita */}
        <div className="flex-1 relative">
          <img
            src="/imagem_aurabox_clientefeliz.png"
            alt="Cliente feliz"
            className="w-full max-w-[500px] h-auto mx-auto z-10 relative"
          />
          <div className="absolute top-0 right-1/4 w-16 h-16 bg-[#f78837] rounded-full opacity-30"></div>
          <div className="absolute bottom-10 left-0 w-10 h-10 bg-[#26c7b7] rounded-full opacity-40"></div>
          <div className="absolute top-[30%] left-0 w-8 h-8 bg-[#f78837] rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
