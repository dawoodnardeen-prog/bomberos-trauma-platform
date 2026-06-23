"use client";
import { useState } from "react";
import Image from "next/image";
import { didacticsTopics, TopicFlowchart } from "@/data/didactics";


export default function DecisionTreeViewer() {
  const [selected, setSelected] = useState<TopicFlowchart | null>(null);

  if (!selected) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {didacticsTopics.map((topic) => (
          <button
            key={topic.topic}
            onClick={() => setSelected(topic)}
            className="flex flex-col items-center gap-2 p-5 bg-white border-2 border-[#7D1A1A] rounded-xl hover:bg-[#f5e8e8] transition-colors text-center shadow-sm"
          >
            <span className="font-bold text-[#7D1A1A] text-sm">{topic.labelEs}</span>
            <span className="text-gray-400 text-xs">{topic.label}</span>
            {topic.isPending && (
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                Pendiente
              </span>
            )}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => setSelected(null)}
        className="text-sm text-[#7D1A1A] hover:underline mb-4 flex items-center gap-1"
      >
        ← Volver a todos los temas
      </button>

      <div className="flex items-center gap-3 mb-3">
        <div>
          <h3 className="font-bold text-xl text-[#7D1A1A]">{selected.labelEs}</h3>
          <p className="text-xs text-gray-400">{selected.label}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-5 leading-relaxed">{selected.description}</p>

      {/* Flowchart image(s) */}
      {selected.isPending ? (
        <div className="bg-orange-50 border-2 border-dashed border-orange-300 rounded-xl p-8 text-center mb-5">
          <p className="text-orange-600 font-semibold text-sm">
            🔧 Diagrama de flujo en desarrollo
          </p>
          <p className="text-orange-500 text-xs mt-1">
            El diagrama de circulación será actualizado próximamente.
          </p>
        </div>
      ) : (
        <div className="mb-5 space-y-4">
          {selected.imagePath && (
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 font-medium border-b border-gray-100">
                Diagrama de flujo — {selected.labelEs}
              </div>
              <div className="relative w-full" style={{ minHeight: "300px" }}>
                <Image
                  src={selected.imagePath}
                  alt={selected.imageAlt}
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          )}
          {/* Second neuro image if present */}
          {selected.topic === "neuro" && (
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 font-medium border-b border-gray-100">
                Diagrama de flujo — {selected.labelEs} (continuación)
              </div>
              <div className="relative w-full" style={{ minHeight: "300px" }}>
                <Image
                  src="/flowcharts/neuro2.jpg"
                  alt="Árbol de decisión neurológica parte 2"
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Key Points */}
      <div className="bg-[#f5e8e8] rounded-xl p-4 mb-5">
        <h4 className="font-bold text-[#7D1A1A] text-sm mb-2">Puntos Clave</h4>
        <ul className="space-y-1">
          {selected.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#7D1A1A] font-bold mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Video placeholders */}
      <div>
        <h4 className="font-bold text-[#1E3A5F] text-sm mb-3">Videos Educativos</h4>
        <div className="space-y-2">
          {selected.videoPlaceholders.map((v, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-3 rounded-lg border text-sm ${
                v.url
                  ? "bg-[#e8eef5] border-[#1E3A5F] cursor-pointer hover:bg-[#1E3A5F] hover:text-white"
                  : "bg-gray-50 border-gray-200 text-gray-400"
              }`}
            >
              <span className="text-lg">{v.url ? "▶️" : "🎬"}</span>
              <span className="flex-1">{v.label}</span>
              {v.url ? (
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-xs underline">
                  Ver video
                </a>
              ) : (
                <span className="text-xs italic">Enlace pendiente</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2 italic">
          * Los enlaces de video serán agregados próximamente. Editar en <code>src/data/didactics.ts</code>.
        </p>
      </div>
    </div>
  );
}
