// components/sections/BenefitsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";

export default function BenefitsSection(): React.JSX.Element {
  const benefitCards = [
    {
      title: (
        <div className="text-center tracking-[0] text-[#dfe5e5] font-bebas-nue-pro font-normal">
          <span className="block font-normal leading-tight text-base sm:text-lg lg:text-[32px]">
            RESULTADOS
          </span>
          <span className="block font-bebas-nue-pro font-bold leading-tight text-base sm:text-lg lg:text-[32px]">
            ESTAGNADOS
          </span>
          <span className="block font-sans font-medium text-sm sm:text-base leading-5 mt-1">
            Crescimento abaixo do potencial do mercado
          </span>
        </div>
      ),
      description: "Crescimento abaixo do potencial do mercado",
    },
    {
      title: (
        <div className="text-center tracking-[0] text-[#dfe5e5] font-bebas-nue-pro font-normal">
          <span className="block font-normal leading-tight text-base sm:text-lg lg:text-[32px]">
            ROI
          </span>
          <span className="block font-bebas-nue-pro font-bold leading-tight text-base sm:text-lg lg:text-[32px]">
            BAIXO
          </span>
          <span className="block font-sans font-medium text-sm sm:text-base leading-5 mt-1">
            Investimento sem retorno mensurável
          </span>
        </div>
      ),
      description: "Investimento sem retorno mensurável",
    },
    {
      title: (
        <div className="text-center tracking-[0] text-[#dfe5e5] font-bebas-nue-pro font-normal">
          <span className="block font-normal leading-tight text-base sm:text-lg lg:text-[32px]">
            EQUIPE
          </span>
          <span className="block font-bebas-nue-pro font-bold leading-tight text-sm sm:text-base lg:text-[26px] xl:text-[30px] tracking-tight">
            SOBRECARREGADA
          </span>
          <span className="block font-sans font-medium text-sm sm:text-base leading-5 mt-1">
            Time interno sem foco estratégico
          </span>
        </div>
      ),
      description: "Time interno sem foco estratégico",
    },
    {
      title: (
        <div className="text-center tracking-[0] text-[#dfe5e5] font-bebas-nue-pro font-normal">
          <span className="block font-normal leading-tight text-base sm:text-lg lg:text-[32px]">
            FALTA
          </span>
          <span className="block font-bebas-nue-pro font-bold leading-tight text-base sm:text-lg lg:text-[32px]">
            DE DIREÇÃO
          </span>
          <span className="block font-sans font-medium text-sm sm:text-base leading-5 mt-1">
            Ausência de estratégia digital clara
          </span>
        </div>
      ),
      description: "Ausência de estratégia digital clara",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 w-full bg-[#DFE5E5]">
      <div className="max-w-[1341px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          
          {/* Imagem - Mobile primeiro */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-1">
            <Image
              src="/imagem_aurabox_pensando.png"
              alt="Pessoa pensando"
              width={500}
              height={500}
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto mx-auto"
              priority
            />
            <Image
              src="/logo_aurabox_marca.png"
              alt="Logo sobre imagem"
              width={80}
              height={80}
              className="w-[60px] sm:w-[70px] lg:w-[80px] absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 drop-shadow-xl"
            />
          </div>

          {/* Texto e Cards */}
          <div className="w-full lg:w-1/2 text-center order-2 lg:order-2">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bebas-nue-pro font-bold text-[#002432] leading-tight mb-6 sm:mb-8 lg:mb-10">
              QUANDO CONTRATAR <br />
              <span className="text-[#f78837]">UMA AGÊNCIA?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 justify-items-center max-w-[640px] mx-auto">
              {benefitCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[280px] sm:w-[240px] lg:w-[300px] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] border-[2px] sm:border-[3px] border-[#002432] shadow-[4px_4px_0px_#002432] sm:shadow-[5px_5px_0px_#002432] lg:shadow-[6px_6px_0px_#002432] hover:shadow-[6px_6px_0px_#002432] sm:hover:shadow-[8px_8px_0px_#002432] lg:hover:shadow-[10px_10px_0px_#002432] bg-gradient-to-br from-[#3ebeb3] to-[#2ea89d] text-white transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 sm:hover:-translate-x-1 sm:hover:-translate-y-1"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
                    {card.title}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}