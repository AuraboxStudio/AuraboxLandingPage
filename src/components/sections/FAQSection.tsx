// components/sections/FAQSection.tsx
import { Card, CardContent } from "../ui/card";
import React from "react";

export default function FAQSection(): React.JSX.Element {
  const benefits = [
    {
      title: "CONCRETIZE\nSUA MARCA",
      icon: "/icone_aurabox_olho.png",
      sombra: "/Sombra.png",
      content: (
        <>
          Marcas fortes se constroem com <strong>consistência</strong>. Empresas com agências especializadas <strong>crescem até 2,8x mais</strong>.
          <br /><br />
          Com uma equipe dedicada e estratégias alinhadas aos seus valores, sua marca comunica com clareza – e se torna mais reconhecida.
        </>
      )
    },
    {
      title: "FOQUE NO\nQUE IMPORTA",
      icon: "/icone_aurabox_alvo.png",
      sombra: "/Sombra.png",
      content: (
        <>
          Ao contar com uma <strong>agência especializada</strong>, sua equipe pode focar no que faz de melhor: gerir o negócio.
          <br /><br />
          Cuidamos da comunicação da sua marca — gerando <strong>eficiência e resultados</strong>.
        </>
      )
    },
    {
      title: "DESCOMPLIQUE\nA COMUNICAÇÃO",
      icon: "/icone_aurabox_megafone.png",
      sombra: "/Sombra2.png",
      content: (
        <>
          Somos <strong>especialistas</strong> em <strong>Marketing All-Inclusive</strong>, cuidando de toda a comunicação da sua marca – da inteligência de mercado ao branding, da estratégia à veiculação.
          <br /><br />
          Com uma equipe integrada, você reduz retrabalho, evita ruídos e foca no que realmente importa: <strong>fazer seu negócio crescer</strong>.
        </>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#DFE5E5] text-[#002432]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0f4c5c] to-[#26c7b7] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] px-4 sm:px-6 lg:px-6 py-12 sm:py-14 lg:py-16">
          
          {/* Título */}
          <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
            <div className="relative -translate-y-4 sm:-translate-y-6 lg:-translate-y-10">
              <div className="bg-[#26c7b7] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-[20px] sm:rounded-[25px] border-[3px] sm:border-[4px] lg:border-[5px] border-solid border-[#002432] shadow-[-6px_6px_0px_#002432] sm:shadow-[-8px_8px_0px_#002432] lg:shadow-[-10px_10px_0px_#002432]">
                <h2 className="font-bebas-nue-pro font-bold text-white text-[24px] sm:text-[32px] lg:text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  BENEFÍCIOS DA AURABOX
                </h2>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
            {benefits.map((item, idx) => (
              <Card
                key={idx}
                className="rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-[#f78837] to-[#ff9d4a] text-white shadow-lg relative min-h-[380px] sm:min-h-[420px] lg:min-h-[400px]"
              >
                {/* Ícone */}
                <div className="flex justify-center -mt-8 sm:-mt-12 lg:-mt-16 mb-2 sm:mb-3 lg:mb-4">
                  <div className="relative w-[140px] h-[120px] sm:w-[160px] sm:h-[140px] lg:w-[180px] lg:h-[160px] flex justify-center items-center mx-auto">
                    <img
                      src={item.sombra}
                      alt="Sombra"
                      className={`absolute ${
                        item.icon === "/icone_aurabox_alvo.png"
                          ? "bottom-[15px] sm:bottom-[18px] lg:bottom-[20px] w-[90px] sm:w-[105px] lg:w-[120px] translate-x-[3px] lg:translate-x-[4px]"
                          : item.icon === "/icone_aurabox_olho.png"
                            ? "bottom-[12px] sm:bottom-[13px] lg:bottom-[15px] w-[90px] sm:w-[105px] lg:w-[120px]"
                            : "bottom-[8px] sm:bottom-[9px] lg:bottom-[11px] w-[105px] sm:w-[122px] lg:w-[140px]"
                      }`}
                    />
                    <img
                      src={item.icon}
                      alt="Ícone"
                      className={`relative ${
                        item.icon === "/icone_aurabox_alvo.png"
                          ? "w-[180px] sm:w-[215px] lg:w-[250px] h-[108px] sm:h-[129px] lg:h-[150px] -mt-[65px] sm:mt-[75px] lg:-mt-[86px] translate-x-[22px] sm:translate-x-[26px] lg:translate-x-[30px]"
                          : item.icon === "/icone_aurabox_megafone.png"
                            ? "w-[120px] sm:w-[139px] lg:w-[159px] h-[103px] sm:h-[120px] lg:h-[137px] -mt-[68px] sm:-mt-[79px] lg:-mt-[90px]"
                            : "w-[112px] sm:w-[130px] lg:w-[148px] h-[90px] sm:h-[105px] lg:h-[120px] -mt-[68px] sm:-mt-[79px] lg:-mt-[90px]"
                      }`}
                    />
                  </div>
                </div>

                <CardContent className="p-0 flex flex-col h-full">
                  {/* Título */}
                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] flex flex-col justify-center font-black text-white text-center leading-tight font-sans whitespace-pre-line mb-2 sm:mb-3 -mt-8 sm:-mt-10 lg:-mt-12">
                    {item.title}
                  </h3>
                  
                  {/* Conteúdo */}
                  <div className="flex-1 flex items-center">
                    <p className="text-sm sm:text-base lg:text-base leading-relaxed text-black font-medium font-sans text-center">
                      {item.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rodapé */}
          <p className="text-xs sm:text-xs text-center mt-6 sm:mt-8 lg:mt-10 italic text-white opacity-60">
            *McKinsey & Company, pesquisa 2025.
          </p>
        </div>
      </div>
    </section>
  );
}