// src/app/api/addToBrevo/route.ts
import { NextResponse, type NextRequest } from 'next/server';

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

// ⚙️ IDs das listas no .env
const LIST = {
  LEADS_SITE: Number(process.env.BREVO_LIST_LEADS_SITE || 0),
  CLIENTES: Number(process.env.BREVO_LIST_CLIENTES || 0), // opcional para futuro
};

// Função que retorna sempre a lista de Leads_Site
const getListIds = (): number[] => {
  return [LIST.LEADS_SITE].filter(Boolean); // só a lista principal
};

// Extrai nome/sobrenome
const parseNome = (nomeCompleto: string) => {
  const nomes = nomeCompleto.trim().split(' ');
  const firstname = nomes[0] || '';
  const lastname = nomes.slice(1).join(' ') || '';
  return { firstname, lastname };
};

// (opcional) envia email de boas-vindas
const enviarEmailBoasVindas = async (email: string, nome: string) => {
  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        templateId: 1, // ID do template padrão no Brevo
        to: [{ email, name: nome }],
        params: { NOME: nome },
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

// (opcional) dispara evento personalizado para automação
const criarAutomacao = async (email: string, formData: FormData) => {
  try {
    const response = await fetch('https://api.brevo.com/v3/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        event: 'FORMULARIO_PREENCHIDO',
        properties: {
          porte_empresa: formData.porteEmpresa,
          area_atuacao: formData.areaAtuacao,
          estado: formData.estado,
          tem_mensagem: !!formData.mensagem,
          data_evento: new Date().toISOString(),
        },
      }),
    });
    if (response.ok) {
      console.log('✅ Evento de automação criado para:', email);
    }
  } catch (error) {
    console.warn('⚠️ Erro ao criar evento de automação:', error);
  }
};

// O ÚNICO MÓDULO QUE PRECISA DE MUDANÇA É ESSE:
export async function POST(req: NextRequest) {
  try {
    const formData: FormData = await req.json();

    if (!formData.email || !formData.nome) {
      return NextResponse.json(
        { error: 'Email e nome são obrigatórios' },
        { status: 400 },
      );
    }

    const { firstname, lastname } = parseNome(formData.nome);
    const listIds = getListIds();

    // ➡️ AQUI ESTÁ A CORREÇÃO
    const cleanedPhoneNumber = formData.telefone.replace(/\D/g, ''); 
    const formattedPhoneNumber = `+55${cleanedPhoneNumber}`;

    const contactData: BrevoContact = {
      email: formData.email,
      attributes: {
        FIRSTNAME: firstname,
        LASTNAME: lastname,
        SMS: formattedPhoneNumber, // Use o número formatado
        COMPANY: formData.empresa,
        ESTADO: formData.estado,
        CIDADE: formData.cidade,
        AREA_ATUACAO: formData.areaAtuacao,
        PORTE_EMPRESA: formData.porteEmpresa,
        FUNCIONARIOS: formData.funcionarios ? parseInt(formData.funcionarios, 10) : undefined,
        MENSAGEM: formData.mensagem || undefined,
        DATA_CADASTRO: new Date().toISOString().split('T')[0],
      },
      listIds,
      updateEnabled: true,
    };

    console.log('📤 Enviando contato para Brevo:', { email: contactData.email, listas: listIds });

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
      if (response.status === 400 && responseData.code === 'duplicate_parameter') {
        console.log('🔄 Contato já existe, atualizando...');
        const updateResponse = await fetch(
          `https://api.brevo.com/v3/contacts/${encodeURIComponent(formData.email)}`,
          {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'api-key': process.env.BREVO_API_KEY!,
            },
            body: JSON.stringify({ attributes: contactData.attributes, listIds: contactData.listIds }),
          },
        );
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

    // Disparar automações em paralelo
    Promise.all([
      enviarEmailBoasVindas(formData.email, formData.nome),
      criarAutomacao(formData.email, formData),
    ]).catch((error) => console.warn('⚠️ Erro nas automações:', error));

    return NextResponse.json({
      success: true,
      message: 'Contato adicionado/atualizado com sucesso',
      lists: listIds,
      id: responseData.id || 'atualizado',
    });
  } catch (error: unknown) {
    console.error('❌ Erro na API do Brevo:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          typeof error === 'object' && error !== null && 'message' in error
            ? (error as { message?: string }).message || 'Erro interno do servidor'
            : 'Erro interno do servidor',
      },
      { status: 500 },
    );
  }
}