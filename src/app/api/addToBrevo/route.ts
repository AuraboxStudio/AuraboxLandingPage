// src/app/api/addToBrevo/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { 
      email, 
      nome, 
      telefone, 
      empresa, 
      estado, 
      cidade, 
      areaAtuacao, 
      porteEmpresa, 
      funcionarios, 
      mensagem 
    } = data;

    // Validação
    if (!email || !nome) {
      return NextResponse.json(
        { success: false, error: "Email e nome são obrigatórios" },
        { status: 400 }
      );
    }

    // Verificar API key
    if (!process.env.BREVO_API_KEY) {
      console.error("❌ BREVO_API_KEY não encontrada");
      return NextResponse.json(
        { success: false, error: "Configuração incompleta" },
        { status: 500 }
      );
    }

    console.log("📤 Enviando para Brevo:", { email, nome, empresa });

    // Dados para enviar ao Brevo
    const dadosBrevo = {
      email,
      attributes: { 
        FIRSTNAME: nome,
        SMS: telefone || "",
        EMPRESA: empresa || "",
        ESTADO: estado || "",
        CIDADE: cidade || "",
        AREA_ATUACAO: areaAtuacao || "",
        PORTE_EMPRESA: porteEmpresa || "",
        NUM_FUNCIONARIOS: funcionarios ? parseInt(funcionarios) : null,
        MENSAGEM: mensagem || "",
        DATA_CADASTRO: new Date().toISOString().split('T')[0],
        ORIGEM: "Website_FormularioOrcamento"
      },
      updateEnabled: true,
      listIds: [3]
    };

    // Enviar para Brevo
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosBrevo),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("❌ Erro do Brevo:", result);
      
      if (response.status === 400 && result.message?.includes("Contact already exist")) {
        console.log("ℹ️ Contato já existe, atualizando...");
        return NextResponse.json({ 
          success: true, 
          data: result,
          message: "Contato atualizado com sucesso" 
        });
      }
      
      return NextResponse.json(
        { success: false, error: result.message || "Erro no Brevo" },
        { status: response.status }
      );
    }

    console.log("✅ Contato adicionado ao Brevo:", result);
    
    return NextResponse.json({ 
      success: true, 
      data: result,
      message: "Contato adicionado à lista 3 com sucesso"
    });

  } catch (error) {
    console.error("❌ Erro geral:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Erro interno do servidor" 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: "API do Brevo funcionando",
    listId: 3,
    timestamp: new Date().toISOString()
  });
}