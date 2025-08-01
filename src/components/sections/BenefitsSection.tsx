import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function BenefitsSection(): React.JSX.Element {
  // Define the benefit cards data for easy mapping
  const benefitCards = [
    {
      title: "Resultados",
      highlight: "Estagnados",
      description: "Crescimento abaixo do potencial do mercado",
      position: "top-left",
    },
    {
      title: "ROI",
      highlight: "Baixo",
      description: "Investimento sem retorno mensurável",
      position: "top-right",
    },
    {
      title: "Equipe",
      highlight: "Sobrecarregada", 
      description: "Time interno sem foco estratégico",
      position: "bottom-left",
    },
    {
      title: "Falta",
      highlight: "de Direção",
      description: "Ausência de estratégia digital clara",
      position: "bottom-right",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#dfe5e5] to-[#f0f5f5]">
      <div className="max-w-[1341px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left side - Image */}
          <div className="flex flex-col relative w-full lg:w-1/2">
            <div className="relative">
              <img
                className="w-full max-w-[513px] h-auto object-cover rounded-[20px] shadow-[0_20px_40px_rgba(0,36,50,0.15)] mx-auto"
                alt="Pessoa pensando sobre marketing digital"
                src="/imagem_aurabox_pensando.png"
              />
              
              {/* Logo positioned over the image */}
              <div className="absolute bottom-4 left-4 lg:left-8">
                <img
                  className="w-[80px] h-auto drop-shadow-lg"
                  alt="Logo Aurabox"
                  src="/logo_aurabox_marca.png"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#f78837] rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-[#26c7b7] rounded-full opacity-70"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col w-full lg:w-1/2 max-w-[600px]">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-[40px] lg:text-[48px] text-[#002432] leading-[0.9] tracking-tight">
                QUANDO CONTRATAR
                <br />
                <span className="text-[#f78837]">UMA AGÊNCIA?</span>
              </h2>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefitCards.map((card, index) => (
                <Card
                  key={index}
                  className="relative bg-gradient-to-br from-[#3ebeb3] to-[#2ea89d] rounded-[30px] border-[3px] border-solid border-[#002432] shadow-[8px_8px_0px_#002432] hover:shadow-[12px_12px_0px_#002432] transition-all duration-300 hover:transform hover:-translate-x-1 hover:-translate-y-1 overflow-hidden group"
                >
                  <CardContent className="p-6 relative">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 right-2 w-16 h-16 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>

                    <div className="text-center text-white relative z-10">
                      <p className="font-['Bebas_Neue_Pro-Regular',Helvetica] font-normal text-[28px] lg:text-[32px] leading-tight mb-1">
                        {card.title}
                      </p>
                      <p className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-[28px] lg:text-[32px] leading-tight mb-3">
                        {card.highlight}
                      </p>
                      <p className="font-['Schibsted_Grotesk-Medium',Helvetica] font-medium text-sm lg:text-base leading-tight opacity-95">
                        {card.description}
                      </p>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f78837]/0 to-[#f78837]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional decorative text */}
            <div className="text-center mt-8">
              <p className="font-['Schibsted_Grotesk-Medium',Helvetica] text-[#002432] text-sm opacity-70">
                Identifica-se com algum desses cenários?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}