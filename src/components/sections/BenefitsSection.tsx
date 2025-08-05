// components/sections/BenefitsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function BenefitsSection(): React.JSX.Element {
  const benefitCards = [
    {
      title: (
        <div className="text-center tracking-[0] text-[#dfe5e5] font-bebas-nue-pro font-normal">
          <span className="block font-normal break-words leading-tight text-lg md:text-[32px]">RESULTADOS</span>
          <span className="block font-bebas-nue-pro font-bold break-words leading-tight text-lg md:text-[32px]">
            ESTAGNADOS
          </span>
          <span className="block font-sans font-medium text-base leading-5 mt-1">
            Crescimento abaixo do potencial do mercado
          </span>
        </div>
      ),
      description: "Crescimento abaixo do potencial do mercado"
    },
    {
      title: (
        <div className="text-center tracking-[0] text-[#dfe5e5] font-bebas-nue-pro font-normal">
          <span className="block font-normal break-words leading-tight text-lg md:text-[32px]">ROI</span>
          <span className="block font-bebas-nue-pro font-bold break-words leading-tight text-lg md:text-[32px]">
            BAIXO
          </span>
          <span className="block font-sans font-medium text-base leading-5 mt-1">
            Investimento sem retorno mensurável
          </span>
        </div>
      ),
      description: "Investimento sem retorno mensurável"
    },
    {
      title: (
        <div className="text-center tracking-[0] text-[#dfe5e5] font-bebas-nue-pro font-normal">
          <span className="block font-normal break-words leading-tight text-lg md:text-[32px]">EQUIPE</span>
          <span className="block font-bebas-nue-pro font-bold break-words leading-tight text-lg md:text-[32px]">
            SOBRECARREGADA
          </span>
          <span className="block font-sans font-medium text-base leading-5 mt-1">
            Time interno sem foco estratégico
          </span>
        </div>
      ),
      description: "Time interno sem foco estratégico"
    },
    {
      title: (
        <div className="text-center tracking-[0] text-[#dfe5e5] font-bebas-nue-pro font-normal">
          <span className="block font-normal break-words leading-tight text-lg md:text-[32px]">FALTA</span>
          <span className="block font-bebas-nue-pro font-bold break-words leading-tight text-lg md:text-[32px]">
            DE DIREÇÃO
          </span>
          <span className="block font-sans font-medium text-base leading-5 mt-1">
            Ausência de estratégia digital clara
          </span>
        </div>
      ),
      description: "Ausência de estratégia digital clara"
    },
  ];

  return (
    <section className="py-24 w-full bg-[#DFE5E5]">
      <div className="max-w-[1341px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        {/* Imagem */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="/imagem_aurabox_pensando.png"
            alt="Pessoa pensando"
            className="w-full max-w-[500px] h-auto mx-auto"
          />
          <img
            src="/logo_aurabox_marca.png"
            alt="Logo sobre imagem"
            className="w-[80px] absolute bottom-4 left-4 drop-shadow-xl"
          />
        </div>

        {/* Texto e Cards */}
        <div className="w-full lg:w-1/2 text-center">
          <h2 className="text-[40px] md:text-[48px] font-bebas-nue-pro font-bold text-[#002432] leading-tight mb-10">
            QUANDO CONTRATAR <br />
            <span className="text-[#f78837]">UMA AGÊNCIA?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefitCards.map((card, index) => (
              <Card
                key={index}
                className="rounded-[30px] border-[3px] border-[#002432] shadow-[6px_6px_0px_#002432] hover:shadow-[10px_10px_0px_#002432] bg-gradient-to-br from-[#3ebeb3] to-[#2ea89d] text-white transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center min-h-[220px]">
                  <p className="text-xl font-['Bebas_Neue_Pro-Regular']">{card.title}</p>
                  
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-sm text-[#002432] opacity-70 font-['Schibsted_Grotesk-Medium']">
            Identifica-se com algum desses cenários?
          </p>
        </div>
      </div>
    </section>
  );
}
