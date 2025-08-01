import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import React from "react";

export const VideoSection: React.FC = () => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "O que é o Marketing All-Inclusive da Aurabox?",
      answer: "", // Content would be added here based on requirements
    },
    {
      question: "Quanto tempo até resultados serem perceptíveis?",
      answer: "",
    },
    {
      question: "Como funciona a comunicação entre minha empresa e a Aurabox?",
      answer: "",
    },
    {
      question:
        "Minha empresa é pequena. Vale a pena contratar uma agência especializada?",
      answer: "",
    },
    {
      question: "Já tenho redes sociais ativas. Por quê contratar uma agência?",
      answer: "",
    },
    {
      question:
        "Não tenho tempo para reuniões e aprovações constantes. Como vocês lidam com isso?",
      answer: "",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-[26px] px-8 py-16 bg-white rounded-[35px]">
      <h2 className="font-bold text-black text-[40px] [font-family:'Bebas_Neue_Pro-Bold',Helvetica] tracking-[0] leading-normal">
        Perguntas Frequentes (FAQ)
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={`faq-item-${index}`}
            value={`item-${index}`}
            className="border-b border-[#002432]/20"
          >
            <AccordionTrigger className="py-4 [font-family:'Schibsted_Grotesk-Bold',Helvetica] font-bold text-[#002432] text-2xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default VideoSection;