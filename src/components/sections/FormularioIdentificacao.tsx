// src/components/FormularioIdentificacao.tsx
import React from "react";

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
  formState: FormState;
  onUpdate: (updates: Partial<FormState>) => void;
  onAbrirTermos?: () => void;
  onAbrirCookies?: () => void;
}

type RDStationType = {
  sendEvent: (eventName: string, data: FormData) => void;
};

export default function FormularioIdentificacao({
  formState,
  onUpdate,
  onAbrirCookies,
  onAbrirTermos,
}: Props) {
  const { formData, step } = formState;

  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    if (step === 1) {
      if (!formData.nome.trim()) newErrors.nome = "Nome obrigatório.";
      if (!/^[A-Za-zÀ-ú\s]{2,}$/.test(formData.nome)) newErrors.nome = "Use apenas letras e espaços.";
      if (!formData.email.trim()) newErrors.email = "E-mail obrigatório.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "E-mail inválido.";
      if (!formData.telefone.trim()) newErrors.telefone = "Telefone obrigatório.";
      if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(formData.telefone)) newErrors.telefone = "Formato: (99) 99999-9999";
      if (!formData.empresa.trim()) newErrors.empresa = "Empresa obrigatória.";
    }
    if (step === 2) {
      if (!formData.estado.trim()) newErrors.estado = "Estado obrigatório.";
      if (!formData.cidade.trim()) newErrors.cidade = "Cidade obrigatória.";
    }
    if (step === 3) {
      if (!formData.areaAtuacao.trim()) newErrors.areaAtuacao = "Área obrigatória.";
      if (!formData.porteEmpresa.trim()) newErrors.porteEmpresa = "Porte obrigatório.";
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
    },
    [formData, onUpdate]
  );

  const enviarParaRDStation = async () => {
    // 1. Envio pelo script (client-side)
    if (typeof window !== "undefined" && (window as Window & { RDStation?: RDStationType }).RDStation) {
      ((window as unknown) as Window & { RDStation: RDStationType }).RDStation.sendEvent("form_submitted", {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        empresa: formData.empresa,
        estado: formData.estado,
        cidade: formData.cidade,
        areaAtuacao: formData.areaAtuacao,
        porteEmpresa: formData.porteEmpresa,
        funcionarios: formData.funcionarios,
        mensagem: formData.mensagem,
        aceite: formData.aceite,
      });
    }

    // 2. Envio pela API de Conversões (server-side)
    try {
      await fetch("/api/rd-conversion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Erro ao enviar para RD Station API:", err);
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step === 3) {
        enviarParaRDStation();
      }
      onUpdate({ step: step + 1 });
    }
  };

  // ... resto do JSX original (sem alterações visuais)
  // 🔹 Mantenha seu código original de renderização abaixo
}
