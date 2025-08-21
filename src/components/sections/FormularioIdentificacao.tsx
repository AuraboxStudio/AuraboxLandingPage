"use client";

import React, { useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

// Verificação das variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Variáveis de ambiente do Supabase não encontradas!');
}

// Configuração do Supabase com opções adicionais para Next.js
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Desabilita persistência para SSR
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  estado: string;
  cidade: string;
  areaAtuacao: string;
  porteEmpresa: string;
  funcionarios: string;
  mensagem: string;
  aceite: boolean;
}

interface FormState {
  formData: FormData;
  step: number;
}

interface Props {
  formState?: FormState;
  onUpdate: (updates: Partial<FormState>) => void;
  onAbrirTermos?: () => void;
  onAbrirCookies?: () => void;
}

const defaultFormData: FormData = {
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
};

export default function FormularioIdentificacao({
  formState,
  onUpdate,
  onAbrirCookies,
  onAbrirTermos,
}: Props) {
  const { formData, step } = formState ?? { formData: defaultFormData, step: 1 };
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Debug das variáveis de ambiente
  useEffect(() => {
    console.log('🔧 Debug Supabase:');
    console.log('🔧 URL:', supabaseUrl);
    console.log('🔧 Key exists:', !!supabaseAnonKey);
    console.log('🔧 Client:', supabase);
  }, []);

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (step === 1) {
      if (!formData.nome.trim()) newErrors.nome = "Nome obrigatório.";
      if (!/^[A-Za-zÀ-ú\s]{2,}$/.test(formData.nome))
        newErrors.nome = "Use apenas letras e espaços.";
      if (!formData.email.trim()) newErrors.email = "E-mail obrigatório.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = "E-mail inválido.";
      if (!formData.telefone.trim()) newErrors.telefone = "Telefone obrigatório.";
      if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(formData.telefone))
        newErrors.telefone = "Formato: (99) 99999-9999";
      if (!formData.empresa.trim()) newErrors.empresa = "Empresa obrigatória.";
    }
    if (step === 2) {
      if (!formData.estado.trim()) newErrors.estado = "Estado obrigatório.";
      if (!formData.cidade.trim()) newErrors.cidade = "Cidade obrigatória.";
    }
    if (step === 3) {
      if (!formData.areaAtuacao.trim())
        newErrors.areaAtuacao = "Área obrigatória.";
      if (!formData.porteEmpresa.trim())
        newErrors.porteEmpresa = "Porte obrigatório.";
      if (!formData.aceite) newErrors.aceite = "Você deve aceitar os termos.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = React.useCallback(
    (field: keyof FormData, value: string | boolean) => {
      let newValue = value;
      if (field === "telefone" && typeof value === "string") {
        let digits = value.replace(/\D/g, "");
        if (digits.length > 11) digits = digits.slice(0, 11);
        if (digits.length > 10) {
          newValue = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
        } else if (digits.length > 6) {
          newValue = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
        } else if (digits.length > 2) {
          newValue = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        } else if (digits.length > 0) {
          newValue = `(${digits}`;
        }
      }
      onUpdate({ formData: { ...formData, [field]: newValue } });
      setErrors((prev) => ({ ...prev, [field]: "" }));
    },
    [formData, onUpdate]
  );

  // Função melhorada para enviar para Supabase
  const enviarParaSupabase = async () => {
    console.log("📤 Iniciando envio para Supabase...");
    console.log("📤 Dados a serem enviados:", formData);
    
    try {
      // Preparar dados para inserção
      const dadosParaInserir = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        empresa: formData.empresa,
        estado: formData.estado,
        cidade: formData.cidade,
        area_atuacao: formData.areaAtuacao,
        porte_empresa: formData.porteEmpresa,
        funcionarios: formData.funcionarios ? parseInt(formData.funcionarios, 10) : null,
        mensagem: formData.mensagem,
        aceite: formData.aceite,
        created_at: new Date().toISOString()
      };

      console.log("📤 Dados formatados:", dadosParaInserir);

      // Tentar inserir no Supabase
      const { data, error } = await supabase
        .from('formulario_identificacao')
        .insert([dadosParaInserir])
        .select();

      if (error) {
        console.error('❌ Erro do Supabase:', error);
        throw new Error(`Erro do Supabase: ${error.message}`);
      }

      console.log('✅ Dados enviados com sucesso:', data);
      return data;
    } catch (error) {
      console.error('❌ Erro geral:', error);
      throw error;
    }
  };

  const handleNext = async () => {
    if (validateStep()) {
      if (step === 3) {
        setIsSubmitting(true);
        try {
          console.log("🚀 Iniciando processo de envio...");
          
          // Enviar para Supabase
          await enviarParaSupabase();
          
          console.log("✅ Formulário enviado com sucesso!");
          
          // Avançar para tela de sucesso
          onUpdate({ step: step + 1 });
        } catch (error) {
          console.error('❌ Erro ao enviar formulário:', error);
          
          // Mostrar erro mais específico para o usuário
          let mensagemErro = 'Erro ao enviar formulário. ';
          
          if (error instanceof Error) {
            if (error.message.includes('not found')) {
              mensagemErro += 'Tabela não encontrada no banco de dados.';
            } else if (error.message.includes('permission')) {
              mensagemErro += 'Problema de permissão no banco de dados.';
            } else if (error.message.includes('network')) {
              mensagemErro += 'Problema de conexão com o servidor.';
            } else {
              mensagemErro += error.message;
            }
          }
          
          alert(mensagemErro + ' Tente novamente.');
        } finally {
          setIsSubmitting(false);
        }
      } else {
        onUpdate({ step: step + 1 });
      }
    }
  };

  const handleBack = () => onUpdate({ step: step - 1 });

  // Resto do componente permanece igual...
  // [resto do código do formulário]
  
  if (step === 4) {
    return (
      <div className="text-center py-10">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#26C7B7] rounded-full flex items-center justify-center">
            <span className="text-white text-3xl font-bold">✓</span>
          </div>
        </div>
        <h2 className="text-xl font-bold text-[#002432] mb-2">Tudo certo!</h2>
        <p className="text-[#002432]">
          Enviamos um e-mail confirmando sua solicitação.
        </p>
        <p className="text-[#002432]">
          Cheque sua caixa de entrada para mais informações.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white w-full rounded-[40px] p-10">
      {/* Resto do JSX do formulário permanece igual... */}
      {/* [incluir todo o JSX existente] */}
    </div>
  );
}