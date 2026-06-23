export interface DecisionNode {
  id: string;
  question: string;
  yes?: string;
  no?: string;
  action?: string;
  isTerminal?: boolean;
  videoUrl?: string; // placeholder for future video links
  videoLabel?: string;
}

export interface TopicFlowchart {
  topic: "airway" | "breathing" | "circulation" | "neuro";
  label: string;
  labelEs: string;
  description: string;
  imagePath: string | null; // path relative to /public
  imageAlt: string;
  isPending?: boolean;
  keyPoints: string[];
  videoPlaceholders: { label: string; url: string | null }[];
}

export const didacticsTopics: TopicFlowchart[] = [
  {
    topic: "airway",
    label: "Airway",
    labelEs: "Vía Aérea",
    description:
      "Evaluación y manejo de la vía aérea en el paciente de trauma. El objetivo es identificar si la vía aérea es permeable, inestable o comprometida, y aplicar las intervenciones apropiadas.",
    imagePath: "/flowcharts/airway.jpg",
    imageAlt: "Árbol de decisión: Evaluación y manejo de vía aérea",
    keyPoints: [
      "¿Es la vía aérea permeable, inestable o comprometida?",
      "Estabilización: posicionamiento (empuje mandibular, elevación de mentón)",
      "Técnicas no invasivas primero (en paciente inconsciente/posición)",
      "Aspirar si hay sangre o secreciones",
      "Cánula orofaríngea/nasofaríngea según nivel de consciencia",
      "Proteger la columna cervical en todo momento",
    ],
    videoPlaceholders: [
      { label: "Video: Evaluación de vía aérea en trauma", url: null },
      { label: "Video: Técnica de empuje mandibular", url: null },
      { label: "Video: Inserción de cánula orofaríngea", url: null },
    ],
  },
  {
    topic: "breathing",
    label: "Breathing",
    labelEs: "Respiración",
    description:
      "Evaluación de la función respiratoria y manejo de lesiones torácicas. Incluye evaluación con y sin estetoscopio, y manejo de heridas torácicas abiertas.",
    imagePath: "/flowcharts/breathing.jpg",
    imageAlt: "Árbol de decisión: Evaluación y manejo de respiración",
    keyPoints: [
      "Evaluar frecuencia respiratoria, profundidad y simetría",
      "Auscultación bilateral (con o sin estetoscopio)",
      "Apósito oclusivo de 3 lados para herida torácica abierta",
      "Signos de neumotórax a tensión: DVY, desviación traqueal, hipotensión",
      "Oxígeno de alto flujo para SpO2 < 94%",
      "Posición semiincorporada si no hay contraindicación",
    ],
    videoPlaceholders: [
      { label: "Video: Evaluación respiratoria en trauma", url: null },
      { label: "Video: Aplicación de apósito de 3 lados", url: null },
      { label: "Video: Reconocimiento de neumotórax a tensión", url: null },
    ],
  },
  {
    topic: "circulation",
    label: "Circulation",
    labelEs: "Circulación",
    description:
      "Evaluación del estado circulatorio y manejo del shock hemorrágico. Incluye control de hemorragia externa, evaluación de signos vitales y reconocimiento de shock.",
    imagePath: null,
    imageAlt: "Árbol de decisión: Evaluación y manejo de circulación",
    isPending: true,
    keyPoints: [
      "Evaluar: ¿shock o no shock? (FC, PA, llenado capilar, estado mental)",
      "Control de hemorragia externa: presión directa → torniquete → empaquetamiento",
      "Anotar hora de aplicación del torniquete",
      "Signos de shock: FC >100, PA <90 sistólica, piel fría/pálida, alteración del sensorio",
      "Férula pélvica para fractura de pelvis inestable",
      "Inmovilización de fracturas de extremidades",
    ],
    videoPlaceholders: [
      { label: "Video: Evaluación del estado circulatorio", url: null },
      { label: "Video: Aplicación de torniquete", url: null },
      { label: "Video: Control de hemorragia por empaquetamiento", url: null },
      { label: "Video: Reconocimiento y manejo del shock", url: null },
    ],
  },
  {
    topic: "neuro",
    label: "Neurological Deficit",
    labelEs: "Déficit Neurológico",
    description:
      "Evaluación del estado neurológico y manejo del trauma craneoencefálico. Incluye escala de Glasgow (GCS), escala AVDI, y protección de la columna cervical.",
    imagePath: "/flowcharts/neuro1.jpg",
    imageAlt: "Árbol de decisión: Evaluación neurológica — parte 1",
    keyPoints: [
      "Escala AVDI: Alerta, Verbal, Dolor (Pain), Sin respuesta (Unresponsive)",
      "Glasgow Coma Scale (GCS): Ocular + Verbal + Motor (3–15)",
      "GCS ≤ 8: vía aérea en riesgo, manejo agresivo",
      "Inmovilización cervical en todo trauma con mecanismo significativo",
      "Signos de alarma: pupilas asimétricas, postura de decorticación/descerebración",
      "Manejo del casco: cuándo retirarlo y cómo hacerlo con dos personas",
    ],
    videoPlaceholders: [
      { label: "Video: Escala de Glasgow en campo", url: null },
      { label: "Video: Inmovilización cervical", url: null },
      { label: "Video: Manejo del casco en motociclista", url: null },
    ],
  },
];
