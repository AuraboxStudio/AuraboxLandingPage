import React, { useState, useEffect } from "react";

interface Props {
  nomeInicial?: string;
  emailInicial?: string;
  onAbrirTermos?: () => void;
  onAbrirCookies?: () => void;
  // Adicionar callback para salvar dados quando o formulário muda
  onDadosAlterados?: (dados: any) => void;
  // Receber dados já preenchidos
  dadosIniciais?: any;
}

export default function FormularioIdentificacao({ 
  nomeInicial = "",
  emailInicial = "",
  onAbrirCookies,
  onAbrirTermos,
  onDadosAlterados,
  dadosIniciais,
 }: Props) {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: nomeInicial,
    email: emailInicial,
    telefone: "",
    empresa: "",
    estado: "",
    cidade: "",
    areaAtuacao: "",
    porteEmpresa: "",
    funcionarios: "",
    mensagem: "",
    aceite: false,
  });

  // Usar dados iniciais se fornecidos (preservar dados entre navegações)
  useEffect(() => {
    if (dadosIniciais) {
      setFormData(dadosIniciais);
    } else {
      setFormData(prev => ({
        ...prev,
        nome: nomeInicial,
        email: emailInicial,
      }));
    }
  }, [nomeInicial, emailInicial, dadosIniciais]);

  // Notificar o componente pai sempre que os dados mudarem
  useEffect(() => {
    if (onDadosAlterados) {
      onDadosAlterados({ formData, step });
    }
  }, [formData, step, onDadosAlterados]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleChange = (field: string, value: string | boolean) => {
    // Aplica máscara telefone
    if (field === "telefone" && typeof value === "string") {
      let digits = value.replace(/\D/g, "");
      if (digits.length > 11) digits = digits.slice(0, 11);
      if (digits.length > 10) {
        value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
      } else if (digits.length > 6) {
        value = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
      } else if (digits.length > 2) {
        value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      } else if (digits.length > 0) {
        value = `(${digits}`;
      }
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleNext = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  if (step === 4) {
    return (
      <div className="text-center py-10">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#26C7B7] rounded-full flex items-center justify-center">
            <span className="text-white text-3xl font-bold">✓</span>
          </div>
        </div>
        <h2 className="text-xl font-bold text-[#002432] mb-2">Tudo certo!</h2>
        <p className="text-[#002432]">Enviamos um e-mail confirmando sua solicitação.</p>
        <p className="text-[#002432]">Cheque sua caixa de entrada para mais informações.</p>
      </div>
    );
  }

  return (
    <div className="bg-white w-full rounded-[40px] p-10">
      <div className="flex justify-between mb-8">
        {["Identificação", "Localização", "Informações"].map((label, i) => (
          <div key={i} className={`flex items-center gap-2 ${step === i + 1 ? "text-[#26C7B7]" : "opacity-30"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
              step === i + 1 ? "bg-[#26C7B7] text-white" : "bg-[#dfe5e5] text-white"
            }`}>
              {i + 1}
            </div>
            <span className="text-xl font-bold">{label}</span>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          {["nome", "email", "telefone", "empresa"].map((field) => (
            <div key={field}>
              <label className="text-[#002432] block mb-1 capitalize">{field.replace(/([A-Z])/g, " $1")}*</label>
              <input
                type="text"
                name={field}
                value={(formData as any)[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                className={`w-full px-4 py-3 rounded-full border ${
                  errors[field] ? "border-red-500" : "border-gray-400"
                } bg-[#E3EAEA] text-[#002432] text-sm`}
              />
              {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          {["estado", "cidade"].map((field) => (
            <div key={field}>
              <label className="text-[#002432] block mb-1 capitalize">{field}*</label>
              <input
                type="text"
                name={field}
                value={(formData as any)[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                className={`w-full px-4 py-3 rounded-full border ${
                  errors[field] ? "border-red-500" : "border-gray-400"
                } bg-[#E3EAEA] text-[#002432] text-sm`}
              />
              {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}
        </div>
      )}

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
            {errors.areaAtuacao && <p className="text-red-500 text-xs mt-1">{errors.areaAtuacao}</p>}
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
            {errors.porteEmpresa && <p className="text-red-500 text-xs mt-1">{errors.porteEmpresa}</p>}
          </div>

          <div>
            <label className="text-[#002432] block mb-1">Número de funcionários</label>
            <input
              type="number"
              value={formData.funcionarios}
              onChange={(e) => handleChange("funcionarios", e.target.value)}
              className={`w-full px-4 py-3 rounded-full border ${
                errors.funcionarios ? "border-red-500" : "border-gray-400"
              } bg-[#E3EAEA] text-[#002432] text-sm`}
            />
            {errors.funcionarios && <p className="text-red-500 text-xs mt-1">{errors.funcionarios}</p>}
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
          {errors.aceite && <p className="text-red-500 text-xs mt-1">{errors.aceite}</p>}
        </div>
      )}

      <div className="flex justify-between pt-6">
        {step > 1 && (
          <button onClick={handleBack} className="bg-[#f78837] text-white text-lg px-8 py-2 rounded-full hover:bg-[#f78837]/90">
            voltar
          </button>
        )}
        <div className="flex-1" />
        <button onClick={handleNext} className="bg-[#f78837] text-white text-lg px-8 py-2 rounded-full hover:bg-[#f78837]/90">
          {step === 3 ? "Enviar" : "Próximo"}
        </button>
      </div>
    </div>
  );
}