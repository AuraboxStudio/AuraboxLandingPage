// pages/api/addToBrevo.ts ou app/api/addToBrevo/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface FormData {
  email: string;
  nome: string;
  telefone: string;
  empresa: string;
  estado: string;
  cidade: string;
  areaAtuacao: string;
  porteEmpresa: string;
  funcionarios: string;
  mensagem: string;
}

interface BrevoContact {
  email: string;
  attributes: {
    FIRSTNAME: string;
    LASTNAME: string;
    SMS?: string;
    COMPANY?: string;
    ESTADO?: string;
    CIDADE?: string;
    AREA_ATUACAO?: string;
    PORTE_EMPRESA?: string;
    FUNCIONARIOS?: number;
    MENSAGEM?: string;
    DATA_CADASTRO?: string;
  };
  listIds: number[];
  updateEnabled: boolean;
}

// Configuração de listas por critérios
const getListIds = (formData: FormData): number[] => {
  const lists: number[] = [3]; // Lista principal
  
  // Segmentação automática por porte da empresa
  switch (formData.porteEmpresa) {
    case 'MEI':
      lists.push(2); // Lista MEI
      break;
    case 'Micro':
      lists.push(3); // Lista Micro Empresa
      break;
    case 'Pequena':
      lists.push(4); // Lista Pequena Empresa
      break;
    case 'Média':
      lists.push(5); // Lista Média Empresa
      break;
    case 'Grande':
      lists.push(6); // Lista Grande Empresa
      break;
  }
  
  // Segmentação por área de atuação
  const areaLower = formData.areaAtuacao.toLowerCase();
  if (areaLower.includes('ecommerce') || areaLower.includes('e-commerce')) {
    lists.push(10); // Lista E-commerce
  } else if (areaLower.includes('consultoria')) {
    lists.push(11); // Lista Consultoria
  } else if (areaLower.includes('saude') || areaLower.includes('saúde')) {
    lists.push(12); // Lista Saúde
  } else if (areaLower.includes('tecnologia') || areaLower.includes('tech')) {
    lists.push(13); // Lista Tecnologia
  }
  
  // Segmentação por região
  const regioesSudeste = ['são paulo', 'rio de janeiro', 'minas gerais', 'espírito santo'];
  const regioesSul = ['rio grande do sul', 'santa catarina', 'paraná'];
  const regioesNordeste = ['bahia', 'pernambuco', 'ceará', 'maranhão', 'paraíba', 'alagoas', 'sergipe', 'rio grande do norte', 'piauí'];
  
  const estadoLower = formData.estado.toLowerCase();
  if (regioesSudeste.some(estado => estadoLower.includes(estado))) {
    lists.push(20); // Lista Região Sudeste
  } else if (regioesSul.some(estado => estadoLower.includes(estado))) {
    lists.push(21); // Lista Região Sul
  } else if (regioesNordeste.some(estado => estadoLower.includes(estado))) {
    lists.push(22); // Lista Região Nordeste
  }
  
  return [...new Set(lists)]; // Remove duplicatas
};

// Função para extrair nome e sobrenome
const parseNome = (nomeCompleto: string) => {
  const nomes = nomeCompleto.trim().split(' ');
  const firstname = nomes[0] || '';
  const lastname = nomes.slice(1).join(' ') || '';
  return { firstname, lastname };
};

// Função para enviar email de boas-vindas personalizado
const enviarEmailBoasVindas = async (email: string, nome: string, porteEmpresa: string) => {
  const templateIds = {
    'MEI': 1, // Template para MEI
    'Micro': 2, // Template para Micro Empresa
    'Pequena': 3, // Template para Pequena Empresa
    'Média': 4, // Template para Média Empresa
    'Grande': 5, // Template para Grande Empresa
    'default': 6 // Template padrão
  };
  
  const templateId = templateIds[porteEmpresa as keyof typeof templateIds] || templateIds.default;
  
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        templateId: templateId,
        to: [{ email: email, name: nome }],
        params: {
          NOME: nome,
          PORTE_EMPRESA: porteEmpresa
        }
      }),
    });
    
    if (!response.ok) {
      console.warn('Falha ao enviar email de boas-vindas:', await response.text());
    } else {
      console.log('✅ Email de boas-vindas enviado para:', email);
    }
  } catch (error) {
    console.warn('⚠️ Erro ao enviar email de boas-vindas:', error);
  }
};

