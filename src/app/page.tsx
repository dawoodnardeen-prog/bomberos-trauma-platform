import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    href: "/didactics",
    icon: "",
    title: "Didactics / Education",
    titleEs: "Didácticas / Educación",
    description:
      "Sigue los árboles de decisión clínica para vía aérea, respiración, circulación y déficit neurológico. Incluye contenido educativo y evaluaciones con preguntas de opción múltiple.",
    color: "burgundy" as const,
  },
  {
    href: "/notificacion",
    icon: "",
    title: "Pre-hospital Notification",
    titleEs: "Notificación Prehospitalaria",
    description:
      "Notifica al hospital receptor antes de la llegada del paciente. Completa el formulario de signos vitales y hallazgos, y genera un resumen de notificación listo para compartir.",
    color: "blue" as const,
  },
  {
    href: "/comunidad",
    icon: "",
    title: "Community of Practice",
    titleEs: "Comunidad de Práctica",
    description:
      "Publica casos clínicos con preguntas y recibe orientación de médicos de trauma. Construye aprendizaje compartido entre bomberos y personal hospitalario.",
    color: "burgundy" as const,
  },
  {
    href: "/registro",
    icon: "",
    title: "Trauma Registry",
    titleEs: "Registro de Trauma",
    description:
      "Ingresa datos prehospitalarios al registro de trauma de Guatemala. Apoya el mejoramiento de la calidad, la planificación del sistema de trauma y la investigación.",
    color: "blue" as const,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#7D1A1A] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            Guatemala · Atención Prehospitalaria de Trauma
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            RESPOND Guatemala
          </h1>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            Plataforma de apoyo para bomberos y socorristas en Guatemala que brindan atención prehospitalaria a pacientes de trauma.
          </p>
          <p className="text-white/65 text-sm max-w-xl mx-auto">
            Estandarizar la educación en trauma, la notificación prehospitalaria, la consulta clínica y el registro de datos para mejorar los resultados del paciente antes de la llegada al hospital.
          </p>
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-[#1E3A5F] text-white py-5 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-white">Atención Segura y Oportuna</span>
              <span className="text-white/70 text-xs">Mejorar la atención de trauma antes de la llegada al hospital</span>
            </div>
            <div className="flex flex-col items-center gap-1 sm:border-x sm:border-white/20">
              <span className="font-bold text-white">Comunicación Estandarizada</span>
              <span className="text-white/70 text-xs">Notificaciones claras entre bomberos y hospitales</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-bold text-white">Sistema de Trauma Fortalecido</span>
              <span className="text-white/70 text-xs">Registro de datos para investigación y mejora continua</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">Explorar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.href} {...f} />
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="bg-white border-t border-gray-100 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-bold text-[#1E3A5F] mb-3">Sobre esta plataforma</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Esta plataforma fue desarrollada para apoyar a los bomberos de Guatemala que proveen atención prehospitalaria a pacientes de trauma en contextos de bajos recursos. El currículo sigue el marco X-ABCD: Exsanguination, Vía Aérea, Respiración, Circulación y Déficit neurológico.
          </p>
          <p className="text-gray-500 text-xs">
            Esta herramienta apoya la atención clínica pero no reemplaza los protocolos locales, la dirección médica ni el juicio clínico en emergencias.
          </p>
        </div>
      </section>
    </div>
  );
}
