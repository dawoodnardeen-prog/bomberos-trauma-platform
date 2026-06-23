"use client";
import { useState } from "react";

const mechanisms = [
  "Accidente en motocicleta",
  "Accidente automovilístico",
  "Caída de altura",
  "Herida por arma de fuego",
  "Herida por arma blanca",
  "Atropellamiento",
  "Trauma craneoencefálico",
  "Quemaduras",
  "Ahogamiento",
  "Otro",
];

const hospitals = [
  "Hospital Roosevelt",
  "Hospital General San Juan de Dios",
  "Hospital Nacional Pedro de Bethancourt",
  "Hospital Regional de Occidente",
  "Hospital Nacional de Chimaltenango",
  "Hospital Regional de Zacapa",
  "Otro",
];

const triageColors = [
  { value: "red", label: "🔴 Rojo — Crítico (Inmediato)", bg: "bg-red-50 border-red-400" },
  { value: "yellow", label: "🟡 Amarillo — Urgente", bg: "bg-yellow-50 border-yellow-400" },
  { value: "green", label: "🟢 Verde — Menor", bg: "bg-green-50 border-green-400" },
  { value: "black", label: "⚫ Negro — Expectante", bg: "bg-gray-100 border-gray-400" },
];

interface FormData {
  patientAge: string;
  patientGender: string;
  mechanism: string;
  heartRate: string;
  bloodPressure: string;
  respiratoryRate: string;
  oxygenSat: string;
  gcs: string;
  examFindings: string;
  suspectedInjuries: string;
  interventions: string;
  eta: string;
  hospital: string;
  unitInfo: string;
  triageLevel: string;
  notes: string;
}

const emptyForm: FormData = {
  patientAge: "",
  patientGender: "",
  mechanism: "",
  heartRate: "",
  bloodPressure: "",
  respiratoryRate: "",
  oxygenSat: "",
  gcs: "",
  examFindings: "",
  suspectedInjuries: "",
  interventions: "",
  eta: "",
  hospital: "",
  unitInfo: "",
  triageLevel: "",
  notes: "",
};

