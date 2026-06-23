"use client";
import { useState } from "react";
import { questions, QuizQuestion } from "@/data/questions";

type Topic = QuizQuestion["topic"];

const topicLabels: Record<Topic, { label: string; labelEs: string }> = {
  airway: { label: "Airway", labelEs: "Vía Aérea" },
  breathing: { label: "Breathing", labelEs: "Respiración" },
  circulation: { label: "Circulation", labelEs: "Circulación" },
  neuro: { label: "Neurological Deficit", labelEs: "Déficit Neurológico" },
  triage: { label: "Triage", labelEs: "Triage" },
};

export default function Quiz() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const topicQuestions = selectedTopic ? questions.filter((q) => q.topic === selectedTopic) : [];
  const currentQuestion = topicQuestions[currentIndex];

  function startTopic(topic: Topic) {
    setSelectedTopic(topic);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
  }

  function handleAnswer(index: number) {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === currentQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 >= topicQuestions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }

  function restart() {
    setSelectedTopic(null);
    setFinished(false);
  }

  if (!selectedTopic) {
    return (
      <div>
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Selecciona un tema para comenzar</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {(Object.keys(topicLabels) as Topic[]).map((topic) => {
            const count = questions.filter((q) => q.topic === topic).length;
            if (count === 0) return null;
            const { labelEs } = topicLabels[topic];
            return (
              <button
                key={topic}
                onClick={() => startTopic(topic)}
                className="flex flex-col items-center gap-2 p-4 bg-[#e8eef5] hover:bg-[#1E3A5F] hover:text-white rounded-xl transition-colors text-center border-2 border-transparent hover:border-[#1E3A5F]"
              >
                <span className="font-semibold text-sm">{labelEs}</span>
                <span className="text-xs opacity-70">{count} pregunta{count !== 1 ? "s" : ""}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / topicQuestions.length) * 100);
    const passed = pct >= 70;
    return (
      <div className="text-center py-6">
        <div className={`text-5xl mb-3`}>{passed ? "🎉" : "📚"}</div>
        <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
          {passed ? "¡Excelente trabajo!" : "Sigue practicando"}
        </h3>
        <p className="text-gray-600 mb-2">
          Puntaje: <span className="font-bold text-[#7D1A1A]">{score}</span> de {topicQuestions.length} ({pct}%)
        </p>
        <p className={`text-sm font-medium mb-6 ${passed ? "text-green-700" : "text-orange-600"}`}>
          {passed ? "Aprobado (≥70%)" : "No aprobado — puntaje mínimo requerido: 70%"}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => startTopic(selectedTopic)}
            className="px-5 py-2 bg-[#1E3A5F] text-white rounded-lg font-semibold hover:bg-[#152b46] transition-colors"
          >
            Reiniciar tema
          </button>
          <button
            onClick={restart}
            className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Elegir otro tema
          </button>
        </div>
      </div>
    );
  }

  const { labelEs } = topicLabels[selectedTopic];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#1E3A5F]">{labelEs}</span>
        </div>
        <div className="text-sm text-gray-500">
          Pregunta {currentIndex + 1} de {topicQuestions.length} · Puntaje: {score}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-5">
        <div
          className="bg-[#7D1A1A] h-2 rounded-full transition-all"
          style={{ width: `${((currentIndex) / topicQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <p className="text-gray-800 font-medium mb-4 leading-relaxed whitespace-pre-line text-sm">
        {currentQuestion.question}
      </p>

      {/* Options */}
      <div className="space-y-2 mb-4">
        {currentQuestion.options.map((option, i) => {
          let style = "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-800";
          if (showResult) {
            if (i === currentQuestion.correctIndex) {
              style = "border-green-500 bg-green-50 text-green-800 font-semibold";
            } else if (i === selectedAnswer) {
              style = "border-red-400 bg-red-50 text-red-700";
            } else {
              style = "border-gray-200 bg-gray-50 text-gray-400";
            }
          } else if (selectedAnswer === i) {
            style = "border-[#1E3A5F] bg-[#e8eef5] text-[#1E3A5F]";
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={showResult}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors text-sm ${style}`}
            >
              <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Rationale */}
      {showResult && (
        <div className={`p-4 rounded-lg mb-4 text-sm border-l-4 ${
          selectedAnswer === currentQuestion.correctIndex
            ? "bg-green-50 border-green-500 text-green-800"
            : "bg-orange-50 border-orange-400 text-orange-800"
        }`}>
          <p className="font-semibold mb-1">
            {selectedAnswer === currentQuestion.correctIndex ? "✓ Correcto" : "✗ Incorrecto"}
          </p>
          <p>{currentQuestion.rationale}</p>
        </div>
      )}

      <div className="flex gap-3 justify-between">
        <button onClick={restart} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
          ← Cambiar tema
        </button>
        {showResult && (
          <button
            onClick={handleNext}
            className="px-5 py-2 bg-[#7D1A1A] text-white rounded-lg font-semibold hover:bg-[#5c1212] transition-colors text-sm"
          >
            {currentIndex + 1 >= topicQuestions.length ? "Ver resultados" : "Siguiente →"}
          </button>
        )}
      </div>
    </div>
  );
}
