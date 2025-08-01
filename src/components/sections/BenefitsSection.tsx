import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function BenefitsSection(): React.JSX.Element {
  // Define the benefit cards data for easy mapping
  const benefitCards = [
    {
      title: "Resultados",
      highlight: "Estagnados",
      description: "Crescimento abaixo do potencial do mercado",
      position: "top-0 left-0",
    },
    {
      title: "ROI",
      highlight: "Baixo",
      description: "Investimento sem retorno mesurável",
      position: "top-0 right-0",
    },
    {
      title: "Equipe",
      highlight: "Sobrecarregada",
      description: "Time interno sem foco estratégico",
      position: "bottom-0 left-0",
    },
    {
      title: "Falta",
      highlight: "de Direção",
      description: "Ausência de estratégia digital clara",
      position: "bottom-0 right-0",
    },
  ];

  return (
    <section className="flex flex-row gap-16 py-24 px-8 w-full">
      {/* Left side - Image */}
      <div className="flex flex-col relative">
        <img
          className="w-full max-w-[513px] h-auto object-cover"
          alt="Pessoa pensando sobre marketing digital"
          src="/imagem_aurabox_pensando.png"
        />
        <img
          className="w-[100px] h-auto absolute bottom-0 left-6"
          alt="Logo Aurabox"
          src="/logo_aurabox_marca.png"
        />
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col max-w-[580px]">
        <h2 className="font-bold text-4xl text-center text-[#002432] mb-8 tracking-normal font-['Bebas_Neue_Pro-Bold',Helvetica]">
          QUANDO CONTRATAR UMA AGÊNCIA?
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {benefitCards.map((card, index) => (
            <Card
              key={index}
              className={`relative bg-[#3ebeb3] rounded-[43px] border-[5px] border-solid border-[#002432] shadow-lg overflow-hidden`}
            >
              <CardContent className="p-6">
                <div className="text-center text-[#dfe5e5]">
                  <p className="font-normal text-[32px] leading-8 font-['Bebas_Neue_Pro-Regular',Helvetica]">
                    {card.title}
                    <br />
                    <span className="font-bold font-['Bebas_Neue_Pro-Bold',Helvetica]">
                      {card.highlight}
                    </span>
                  </p>
                  <p className="font-medium text-base leading-5 mt-2 font-['Schibsted_Grotesk-Medium',Helvetica]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}