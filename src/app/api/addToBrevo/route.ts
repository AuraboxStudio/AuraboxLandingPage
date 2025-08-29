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

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: nome || "" },
        listIds: [1], // ID da sua lista no Brevo
        updateEnabled: true,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Erro do Brevo:", data);
      
      // Tratar erros específicos do Brevo
      if (response.status === 400 && data.message?.includes("Contact already exist")) {
        console.log("ℹ️ Contato já existe, atualizando...");
        return NextResponse.json({ 
          success: true, 
          data,
          message: "Contato atualizado com sucesso" 
        });
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
      message: "Contato adicionado com sucesso" 
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

// Método GET para teste (opcional)
export async function GET() {
  return NextResponse.json({ 
    message: "API do Brevo funcionando",
    timestamp: new Date().toISOString()
  });
}