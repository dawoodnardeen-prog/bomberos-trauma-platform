import PageHeader from "@/components/PageHeader";
import CaseForum from "@/components/CaseForum";

export default function ComunidadPage() {
  return (
    <div>
      <PageHeader
        title="Comunidad de Práctica"
        subtitle="Foro clínico para la coordinación del equipo de trauma. Publica casos con preguntas clínicas y recibe orientación de especialistas."
        badge="Comunidad · Aprendizaje Compartido"
        color="burgundy"
        photo="/photos/community.jpg"
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Disclaimer */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 text-sm text-amber-800">
          <strong>Aviso clínico:</strong> Esta plataforma apoya la orientación clínica entre pares pero no reemplaza los protocolos locales, la dirección médica ni el juicio clínico en emergencias. No publiques información de identificación personal del paciente.
        </div>

        {/* How it works */}
        <section className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="font-bold text-[#7D1A1A] mb-3">¿Cómo funciona?</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {[
              {
                step: "1",
                title: "Publica un caso",
                desc: "Comparte el caso clínico con mecanismo, signos vitales y tu pregunta clínica.",
              },
              {
                step: "2",
                title: "Recibe orientación",
                desc: "Médicos de trauma y colegas bomberos responden con recomendaciones clínicas fundamentadas.",
              },
              {
                step: "3",
                title: "Aprende en comunidad",
                desc: "Los casos quedan como repositorio de aprendizaje compartido para toda la comunidad.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <div className="w-7 h-7 bg-[#7D1A1A] text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{s.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roles */}
        <div className="flex flex-wrap gap-3 text-xs">
          {[
            { role: "Bombero", style: "bg-[#f5e8e8] text-[#7D1A1A] border-[#7D1A1A]/30" },
            { role: "Médico de Trauma", style: "bg-[#e8eef5] text-[#1E3A5F] border-[#1E3A5F]/30" },
            { role: "Enfermera", style: "bg-purple-100 text-purple-700 border-purple-300" },
            { role: "Coordinador", style: "bg-gray-100 text-gray-600 border-gray-300" },
          ].map((r) => (
            <span key={r.role} className={`px-3 py-1 rounded-full border font-semibold ${r.style}`}>
              {r.role}
            </span>
          ))}
          <span className="text-gray-400 self-center text-xs ml-1">— roles disponibles en el foro</span>
        </div>

        {/* Forum */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <CaseForum />
        </div>

        {/* Future backend note */}
        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-4 text-xs text-gray-400">
          {/* TODO: Connect to Supabase / Firebase / Vercel Postgres for persistent case storage */}
          {/* TODO: Add authentication to restrict membership to local hospital and pre-hospital staff */}
          {/* TODO: Add moderation tools, image/document upload, search functionality */}
          Esta versión es un prototipo de frontend con estado local. Los datos no se guardan entre sesiones. Para persistencia, conectar a una base de datos como Supabase, Firebase o Vercel Postgres con autenticación de usuarios.
        </div>
      </div>
    </div>
  );
}
