// components/sections/FAQSection.tsx
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import React from "react";

export default function FAQSection(): React.JSX.Element {
  const benefits = [
    {
      title: (
        <div className="font-sans font-black text-white text-[32px] text-center tracking-[0] leading-[normal] h-20">
          {"CONCRETIZE\nSUA MARCA".split("\n").map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      ),

      icon: (
        <img
          src="/simbolo_aurabox_olho.png"
          alt="olho"
          className="w-[148px] h-[120px] -translate-y-10"
        />
      ),

      content: (
        <div className="w-[274px]">
          <p className="text-base text-center text-black font-medium font-sans tracking-[0] leading-normal">
            Marcas fortes se constroem com <span className="font-bold">consistência</span>. Empresas com agências especializadas <span className="font-bold">crescem até 2,8x mais</span>.
            <br />
            <br />
            Com uma equipe dedicada e estratégias alinhadas aos seus valores, sua marca comunica com clareza - e se torna mais reconhecida.
          </p>
        </div>
        )
    },
    {
      title: (
        <div className="font-sans font-black text-white text-[32px] text-center tracking-[0] leading-[normal] h-20">
          {"FOQUE NO\nQUE IMPORTA".split("\n").map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      ),

      icon: (
        <img
          src="/simbolo_aurabox_alvo.png"
          alt="Alvo"
          className="w-[210px] h-[169px] translate-x-[40px] -translate-y-10"
        />
      ),

      content: (
        <div className="w-[274px]">
          <p className="text-base text-center text-black font-medium font-sans tracking-[0] leading-normal">
            <span className="font-medium">Ao contar com uma </span>
            <strong className="font-bold">agência especializada</strong>
            <span className="font-medium">
              , sua equipe pode focar no que faz de melhor: gerir o negócio.
              <br />
              <br />
              Cuidamos da comunicação da sua marca — gerando{" "}
            </span>
            <strong className="font-bold">eficiência e resultados</strong>
            <span className="font-medium">.</span>
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="font-sans font-black text-white text-[32px] text-center tracking-[0] leading-[normal] h-20">
          {"DESCOMPLIQUE\nA COMUNICAÇÃO".split("\n").map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      ),

      icon: (
        <img
          src="/icone_aurabox_megafone.png"
          alt="megafone"
          className="w-[159px] h-[137px] -translate-y-10"
        />
      ),

      content: (
        <p className="font-sans text-base text-center text-black">
          <span className="font-medium">Somos </span>
          <span className="font-bold">especialistas</span>
          <span className="font-medium"> em </span>
          <span className="font-bold">Marketing All-Inclusive</span>
          <span className="font-medium">, cuidando de toda a comunicação da sua marca - da inteligência de mercado ao branding, da estratégia à veiculação.
            <br />
            <br />
            Com uma equipe integrada, você reduz retrabalho, evita ruídos e foca no que realmente importa:{" "}
          </span>
          <span className="font-bold">fazer seu negócio crescer</span>
          <span className="font-medium">.</span>
        </p>
      ),

    },
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
                <div className="flex justify-center -mt-16 mb-4">{item.icon}</div>
                <CardContent>
                  <h3 className="text-xl md:text-2xl font-black font-['Schibsted_Grotesk-Black'] whitespace-pre-line mb-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed font-medium font-['Schibsted_Grotesk-Medium']">
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