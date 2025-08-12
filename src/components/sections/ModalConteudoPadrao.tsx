"use client";

import React from "react";
import { Button } from "../ui/button";

const renderCookiesTable = (rows: string[][]) => (
  <div className="overflow-hidden mt-4">
    {/* Cabeçalho */}
    <div className="bg-[#f78837] text-white font-bold text-sm flex items-center px-4 py-2 rounded-full">
      <div className="flex-1">Cookie</div>
      <div className="flex-1">Provedor</div>
      <div className="flex-1">Finalidade</div>
      <div className="w-[106px]">Duração</div>
      <div className="w-[129px] text-center">Tipo</div>
    </div>
    {/* Linhas */}
    <div className="mt-2 bg-white rounded-[40px] overflow-hidden divide-y divide-gray-200 border border-gray-200">
      {rows.map((row, idx) => (
        <div key={idx} className="flex items-start p-4">
          <div className="flex-1">{row[0]}</div>
          <div className="flex-1">{row[1]}</div>
          <div className="flex-1">{row[2]}</div>
          <div className="w-[106px]">{row[3]}</div>
          <div className="w-[129px] text-center">{row[4]}</div>
        </div>
      ))}
    </div>
  </div>
);

export const ModalConteudoPadrao = {
  termosServicos: (onClose?: () => void) => (
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

      <div className="flex justify-center mt-8">
        <Button onClick={onClose}>Fechar</Button>
      </div>
    </div>
  ),

  cookies: (onClose?: () => void) => (
    <div className="text-[#002432] text-sm space-y-4 w-full max-w-none">
      <h3 className="text-xl font-bold text-[#26c7b7]">
        Política de Cookies – Aurabox Studio
      </h3>
      <p className="text-xs text-right italic text-gray-500">
        Última atualização: 01/07/2023
      </p>

      <h4 className="font-bold">1. INTRODUÇÃO</h4>
      <p>
        Esta Política de Cookies explica como a Aurabox Studio utiliza cookies e
        tecnologias similares para reconhecer o usuário quando visita seu site.
        Esta política está em conformidade com a Lei nº 13.709/2018 (Lei Geral de
        Proteção de Dados – LGPD) e demais normativos aplicáveis.
      </p>

      <h4 className="font-bold">2. O QUE SÃO COOKIES?</h4>
      <p>
        Cookies são pequenos arquivos de texto armazenados no dispositivo do
        usuário ao visitar um site, contendo pequenas quantidades de informações
        que permitem identificar preferências, hábitos de navegação e outras
        interações técnicas com a página acessada.
      </p>

      <h4 className="font-bold">3. QUAIS COOKIES UTILIZAMOS?</h4>
      <p>
        Abaixo estão listados os cookies utilizados pela Aurabox Studio, divididos
        por categorias conforme sua finalidade.
      </p>

      <h5 className="font-bold mt-6">3.1. Cookies Essenciais</h5>
      {renderCookiesTable([
        ["cookie_consent", "Aurabox", "Armazena preferências de consentimento", "12 meses", "Essencial"],
        ["_ga", "Google", "Mede interações no site", "2 anos", "Estatístico"],
        ["_gid", "Google", "Distingue usuários únicos", "24 horas", "Estatístico"]
      ])}

      <h5 className="font-bold mt-6">3.2. Cookies de Autenticação</h5>
      {renderCookiesTable([
        ["oauth_token_*", "Google", "Login via conta Google (OAuth2.0)", "Sessão", "3ª parte"],
        ["g_userinfo (var.)", "Google", "Armazena nome, email e foto", "Sessão", "3ª parte"]
      ])}

      <h5 className="font-bold mt-6">3.3. Cookies de Desempenho e Estatísticas</h5>
      {renderCookiesTable([
        ["_ga", "Google Analytics 4", "Distinguir usuários únicos", "2 anos", "3ª parte"],
        ["_ga_*", "Google Analytics 4", "Persistência de sessão", "1 ano", "3ª parte"]
      ])}

      <h5 className="font-bold mt-6">3.4. Cookies Funcionais</h5>
      {renderCookiesTable([
        ["chat_widget", "Aurabox", "Exibir e manter histórico do chat de suporte", "Sessão", "Funcional"]
      ])}

      <h5 className="font-bold mt-6">3.5. Cookies de Marketing/Publicidade</h5>
      {renderCookiesTable([
        ["fr", "Facebook", "Entrega de anúncios relevantes", "3 meses", "3ª parte"],
        ["IDE", "Google Ads", "Entrega de anúncios personalizados", "1 ano", "3ª parte"]
      ])}

      <h4 className="font-bold mt-6">4. FORMULÁRIO DE CONTATO</h4>
      <p>
        O preenchimento do formulário de contato implica no fornecimento de dados
        pessoais que serão utilizados para responder à solicitação.
      </p>

      <h4 className="font-bold">5. GERENCIAMENTO DE COOKIES</h4>
      <p>
        O usuário pode, a qualquer momento, alterar suas preferências de cookies
        acessando as configurações do navegador ou as opções de gerenciamento
        disponibilizadas no site.
      </p>

      <h4 className="font-bold">6. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h4>
      <p>
        Alguns cookies podem gerar transferência internacional de dados. Nesses
        casos, a Aurabox Studio assegura que as transferências ocorrem com base em
        mecanismos legais reconhecidos.
      </p>

      <h4 className="font-bold">7. ATUALIZAÇÕES DESTA POLÍTICA</h4>
      <p>
        Esta Política poderá ser atualizada para refletir mudanças na utilização
        de cookies ou em requisitos legais.
      </p>

      <h4 className="font-bold">8. INFORMAÇÕES ADICIONAIS</h4>
      <p>
        Para informações adicionais sobre como tratamos seus dados pessoais,
        consulte nossa Política de Privacidade.
      </p>

      <h4 className="font-bold">9. DEFINIÇÕES</h4>
      <p>
        Para fins desta política: “Cookie” é um pequeno arquivo armazenado no
        navegador; “Provedor” é a entidade responsável; “Finalidade” descreve o
        objetivo; “Duração” é o tempo de retenção; e “Tipo” indica se é essencial,
        funcional ou de terceiros.
      </p>

      <h4 className="font-bold">10. CONTATO</h4>
      <p>
        Em caso de dúvidas, envie um e-mail para:{" "}
        <a href="mailto:comercial@auraboxstudio.com" className="underline text-[#1CD8C9]">
          comercial@auraboxstudio.com
        </a>
      </p>

      <div className="flex justify-center mt-8">
        <Button
          className="bg-[#f78837] hover:bg-[#f78837]/90 text-white rounded-full px-6 py-2"
          onClick={onClose}
        >
          Fechar
        </Button>
      </div>
    </div>
  ),
};