// Função para criar automação personalizada
const criarAutomacao = async (email: string, formData: FormData) => {
  // Criar evento personalizado para trigger de automações
  try {
    const response = await fetch('https://api.brevo.com/v3/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email: email,
        event: 'FORMULARIO_PREENCHIDO',
        properties: {
          porte_empresa: formData.porteEmpresa,
          area_atuacao: formData.areaAtuacao,
          estado: formData.estado,
          tem_mensagem: !!formData.mensagem,
          data_evento: new Date().toISOString()
        }
      }),
    });
    
    if (response.ok) {
      console.log('✅ Evento de automação criado para:', email);
    }
  } catch (error) {
    console.warn('⚠️ Erro ao criar evento de automação:', error);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }
  
  try {
    const formData: FormData = req.body;
    
    // Validação básica
    if (!formData.email || !formData.nome) {
      return res.status(400).json({ error: 'Email e nome são obrigatórios' });
    }
    
    // Preparar dados do contato
    const { firstname, lastname } = parseNome(formData.nome);
    const listIds = getListIds(formData);
    
    const contactData: BrevoContact = {
      email: formData.email,
      attributes: {
        FIRSTNAME: firstname,
        LASTNAME: lastname,
        SMS: formData.telefone.replace(/\D/g, ''), // Remove formatação
        COMPANY: formData.empresa,
        ESTADO: formData.estado,
        CIDADE: formData.cidade,
        AREA_ATUACAO: formData.areaAtuacao,
        PORTE_EMPRESA: formData.porteEmpresa,
        FUNCIONARIOS: formData.funcionarios ? parseInt(formData.funcionarios, 10) : undefined,
        MENSAGEM: formData.mensagem || undefined,
        DATA_CADASTRO: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      },
      listIds: listIds,
      updateEnabled: true, // Permite atualizar contato existente
    };
    
    console.log('📤 Enviando contato para Brevo:', {
      email: contactData.email,
      listas: listIds,
      porte: formData.porteEmpresa
    });
    
    // Criar/atualizar contato no Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify(contactData),
    });
    
    const responseData = await response.json();
    
    if (!response.ok) {
      // Se o contato já existe (código 400), tentar atualizar
      if (response.status === 400 && responseData.code === 'duplicate_parameter') {
        console.log('🔄 Contato já existe, atualizando...');
        
        const updateResponse = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(formData.email)}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': process.env.BREVO_API_KEY!,
          },
          body: JSON.stringify({
            attributes: contactData.attributes,
            listIds: contactData.listIds,
          }),
        });
        
        if (!updateResponse.ok) {
          const updateError = await updateResponse.json();
          throw new Error(`Erro ao atualizar contato: ${updateError.message}`);
        }
        
        console.log('✅ Contato atualizado no Brevo');
      } else {
        throw new Error(`Erro da API Brevo: ${responseData.message || response.statusText}`);
      }
    } else {
      console.log('✅ Novo contato criado no Brevo');
    }
    
    // Executar automações em paralelo (não bloqueante)
    Promise.all([
      enviarEmailBoasVindas(formData.email, formData.nome, formData.porteEmpresa),
      criarAutomacao(formData.email, formData)
    ]).catch(error => {
      console.warn('⚠️ Erro nas automações:', error);
    });
    
    return res.status(200).json({
      success: true,
      message: 'Contato adicionado/atualizado com sucesso',
      lists: listIds,
      id: responseData.id || 'atualizado'
    });
    
  } catch (error: unknown) {
    console.error('❌ Erro na API do Brevo:', error);
    return res.status(500).json({
      success: false,
      error: typeof error === 'object' && error !== null && 'message' in error
        ? (error as { message?: string }).message || 'Erro interno do servidor'
        : 'Erro interno do servidor'
    });
  }
}