import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DollarSign } from "lucide-react";
import React from "react";

export default function CallToActionSection(): React.JSX.Element {
  return (
    <div className="w-full max-w-[659px] py-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full gap-3 justify-between">
          <Input
            className="h-[42px] rounded-[20px] bg-[#d9d9d9] border-[#adaeb0] text-[#a7a7aa] font-['Schibsted_Grotesk-Regular',Helvetica] text-xl placeholder:text-[#a7a7aa]"
            placeholder="Nome"
          />
          <Input
            className="h-[42px] rounded-[20px] bg-[#d9d9d9] border-[#adaeb0] text-[#a7a7aa] font-['Schibsted_Grotesk-Regular',Helvetica] text-xl placeholder:text-[#a7a7aa]"
            placeholder="Email"
          />
        </div>

        <div className="w-full mt-2">
          <Button className="w-full h-[56px] bg-[] relative font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-black text-xl">
            <div className="absolute left-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white">
              <div className="flex items-center justify-center w-[33px] h-[33px] bg-white rounded-full">
                <DollarSign className="w-2.5 h-4 text-black" />
              </div>
            </div>
            Solicitar meu orçamento
          </Button>
        </div>

        <p className="text-sm text-center text-black font-['Schibsted_Grotesk-Medium',Helvetica] mt-2">
          <span className="font-medium">Seus dados estão protegidos pela </span>
          <span className="font-['Schibsted_Grotesk-Bold',Helvetica] font-bold">
            Lei Geral de Proteção de Dados.
          </span>
        </p>

        <div className="flex justify-center mt-4">
          <img className="w-[163px] h-[81px]" alt="Logo aurabox" src="/logo_aurabox_marca.png" />
        </div>
      </div>
    </div>
  );
}