export default function NotificationForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function generateSummary() {
    const parts: string[] = [];
    if (form.patientAge || form.patientGender) {
      parts.push(
        `Paciente ${form.patientGender || "[género]"} de ${form.patientAge || "[edad]"} años`
      );
    }
    if (form.mechanism) parts.push(form.mechanism.toLowerCase());
    if (form.eta) parts.push(`ETA ${form.eta} minutos`);

    const vitals: string[] = [];
    if (form.respiratoryRate) vitals.push(`FR ${form.respiratoryRate}`);
    if (form.oxygenSat) vitals.push(`SpO2 ${form.oxygenSat}%`);
    if (form.heartRate) vitals.push(`FC ${form.heartRate}`);
    if (form.bloodPressure) vitals.push(`PA ${form.bloodPressure}`);
    if (form.gcs) vitals.push(`GCS ${form.gcs}`);
    if (vitals.length > 0) parts.push(vitals.join(", "));

    if (form.examFindings) parts.push(form.examFindings);
    if (form.suspectedInjuries) parts.push(`Sospecha: ${form.suspectedInjuries}`);
    if (form.interventions) parts.push(`Intervenciones: ${form.interventions}`);

    const triage = triageColors.find((t) => t.value === form.triageLevel);
    if (triage) parts.push(`Triage: ${triage.label.replace(/^[^ ]+ /, "")}`);

    parts.push("Solicita preparación del equipo de trauma.");

    if (form.hospital) parts.push(`Hospital receptor: ${form.hospital}.`);
    if (form.unitInfo) parts.push(`Unidad: ${form.unitInfo}.`);
    if (form.notes) parts.push(form.notes);

    setSummary(parts.join(". ").replace(/\.\./g, "."));
    setCopied(false);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div className="space-y-6">
      {/* Privacy note */}
      <div className="bg-[#e8eef5] border-l-4 border-[#1E3A5F] p-4 rounded-r-lg text-sm text-[#1E3A5F]">
        <strong>Aviso de privacidad:</strong> Los datos del paciente deben manejarse de acuerdo con las políticas clínicas e institucionales locales. No ingrese información de identificación personal en sistemas no autorizados.
      </div>

      {/* Patient info */}
      <section>
        <h3 className="font-bold text-[#7D1A1A] mb-3 text-sm uppercase tracking-wide">Información del Paciente</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Edad</label>
            <input type="number" placeholder="Ej. 32" value={form.patientAge} onChange={(e) => set("patientAge", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Sexo</label>
            <select value={form.patientGender} onChange={(e) => set("patientGender", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]">
              <option value="">Seleccionar</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>No especificado</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">Mecanismo de lesión</label>
            <select value={form.mechanism} onChange={(e) => set("mechanism", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]">
              <option value="">Seleccionar</option>
              {mechanisms.map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Triage */}
      <section>
        <h3 className="font-bold text-[#7D1A1A] mb-3 text-sm uppercase tracking-wide">Nivel de Triage</h3>
        <div className="grid grid-cols-2 gap-2">
          {triageColors.map((t) => (
            <label key={t.value} className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer text-sm transition-colors ${form.triageLevel === t.value ? t.bg : "border-gray-200 bg-white"}`}>
              <input type="radio" name="triage" value={t.value} checked={form.triageLevel === t.value} onChange={(e) => set("triageLevel", e.target.value)} className="accent-[#7D1A1A]" />
              {t.label}
            </label>
          ))}
        </div>
      </section>

      {/* Vitals */}
      <section>
        <h3 className="font-bold text-[#7D1A1A] mb-3 text-sm uppercase tracking-wide">Signos Vitales</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { field: "heartRate" as const, label: "Frecuencia cardíaca", placeholder: "Ej. 122 lpm" },
            { field: "bloodPressure" as const, label: "Presión arterial", placeholder: "Ej. 90/60 mmHg" },
            { field: "respiratoryRate" as const, label: "Frecuencia respiratoria", placeholder: "Ej. 28/min" },
            { field: "oxygenSat" as const, label: "SpO2 (%)", placeholder: "Ej. 91" },
            { field: "gcs" as const, label: "Glasgow (GCS)", placeholder: "3–15" },
          ].map(({ field, label, placeholder }) => (
            <div key={field}>
              <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
              <input type="text" placeholder={placeholder} value={form[field]} onChange={(e) => set(field, e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
            </div>
          ))}
        </div>
      </section>

      {/* Clinical */}
      <section>
        <h3 className="font-bold text-[#7D1A1A] mb-3 text-sm uppercase tracking-wide">Hallazgos Clínicos</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Hallazgos del examen físico</label>
            <textarea rows={2} placeholder="Ej. Vía aérea permeable, disminución de ruidos respiratorios en hemitórax derecho..." value={form.examFindings} onChange={(e) => set("examFindings", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Lesiones sospechadas</label>
            <textarea rows={2} placeholder="Ej. Sospecha de hemorragia interna, fractura de fémur derecho..." value={form.suspectedInjuries} onChange={(e) => set("suspectedInjuries", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Intervenciones realizadas</label>
            <textarea rows={2} placeholder="Ej. Oxígeno por mascarilla, torniquete en muslo derecho, inmovilización cervical..." value={form.interventions} onChange={(e) => set("interventions", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section>
        <h3 className="font-bold text-[#7D1A1A] mb-3 text-sm uppercase tracking-wide">Logística</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">ETA (minutos)</label>
            <input type="number" placeholder="Ej. 12" value={form.eta} onChange={(e) => set("eta", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Hospital receptor</label>
            <select value={form.hospital} onChange={(e) => set("hospital", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]">
              <option value="">Seleccionar</option>
              {hospitals.map((h) => <option key={h}>{h}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Unidad / Contacto</label>
            <input type="text" placeholder="Ej. Unidad B-17" value={form.unitInfo} onChange={(e) => set("unitInfo", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-xs font-medium text-gray-600 mb-1">Notas adicionales</label>
          <textarea rows={2} placeholder="Información adicional relevante..." value={form.notes} onChange={(e) => set("notes", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
        </div>
      </section>

      {/* Generate button */}
      <button
        onClick={generateSummary}
        className="w-full bg-[#7D1A1A] text-white font-bold py-3 rounded-xl hover:bg-[#5c1212] transition-colors"
      >
        Generar Resumen de Notificación
      </button>

      {/* Summary output */}
      {summary && (
        <div className="bg-[#f5e8e8] border-2 border-[#7D1A1A] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-[#7D1A1A] text-sm">Notificación Generada</h4>
            <button
              onClick={copyToClipboard}
              className={`text-xs px-3 py-1 rounded-lg font-semibold transition-colors ${copied ? "bg-green-600 text-white" : "bg-[#7D1A1A] text-white hover:bg-[#5c1212]"}`}
            >
              {copied ? "✓ Copiado" : "Copiar"}
            </button>
          </div>
          <p className="text-gray-800 text-sm leading-relaxed">{summary}</p>
          {/* Future backend note */}
          <p className="text-xs text-gray-400 mt-3 italic">
            {/* TODO: Connect to hospital notification system (push alert / SMS gateway) */}
            Este resumen es local. Para envío automático, conectar con sistema de alertas hospitalarias.
          </p>
        </div>
      )}
    </div>
  );
}
