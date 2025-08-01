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
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8">
          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="font-['Bebas_Neue_Pro-Bold',Helvetica] text-[48px] md:text-[64px] leading-[0.9] tracking-tight">
              <span className="font-bold text-[#002432] block">
                Soluções fora da caixa
              </span>
              <span className="font-bold text-[#002432] block">
                para o{" "}
                <span className="font-['Bebas_Neue_Pro-ExtraBold',Helvetica] font-extrabold text-[#f78837]">
                  seu negócio
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-[#002432] text-xl leading-[1.3] max-w-[520px]">
            Expanda sua marca com uma equipe dedicada a consolidar a presença da
            sua empresa.
          </p>

          {/* Form Section */}
          <div className="space-y-4 max-w-[520px]">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                className="h-10 bg-[#d9d9d9] rounded-[20px] border border-solid border-[#adaeb0] placeholder:text-[#a7a7aa] font-['Schibsted_Grotesk-Regular',Helvetica] text-base px-4"
                placeholder="Nome"
              />
              <Input
                className="h-10 bg-[#d9d9d9] rounded-[20px] border border-solid border-[#adaeb0] placeholder:text-[#a7a7aa] font-['Schibsted_Grotesk-Regular',Helvetica] text-base px-4"
                placeholder="Email"
              />
            </div>

            {/* CTA Button */}
            <div className="relative">
              <Button className="relative w-full h-[56px] bg-gradient-to-r from-[#f78837] to-[#ff9d4a] hover:from-[#e67827] hover:to-[#f08d3a] text-[#002432] font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-xl rounded-[28px] border-none shadow-[0_4px_15px_rgba(247,136,55,0.3)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(247,136,55,0.4)] hover:transform hover:-translate-y-0.5">
                <div className="absolute left-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
                  <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                    <DollarSign className="w-4 h-4 text-[#002432]" />
                  </div>
                </div>
                <span className="ml-8">Solicitar meu orçamento</span>
              </Button>
            </div>

            {/* Privacy Text */}
            <p className="text-sm text-center text-[#002432] font-['Schibsted_Grotesk-Medium',Helvetica] opacity-80">
              <span className="font-medium">
                Seus dados estão protegidos pela{" "}
              </span>
              <span className="font-['Schibsted_Grotesk-ExtraBold',Helvetica] font-extrabold">
                Lei Geral de Proteção de Dados
              </span>
              <span className="font-medium">.</span>
            </p>
          </div>

          {/* Statistics */}
          <div className="flex justify-between pt-8 max-w-[520px]">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-['Gravesend_Sans-Bold',Helvetica] font-bold text-[#002432] text-2xl mb-1">
                  {stat.value}
                </p>
                <p className="font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-[#002432] text-sm leading-tight opacity-80">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right content - Images and Icons */}
        <div className="w-full lg:w-1/2 relative h-[600px] lg:h-[800px]">
          {/* Background decorative icons */}
          <div className="absolute w-[120px] h-[120px] top-0 right-[100px] opacity-20">
            <Target className="w-full h-full text-[#f78837]" />
          </div>

          {/* Main image */}
          <div className="absolute w-[400px] h-[600px] lg:w-[485px] lg:h-[769px] top-[100px] lg:top-[80px] left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none">
            <img
              className="w-full h-full object-cover rounded-[20px] shadow-[0_20px_40px_rgba(0,36,50,0.15)]"
              alt="Cliente feliz usando smartphone"
              src="/imagem_aurabox_clientefeliz.png"
            />
          </div>

          {/* Decorative icons positioned around the image */}
          <div className="absolute w-[100px] h-[100px] top-[500px] lg:top-[600px] right-0 opacity-25">
            <ShoppingCart className="w-full h-full text-[#f78837]" />
          </div>

          <div className="absolute w-[80px] h-[80px] top-[200px] lg:top-[300px] left-0 opacity-25">
            <ThumbsUp className="w-full h-full text-[#f78837]" />
          </div>

          {/* Additional floating elements for visual interest */}
          <div className="absolute w-3 h-3 bg-[#f78837] rounded-full top-[150px] right-[50px] opacity-60"></div>
          <div className="absolute w-2 h-2 bg-[#26c7b7] rounded-full top-[400px] left-[50px] opacity-60"></div>
          <div className="absolute w-4 h-4 bg-[#f78837] rounded-full bottom-[100px] right-[150px] opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;