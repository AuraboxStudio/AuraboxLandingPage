// components/sections/VideoSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Play, HelpCircle, MessageCircle } from "lucide-react";
import React from "react";

export const VideoSection: React.FC = () => {
  const faqItems = [
    {
      question: "O que é o Marketing All-Inclusive da Aurabox?",
      answer:
        "É nossa metodologia completa que integra todas as áreas do marketing digital: desde o planejamento estratégico e criação de conteúdo até a gestão de campanhas pagas e análise de resultados.",
    },
    {
      question: "Quanto tempo até resultados serem perceptíveis?",
      answer:
        "Os primeiros resultados aparecem entre 30 a 60 dias, com melhorias consistentes nos 3 primeiros meses.",
    },
    {
      question: "Como funciona a comunicação entre minha empresa e a Aurabox?",
      answer:
        "Reuniões semanais, relatórios mensais e canal direto com gerente de conta via WhatsApp.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Vídeo */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] lg:text-[48px] font-['Bebas_Neue_Pro-Bold'] font-bold text-[#002432] leading-tight">
            VEJA COMO <br /> <span className="text-[#f78837]">FUNCIONA NA PRÁTICA</span>
          </h2>
          <p className="text-[#002432] opacity-80 font-['Schibsted_Grotesk-Medium'] text-lg mt-4 max-w-[600px] mx-auto">
            Conheça nossa metodologia e entenda como transformamos negócios através do marketing digital
          </p>
        </div>

        {/* Caixa de vídeo */}
        <div className="relative aspect-video bg-gradient-to-br from-[#002432] to-[#26c7b7] rounded-[30px] overflow-hidden max-w-[800px] mx-auto mb-20">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm border-2 border-white flex items-center justify-center">
              <Play className="w-10 h-10 text-white ml-1" />
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#f8f9fa] rounded-[30px] p-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#26c7b7]" />
              <h3 className="text-[36px] lg:text-[42px] text-[#002432] font-['Bebas_Neue_Pro-Bold'] font-bold">
                PERGUNTAS FREQUENTES
              </h3>
              <MessageCircle className="w-6 h-6 text-[#f78837]" />
            </div>
            <p className="text-[#002432] opacity-70 font-['Schibsted_Grotesk-Medium'] text-lg mt-2">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="bg-white rounded-[20px] shadow-md"
              >
                <AccordionTrigger className="px-6 py-5 text-left font-bold text-[#002432] hover:bg-[#f8f9fa]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0 border-t border-gray-100">
                  <p className="text-[#002432] text-base opacity-80">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-12 p-6 border-2 border-dashed border-[#26c7b7] rounded-[20px]">
            <p className="text-lg font-medium text-[#002432]">
              Não encontrou sua resposta?
            </p>
            <p className="text-sm text-[#002432] opacity-70">
              Entre em contato conosco e teremos prazer em esclarecer suas dúvidas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
