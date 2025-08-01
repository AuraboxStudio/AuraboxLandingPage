import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { DollarSign, ShoppingCart, Target, ThumbsUp } from "lucide-react";
import React from "react";

export const HeroSection: React.FC = () => {
  // Statistics data
  const statistics = [
    {
      value: "78%",
      description: "das decisões começam online",
    },
    {
      value: "2.8x",
      description: "mais crescimento com agências",
    },
    {
      value: "45%",
      description: "redução em CAC",
    },
  ];

  return (
    <section className="relative w-full max-w-[1341px] mx-auto py-16">
      <div className="flex flex-col md:flex-row">
        {/* Left content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8 pr-4">
          <div className="font-['Bebas_Neue_Pro-Bold',Helvetica] text-[64px] leading-tight">
            <span className="font-bold text-black">
              Soluções fora da caixa
              <br />
              para o{" "}
            </span>
            <span className="font-['Bebas_Neue_Pro-ExtraBold',Helvetica] font-extrabold text-[#f78837]">
              seu negócio
            </span>
          </div>

          <p className="font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-black text-xl leading-[24.7px]">
            Expanda sua marca com uma equipe dedicada a consolidar a presença da
            sua empresa.
          </p>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                className="h-9 bg-[#d9d9d9] rounded-[20px] border border-solid border-[#adaeb0] placeholder:text-[#a7a7aa]"
                placeholder="Nome"
              />
              <Input
                className="h-9 bg-[#d9d9d9] rounded-[20px] border border-solid border-[#adaeb0] placeholder:text-[#a7a7aa]"
                placeholder="Email"
              />
            </div>

            <Card className="relative border-none shadow-none">
              <CardContent className="p-0">
                <Button className="relative w-full h-12 text-black font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-xl">
                  <div className="absolute left-4 flex items-center justify-center w-7 h-7 rounded-full border border-white">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  Solicitar meu orçamento
                </Button>
              </CardContent>
            </Card>

            <p className="text-xs text-center text-[#002432] font-['Schibsted_Grotesk-Medium',Helvetica]">
              <span className="font-medium">
                Seus dados estão protegidos pela{" "}
              </span>
              <span className="font-['Schibsted_Grotesk-ExtraBold',Helvetica] font-extrabold">
                Lei Geral de Proteção de Dados
              </span>
              <span className="font-medium">.</span>
            </p>
          </div>

          <div className="flex justify-between pt-4">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-['Gravesend_Sans-Bold',Helvetica] font-bold text-xl">
                  {stat.value}
                </p>
                <p className="font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-[13px]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right content - Images */}
        <div className="w-full md:w-1/2 relative h-[929px]">
          <div className="absolute w-[233px] h-[258px] top-0 left-[262px]">
            <Target className="w-full h-full text-[#f78837]" />
          </div>

          <div className="absolute w-[485px] h-[769px] top-[159px] left-2.5">
            <img
              className="w-full h-full object-cover"
              alt="Cliente feliz usando smartphone"
              src="/imagem_aurabox_clientefeliz.png"
            />
          </div>

          <div className="absolute w-56 h-[275px] top-[586px] left-[430px]">
            <ShoppingCart className="w-full h-full text-[#f78837]" />
          </div>

          <div className="absolute w-[181px] h-[155px] top-[296px] left-0">
            <ThumbsUp className="w-full h-full text-[#f78837]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;