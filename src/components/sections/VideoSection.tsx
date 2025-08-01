import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Play, HelpCircle, MessageCircle } from "lucide-react";
import React from "react";

export const VideoSection: React.FC = () => {
  // FAQ data with detailed answers
  const faqItems = [
    {
      question: "O que é o Marketing All-Inclusive da Aurabox?",
      answer: "É nossa metodologia completa que integra todas as áreas do marketing digital: desde o planejamento estratégico e criação de conteúdo até a gestão de campanhas pagas e análise de resultados. Tudo isso com uma equipe dedicada que trabalha como extensão do seu time interno.",
    },
    {
      question: "Quanto tempo até resultados serem perceptíveis?",
      answer: "Os primeiros resultados começam a aparecer entre 30 a 60 dias, com melhorias consistentes nos primeiros 3 meses. Resultados mais significativos, como aumento de leads qualificados e vendas, geralmente são observados a partir do 4º mês.",
    },
    {
      question: "Como funciona a comunicação entre minha empresa e a Aurabox?",
      answer: "Mantemos comunicação constante através de reuniões semanais, relatórios mensais detalhados e um canal direto via WhatsApp para questões urgentes. Você terá um gerente de conta dedicado como ponto focal para todas as demandas.",
    },
    {
      question: "Minha empresa é pequena. Vale a pena contratar uma agência especializada?",
      answer: "Definitivamente! Empresas menores se beneficiam ainda mais, pois ganham acesso a uma equipe completa de especialistas pelo custo de menos de um funcionário. Isso acelera o crescimento e profissionaliza a comunicação desde o início.",
    },
    {
      question: "Já tenho redes sociais ativas. Por que contratar uma agência?",
      answer: "Ter redes sociais ativas é diferente de ter uma estratégia digital integrada. Analisamos seu atual desempenho, identificamos oportunidades de melhoria e criamos uma estratégia que conecta todas as plataformas para maximizar resultados e ROI.",
    },
    {
      question: "Não tenho tempo para reuniões e aprovações constantes. Como vocês lidam com isso?",
      answer: "Entendemos a rotina corrida dos empresários. Por isso, criamos fluxos de aprovação eficientes, reuniões objetivas e mensais, e um sistema de aprovação digital que permite validar conteúdos e campanhas de forma rápida, quando for conveniente para você.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Video Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-[#002432] text-[40px] lg:text-[48px] leading-tight mb-4">
              VEJA COMO
              <br />
              <span className="text-[#f78837]">FUNCIONA NA PRÁTICA</span>
            </h2>
            <p className="font-['Schibsted_Grotesk-Medium',Helvetica] font-medium text-[#002432] text-lg opacity-80 max-w-[600px] mx-auto">
              Conheça nossa metodologia e entenda como transformamos negócios através do marketing digital
            </p>
          </div>

          {/* Video Container */}
          <div className="relative w-full max-w-[800px] mx-auto aspect-video bg-gradient-to-br from-[#002432] to-[#26c7b7] rounded-[30px] overflow-hidden shadow-[0_20px_40px_rgba(0,36,50,0.2)] group cursor-pointer">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/30 rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-white/50 rounded-full"></div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 border-2 border-white/50">
                <Play className="w-12 h-12 text-white ml-1 drop-shadow-lg" />
              </div>
            </div>

            {/* Overlay content */}
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-2xl mb-2">
                NOSSA METODOLOGIA
              </h3>
              <p className="font-['Schibsted_Grotesk-Medium',Helvetica] text-sm opacity-90">
                Descubra o passo a passo do nosso processo
              </p>
            </div>

            {/* Duration badge */}
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-white text-sm font-['Schibsted_Grotesk-Medium',Helvetica]">3:45</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-[40px] p-8 lg:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#002432] rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#f78837] rounded-full"></div>
          </div>

          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <HelpCircle className="w-8 h-8 text-[#26c7b7]" />
                <h2 className="font-['Bebas_Neue_Pro-Bold',Helvetica] font-bold text-[#002432] text-[36px] lg:text-[42px] leading-none">
                  PERGUNTAS FREQUENTES
                </h2>
                <MessageCircle className="w-8 h-8 text-[#f78837]" />
              </div>
              <p className="font-['Schibsted_Grotesk-Medium',Helvetica] font-medium text-[#002432] text-lg opacity-70">
                Tire suas dúvidas sobre nossos serviços
              </p>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={`faq-item-${index}`}
                  value={`item-${index}`}
                  className="bg-white rounded-[20px] border-none shadow-[0_4px_15px_rgba(0,36,50,0.08)] overflow-hidden hover:shadow-[0_8px_25px_rgba(0,36,50,0.12)] transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-[#002432] text-lg lg:text-xl text-left hover:no-underline hover:bg-[#f8f9fa] transition-colors duration-200 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-[#f78837]/10 [&[data-state=open]]:to-[#26c7b7]/10">
                    <span className="pr-4">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0">
                    <div className="font-['Schibsted_Grotesk-Regular',Helvetica] text-[#002432] text-base leading-relaxed opacity-80 border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Contact CTA */}
            <div className="text-center mt-12 p-6 bg-gradient-to-r from-[#26c7b7]/10 to-[#f78837]/10 rounded-[20px] border-2 border-dashed border-[#26c7b7]/30">
              <p className="font-['Schibsted_Grotesk-Medium',Helvetica] font-medium text-[#002432] text-lg mb-2">
                Não encontrou sua resposta?
              </p>
              <p className="font-['Schibsted_Grotesk-Regular',Helvetica] text-[#002432] opacity-70">
                Entre em contato conosco e teremos prazer em esclarecer suas dúvidas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;