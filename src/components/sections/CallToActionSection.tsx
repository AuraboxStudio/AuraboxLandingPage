"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DollarSign, Mail, Shield, User } from "lucide-react";

export default function CallToActionSection() {
  const [modalOpen, setModalOpen] = useState<null | "termosServicos" | "cookies">(null);

  const modalContent = {
    termosServicos: (
      <div className="text-[#002432] text-sm space-y-4 w-full max-w-none">
        <h3 className="text-[#26C7B7] text-xl font-bold">Termos de Privacidade & Serviço</h3>

        <p>
          1. Este Termo refere-se ao site da Aurabox Studio. Ao navegar neste site e usar os serviços que são fornecidos, você{" "}
          <span className="font-bold">AFIRMA que LEU, COMPREENDEU e CONCORDA</span>{" "}
          com nossos Termos e Condições. Estes Termos e Condições abrangem todos os aplicativos, serviços de internet ou extensões dos sites relacionados. Caso você não concorde ou não tenha ficado claro algum ponto, sugere-se que você{" "}
          <span className="font-bold uppercase">NÃO NAVEGUE MAIS NELE</span>{" "}
          até que tenha sanado todas as suas dúvidas. Você poderá ainda, a qualquer tempo, retornar ao site, clicar em{" "}
          <span className="font-bold">“Termos de Uso”</span>{" "}
          e reler quantas vezes desejar.
        </p>

        <h4 className="text-base font-bold">Termos e Condições</h4>

        <p>
          2. Os Termos e Condições da <span className="font-bold">Aurabox Studio</span> regem o uso deste site e todo o seu conteúdo (“Site”). Estes termos descrevem as regras e regulamentos que orientam o uso da Aurabox Studio localizado pelo link <span className="font-bold">auraboxstudio.com</span>. Todos os materiais/informações/documentos/serviços ou todas as outras entidades (coletivamente referidas como “conteúdo”) que aparecem no referido domínio serão administrados de acordo com estes Termos e Condições.
        </p>

        <p>
          <span className="font-bold uppercase">ATENÇÃO:</span> Não continue a usar este site se você tiver qualquer objeção a qualquer uma das disposições destes Termos e Condições declaradas nesta página.
        </p>

        <p>
          3. O site é destinado a usuários com 18 (dezoito) anos de idade ou mais. Se você possui menos de 18 (dezoito) anos, não poderá usar ou registrar-se para usar este site ou seus serviços sem a permissão ou consentimento dos pais. Ao concordar com os Termos e Condições, você declara ter capacidade legal para cumprir e ficar vinculado por estes Termos.
        </p>

        <p>
          4. A Aurabox Studio faz uso de cookies. Ao acessar nosso site, você concorda em usar cookies nos termos da nossa Política de Cookies. Salienta-se que alguns dos nossos parceiros também podem utilizar cookies.
        </p>

        <p>
          5. A Aurabox Studio detém os direitos de propriedade intelectual de todo o conteúdo. Todos os direitos de propriedade intelectual são reservados. Você pode acessar qualquer conteúdo do site para uso pessoal, sujeito às restrições definidas nestes Termos. A Aurabox Studio determina que o usuário do site não cometa as seguintes ações:
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Reproduzir, republicar, duplicar ou copiar qualquer conteúdo da Aurabox Studio;</li>
          <li>Vender, alugar, sublicenciar e/ou comercializar qualquer conteúdo da Aurabox Studio;</li>
          <li>Executar e/ou exibir publicamente qualquer conteúdo da Aurabox Studio sem autorização;</li>
          <li>Usar este site de forma que possa danificar e/ou afetar o acesso de outros usuários;</li>
          <li>Usar este site em desacordo com as leis e regulamentos aplicáveis ou de forma que possa causar danos ao site, à Aurabox Studio ou a terceiros;</li>
          <li>Realizar mineração de dados ou qualquer outra atividade semelhante relacionada a este site;</li>
          <li>Utilizar este site para fins de publicidade ou marketing empresarial sem autorização.</li>
        </ul>

        <p>
          6. Áreas específicas deste site podem estar restritas ao acesso do usuário, e a Aurabox Studio pode restringir ainda mais o acesso a qualquer área do site, a qualquer momento e a seu exclusivo critério. Qualquer identificação de usuário, senha ou outra informação que você possua neste site é confidencial, e você deve manter a confidencialidade.
        </p>
      </div>
    ),

    cookies: (
      <div className="text-[#002432] text-sm space-y-4 w-full max-w-none">
        <h3 className="text-xl font-bold text-[#26c7b7]">Política de Cookies – Aurabox Studio</h3>
        <p className="text-xs text-right italic text-gray-500">Última atualização: 01/07/2023</p>
        <h4 className="font-bold">1. INTRODUÇÃO</h4>
        <p>Esta Política explica como usamos cookies e tecnologias similares...</p>
      </div>
    ),
  };

  return (
    <section className="py-24 w-full bg-[#DFE5E5] relative">
      <div className="max-w-[800px] mx-auto px-4 text-center">
        <h2 className="text-[40px] md:text-[48px] font-['Bebas_Neue_Pro-Bold'] text-[#002432] leading-tight mb-4">
          PRONTO PARA <br /> <span className="text-[#f78837]">TRANSFORMAR SEU NEGÓCIO?</span>
        </h2>

        <p className="text-lg text-[#002432] opacity-80 font-['Schibsted_Grotesk-Medium'] max-w-[500px] mx-auto mb-10">
          Solicite seu orçamento personalizado e descubra como podemos impulsionar sua marca.
        </p>

        <div className="rounded-[30px] border-[3px] border-[#002432] shadow-[6px_6px_0px_#002432] bg-white p-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-5 h-5" />
              <Input
                className="h-[50px] pl-12 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] text-sm"
                placeholder="Nome"
              />
            </div>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-5 h-5" />
              <Input
                className="h-[50px] pl-12 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] text-sm"
                placeholder="Email"
                type="email"
              />
            </div>
          </div>

          <Button className="relative w-[653px] h-[60px] bg-[#1CD8C9] hover:bg-[#1CD8C9]/90 border-[3px] border-[#002432] rounded-full text-black shadow-[6px_6px_0px_#002432] hover:shadow-[10px_10px_0px_#002432] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 mx-auto">
            <div className="absolute left-4 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
              <div className="w-[33px] h-[33px] rounded-full bg-white flex items-center justify-center">
                <DollarSign className="w-4 h-5 text-[#1CD8C9]" />
              </div>
            </div>
            <span className="font-['Schibsted_Grotesk-Bold',Helvetica] font-bold text-xl">
              Solicitar meu orçamento
            </span>
          </Button>

          <div className="flex items-center justify-center gap-2 pt-4 text-sm text-[#002432] opacity-80">
            <Shield className="w-4 h-4 text-[#26c7b7]" />
            <p>
              Seus dados estão protegidos pela <strong>Lei Geral de Proteção de Dados</strong>
            </p>
          </div>
        </div>

        {/* Corrigido: botões com barrinha entre eles */}
        <div className="text-[#002432] opacity-70 cursor-pointer mt-6 flex justify-center items-center gap-4 text-sm">
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

        {/* Logo e contato */}
        <div className="mt-10">
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

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50"
          onClick={() => setModalOpen(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-[760px] w-full max-h-[80vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
              onClick={() => setModalOpen(null)}
              aria-label="Fechar modal"
            >
              ×
            </button>

            {modalContent[modalOpen]}
          </div>
        </div>
      )}
    </section>
  );
}
