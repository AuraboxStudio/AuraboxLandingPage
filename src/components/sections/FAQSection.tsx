// components/sections/FAQSection.tsx
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import React from "react";

export default function FAQSection(): React.JSX.Element {
  const benefits = [
    {
      title: "CONCRETIZE\nSUA MARCA",
      icon: <img src="/simbolo_aurabox_olho.png" alt="olho" className="w-[64px] h-[64px]" />,
      content: (
        <>
          <span>Marcas fortes se constroem com </span>
          <strong>consistência</strong>. Empresas com agências especializadas crescem até <strong>2,8x mais</strong>.
          <br />
          <br />
          Com estratégia alinhada aos seus valores, sua marca comunica com clareza — e se torna mais reconhecida.
        </>
      ),
    },
    {
      title: "FOQUE NO\nQUE IMPORTA",
      icon: <img src="/simbolo_aurabox_alvo.png" alt="Alvo" className="w-[64px] h-[64px]" />,
      content: (
        <>
          <span>Com uma </span>
          <strong>agência especializada</strong>, sua equipe pode focar no que faz de melhor.
          <br />
          <br />
          Cuidamos da comunicação com dedicação e profissionalismo — gerando <strong>eficiência e resultados</strong>.
        </>
      ),
    },
    {
      title: "DESCOMPLIQUE\nA COMUNICAÇÃO",
      icon: <img src="/icone_aurabox_megafone.png" alt="megafone" className="w-[64px] h-[64px]" />,
      content: (
        <>
          <span>Somos </span>
          <strong>especialistas</strong> em Marketing All-Inclusive.
          <br />
          <br />
          Cuidamos de tudo — inteligência de mercado, branding, mídia — com <strong>clareza e integração</strong>.
        </>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#DFE5E5] text-[#002432]">
      <div className="max-w-[1340px] mx-auto px-4">
        <div className="bg-gradient-to-br from-[#0f4c5c] to-[#26c7b7] rounded-[40px] px-6 py-16">
          <h2 className="text-center text-[32px] md:text-[40px] font-['Bebas_Neue_Pro-Bold'] text-[#002432] mb-16">
            BENEFICIOS DA AURABOX
          </h2>

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

          <p className="text-xs text-center mt-10 italic text-[#002432] opacity-60">
            *McKinsey & Company, pesquisa 2025.
          </p>

        </div>
      </div>
    </section>
  );
}
