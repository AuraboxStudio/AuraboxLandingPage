"use client";

import React from "react";
import { createClient } from '@supabase/supabase-js'

// Configuração do Supabase diretamente no componente
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

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

type RDStationType = {
  sendEvent: (eventName: string, data: any) => void;
};

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

  // VERSÃO CLIENT-SIDE para Netlify
  const enviarParaSupabase = async () => {
    console.log(">>> tentando enviar para supabase", formData); // 👈 debug
    try {
      const { data, error } = await supabase
        .from('formulario_identificacao')
        .insert([
          {
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
            empresa: formData.empresa,
            estado: formData.estado,
            cidade: formData.cidade,
            area_atuacao: formData.areaAtuacao,
            porte_empresa: formData.porteEmpresa,
            funcionarios: formData.funcionarios ? parseInt(formData.funcionarios) : null,
            mensagem: formData.mensagem,
            aceite: formData.aceite,
          }
        ])
        .select();

      if (error) {
        console.error('Erro ao enviar para Supabase:', error);
        throw new Error(`Erro do Supabase: ${error.message}`);
      }

      console.log('Dados enviados com sucesso para Supabase:', data);
      return data;
    } catch (error) {
      console.error('Erro ao salvar no Supabase:', error);
      throw error;
    }
  };

  // const enviarParaRDStation = async () => {
  //   // Script do RD (client-side)
  //   if (
  //     typeof window !== "undefined" &&
  //     (window as Window & { RDStation?: RDStationType }).RDStation
  //   ) {
  //     (window as Window & { RDStation: RDStationType }).RDStation.sendEvent(
  //       "form_submitted",
  //       {
  //         nome: formData.nome,
  //         email: formData.email,
  //         telefone: formData.telefone,
  //         empresa: formData.empresa,
  //         estado: formData.estado,
  //         cidade: formData.cidade,
  //         areaAtuacao: formData.areaAtuacao,
  //         porteEmpresa: formData.porteEmpresa,
  //         funcionarios: formData.funcionarios,
  //         mensagem: formData.mensagem,
  //         aceite: formData.aceite ? "Sim" : "Não",
  //       }
  //     );
  //   }

  //   // API de Conversões do RD Station (se existir)
  //   try {
  //     await fetch("/api/rd-conversion", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  //   } catch (err) {
  //     console.error("Erro ao enviar para RD Station API:", err);
  //     // Não quebra o fluxo se o RD falhar
  //   }
  // };

  const handleNext = async () => {
    if (validateStep()) {
      if (step === 3) {
        setIsSubmitting(true);
        try {
          // Tenta enviar para Supabase primeiro
          await enviarParaSupabase();
          
          // Depois tenta RD Station (não quebra se falhar)
          try {
            await enviarParaRDStation();
          } catch (rdError) {
            console.warn('RD Station falhou, mas Supabase foi salvo:', rdError);
          }
          
          // Avança para success
          onUpdate({ step: step + 1 });
        } catch (error) {
          console.error('Erro ao enviar formulário:', error);
          alert('Erro ao enviar formulário. Tente novamente.');
        } finally {
          setIsSubmitting(false);
        }
      } else {
        onUpdate({ step: step + 1 });
      }
    }
  };

  const handleBack = () => onUpdate({ step: step - 1 });

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
      {/* Etapas */}
      <div className="flex justify-between mb-8">
        {["Identificação", "Localização", "Informações"].map((label, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 ${
              step === i + 1 ? "text-[#26C7B7]" : "opacity-30"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                step === i + 1 ? "bg-[#26C7B7] text-white" : "bg-[#dfe5e5] text-white"
              }`}
            >
              {i + 1}
            </div>
            <span className="text-xl font-bold">{label}</span>
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-4">
          {["nome", "email", "telefone", "empresa"].map((field) => (
            <div key={field}>
              <label className="text-[#002432] block mb-1 capitalize">
                {field.replace(/([A-Z])/g, " $1")}*
              </label>
              <input
                type="text"
                name={field}
                value={(formData as any)[field]}
                onChange={(e) =>
                  handleChange(field as keyof FormData, e.target.value)
                }
                className={`w-full px-4 py-3 rounded-full border ${
                  errors[field] ? "border-red-500" : "border-gray-400"
                } bg-[#E3EAEA] text-[#002432] text-sm`}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-4">
          {["estado", "cidade"].map((field) => (
            <div key={field}>
              <label className="text-[#002432] block mb-1 capitalize">
                {field}*
              </label>
              <input
                type="text"
                name={field}
                value={(formData as any)[field]}
                onChange={(e) =>
                  handleChange(field as keyof FormData, e.target.value)
                }
                className={`w-full px-4 py-3 rounded-full border ${
                  errors[field] ? "border-red-500" : "border-gray-400"
                } bg-[#E3EAEA] text-[#002432] text-sm`}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <label className="text-[#002432] block mb-1">Área de atuação*</label>
            <input
              type="text"
              value={formData.areaAtuacao}
              onChange={(e) => handleChange("areaAtuacao", e.target.value)}
              className={`w-full px-4 py-3 rounded-full border ${
                errors.areaAtuacao ? "border-red-500" : "border-gray-400"
              } bg-[#E3EAEA] text-[#002432] text-sm`}
            />
            {errors.areaAtuacao && (
              <p className="text-red-500 text-xs mt-1">{errors.areaAtuacao}</p>
            )}
          </div>

          <div>
            <label className="text-[#002432] block mb-1">Porte da empresa*</label>
            <select
              value={formData.porteEmpresa}
              onChange={(e) => handleChange("porteEmpresa", e.target.value)}
              className={`w-full px-4 py-3 rounded-full border ${
                errors.porteEmpresa ? "border-red-500" : "border-gray-400"
              } bg-[#E3EAEA] text-[#002432] text-sm`}
            >
              <option value="">Selecione</option>
              <option value="MEI">MEI</option>
              <option value="Micro">Micro</option>
              <option value="Pequena">Pequena</option>
              <option value="Média">Média</option>
              <option value="Grande">Grande</option>
            </select>
            {errors.porteEmpresa && (
              <p className="text-red-500 text-xs mt-1">{errors.porteEmpresa}</p>
            )}
          </div>

          <div>
            <label className="text-[#002432] block mb-1">
              Número de funcionários
            </label>
            <input
              type="number"
              value={formData.funcionarios}
              onChange={(e) => handleChange("funcionarios", e.target.value)}
              className={`w-full px-4 py-3 rounded-full border ${
                errors.funcionarios ? "border-red-500" : "border-gray-400"
              } bg-[#E3EAEA] text-[#002432] text-sm`}
            />
            {errors.funcionarios && (
              <p className="text-red-500 text-xs mt-1">{errors.funcionarios}</p>
            )}
          </div>

          <div>
            <label className="text-[#002432] block mb-1">Mensagem</label>
            <textarea
              value={formData.mensagem}
              onChange={(e) => handleChange("mensagem", e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-gray-400 bg-[#E3EAEA] text-[#002432] text-sm min-h-[100px] resize-none"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={formData.aceite}
              onChange={(e) => handleChange("aceite", e.target.checked)}
              className="mt-1"
            />
            <p className="text-sm text-[#002432]">
              Declaro que li e concordo com os{" "}
              <a
                href="#"
                className="underline text-[#f78837]"
                onClick={(e) => {
                  e.preventDefault();
                  if (onAbrirTermos) onAbrirTermos();
                }}
              >
                Termos de Uso e Privacidade.*
              </a>
            </p>
          </div>
          {errors.aceite && (
            <p className="text-red-500 text-xs mt-1">{errors.aceite}</p>
          )}
        </div>
      )}

      {/* Navegação */}
      <div className="flex justify-between pt-6">
        {step > 1 && (
          <button
            onClick={handleBack}
            disabled={isSubmitting}
            className="bg-[#f78837] text-white text-lg px-8 py-2 rounded-full hover:bg-[#f78837]/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            voltar
          </button>
        )}
        <div className="flex-1" />
        <button
          onClick={handleNext}
          disabled={isSubmitting}
          className="bg-[#f78837] text-white text-lg px-8 py-2 rounded-full hover:bg-[#f78837]/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSubmitting && (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          )}
          {step === 3 ? (isSubmitting ? "Enviando..." : "Enviar") : "Próximo"}
        </button>
      </div>
    </div>
  );
}