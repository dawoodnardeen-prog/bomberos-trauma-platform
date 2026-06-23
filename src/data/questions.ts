export interface QuizQuestion {
  id: number;
  topic: "airway" | "breathing" | "circulation" | "neuro" | "triage";
  question: string;
  options: string[];
  correctIndex: number;
  rationale: string;
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    topic: "airway",
    question:
      "Un hombre de 28 años está inconsciente después de un accidente automovilístico. Tiene respiraciones gorgoteantes y sangre en la boca. ¿Cuál es su primera intervención?\n\nA 28-year-old male is found unresponsive after a motor vehicle collision. He has gurgling respirations and blood pooling in his mouth. What is your first intervention?",
    options: [
      "Aplicar mascarilla de no reinhalación a 15 L/min",
      "Realizar empuje mandibular y aspirar la vía aérea",
      "Iniciar compresiones torácicas",
    ],
    correctIndex: 1,
    rationale:
      "En un paciente de trauma inconsciente, el posicionamiento de la vía aérea (empuje mandibular para proteger la columna cervical) y la aspiración para despejar la vía aérea tienen prioridad antes de la oxigenación.",
  },
  {
    id: 2,
    topic: "breathing",
    question:
      "Evalúa un paciente de trauma y encuentra disminución de ruidos respiratorios en el lado izquierdo con una herida torácica abierta. ¿Cuál es la intervención más apropiada a nivel de EMT?\n\nYou assess a trauma patient and find decreased breath sounds on the left with an open chest wound. Which intervention is most appropriate at the EMT level?",
    options: [
      "Descompresión con aguja en el 2.° espacio intercostal",
      "Colocar al paciente en decúbito supino y aplicar vendaje compresivo",
      "Aplicar apósito oclusivo de 3 lados (ventilado) sobre la herida",
      "Administrar oxígeno de alto flujo y transportar de inmediato",
    ],
    correctIndex: 2,
    rationale:
      "Un apósito oclusivo de 3 lados permite que el aire salga durante la espiración y evita que entre durante la inspiración, previniendo un neumotórax a tensión. La descompresión con aguja generalmente excede el alcance del EMT básico.",
  },
  {
    id: 3,
    topic: "circulation",
    question:
      "Un trabajador de construcción tiene una laceración profunda en el muslo con sangrado rojo brillante y pulsátil que no cede con presión directa. ¿Cuál es el siguiente paso más apropiado?\n\nA construction worker has a deep laceration to his thigh with bright red, pulsatile bleeding that does not stop with direct pressure. What is the most appropriate next step?",
    options: [
      "Aplicar vendaje compresivo y elevar el miembro",
      "Empacar la herida con gasa y aplicar vendaje en figura de 8",
      "Aplicar torniquete proximal a la herida y anotar la hora",
      "Continuar presión directa por al menos 10 minutos antes de reevaluar",
    ],
    correctIndex: 2,
    rationale:
      "El sangrado pulsátil rojo brillante que no responde a presión directa indica hemorragia arterial. El torniquete es el tratamiento de primera línea para hemorragia de extremidades potencialmente mortal. Es esencial registrar la hora de aplicación.",
  },
  {
    id: 4,
    topic: "neuro",
    question:
      "Estás evaluando un paciente de trauma usando la escala AVDI. El paciente inicialmente parece inconsciente, pero despierta cuando escucha su nombre. ¿Cómo lo clasificarías?\n\nYou are assessing a trauma patient using the AVDI scale. The patient initially appears unconscious but wakes up when they hear their name. How would you categorize them?",
    options: [
      "A — verde (Alert)",
      "V — amarillo (Voice)",
      "I — rojo (Pain)",
      "D — negro (Unresponsive)",
    ],
    correctIndex: 1,
    rationale:
      "El paciente responde a estímulo verbal (su nombre), lo que corresponde a 'V' en la escala AVDI. Esto indica una alteración del estado mental que requiere atención rápida (amarillo en el sistema de triage de color).",
  },
  {
    id: 5,
    topic: "triage",
    question:
      "En un accidente con múltiples vehículos, encuentras los siguientes pacientes. Usando el sistema START de triage, ¿cuál paciente debe clasificarse como ROJO (inmediato)?\n\nAt a multi-vehicle crash, which patient should be classified RED (immediate) using START triage?",
    options: [
      "Paciente caminando que se queja de dolor en la muñeca",
      "Paciente sin pulso ni respiraciones después de reposicionar la vía aérea",
      "Paciente con FR 28, pulso radial débil y estado mental alterado",
      "Paciente con fractura cerrada de fémur, signos vitales normales y estado mental intacto",
    ],
    correctIndex: 2,
    rationale:
      "En START, ROJO (inmediato) = FR >30 O pulso radial ausente O estado mental alterado. Este paciente tiene los 3: FR 28 (borderline), pulso débil y alteración mental. El paciente sin signos vitales se clasifica negro (expectante).",
  },
];
