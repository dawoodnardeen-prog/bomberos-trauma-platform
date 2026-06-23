export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="text-center sm:text-left">
            <p className="font-semibold">Plataforma de Apoyo al Trauma Prehospitalario</p>
            <p className="text-white/70 text-xs mt-1">Guatemala · Atención Prehospitalaria de Trauma</p>
          </div>
          <div className="text-center sm:text-right text-white/70 text-xs">
            <p>Para uso por bomberos y personal de emergencias capacitado.</p>
            <p>No reemplaza protocolos locales ni dirección médica.</p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-4 pt-3 text-center text-xs text-white/50">
          Scoop, Run, and Tell · PGSSC Guatemala Trauma Initiative
        </div>
      </div>
    </footer>
  );
}
