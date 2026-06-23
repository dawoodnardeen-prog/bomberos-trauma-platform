"use client";
import { useState } from "react";
import { forumCases, ForumCase, ForumReply } from "@/data/forumExamples";

const urgencyStyles: Record<string, string> = {
  Alta: "bg-red-100 text-red-700 border-red-300",
  Media: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Baja: "bg-green-100 text-green-700 border-green-300",
};

const roleStyles: Record<string, string> = {
  Bombero: "bg-[#f5e8e8] text-[#7D1A1A]",
  "Médico de Trauma": "bg-[#e8eef5] text-[#1E3A5F]",
  Enfermera: "bg-purple-100 text-purple-700",
  Coordinador: "bg-gray-100 text-gray-600",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("es-GT", {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

interface NewCaseForm {
  title: string;
  patientAge: string;
  patientGender: string;
  mechanism: string;
  vitals: string;
  examFindings: string;
  clinicalQuestion: string;
  urgency: "Alta" | "Media" | "Baja";
}

export default function CaseForum() {
  const [cases, setCases] = useState<ForumCase[]>(forumCases);
  const [selectedCase, setSelectedCase] = useState<ForumCase | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replyRole, setReplyRole] = useState<ForumReply["role"]>("Bombero");
  const [replyAuthor, setReplyAuthor] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);
  const [newCase, setNewCase] = useState<NewCaseForm>({
    title: "", patientAge: "", patientGender: "", mechanism: "",
    vitals: "", examFindings: "", clinicalQuestion: "", urgency: "Media",
  });

  function setNew(field: keyof NewCaseForm, value: string) {
    setNewCase((f) => ({ ...f, [field]: value }));
  }

  function submitNewCase() {
    if (!newCase.title || !newCase.clinicalQuestion) return;
    const created: ForumCase = {
      id: cases.length + 1,
      title: newCase.title,
      author: "Bombero (Anónimo)",
      authorRole: "Bombero",
      patientAge: parseInt(newCase.patientAge) || 0,
      patientGender: newCase.patientGender as "Masculino" | "Femenino",
      mechanism: newCase.mechanism,
      vitals: newCase.vitals,
      examFindings: newCase.examFindings,
      clinicalQuestion: newCase.clinicalQuestion,
      urgency: newCase.urgency,
      timestamp: new Date().toISOString(),
      replies: [],
    };
    setCases([created, ...cases]);
    setShowNewForm(false);
    setNewCase({ title: "", patientAge: "", patientGender: "", mechanism: "", vitals: "", examFindings: "", clinicalQuestion: "", urgency: "Media" });
  }

  function submitReply(caseId: number) {
    if (!replyText.trim()) return;
    const reply: ForumReply = {
      id: Date.now(),
      author: replyAuthor || (replyRole === "Bombero" ? "Bombero (Anónimo)" : "Médico Consultor"),
      role: replyRole,
      content: replyText,
      timestamp: new Date().toISOString(),
    };
    const updated = cases.map((c) =>
      c.id === caseId ? { ...c, replies: [...c.replies, reply] } : c
    );
    setCases(updated);
    const updatedCase = updated.find((c) => c.id === caseId) || null;
    setSelectedCase(updatedCase);
    setReplyText("");
    setReplyAuthor("");
  }

  if (selectedCase) {
    const liveCase = cases.find((c) => c.id === selectedCase.id) || selectedCase;
    return (
      <div>
        <button onClick={() => setSelectedCase(null)} className="text-sm text-[#7D1A1A] hover:underline mb-4">
          ← Volver al foro
        </button>

        <div className="bg-white border-2 border-[#7D1A1A] rounded-xl p-5 mb-5">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h3 className="font-bold text-[#7D1A1A] text-lg flex-1">{liveCase.title}</h3>
            <span className={`text-xs px-2 py-1 rounded-full border font-semibold ${urgencyStyles[liveCase.urgency]}`}>
              {liveCase.urgency} urgencia
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
            <span className={`px-2 py-0.5 rounded-full font-semibold ${roleStyles[liveCase.authorRole]}`}>{liveCase.authorRole}</span>
            <span>{liveCase.author}</span>
            <span>·</span>
            <span>{formatDate(liveCase.timestamp)}</span>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            {[
              ["Paciente", `${liveCase.patientGender}, ${liveCase.patientAge} años`],
              ["Mecanismo", liveCase.mechanism],
              ["Signos vitales", liveCase.vitals],
              ["Hallazgos", liveCase.examFindings],
            ].map(([label, value]) => value ? (
              <div key={label} className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-400 font-medium mb-1">{label}</p>
                <p className="text-gray-700">{value}</p>
              </div>
            ) : null)}
          </div>

          <div className="mt-4 bg-[#e8eef5] rounded-lg p-3">
            <p className="text-xs text-[#1E3A5F] font-bold mb-1">Pregunta clínica</p>
            <p className="text-sm text-gray-700">{liveCase.clinicalQuestion}</p>
          </div>
        </div>

        {/* Replies */}
        <h4 className="font-bold text-[#1E3A5F] mb-3">Respuestas ({liveCase.replies.length})</h4>
        <div className="space-y-3 mb-5">
          {liveCase.replies.length === 0 && (
            <p className="text-gray-400 text-sm italic">Aún no hay respuestas. Sé el primero en responder.</p>
          )}
          {liveCase.replies.map((reply) => (
            <div key={reply.id} className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${roleStyles[reply.role]}`}>{reply.role}</span>
                <span className="text-sm font-medium text-gray-700">{reply.author}</span>
                <span className="text-xs text-gray-400">{formatDate(reply.timestamp)}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{reply.content}</p>
            </div>
          ))}
        </div>

        {/* Reply form */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <h4 className="font-bold text-sm text-gray-700 mb-3">Agregar respuesta</h4>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Nombre (opcional)</label>
              <input type="text" placeholder="Anónimo" value={replyAuthor} onChange={(e) => setReplyAuthor(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1E3A5F]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Rol</label>
              <select value={replyRole} onChange={(e) => setReplyRole(e.target.value as ForumReply["role"])}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1E3A5F]">
                <option>Bombero</option>
                <option>Médico de Trauma</option>
                <option>Enfermera</option>
                <option>Coordinador</option>
              </select>
            </div>
          </div>
          <textarea rows={3} placeholder="Escribe tu respuesta o recomendación clínica..." value={replyText} onChange={(e) => setReplyText(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1E3A5F] mb-3" />
          <button onClick={() => submitReply(liveCase.id)}
            disabled={!replyText.trim()}
            className="px-5 py-2 bg-[#1E3A5F] text-white rounded-lg text-sm font-semibold hover:bg-[#152b46] disabled:opacity-40 transition-colors">
            Enviar respuesta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <p className="text-sm text-gray-500">{cases.length} caso(s) publicado(s)</p>
        <button onClick={() => setShowNewForm(!showNewForm)}
          className="px-4 py-2 bg-[#7D1A1A] text-white rounded-lg text-sm font-semibold hover:bg-[#5c1212] transition-colors">
          {showNewForm ? "Cancelar" : "+ Publicar caso"}
        </button>
      </div>

      {/* New case form */}
      {showNewForm && (
        <div className="bg-[#f5e8e8] border-2 border-[#7D1A1A] rounded-xl p-5 mb-6">
          <h4 className="font-bold text-[#7D1A1A] mb-4">Nuevo caso clínico</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Título del caso *</label>
              <input type="text" placeholder="Describe brevemente el caso..." value={newCase.title} onChange={(e) => setNew("title", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Edad</label>
                <input type="number" placeholder="Años" value={newCase.patientAge} onChange={(e) => setNew("patientAge", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Sexo</label>
                <select value={newCase.patientGender} onChange={(e) => setNew("patientGender", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]">
                  <option value="">--</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Urgencia</label>
                <select value={newCase.urgency} onChange={(e) => setNew("urgency", e.target.value as "Alta" | "Media" | "Baja")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]">
                  <option>Alta</option>
                  <option>Media</option>
                  <option>Baja</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Mecanismo de lesión</label>
              <input type="text" placeholder="Ej. Accidente en motocicleta" value={newCase.mechanism} onChange={(e) => setNew("mechanism", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Signos vitales</label>
              <input type="text" placeholder="FC, PA, FR, SpO2, GCS..." value={newCase.vitals} onChange={(e) => setNew("vitals", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Hallazgos del examen</label>
              <textarea rows={2} placeholder="Hallazgos físicos relevantes..." value={newCase.examFindings} onChange={(e) => setNew("examFindings", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Pregunta clínica *</label>
              <textarea rows={2} placeholder="¿Qué decisión clínica o pregunta tienes sobre este caso?" value={newCase.clinicalQuestion} onChange={(e) => setNew("clinicalQuestion", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#7D1A1A]" />
            </div>
            <button onClick={submitNewCase} disabled={!newCase.title || !newCase.clinicalQuestion}
              className="px-5 py-2 bg-[#7D1A1A] text-white rounded-lg text-sm font-semibold hover:bg-[#5c1212] disabled:opacity-40 transition-colors">
              Publicar caso
            </button>
          </div>
        </div>
      )}

      {/* Case list */}
      <div className="space-y-4">
        {cases.map((c) => (
          <button key={c.id} onClick={() => setSelectedCase(c)}
            className="w-full text-left bg-white border border-gray-200 hover:border-[#7D1A1A] rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <h4 className="font-semibold text-gray-800 text-sm flex-1">{c.title}</h4>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold shrink-0 ${urgencyStyles[c.urgency]}`}>
                {c.urgency}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-xs text-gray-400 flex-wrap">
              <span className={`px-2 py-0.5 rounded-full font-semibold ${roleStyles[c.authorRole]}`}>{c.authorRole}</span>
              <span>{c.patientGender}, {c.patientAge} años · {c.mechanism}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 line-clamp-2">{c.clinicalQuestion}</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
              <span>💬 {c.replies.length} respuesta{c.replies.length !== 1 ? "s" : ""}</span>
              <span>{formatDate(c.timestamp)}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
