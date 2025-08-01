import { Card, CardContent } from "../ui/card";
import { Eye, Megaphone, Target, Star, TrendingUp, Users } from "lucide-react";
import * as React from "react";

export default function FAQSection(): React.JSX.Element {
  // Benefits data for mapping
  const benefits = [
    {
      title: "CONCRETIZE\nSUA MARCA",
      icon: <Eye className="w-[120px] h-[120px] text-white drop-shadow-lg" />,
      content: (
        <>
          <span className="font-medium">Marcas fortes se constroem com </span>
          <span className="font-bold text-[#002432]">consistência</span>
          <span className="font-medium">
            . Empresas que contam com agências especializadas{" "}
          </span>
          <span className="font-bold text-[#002432]">crescem até 2,8</span>
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
      bgColor: "from-[#f78837] to-[#ff9d4a]",
    },
    {
      title: "FOQUE NO\nQUE IMPORTA",
      icon: <Target className="w-[120px] h-[120px] text-white drop-shadow-lg" />,
      content: (
        <>
          <span className="font-medium">Ao contar com uma </span>
          <span className="font-bold text-[#002432]">agência especializada</span>
          <span className="font-medium">
            , sua equipe pode focar no que faz de melhor: gerir o negócio.
            <br />
            <br />
            Cuidamos da comunicação da sua marca com dedicação e
            profissionalismo, proporcionando{" "}
          </span>
          <span className="font-bold text-[#002432]">
            eficiência e resultados consistentes
          </span>
          <span className="font-medium">.</span>
        </>
      ),
      bgColor: "from-[#26c7b7] to-[#2ea89d]",
    },
    {
      title: "DESCOMPLIQUE\nA COMUNICAÇÃO",
      icon: <Megaphone className="w-[120px] h-[120px] text-white drop-shadow-lg" />,
      content: (
        <>
          <span className="font-medium">Somos </span>
          <span className="font-bold text-[#002432]">especializados</span>
          <span className="font-medium"> em </span>
          <span className="font-bold text-[#002432]">Marketing All-Inclusive</span>
          <span className="font-medium">
            , cuidando de toda a comunicação da sua marca — da inteligência de
            mercado ao branding, da estratégia à veiculação.
            <br />
            <br />
            Com uma equipe integrada, você reduz retrabalho, evita ruídos e foca
            no que realmente importa:{" "}
          </span>
          <span className="font-bold text-[#002432]">fazer seu negócio crescer</span>
          <span className="font-medium">.</span>
        </>
      ),
      bgColor: "from-[#f78837] to-[#ff6b35]",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#002432] via-[#003d56] to-[#26c7b7] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-[#f78837] rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="bg-gradient-to-r from-[#26c7b7] to-[#2ea89d] rounded-[30px] border-[4px] border-solid border-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] px-8 py-4 transform hover:scale-105 transition-transform duration-300">
              <h2 className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-white text-[36px] lg:text-[44px] text-center tracking-tight leading-none">
                BENEFÍCIOS DA AURABOX
              </h2>
            </div>
            
            {/* Decorative stars */}
            <Star className="absolute -top-3 -left-3 w-6 h-6 text-[#f78837] fill-current" />
            <Star className="absolute -top-2 -right-4 w-4 h-4 text-white fill-current" />
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center relative group">
              {/* Icon Container - Floating above card */}
              <div className="relative z-20 mb-[-60px] group-hover:transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-[140px] h-[140px] bg-gradient-to-br from-[#002432] to-[#003d56] rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.4)] border-4 border-white">
                  {benefit.icon}
                </div>
              </div>

              <Card className={`w-full pt-20 pb-8 bg-gradient-to-br ${benefit.bgColor} rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-none overflow-hidden relative group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] transition-all duration-300`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/30 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/40 rounded-full"></div>
                </div>

                <CardContent className="px-6 pb-6 relative z-10">
                  {/* Card Title */}
                  <h3 className="font-['Schibsted_Grotesk-Black',Helvetica] font-black text-white text-[28px] lg:text-[32px] text-center leading-tight mb-6 drop-shadow-lg">
                    {benefit.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < benefit.title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>

                  {/* Card Content */}
                  <div className="font-['Schibsted_Grotesk-Medium',Helvetica] text-white text-base text-center leading-relaxed max-w-[280px] mx-auto">
                    {benefit.content}
                  </div>
                </CardContent>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>

              {/* Footnote if exists */}
              {benefit.footnote && (
                <p className="text-[#adaeb0] text-sm font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-center mt-4 opacity-80">
                  {benefit.footnote}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4 opacity-60">
            <TrendingUp className="w-6 h-6 text-[#26c7b7]" />
            <Users className="w-6 h-6 text-[#f78837]" />
            <Star className="w-6 h-6 text-white fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
}