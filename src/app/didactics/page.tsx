import PageHeader from "@/components/PageHeader";
import DecisionTreeViewer from "@/components/DecisionTreeViewer";
import Quiz from "@/components/Quiz";

export default function DidacticsPage() {
  return (
    <div>
      <PageHeader
        title="Didácticas / Educación"
        subtitle="Árboles de decisión clínica, contenido educativo y evaluaciones para la atención prehospitalaria de trauma. Sigue el marco X-ABCD."
        badge="Educación · Trauma Prehospitalario"
        color="burgundy"
      />

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {/* X-ABCD overview */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="font-bold text-[#7D1A1A] text-lg mb-3">Marco X-ABCD</h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            La evaluación y estabilización del paciente de trauma sigue el marco sistemático X-ABCD: control de <strong>Exsanguination</strong>, <strong>Vía Aérea</strong>, <strong>Respiración</strong>, <strong>Circulación</strong> y <strong>Déficit neurológico</strong>. Cada componente tiene un árbol de decisión que guía la evaluación y las intervenciones en campo.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { letter: "X", label: "Exsanguination", sub: "Control hemorragia" },
              { letter: "A", label: "Airway", sub: "Vía aérea" },
              { letter: "B", label: "Breathing", sub: "Respiración" },
              { letter: "C", label: "Circulation", sub: "Circulación" },
              { letter: "D", label: "Disability", sub: "Déficit neurológico" },
            ].map((item) => (
              <div key={item.letter} className="bg-[#f5e8e8] rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-[#7D1A1A]">{item.letter}</div>
                <div className="text-xs font-semibold text-gray-700 mt-1">{item.label}</div>
                <div className="text-xs text-gray-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Decision trees */}
        <section>
          <h2 className="font-bold text-[#7D1A1A] text-lg mb-1">Árboles de Decisión</h2>
          <p className="text-gray-500 text-sm mb-5">
            Selecciona un tema para ver el diagrama de flujo clínico, puntos clave y recursos de video educativo.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <DecisionTreeViewer />
          </div>
        </section>

        {/* Assessment */}
        <section>
          <h2 className="font-bold text-[#1E3A5F] text-lg mb-1">Evaluación / Autoevaluación</h2>
          <p className="text-gray-500 text-sm mb-5">
            Preguntas de opción múltiple por tema. Se requiere un puntaje mínimo de 70% para aprobar. Puedes reiniciar el tema en cualquier momento.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <Quiz />
          </div>
        </section>

        {/* Training structure */}
        <section className="bg-[#e8eef5] rounded-xl p-6">
          <h2 className="font-bold text-[#1E3A5F] mb-3">Estructura del Entrenamiento</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { step: "1", label: "Didácticas", desc: "Árboles de decisión y videos" },
              { step: "2", label: "Aprendizaje basado en casos", desc: "Preguntas de opción múltiple" },
              { step: "3", label: "Simulación", desc: "Práctica con un compañero" },
              { step: "4", label: "Examen", desc: "Puntaje mínimo requerido: 70%" },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-lg p-4 text-center border border-[#1E3A5F]/20">
                <div className="w-8 h-8 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-2">
                  {s.step}
                </div>
                <p className="font-semibold text-[#1E3A5F] text-sm">{s.label}</p>
                <p className="text-gray-500 text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
