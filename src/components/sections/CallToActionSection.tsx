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
    <section className="py-24 w-full bg-[#DFE5E5] relative font-sans">
      <div className="max-w-[800px] mx-auto px-4 text-center">
        <h2 className="text-[40px] md:text-[48px] font-bold text-[#002432] leading-tight mb-4">
          PRONTO PARA <br /> <span className="text-[#f78837]">TRANSFORMAR SEU NEGÓCIO?</span>
        </h2>
        <p className="text-lg text-[#002432] opacity-80 font-medium max-w-[500px] mx-auto mb-10">
          Solicite seu orçamento personalizado e descubra como podemos impulsionar sua marca.
        </p>
        <div className="rounded-[30px] border-[3px] border-[#002432] shadow-[6px_6px_0px_#002432] bg-white p-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-5 h-5" />
              <Input
                className="h-[50px] pl-12 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] text-sm font-sans"
                placeholder="Nome"
                value={formDataParcial.nome}
                onChange={(e) => setFormDataParcial({ ...formDataParcial, nome: e.target.value })}
              />
            </div>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-5 h-5" />
              <Input
                className="h-[50px] pl-12 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] text-sm font-sans"
                placeholder="Email"
                type="email"
                value={formDataParcial.email}
                onChange={(e) => setFormDataParcial({ ...formDataParcial, email: e.target.value })}
              />
            </div>
          </div>
          <Button
            className="relative w-[653px] h-[60px] bg-[#1CD8C9] hover:bg-[#1CD8C9]/90 border-[3px] border-[#002432] rounded-full text-black shadow-[6px_6px_0px_#002432] hover:shadow-[10px_10px_0px_#002432] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 mx-auto font-sans"
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
            <div className="absolute left-4 w-8 h-8 rounded-full flex items-center justify-center bg-[#002432]">
              <div className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-[#1CD8C9]" />
              </div>
            </div>
            <span className="font-bold text-xl">Solicitar meu orçamento</span>
          </Button>
          <div className="flex items-center justify-center gap-2 pt-4 text-sm text-[#002432] opacity-80 font-sans">
            <Shield className="w-4 h-4 text-[#26c7b7]" />
            <p>
              Seus dados estão protegidos pela <strong>Lei Geral de Proteção de Dados</strong>
            </p>
          </div>
        </div>
        <div className="text-[#002432] opacity-70 cursor-pointer mt-6 flex justify-center items-center gap-4 text-sm font-sans">
          <span
            onClick={() => setModalOpen("termosServicos")}
            className="underline hover:text-[#f78837]"
          >
            Termos e Serviços
          </span>
          <div className="w-px h-4 bg-[#002432] opacity-40" />
          <span
            onClick={() => setModalOpen("cookies")}
            className="underline hover:text-[#f78837]"
          >
            Políticas de Cookies
          </span>
        </div>
        <div className="mt-10 font-sans">
          <img
            src="/logo_aurabox_marca.png"
            alt="Logo Aurabox"
            className="w-[80px] mx-auto mb-2 drop-shadow-lg"
          />
          <p className="text-[#002432] font-bold">Fale conosco agora mesmo!</p>
          <p className="text-[#002432] opacity-70">comercial@auraboxstudio.com</p>
          <p className="text-[#002432] opacity-70">Todos Direitos Reservados</p>
          <p className="text-[#002432] opacity-70">CNPJ 61.598.874/0001-87</p>
        </div>
      </div>
      {modalOpen && (
        <div
          className="fixed inset-0 bg-white/20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg max-w-[800px] w-full max-h-[80vh] overflow-hidden relative font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl"
              onClick={handleCloseModal}
              aria-label="Fechar modal"
            >
              ×
            </button>
            <div className="p-6 overflow-auto max-h-[80vh]">
              {modalContent[modalOpen]}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
