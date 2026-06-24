import PageHeader from "@/components/PageHeader";
import NotificationForm from "@/components/NotificationForm";

export default function NotificacionPage() {
  return (
    <div>
      <PageHeader
        title="Notificación Prehospitalaria"
        subtitle="Alerta al hospital receptor antes de la llegada del paciente para mejorar la preparación del equipo de trauma."
        badge="Comunicación · Hospital-Prehospitalario"
        color="blue"
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Purpose */}
        <section className="bg-[#e8eef5] border-l-4 border-[#1E3A5F] rounded-r-xl p-5">
          <h2 className="font-bold text-[#1E3A5F] mb-2">¿Para qué sirve esta notificación?</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Esta notificación está diseñada para alertar al hospital <strong>antes de la llegada</strong> del paciente y mejorar la preparación del equipo de trauma. Una comunicación rápida, estandarizada y completa reduce el tiempo de respuesta hospitalaria y mejora los resultados del paciente.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-1">
            <li>• Permite al hospital activar al equipo de trauma con anticipación</li>
            <li>• Garantiza disponibilidad de quirófano, sangre y recursos críticos</li>
            <li>• Reduce el tiempo puerta-a-cirugía en casos graves</li>
            <li>• Mejora la coordinación entre prehospital y hospital</li>
          </ul>
        </section>

        {/* Example notification */}
        <section className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="font-bold text-[#7D1A1A] mb-3">Ejemplo de notificación</h2>
          <div className="bg-[#f5e8e8] rounded-lg p-4 text-sm text-gray-800 leading-relaxed italic border-l-4 border-[#7D1A1A]">
            &quot;Paciente masculino de 32 años, accidente en motocicleta, ETA 12 minutos. Vía aérea permeable. FR 28, SpO2 91%, FC 122, PA 90/60, GCS 13. Dolor torácico derecho; sospecha de neumotórax derecho y fractura de fémur derecho. Hemorragia de extremidad inferior derecha controlada, extremidad inferior derecha inmovilizada. Triage rojo. Solicita preparación del equipo de trauma.&quot;
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Este es un ejemplo de referencia. Utiliza el formulario abajo para generar la notificación personalizada del paciente.
          </p>
        </section>

        {/* Form */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="font-bold text-[#1E3A5F] mb-5">Formulario de Notificación</h2>
          <NotificationForm />
        </section>

        {/* Future integration note */}
        <section className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-5 text-sm text-gray-500">
          <p className="font-semibold text-gray-600 mb-1">Nota para desarrollo futuro</p>
          <p>
            {/* TODO: Integrate with hospital alert system — push notification to triage nurse portal */}
            Esta versión genera un resumen local copiable. En versiones futuras, este formulario podrá enviar notificaciones directamente al sistema del hospital receptor, incluyendo alertas push al personal de triage y generación automática de ETA con datos de ubicación GPS.
          </p>
        </section>
      </div>
    </div>
  );
}
