// src/components/HeroSection.tsx
"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DollarSign, Shield, User, Mail } from "lucide-react";
import React, { useState, useCallback, useEffect } from "react";
import FormularioIdentificacao from "./FormularioIdentificacao";
import { ModalConteudoPadrao } from "./ModalConteudoPadrao";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState<null | "termosServicos" | "cookies" | "formulario">(null);
  const [returnToForm, setReturnToForm] = useState(false);
  const [formDataParcial, setFormDataParcial] = useState({
    nome: "",
    email: "",
  });

  const [formStateCompleto, setFormStateCompleto] = useState({
    formData: {
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      estado: "",
      cidade: "",
      areaAtuacao: "",
      porteEmpresa: "",
      funcionarios: "",
      mensagem: "",
      aceite: false,
    },
    step: 1,
  });

  const handleFormUpdate = useCallback((updates: any) => {
    setFormStateCompleto(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  const handleAbrirTermos = () => {
    setReturnToForm(true);
    setModalOpen("termosServicos");
  };

  const handleAbrirCookies = () => {
    setReturnToForm(true);
    setModalOpen("cookies");
  };

  const handleAbrirFormulario = () => {
    setReturnToForm(false);
    setFormStateCompleto(prev => ({
      ...prev,
      formData: {
        ...prev.formData,
        nome: formDataParcial.nome,
        email: formDataParcial.email,
      }
    }));
    setModalOpen("formulario");
  };

  const handleCloseModal = () => {
    if (formStateCompleto.step === 4) {
      setFormStateCompleto({
        formData: {
          nome: "",
          email: "",
          telefone: "",
          empresa: "",
          estado: "",
          cidade: "",
          areaAtuacao: "",
          porteEmpresa: "",
          funcionarios: "",
          mensagem: "",
          aceite: false,
        },
        step: 1,
      });
      setFormDataParcial({ nome: "", email: "" });
    }

    if (returnToForm && (modalOpen === "termosServicos" || modalOpen === "cookies")) {
      setModalOpen("formulario");
    } else {
      setReturnToForm(false);
      setModalOpen(null);
    }
  };

  const modalContent = {
    termosServicos: ModalConteudoPadrao.termosServicos(handleCloseModal),
    cookies: ModalConteudoPadrao.cookies(handleCloseModal),
    formulario: (
      <FormularioIdentificacao
        onAbrirTermos={handleAbrirTermos}
        onAbrirCookies={handleAbrirCookies}
        formState={formStateCompleto}
        onUpdate={handleFormUpdate}
      />
    ),
  };

  return (
    <>
      <section className="pt-16 sm:pt-20 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 w-full relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 lg:flex-row lg:gap-12">
            
            {/* Conteúdo Principal */}
            <div className="w-full lg:flex-1 lg:max-w-[520px] space-y-4 sm:space-y-6 text-center lg:text-left order-1 lg:order-1">
              
              {/* Logo e Título */}
              <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4">
                <img
                  src="/logo_aurabox_padrao.png"
                  alt="Logo Aurabox"
                  className="w-[150px] sm:w-[180px] lg:w-[200px] h-auto"
                />
                <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bebas-nue-pro font-bold leading-tight text-[#002432]">
                  <span className="block">SOLUÇÕES FORA DA CAIXA</span>
                  <span className="block">
                    PARA O <span className="text-[#f78837]">SEU NEGÓCIO</span>
                  </span>
                </h1>
              </div>

              {/* Imagem - Mobile/Tablet (após o título) */}
              <div className="w-full relative flex justify-center lg:hidden">
                <img
                  src="/imagem_aurabox_clientefeliz.png"
                  alt="Cliente feliz"
                  className="w-full max-w-[280px] sm:max-w-[320px] h-auto relative z-10"
                />
                {/* Ícones mobile - mais próximos como no desktop */}
                <img
                  src="/icone_aurabox_alvo3D.png"
                  alt="Ícone alvo"
                  className="absolute top-[5%] right-[20%] w-[50px] sm:w-[60px] z-0"
                />
                <img
                  src="/icone_aurabox_like.png"
                  alt="Ícone curtida"
                  className="absolute top-[35%] left-[8%] w-[45px] sm:w-[50px] z-10"
                />
                <img
                  src="/icone_aurabox_shopcart.png"
                  alt="Ícone carrinho"
                  className="absolute bottom-[15%] right-[5%] w-[55px] sm:w-[65px] z-10"
                />
              </div>

              {/* Descrição */}
              <p className="text-base sm:text-lg font-sans font-bold text-[#002432] max-w-[400px] mx-auto lg:mx-0">
                Expanda sua marca com uma equipe dedicada a consolidar a presença da sua empresa.
              </p>

              {/* Formulário */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="relative flex-1">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      placeholder="Nome"
                      className="h-[44px] sm:h-[45px] pl-11 sm:pl-12 pr-4 rounded-full bg-[#f5f5f5] border border-[#c1c1c1] text-sm w-full"
                      value={formDataParcial.nome}
                      onChange={(e) =>
                        setFormDataParcial({ ...formDataParcial, nome: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      placeholder="Email"
                      type="email"
                      className="h-[44px] sm:h-[45px] pl-11 sm:pl-12 pr-4 rounded-full bg-[#f5f5f5] border border-[#c1c1c1] text-sm w-full"
                      value={formDataParcial.email}
                      onChange={(e) =>
                        setFormDataParcial({ ...formDataParcial, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                
                <Button
                  className="relative w-full h-[48px] sm:h-[50px] bg-[#1CD8C9] hover:bg-[#1CD8C9]/90 border-[3px] border-[#002432] rounded-full text-black shadow-[4px_4px_0px_#002432] sm:shadow-[6px_6px_0px_#002432] hover:shadow-[6px_6px_0px_#002432] sm:hover:shadow-[10px_10px_0px_#002432] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 sm:hover:-translate-x-1 sm:hover:-translate-y-1"
                  onClick={handleAbrirFormulario}
                >
                  <div className="absolute left-3 sm:left-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-[#002432]">
                    <div className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full bg-white flex items-center justify-center">
                      <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-[#1CD8C9]" />
                    </div>
                  </div>
                  <span className="font-bold text-sm sm:text-base ml-2">
                    Solicitar meu orçamento
                  </span>
                </Button>
                
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#002432] opacity-80 px-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#26c7b7] flex-shrink-0" />
                  <p className="text-center lg:text-left">
                    Seus dados estão protegidos pela{" "}
                    <strong>Lei Geral de Proteção de Dados</strong>
                  </p>
                </div>

                {/* Estatísticas */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 text-center mt-4 sm:mt-6 px-2">
                  <div className="p-2 sm:p-3">
                    <p className="text-[18px] sm:text-[20px] font-bold text-[#002432]">78%</p>
                    <p className="text-xs sm:text-sm text-[#002432] leading-tight">das decisões começam online</p>
                  </div>
                  <div className="p-2 sm:p-3 border-x border-[#002432]/20">
                    <p className="text-[18px] sm:text-[20px] font-bold text-[#002432]">2.8X</p>
                    <p className="text-xs sm:text-sm text-[#002432] leading-tight">mais crescimento com agências</p>
                  </div>
                  <div className="p-2 sm:p-3">
                    <p className="text-[18px] sm:text-[20px] font-bold text-[#002432]">45%</p>
                    <p className="text-xs sm:text-sm text-[#002432] leading-tight">redução em CAC</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Imagem - Desktop apenas */}
            <div className="hidden lg:flex w-full lg:flex-1 relative justify-center order-2 lg:order-2">
              <img
                src="/imagem_aurabox_clientefeliz.png"
                alt="Cliente feliz"
                className="w-full max-w-[400px] h-auto relative z-10 translate-x-[100px]"
              />
              {/* Ícones decorativos - desktop */}
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
        </div>

        {/* Modal */}
        {modalOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div
              className="bg-white rounded-2xl max-w-[800px] w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 font-bold text-xl rounded-full hover:bg-gray-100 z-10"
                onClick={handleCloseModal}
                aria-label="Fechar modal"
              >
                ×
              </button>
              <div className="overflow-auto max-h-[90vh] p-4 sm:p-6">
                {modalContent[modalOpen]}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}