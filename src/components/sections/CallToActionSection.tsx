// src/components/CallToActionSection.tsx
"use client";

import React, { useState, useCallback } from "react";
import { ModalConteudoPadrao } from "./ModalConteudoPadrao";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DollarSign, Mail, Shield, User } from "lucide-react";
import FormularioIdentificacao from "./FormularioIdentificacao";

export default function CallToActionSection() {
  const [modalOpen, setModalOpen] = useState<null | "termosServicos" | "cookies" | "formulario">(null);
  const [returnToForm, setReturnToForm] = useState(false);
  const [formDataParcial, setFormDataParcial] = useState({ nome: "", email: "" });

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
    setFormStateCompleto(prev => ({ ...prev, ...updates }));
  }, []);

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
        onAbrirTermos={() => {
          setReturnToForm(true);
          setModalOpen("termosServicos");
        }}
        onAbrirCookies={() => {
          setReturnToForm(true);
          setModalOpen("cookies");
        }}
        formState={formStateCompleto}
        onUpdate={handleFormUpdate}
      />
    ),
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 w-full bg-[#DFE5E5] relative font-sans">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Título */}
        <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-[#002432] leading-tight mb-3 sm:mb-4">
          PRONTO PARA <br /> <span className="text-[#f78837]">TRANSFORMAR SEU NEGÓCIO?</span>
        </h2>
        
        {/* Descrição */}
        <p className="text-base sm:text-lg text-[#002432] opacity-80 font-medium max-w-[500px] mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
          Solicite seu orçamento personalizado e descubra como podemos impulsionar sua marca.
        </p>
        
        {/* Formulário */}
        <div className="rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] border-[2px] sm:border-[3px] border-[#002432] shadow-[4px_4px_0px_#002432] sm:shadow-[6px_6px_0px_#002432] bg-white p-4 sm:p-6 lg:p-8">
          
          {/* Campos de entrada */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="relative flex-1">
              <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                className="h-[44px] sm:h-[50px] pl-10 sm:pl-12 pr-4 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] text-sm font-sans"
                placeholder="Nome"
                value={formDataParcial.nome}
                onChange={(e) => setFormDataParcial({ ...formDataParcial, nome: e.target.value })}
              />
            </div>
            <div className="relative flex-1">
              <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                className="h-[44px] sm:h-[50px] pl-10 sm:pl-12 pr-4 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] text-sm font-sans"
                placeholder="Email"
                type="email"
                value={formDataParcial.email}
                onChange={(e) => setFormDataParcial({ ...formDataParcial, email: e.target.value })}
              />
            </div>
          </div>
          
          {/* Botão CTA */}
          <Button
            className="relative w-full max-w-[653px] h-[52px] sm:h-[60px] bg-[#1CD8C9] hover:bg-[#1CD8C9]/90 border-[2px] sm:border-[3px] border-[#002432] rounded-full text-black shadow-[4px_4px_0px_#002432] sm:shadow-[6px_6px_0px_#002432] hover:shadow-[6px_6px_0px_#002432] sm:hover:shadow-[10px_10px_0px_#002432] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 sm:hover:-translate-x-1 sm:hover:-translate-y-1 mx-auto font-sans"
            onClick={() => {
              setFormStateCompleto(prev => ({
                ...prev,
                formData: {
                  ...prev.formData,
                  nome: formDataParcial.nome,
                  email: formDataParcial.email,
                }
              }));
              setModalOpen("formulario");
            }}
          >
            <div className="absolute left-3 sm:left-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-[#002432]">
              <div className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full bg-white flex items-center justify-center">
                <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-[#1CD8C9]" />
              </div>
            </div>
            <span className="font-bold text-lg sm:text-xl ml-2">Solicitar meu orçamento</span>
          </Button>
          
          {/* LGPD */}
          <div className="flex items-center justify-center gap-2 pt-3 sm:pt-4 text-xs sm:text-sm text-[#002432] opacity-80 font-sans px-4">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#26c7b7] flex-shrink-0" />
            <p className="text-center">
              Seus dados estão protegidos pela <strong>Lei Geral de Proteção de Dados</strong>
            </p>
          </div>
        </div>
        
        {/* Links legais */}
        <div className="text-[#002432] opacity-70 cursor-pointer mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm font-sans">
          <span
            onClick={() => setModalOpen("termosServicos")}
            className="underline hover:text-[#f78837] transition-colors"
          >
            Termos e Serviços
          </span>
          <div className="hidden sm:block w-px h-4 bg-[#002432] opacity-40" />
          <span
            onClick={() => setModalOpen("cookies")}
            className="underline hover:text-[#f78837] transition-colors"
          >
            Políticas de Cookies
          </span>
        </div>
        
        {/* Footer */}
        <div className="mt-8 sm:mt-10 lg:mt-10 font-sans space-y-2">
          <img
            src="/logo_aurabox_marca.png"
            alt="Logo Aurabox"
            className="w-[60px] sm:w-[70px] lg:w-[80px] mx-auto mb-2 drop-shadow-lg"
          />
          <p className="text-[#002432] font-bold text-sm sm:text-base">Fale conosco agora mesmo!</p>
          <p className="text-[#002432] opacity-70 text-sm">comercial@auraboxstudio.com</p>
          <p className="text-[#002432] opacity-70 text-xs sm:text-sm">Todos Direitos Reservados</p>
          <p className="text-[#002432] opacity-70 text-xs sm:text-sm">CNPJ 61.598.874/0001-87</p>
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
            <div className="p-4 sm:p-6 overflow-auto max-h-[90vh]">
              {modalContent[modalOpen]}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}