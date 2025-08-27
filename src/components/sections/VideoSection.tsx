"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Play, HelpCircle, MessageCircle, X } from "lucide-react";
import React, { useState } from "react";

export const VideoSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/-qe8h-OoxuA?si=yeqcBIipBnmSH238";

  const faqItems = [
    {
      question: "O que é o Marketing All-Inclusive da Aurabox?",
      answer: `Acreditamos que uma comunicação bem feita — integrada e estratégica — é essencial para o crescimento de qualquer negócio. Por isso, nosso serviço de Marketing All-Inclusive cuida de todas as etapas da comunicação da sua marca, de ponta a ponta.
      Começamos com a pesquisa e análise de mercado, entendendo o seu público, o setor e as oportunidades. Em seguida, desenvolvemos o branding e a estratégia de posicionamento, alinhando tudo com os objetivos da sua empresa. Por fim, criamos e veiculamos os materiais publicitários, garantindo que sua mensagem chegue às pessoas certas, do jeito certo.
      Você não precisa se preocupar com fornecedores, ferramentas ou processos paralelos — a gente cuida de tudo, com consistência e atenção aos detalhes.`,
    },
    {
      question: "Quanto tempo até resultados serem perceptíveis?",
      answer: `O tempo para perceber resultados ao contratar uma agência varia conforme os objetivos da sua empresa. Pesquisas indicam que os primeiros sinais de progresso e retorno sobre o investimento costumam surgir entre 3 e 6 meses após a contratação de agências especializadas, como a Aurabox.
      Algumas estratégias de curto prazo — como SEO, tráfego pago e campanhas segmentadas — podem gerar impacto já nas primeiras semanas.
      Também a curto prazo, após cerca de 30 dias de adaptação e alinhamento, sua comunicação já se torna mais fluida e bem direcionada. Isso libera você e sua equipe para focarem no que realmente importa — o coração do seu negócio.`,
    },
    {
      question: "Como funciona a comunicação entre minha empresa e a Aurabox?",
      answer: `Na Aurabox, a comunicação é feita conforme a sua preferência: por e-mail, reuniões virtuais ou presenciais, ou mesmo por contato direto com nossos gestores.
      Nos adaptamos ao que funciona melhor para você, oferecendo um modelo de comunicação flexível, claro e transparente — para que o diálogo seja sempre eficiente e alinhado.`,
    },
    {
      question: "Minha empresa é pequena. Vale a pena contratar uma agência especializada?",
      answer: `Sim — e isso pode ser mais acessível e estratégico do que parece.
      Empresas de todos os tamanhos se beneficiam de uma comunicação bem feita. Segundo a McKinsey & Company, negócios que contam com agências especializadas tendem a crescer até 2,8 vezes mais.
      Na Aurabox, entendemos que cada empresa tem sua realidade. Por isso, nosso modelo de trabalho é flexível: se adapta às suas metas, ao seu ritmo e às suas condições.
      Você não precisa crescer sozinho — estamos aqui para construir esse caminho junto com você.`,
    },
    {
      question: "Já tenho redes sociais ativas. Por quê contratar uma agência?",
      answer: `Ter presença nas redes sociais é um ótimo começo — mas, hoje, isso não é mais um diferencial, é o mínimo.
      A questão não é apenas estar presente, mas se destacar. Com o volume cada vez maior de conteúdo, chamar atenção exige estratégia, consistência e um bom posicionamento.
      Na Aurabox, cuidamos disso com uma abordagem completa: além da criação de conteúdo, entregamos inteligência de mercado, branding e planejamento integrado — tudo para que sua comunicação nas redes (e fora delas) seja realmente eficiente e profissional.`,
    },
    {
      question: "Não tenho tempo para reuniões e aprovações constantes. Como vocês lidam com isso?",
      answer: `Na Aurabox, nosso objetivo é descomplicar a sua rotina para que você possa focar no que realmente importa.
      Começamos com um processo detalhado de alinhamento estratégico, onde entendemos profundamente seus valores e posicionamentos. Isso ajuda a minimizar a necessidade de aprovações frequentes e reuniões excessivas.
      Além disso, entregamos relatórios regulares para garantir total transparência e planejamos campanhas e ações com antecedência. Assim, você aprova o plano geral — e não cada peça isoladamente — evitando surpresas e retrabalhos de última hora.
      Estamos aqui para facilitar o seu dia a dia, com comunicação clara e flexível, respeitando sua agenda.`,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-[#002432] leading-tight">
            VEJA COMO <br /> <span className="text-[#f78837]">FUNCIONA NA PRÁTICA</span>
          </h2>
        </div>

        {/* Caixa de vídeo */}
        <div className="relative max-w-[800px] mx-auto mb-12 sm:mb-16 lg:mb-20">
          {!isVideoPlaying ? (
            <div
              className="relative aspect-video bg-gradient-to-br from-[#002432] to-[#26c7b7] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden cursor-pointer group"
              onClick={() => setIsVideoPlaying(true)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white/20 rounded-full backdrop-blur-sm border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white ml-0.5 sm:ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Marketing All-Inclusive</h3>
                <p className="text-sm opacity-90">Veja nossa metodologia em ação</p>
              </div>
            </div>
          ) : (
            <div className="relative aspect-video rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden bg-black">
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="Vídeo Aurabox"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
                aria-label="Fechar vídeo"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="bg-[#f8f9fa] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-6 sm:p-8 lg:p-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
              <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#26c7b7]" />
              <h3 className="text-[24px] sm:text-[32px] lg:text-[42px] text-[#002432] font-bold">
                PERGUNTAS FREQUENTES
              </h3>
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#f78837]" />
            </div>
            <p className="text-[#002432] opacity-70 text-base sm:text-lg font-medium">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="bg-white rounded-[15px] sm:rounded-[20px] shadow-md border-none"
              >
                <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 text-left font-bold text-[#002432] hover:bg-[#f8f9fa] text-sm sm:text-base rounded-t-[15px] sm:rounded-t-[20px] [&[data-state=open]]:rounded-b-none">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0 border-t border-gray-100">
                  <p className="text-[#002432] text-sm sm:text-base opacity-80 leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 border-2 border-dashed border-[#26c7b7] rounded-[15px] sm:rounded-[20px]">
            <p className="text-base sm:text-lg font-medium text-[#002432] mb-1">
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