// src/app/api/addToBrevo/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, nome } = await request.json();

    // Validação básica
    if (!email || !nome) {
      return NextResponse.json(
        { success: false, error: "Email e nome são obrigatórios" },
        { status: 400 }
      );
    }

    // Verificar se a API key existe
    if (!process.env.BREVO_API_KEY) {
      console.error("❌ BREVO_API_KEY não encontrada nas variáveis de ambiente");
      return NextResponse.json(
        { success: false, error: "Configuração do servidor incompleta" },
        { status: 500 }
      );
    }

    console.log("📤 Enviando para Brevo:", { email, nome });

    // CONFIGURAÇÃO DAS LISTAS
    const LISTA_ID = process.env.BREVO_LIST_ID ? 
      parseInt(process.env.BREVO_LIST_ID) : 
      null; // Substitua por null se não quiser adicionar a nenhuma lista específica

    const dadosContato = {
      email,
      attributes: { 
        FIRSTNAME: nome || "",
        // Você pode adicionar mais atributos aqui:
        // LASTNAME: sobrenome || "",
        // SMS: telefone || "",
        // Etc...
      },
      updateEnabled: true, // Permite atualizar se o contato já existir
    };

    // Só adiciona listIds se o ID da lista estiver configurado
    if (LISTA_ID) {
      (dadosContato as any).listIds = [LISTA_ID];
      console.log(`📤 Adicionando à lista ID: ${LISTA_ID}`);
    } else {
      console.log("📤 Criando contato sem adicionar a lista específica");
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosContato),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Erro do Brevo:", data);
      
      // Tratar erros específicos do Brevo
      if (response.status === 400) {
        if (data.message?.includes("Contact already exist")) {
          console.log("ℹ️ Contato já existe, atualizando...");
          return NextResponse.json({ 
            success: true, 
            data,
            message: "Contato atualizado com sucesso" 
          });
        }
        
        if (data.message?.includes("list")) {
          console.error("❌ Erro relacionado à lista. Verifique o ID da lista.");
          return NextResponse.json(
            { success: false, error: "ID da lista inválido. Verifique a configuração." },
            { status: 400 }
          );
        }
      }
      
      return NextResponse.json(
        { success: false, error: data.message || "Erro ao adicionar contato no Brevo" },
        { status: response.status }
      );
    }

    console.log("✅ Contato adicionado ao Brevo com sucesso:", data);
    
    return NextResponse.json({ 
      success: true, 
      data,
      message: LISTA_ID ? `Contato adicionado à lista ${LISTA_ID}` : "Contato criado sem lista específica"
    });

  } catch (error: any) {
    console.error("❌ Erro geral na API do Brevo:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: "Erro interno do servidor",
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// Método GET para teste das configurações
export async function GET() {
  const LISTA_ID = process.env.BREVO_LIST_ID;
  const API_KEY_EXISTS = !!process.env.BREVO_API_KEY;
  
  return NextResponse.json({ 
    message: "API do Brevo funcionando",
    config: {
      apiKeyConfigured: API_KEY_EXISTS,
      listId: LISTA_ID || "Não configurado",
    },
    timestamp: new Date().toISOString()
  });
}