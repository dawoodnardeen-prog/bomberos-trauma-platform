import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const steps = [
  {
    number: "1",
    actor: "Bombero / Socorrista",
    title: "Registro prehospitalario",
    desc: "El bombero ingresa los datos iniciales de atención prehospitalaria: mecanismo de lesión, signos vitales en campo, intervenciones realizadas, tiempo de respuesta y traslado.",
    color: "bg-[#7D1A1A]",
  },
  {
    number: "2",
    actor: "Registrador hospitalario",
    title: "Registro hospitalario",
    desc: "El personal del hospital receptor completa o actualiza los datos hospitalarios después de la llegada: diagnóstico, procedimientos, tiempo puerta-a-intervención, resultados y egreso.",
    color: "bg-[#1E3A5F]",
  },
  {
    number: "3",
    actor: "Equipo de Calidad",
    title: "Análisis y mejora continua",
    desc: "Los datos del registro se utilizan para análisis de calidad, identificación de brechas, planificación del sistema de trauma, y publicación de investigación.",
    color: "bg-gray-600",
  },
];

export default function RegistroPage() {
  return (
    <div>
      <PageHeader
        title="Registro de Trauma"
        subtitle="Herramienta de recolección de datos prehospitalarios y hospitalarios para el fortalecimiento del sistema de trauma en Guatemala."
        badge="Datos · Calidad · Investigación"
        color="blue"
        photo="/photos/registry.jpg"
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Main CTA */}
        <section className="bg-[#1E3A5F] text-white rounded-xl p-8 text-center shadow-md">
          <h2 className="font-bold text-xl mb-2">Acceder al Registro de Trauma</h2>
          <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto">
            El registro de trauma de Guatemala está disponible en la plataforma externa. Haz clic abajo para abrir el registro e ingresar datos del paciente.
          </p>
          <a
            href="https://www.respondtraumaregistry.com/es/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1E3A5F] font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors text-base shadow"
          >
            Abrir Registro de Trauma →
          </a>
          <p className="text-white/50 text-xs mt-4">
            Se abrirá en una nueva ventana: trauma-registry.vercel.app
          </p>
        </section>

        {/* Why it matters */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-bold text-[#7D1A1A] mb-3">¿Por qué es importante el registro?</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {[
              {
                title: "Mejoramiento de la calidad",
                desc: "Identifica brechas en la atención, mide tiempos de respuesta y evalúa adherencia a protocolos.",
              },
              {
                title: "Planificación del sistema",
                desc: "Datos sobre carga de trauma, mecanismos y geografía para planificar recursos y capacitaciones.",
              },
              {
                title: "Investigación y publicación",
                desc: "Apoya la producción de evidencia científica local sobre trauma prehospitalario en Guatemala.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#e8eef5] rounded-lg p-4">
                <p className="font-semibold text-[#1E3A5F] mb-1">{item.title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section>
          <h2 className="font-bold text-[#1E3A5F] mb-4">Flujo de trabajo del registro</h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className={`${step.color} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 mt-0.5`}>
                  {step.number}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{step.actor}</p>
                  <p className="font-bold text-gray-800 mb-1">{step.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What to enter */}
        <section className="bg-[#f5e8e8] border border-[#7D1A1A]/20 rounded-xl p-5">
          <h2 className="font-bold text-[#7D1A1A] mb-3">¿Qué datos debo ingresar como bombero?</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
            {[
              "Mecanismo de lesión",
              "Signos vitales en la escena",
              "Hallazgos del examen físico",
              "Lesiones identificadas",
              "Intervenciones realizadas",
              "Tiempo de llegada a la escena",
              "Tiempo de traslado / ETA",
              "Hospital receptor",
              "Nivel de triage asignado",
              "Nombre de la unidad / bombero",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#7D1A1A] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Privacy note */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-500">
          <strong className="text-gray-600">Aviso de privacidad:</strong> Los datos del paciente deben manejarse de acuerdo con las políticas clínicas e institucionales locales de Guatemala. El registro está diseñado para el seguimiento de casos de trauma con fines de calidad e investigación. No incluir información de identificación personal innecesaria.
        </div>

        {/* Back to notification */}
        <div className="text-center pt-2">
          <p className="text-gray-500 text-sm mb-3">¿Necesitas notificar al hospital antes de llegar?</p>
          <Link
            href="/notificacion"
            className="inline-block bg-[#7D1A1A] text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-[#5c1212] transition-colors text-sm"
          >
            Ir a Notificación Prehospitalaria
          </Link>
        </div>
      </div>
    </div>
  );
}
