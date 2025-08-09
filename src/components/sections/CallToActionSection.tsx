"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DollarSign, Mail, Shield, User } from "lucide-react";
import { FormularioIdentificacao } from "./FormularioIdentificacao";

export default function CallToActionSection() {
  const [modalOpen, setModalOpen] = useState<null | "termosServicos" | "cookies" | "formulario">(null);
  const [formDataParcial, setFormDataParcial] = useState({
    nome: "",
    email: "",
  });

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

        <h4 className="font-bold mt-6">6. Áreas Restritas</h4>

        <p>
          Áreas específicas deste site podem ser restritas ao acesso do usuário, e a Aurabox Studio pode estender essa restrição a todo o site, a qualquer momento e a seu exclusivo critério. Qualquer identificação de usuário, chave de segurança ou senha que você possua neste site é confidencial, sendo de sua responsabilidade mantê-las em sigilo.
        </p>

        <h4 className="font-bold mt-6">Links e Hyperlinks</h4>
        <p>
          7. A Aurabox Studio reserva-se o direito de solicitar a remoção de qualquer link criado por terceiros que redirecione para este site, e o usuário concorda em atender prontamente a tal solicitação. Ao continuar conectado ao nosso site, você concorda com os termos desta política de links.
        </p>
        <p>
          8. Podemos alterar os termos e condições desses direitos de vinculação a qualquer momento. Ao conectar-se continuamente ao nosso site, você concorda em se comprometer e seguir os termos desta política de links.
        </p>

        <h4 className="font-bold mt-6">Link para conteúdo de Terceiros</h4>
        <p>
          9. Este site pode conter links para sites ou aplicativos operados por terceiros. A Aurabox Studio não controla, endossa ou se responsabiliza por esses sites, aplicativos, seus conteúdos ou disponibilidade. O acesso a tais serviços de terceiros é feito por conta e risco do usuário, sendo o fornecedor terceirizado o único responsável por eventuais produtos ou serviços ofertados.
        </p>

        <h4 className="font-bold mt-6">Conteúdo do Usuário</h4>
        <p>
          10. “Conteúdo do Usuário” refere-se a qualquer áudio, vídeo, texto, imagem ou outro material que você decida exibir neste site. Ao publicar esse conteúdo, você concede à Aurabox Studio uma licença não exclusiva, mundial, irrevogável, isenta de royalties e sublicenciável para usar, reproduzir, adaptar, publicar, traduzir e distribuir esse conteúdo em qualquer mídia. O conteúdo deve ser de sua autoria e não pode infringir os direitos de terceiros. A Aurabox Studio reserva-se o direito de monitorar e remover qualquer conteúdo considerado inadequado, ofensivo ou ilegal.
        </p>

        <h4 className="font-bold mt-6">Solicitação de Orçamento</h4>
        <p>
          11. A Aurabox Studio disponibiliza, por meio deste site, um canal de contato para que os usuários possam enviar solicitações de orçamento. Ao preencher e enviar o formulário, o usuário declara que as informações fornecidas são verdadeiras e completas.
        </p>
        <p>
          12. A Aurabox Studio compromete-se a analisar e responder às solicitações de orçamento no prazo de até 15 (quinze) dias corridos. Caso não haja resposta nesse período, a empresa reserva-se o direito de não responder e isenta-se de qualquer obrigação legal de retorno.
        </p>
        <p>
          13. A Aurabox Studio poderá recusar ou ignorar, a seu exclusivo critério, solicitações que contenham informações falsas, linguagem ofensiva, ou que violem os presentes Termos, a legislação vigente ou interesses nossos. Nestes casos, a empresa não assume obrigação de justificar ou responder ao solicitante.
        </p>

        <h4 className="font-bold mt-6">Política de Privacidade</h4>
        <p>
          14. Ao acessar este site, determinadas informações sobre o usuário poderão ser coletadas, como endereço IP, tempo de navegação, software utilizado, entre outras. Dados pessoais como nome, e-mail e telefone também poderão ser coletados com finalidades estatísticas e de relacionamento. Tais dados serão tratados conforme a legislação vigente, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>

        <h4 className="font-bold mt-6">Tratamento de Dados Pessoais e Política de Privacidade</h4>

        <p>
          15. Ao aceitar estes Termos de Uso, o usuário manifesta seu consentimento para que a Aurabox Studio colete, armazene, trate e utilize os dados pessoais fornecidos voluntariamente, para fins de:
        </p>

        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Envio de comunicações institucionais e campanhas de marketing;</li>
          <li>Ações de relacionamento e publicidade personalizada;</li>
          <li>Análise estatística e melhoria de serviços;</li>
          <li>Resposta a contatos e solicitações comerciais;</li>
        </ul>

        <p>
          16. O tratamento dos dados ocorre com base no consentimento do titular (art. 7º, I da LGPD), podendo ser revogado a qualquer momento mediante solicitação ao e-mail: contato@aurabox.com.
        </p>

        <p>
          17. Os dados poderão ser compartilhados com parceiros terceiros que prestam serviços de hospedagem, CRM e automação, mediante contrato de confidencialidade e observância da LGPD.
        </p>

        <p>
          18. A Aurabox Studio adota medidas técnicas razoáveis para proteção dos dados. Não obstante, não se responsabiliza por vazamentos decorrentes de falhas de terceiros, ataques externos ou eventos fora de seu controle direto, desde que não haja dolo ou culpa direta da empresa.
        </p>

        <p>
          19. O usuário poderá exercer os direitos previstos no art. 18 da LGPD, como acesso, correção, exclusão, revogação do consentimento e portabilidade, mediante solicitação ao e-mail informado.
        </p>

        <p>
          20. O site é fornecido, com todas as responsabilidades e não assume compromissos, representações ou garantias expressas ou implícitas de qualquer tipo relacionada a este site ou ao conteúdo nele contido. A Aurabox Studio exime-se de toda e qualquer responsabilidade por perdas e danos de qualquer espécie, inclusive lucros cessantes, que decorram do uso ou da impossibilidade de uso do referido site, sendo o risco de utilização integralmente assumido pelo usuário.
        </p>

        <h4 className="font-bold mt-6">Indenização</h4>
        <p>
          21. O usuário concorda em indenizar a Aurabox Studio e suas afiliadas por qualquer prejuízo decorrente da utilização indevida deste site ou do descumprimento destes Termos.
        </p>

        <p>
          22. A Aurabox Studio reserva-se o direito de, sem aviso prévio, restringir ou encerrar o acesso de qualquer usuário que descumpra estes Termos ou a legislação vigente.
        </p>

        <h4 className="font-bold mt-6">Disposições Gerais</h4>

        <p>
          23. Estes Termos serão regidos pelas leis brasileiras, elegendo-se o foro da Comarca de Goiânia/GO para dirimir quaisquer controvérsias.
        </p>

        <p>
          24. A Aurabox Studio pode revisar os Termos de Uso a qualquer tempo, sendo responsabilidade do usuário consultá-los periodicamente.
        </p>

        <p>
          25. A Aurabox Studio reserva-se o direito de ceder, transferir e subcontratar seus direitos e/ou obrigações sob este Acordo sem qualquer notificação ou consentimento prévio necessário. Os usuários não terão permissão para atribuir, transferir ou subcontratar qualquer um de seus direitos e/ou obrigações sob estes Termos.
        </p>

        <p>
          26. Estes Termos representam o acordo integral entre a Aurabox Studio e o usuário. Caso alguma cláusula seja considerada inválida, isso não prejudicará qualquer disposição nele contida.
        </p>

        <p className="mt-4">
          27. Em caso de dúvidas, entre em contato pelo e-mail:{" "}
          <a href="mailto:comercial@auraboxstudio.com" className="underline text-[#1CD8C9] hover:text-[#0daaa0]">
            comercial@auraboxstudio.com
          </a>
        </p>

      </div>
    ),

    cookies: (
      <div className="text-[#002432] text-sm space-y-4 w-full max-w-none">

        <h3 className="text-xl font-bold text-[#26c7b7]">Política de Cookies – Aurabox Studio</h3>

        <p className="text-xs text-right italic text-gray-500">Última atualização: 01/07/2023</p>

        <h4 className="font-bold">1. INTRODUÇÃO</h4>

        <p>Esta Política de Cookies explica como a Aurabox Studio utiliza cookies e tecnologias similares para reconhecer o usuário quando visita seu site. A presente política está em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD) e demais normativos aplicáveis.</p>

        <h4 className="font-bold">2. O QUE SÃO COOKIES?</h4>

        <p>Cookies são arquivos de texto armazenados no dispositivo do usuário ao visitar um site, contendo pequenas quantidades de informações que permitem identificar preferências, hábitos de navegação e outras interações técnicas com a página acessada.</p>

        <h4 className="font-bold">3. QUAIS COOKIES UTILIZAMOS?</h4>

        <p>Abaixo estão listados os cookies utilizados, divididos por categorias conforme sua finalidade.</p>

        <h5 className="font-bold mt-6">3.1. Cookies Essenciais</h5>

        <div className="rounded-[40px] overflow-hidden mt-4">
          {/* Cabeçalho da Tabela */}
          <div className="bg-[#f78837] rounded-t-[40px] flex items-center py-2 px-3">
            {[
              { name: "Cookie", className: "flex-1" },
              { name: "Provedor", className: "flex-1" },
              { name: "Finalidade", className: "flex-1" },
              { name: "Duração", className: "w-[106px]" },
              { name: "Tipo", className: "w-[129px] text-center" },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.className} flex items-center ${item.name === "Tipo" ? "justify-center" : ""}`}
              >
                <div className="font-['Schibsted_Grotesk-Bold'] text-white text-sm tracking-[0] leading-normal w-fit">
                  {item.name}
                </div>
              </div>
            ))}
          </div>


          {/* Linhas da Tabela */}
          <div className="bg-white divide-y divide-gray-200 rounded-b-[40px] overflow-hidden text-base text-black">
            <div className="flex items-start p-4">
              <div className="flex-1">cookie_consent</div>
              <div className="flex-1">Aurabox</div>
              <div className="flex-1">Armazena preferências de consentimento</div>
              <div className="w-[106px]">12 meses</div>
              <div className="w-[129px] text-center">Essencial</div>
            </div>

            <div className="flex items-start p-4">
              <div className="flex-1">_ga</div>
              <div className="flex-1">Google</div>
              <div className="flex-1">Mede interações no site</div>
              <div className="w-[106px]">2 anos</div>
              <div className="w-[129px] text-center">Estatístico</div>
            </div>

            <div className="flex items-start p-4">
              <div className="flex-1">_gid</div>
              <div className="flex-1">Google</div>
              <div className="flex-1">Distingue usuários únicos</div>
              <div className="w-[106px]">24 horas</div>
              <div className="w-[129px] text-center">Estatístico</div>
            </div>
          </div>
        </div>


        <h5 className="font-bold">3.2.Cookies de Autenticação</h5>

        {/* Tabela de Cookies */}
        <div className="rounded-[40px] overflow-hidden mt-2">
          <div className="flex items-start bg-[#f5f5f5] p-4 font-bold">
            <div className="flex-1">Cookie</div>
            <div className="flex-1">Provedor</div>
            <div className="flex-1">Finalidade</div>
            <div className="w-[106px]">Duração</div>
            <div className="w-[129px] text-center">Tipo</div>
          </div>
          <div className="divide-y divide-gray-200 border border-t-0 rounded-b-[40px] overflow-hidden text-sm">
            <div className="flex items-start p-4">
              <div className="flex-1">oauth_token_*</div>
              <div className="flex-1">Google</div>
              <div className="flex-1">Login via conta Google (OAuth2.0)</div>
              <div className="w-[106px]">Sessão</div>
              <div className="w-[129px] text-center">3ª parte</div>
            </div>
            <div className="flex items-start p-4">
              <div className="flex-1">g_userinfo (var.)</div>
              <div className="flex-1">Google</div>
              <div className="flex-1">Armazena nome, email e foto</div>
              <div className="w-[106px]">Sessão</div>
              <div className="w-[129px] text-center">3ª parte</div>
            </div>
          </div>
        </div>

        <h5 className="font-bold">3.3.Cookies de Desempenho e Estatísticas</h5>

        {/* Tabela de Cookies */}
        <div className="rounded-[40px] overflow-hidden mt-2">
          <div className="flex items-start bg-[#f5f5f5] p-4 font-bold">
            <div className="flex-1">Cookie</div>
            <div className="flex-1">Provedor</div>
            <div className="flex-1">Finalidade</div>
            <div className="w-[106px]">Duração</div>
            <div className="w-[129px] text-center">Tipo</div>
          </div>
          <div className="divide-y divide-gray-200 border border-t-0 rounded-b-[40px] overflow-hidden text-sm">
            <div className="flex items-start p-4">
              <div className="flex-1">_ga</div>
              <div className="flex-1">Google Analytics 4</div>
              <div className="flex-1">Distinguir usuários únicos</div>
              <div className="w-[106px]">2 anos</div>
              <div className="w-[129px] text-center">3ª parte</div>
            </div>
            <div className="flex items-start p-4">
              <div className="flex-1">_ga_*</div>
              <div className="flex-1">Google Analytics 4</div>
              <div className="flex-1">Persistência de sessão</div>
              <div className="w-[106px]">1 ano</div>
              <div className="w-[129px] text-center">3ª parte</div>
            </div>
          </div>
        </div>

        <p>Para mais informações, consulte:</p>

        

      </div>
    ),

    formulario: (
      <FormularioIdentificacao
        nomeInicial={formDataParcial.nome}
        emailInicial={formDataParcial.email}
      />
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
                value={formDataParcial.nome}
                onChange={(e) => setFormDataParcial({ ...formDataParcial, nome: e.target.value })}
              />

            </div>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a7a7aa] w-5 h-5" />
              <Input
                className="h-[50px] pl-12 rounded-full bg-[#f5f5f5] border border-[#e0e0e0] text-sm"
                placeholder="Email"
                type="email"
                value={formDataParcial.email}
                onChange={(e) => setFormDataParcial({ ...formDataParcial, email: e.target.value })}
              />

            </div>
          </div>

          <Button
            className="relative w-[653px] h-[60px] bg-[#1CD8C9] hover:bg-[#1CD8C9]/90 border-[3px] border-[#002432] rounded-full text-black shadow-[6px_6px_0px_#002432] hover:shadow-[10px_10px_0px_#002432] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 mx-auto"
            onClick={() => setModalOpen("formulario")}
          >
            <div className="absolute left-4 w-8 h-8 rounded-full flex items-center justify-center bg-[#002432]">
              <div className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-[#1CD8C9]" />
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
          className="fixed inset-0 bg-white/20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setModalOpen(null)}
        >
          <div
            className="bg-white rounded-lg max-w-[800px] w-full max-h-[80vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl"
              onClick={() => setModalOpen(null)}
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