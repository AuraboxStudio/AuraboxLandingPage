"use client"
// components/sections/HeroSection.tsx
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DollarSign } from "lucide-react";
import React, { useState } from "react";
import { FormularioIdentificacao } from "./FormularioIdentificacao";

const HeroSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [formDataParcial, setFormDataParcial] = useState({
    nome: "",
    email: "",
  });
  
  return (
    <>
      {/* Logo centralizado no container */}
      <div className="absolute top-6 left-0 w-full z-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <img
            src="/logo_aurabox_padrao.png"
            alt="Logo Aurabox"
            className="w-[140px] h-auto"
          />
        </div>
      </div>

      <section className="pt-28 pb-16 w-full relative">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Esquerda */}
          <div className="flex-1 max-w-[520px] space-y-6">
            <h1 className="text-[32px] md:text-[40px] font-bebas-nue-pro font-bold leading-tight text-[#002432]">
              <span className="whitespace-nowrap block">
                SOLUÇÕES FORA DA CAIXA
              </span>
              <span className="whitespace-nowrap block">
                PARA O <span className="text-[#f78837]">SEU NEGÓCIO</span>
              </span>
            </h1>

            <p className="text-lg font-sans font-bold text-[#002432]">
              Expanda sua marca com uma equipe dedicada a consolidar a presença da sua empresa.
            </p>

            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <Input
                  placeholder="Nome"
                  className="h-[45px] px-4 rounded-full bg-[#f5f5f5] border border-[#c1c1c1] text-sm flex-1"
                  value={formDataParcial.nome}
                  onChange={(e) => setFormDataParcial({ ...formDataParcial, nome: e.target.value })}
                />
                <Input
                  placeholder="Email"
                  className="h-[45px] px-4 rounded-full bg-[#f5f5f5] border border-[#c1c1c1] text-sm flex-1"
                  value={formDataParcial.email}
                  onChange={(e) => setFormDataParcial({ ...formDataParcial, email: e.target.value })}
                />
              </div>

              <Button
                className="relative w-full h-[50px] bg-[#1CD8C9] hover:bg-[#1CD8C9]/90 border-[3px] border-[#002432] rounded-full text-black shadow-[6px_6px_0px_#002432] hover:shadow-[10px_10px_0px_#002432] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
                onClick={() => setModalOpen(true)}
              >
                <div className="absolute left-4 w-8 h-8 rounded-full flex items-center justify-center bg-[#002432]">
                  <div className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-[#1CD8C9]" />
                  </div>
                </div>

                <span className="font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-base">
                  Solicitar meu orçamento
                </span>
              </Button>

              <p className="text-sm text-[#002432]">
                Seus dados estão protegidos pela <strong className="font-extrabold">Lei Geral de Proteção de Dados</strong>.
              </p>
            </div>


            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <p className="text-xl text-[#002432] font-bold">78%</p>
                <p className="text-sm text-[#002432] font-bold">das decisões começam online</p>
              </div>
              <div className="text-center">
                <p className="text-xl text-[#002432] font-bold">2.8x</p>
                <p className="text-sm text-[#002432] font-bold">mais crescimento com agências</p>
              </div>
              <div className="text-center">
                <p className="text-xl text-[#002432] font-bold">45%</p>
                <p className="text-sm text-[#002432] font-bold">redução em CAC</p>
              </div>
            </div>
          </div>

          {/* Direita */}
          <div className="flex-1 relative flex justify-center">
            <img
              src="/imagem_aurabox_clientefeliz.png"
              alt="Cliente feliz"
              className="w-full max-w-[400px] h-auto relative z-10 translate-x-[100px]"
            />

            {/* Ícones decorativos substituindo as bolinhas */}
            <img
              src="/icone_aurabox_alvo3D.png"
              alt="Ícone alvo"
              className="absolute -top-20 right-[50px] w-[120px] z-0"
            />
            <img
              src="/icone_aurabox_like.png"
              alt="Ícone curtida"
              className="absolute top-[160px] left-[230px] w-[100px] z-10"
            />
            <img
              src="/icone_aurabox_shopcart.png"
              alt="Ícone carrinho"
              className="absolute bottom-[-50px] right-0 w-[140px] z-10"
            />
          </div>
        </div>
        {modalOpen && (
          <div
            className="fixed inset-0 bg-white/20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="bg-white rounded-lg max-w-[800px] w-full max-h-[80vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl"
                onClick={() => setModalOpen(false)}
                aria-label="Fechar modal"
              >
                ×
              </button>

              <div className="p-6 overflow-auto max-h-[80vh]">
                <FormularioIdentificacao
                  nomeInicial={formDataParcial.nome}
                  emailInicial={formDataParcial.email}
                />
              </div>
            </div>
          </div>
        )}

      </section>
    </>
  );
};

export default HeroSection;