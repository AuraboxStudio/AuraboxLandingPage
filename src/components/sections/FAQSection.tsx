import { Card, CardContent } from "../ui/card";
import { Eye, Megaphone, Target } from "lucide-react";
import * as React from "react";

export default function FAQSection(): React.JSX.Element {
  // Benefits data for mapping
  const benefits = [
    {
      title: "CONCRETIZE\nSUA MARCA",
      icon: <Eye className="w-[148px] h-[167px] text-white" />,
      content: (
        <>
          <span className="font-medium">Marcas fortes se constroem com </span>
          <span className="font-bold">consistência</span>
          <span className="font-medium">
            . Empresas que contam com agências especializadas{" "}
          </span>
          <span className="font-bold">crescem até 2,8</span>
          <span className="font-medium">
            {" "}
            vezes mais*
            <br />
            <br />
            Com uma equipe dedicada e estratégias alinhadas aos seus valores,
            sua marca comunica com clareza — e se torna mais reconhecida por
            isso.
          </span>
        </>
      ),
      footnote: "*McKinsey & Company, pesquisa 2025.",
    },
    {
      title: "FOQUE NO\nQUE IMPORTA",
      icon: <Target className="w-[210px] h-[189px] text-white" />,
      content: (
        <>
          <span className="font-medium">Ao contar com uma </span>
          <span className="font-bold">agência especializada</span>
          <span className="font-medium">
            , sua equipe pode focar no que faz de melhor: gerir o negócio.
            <br />
            <br />
            Cuidamos da comunicação da sua marca com dedicação e
            profissionalismo, proporcionando{" "}
          </span>
          <span className="font-bold">
            eficiência e resultados consistentes
          </span>
          <span className="font-medium">.</span>
        </>
      ),
    },
    {
      title: "DESCOMPLIQUE\nA COMUNICAÇÃO",
      icon: <Megaphone className="w-[166px] h-[183px] text-white" />,
      content: (
        <>
          <span className="font-medium">Somos </span>
          <span className="font-bold">especializados</span>
          <span className="font-medium"> em </span>
          <span className="font-bold">Marketing All-Inclusive</span>
          <span className="font-medium">
            , cuidando de toda a comunicação da sua marca — da inteligência de
            mercado ao branding, da estratégia à veiculação.
            <br />
            <br />
            Com uma equipe integrada, você reduz retrabalho, evita ruídos e foca
            no que realmente importa:{" "}
          </span>
          <span className="font-bold">fazer seu negócio crescer</span>
          <span className="font-medium">.</span>
        </>
      ),
    },
  ];

  return (
    <section className="w-full py-16 px-4 rounded-[67px] bg-[linear-gradient(104deg,rgba(0,36,50,1)_0%,rgba(38,199,183,1)_100%)]">
      <div className="max-w-[1162px] mx-auto relative">
        {/* Section Title */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-[#26c7b7] rounded-[25px] border-[5px] border-solid border-[#002432] shadow-[-10px_10px_0px_#002432] px-6 py-2">
            <h2 className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-white text-[40px] text-center tracking-[0] leading-normal whitespace-nowrap">
              BENEFÍCIOS DA AURABOX
            </h2>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Icon positioned above the card */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10">
                {benefit.icon}
              </div>

              <Card className="w-full mt-16 bg-[#f78837] rounded-[50px] shadow-[inset_5px_5px_20px_#00000040] border-none overflow-visible">
                <CardContent className="pt-16 pb-8 px-4 flex flex-col items-center">
                  {/* Card Title */}
                  <h3 className="font-['Schibsted_Grotesk-Black',Helvetica] font-black text-white text-[32px] text-center leading-normal mb-6">
                    {benefit.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < benefit.title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>

                  {/* Card Content */}
                  <div className="font-['Schibsted_Grotesk-Medium',Helvetica] text-black text-base text-center leading-normal max-w-[274px]">
                    {benefit.content}
                  </div>
                </CardContent>
              </Card>

              {/* Footnote if exists */}
              {benefit.footnote && (
                <p className="text-[#adaeb0] text-[13px] font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-center mt-3">
                  {benefit.footnote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}