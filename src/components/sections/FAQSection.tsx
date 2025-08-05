// components/sections/FAQSection.tsx
import { Card, CardContent } from "../ui/card";
import React from "react";

export default function FAQSection(): React.JSX.Element {
  const benefits = [
    {
      title: "CONCRETIZE\nSUA MARCA",
      icon: "/simbolo_aurabox_olho.png",
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
      icon: "/simbolo_aurabox_alvo.png",
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
    <section className="py-24 bg-[#DFE5E5] text-[#002432]">
      <div className="max-w-[1340px] mx-auto px-4">
        <div className="bg-gradient-to-br from-[#0f4c5c] to-[#26c7b7] rounded-[40px] px-6 py-16">
          <div className="flex justify-center mb-16">
            <div className="relative -translate-y-10">
              <div className="bg-[#26c7b7] text-white px-8 py-3 rounded-[25px] border-[5px] border-solid border-[#002432] shadow-[-10px_10px_0px_#002432]">
                <h2 className="[font-family:'Bebas_Neue_Pro-Bold',Helvetica] font-bold text-white text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  BENEFÍCIOS DA AURABOX
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <Card
                key={idx}
                className="rounded-[30px] p-6 bg-gradient-to-br from-[#f78837] to-[#ff9d4a] text-white shadow-lg relative"
              >
                <div className="flex justify-center -mt-16 mb-4">
                  <div className="relative w-[180px] h-[160px] flex justify-center items-center mx-auto">
                    <img
                      src={item.sombra}
                      alt="Sombra"
                      className="absolute bottom-[10px] w-[140px]"
                    />
                    <img
                      src={item.icon}
                      alt="Ícone"
                      className="relative w-[148px] h-[120px]"
                    />
                  </div>
                </div>

                <CardContent>
                  <h3 className="text-[32px] min-h-[80px] flex flex-col justify-center font-black text-white text-center leading-[normal] font-sans whitespace-pre-line mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-black font-medium font-sans text-center">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-center mt-10 italic text-white opacity-60">
            *McKinsey & Company, pesquisa 2025.
          </p>

        </div>
      </div>
    </section>
  );
}