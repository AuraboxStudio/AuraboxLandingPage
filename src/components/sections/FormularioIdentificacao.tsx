// abaixo do componente principal ou em outro arquivo

import React, { useState } from "react";

export function FormularioIdentificacao() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
  const newErrors: { [key: string]: string } = {};

  // Nome: apenas letras e espaços, mínimo 2 caracteres
  if (!formData.nome.trim()) {
    newErrors.nome = "O nome é obrigatório.";
  } else if (!/^[A-Za-zÀ-ú\s]{2,}$/.test(formData.nome)) {
    newErrors.nome = "Use apenas letras e espaços. Mínimo 2 caracteres.";
  }

  // E-mail
  if (!formData.email.trim()) {
    newErrors.email = "O e-mail é obrigatório.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Digite um e-mail válido (ex: usuario@dominio.com).";
  }

  // Telefone: formato (99) 99999-9999
  if (!formData.telefone.trim()) {
    newErrors.telefone = "O telefone é obrigatório.";
  } else if (!/^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(formData.telefone)) {
    newErrors.telefone = "Formato válido: (99) 99999-9999.";
  }

  // Empresa: mínimo 2 caracteres, letras/números/&/,/.
  if (!formData.empresa.trim()) {
    newErrors.empresa = "O nome da empresa é obrigatório.";
  } else if (!/^[A-Za-z0-9À-ú\s&.,]{2,}$/.test(formData.empresa)) {
    newErrors.empresa = "Use apenas letras, números, espaços e & , .";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleNext = () => {
    if (validate()) {
      console.log("Dados válidos:", formData);
      // avançar para o próximo passo
    }
  };

  return (
    <div className="bg-white w-full rounded-[40px] p-10">
      <div className="flex justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#26C7B7] text-white font-bold flex items-center justify-center">1</div>
          <h2 className="text-[#26C7B7] text-xl font-bold">Identificação</h2>
        </div>
        <div className="flex items-center gap-6 opacity-30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#dfe5e5] text-white font-bold flex items-center justify-center">2</div>
            <span className="text-xl font-bold text-[#dfe5e5]">Localização</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#dfe5e5] text-white font-bold flex items-center justify-center">3</div>
            <span className="text-xl font-bold text-[#dfe5e5]">Informações</span>
          </div>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {[
          { label: "Nome*", name: "nome", placeholder: "Nome" },
          { label: "E-mail*", name: "email", placeholder: "Email@email.com" },
          { label: "Telefone*", name: "telefone", placeholder: "(00) 00000-0000" },
          { label: "Nome da Empresa*", name: "empresa", placeholder: "Empresa’s INC" },
        ].map((field, i) => (
          <div key={i}>
            <label className="text-[#002432] block mb-1">{field.label}</label>
            <input
              type="text"
              name={field.name}
              placeholder={field.placeholder}
              value={(formData as any)[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className={`w-full px-4 py-3 rounded-full border ${
                errors[field.name] ? "border-red-500" : "border-gray-400"
              } bg-[#E3EAEA] text-[#002432] text-sm focus:outline-none focus:ring-2 ${
                errors[field.name] ? "focus:ring-red-500" : "focus:ring-[#26C7B7]"
              }`}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="flex justify-end pt-6">
          <button
            type="button"
            className="bg-[#f78837] text-white text-lg px-8 py-2 rounded-full hover:bg-[#f78837]/90"
            onClick={handleNext}
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
}
