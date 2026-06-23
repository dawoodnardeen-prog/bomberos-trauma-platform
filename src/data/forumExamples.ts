export interface ForumReply {
  id: number;
  author: string;
  role: "Bombero" | "Médico de Trauma" | "Enfermera" | "Coordinador";
  content: string;
  timestamp: string;
}

export interface ForumCase {
  id: number;
  title: string;
  author: string;
  authorRole: "Bombero" | "Médico de Trauma" | "Enfermera" | "Coordinador";
  patientAge: number;
  patientGender: "Masculino" | "Femenino";
  mechanism: string;
  vitals: string;
  examFindings: string;
  clinicalQuestion: string;
  urgency: "Alta" | "Media" | "Baja";
  timestamp: string;
  replies: ForumReply[];
}

export const forumCases: ForumCase[] = [
  {
    id: 1,
    title: "Paciente con trauma torácico — ¿cuándo considerar neumotórax a tensión?",
    author: "Bombero Ramírez",
    authorRole: "Bombero",
    patientAge: 34,
    patientGender: "Masculino",
    mechanism: "Accidente en motocicleta a alta velocidad, impacto lateral",
    vitals: "FC: 128, PA: 88/60, FR: 32, SpO2: 87%, GCS: 14",
    examFindings:
      "Disminución de ruidos respiratorios en hemitórax derecho. Distensión venosa yugular. Tráquea ligeramente desviada a la izquierda. Herida penetrante pequeña en hemitórax derecho.",
    clinicalQuestion:
      "El paciente está descompensando rápidamente. Ya colocamos apósito oclusivo de 3 lados. ¿Cuándo está indicada la descompresión con aguja a nuestro nivel? ¿Cómo confirmamos neumotórax a tensión sin imagen?",
    urgency: "Alta",
    timestamp: "2026-06-20T14:32:00Z",
    replies: [
      {
        id: 1,
        author: "Dr. Morales",
        role: "Médico de Trauma",
        content:
          "Excelente presentación del caso. Con esa tríada clínica (disminución de ruidos, DVY, desviación traqueal) + hipotensión + desaturación después de apósito de 3 lados, el diagnóstico de neumotórax a tensión es clínico. No se debe esperar imagen. La descompresión con aguja en 2.° espacio intercostal, línea medioclavicular, está indicada ante descompensación hemodinámica confirmada. Bien hecho en colocar el apósito primero.",
        timestamp: "2026-06-20T15:10:00Z",
      },
      {
        id: 2,
        author: "Bombero López",
        role: "Bombero",
        content:
          "¿Y si después de la descompresión con aguja el paciente no mejora? ¿Qué más se puede hacer en campo?",
        timestamp: "2026-06-20T15:45:00Z",
      },
      {
        id: 3,
        author: "Dr. Morales",
        role: "Médico de Trauma",
        content:
          "Si no hay mejoría, considerar que la aguja puede haberse obstruido o que hay hemotórax asociado. En campo: mantener apósito oclusivo, posición semiincorporada si tolera, oxígeno de alto flujo, y traslado inmediato. El hemotórax masivo requiere drenaje en hospital. Prioridad: traslado rápido.",
        timestamp: "2026-06-20T16:00:00Z",
      },
    ],
  },
  {
    id: 2,
    title: "Control de hemorragia en herida de cuero cabelludo — ¿torniquete o empaquetamiento?",
    author: "Bombero Fuentes",
    authorRole: "Bombero",
    patientAge: 22,
    patientGender: "Femenino",
    mechanism: "Caída de altura aproximada 3 metros, impacto craneal",
    vitals: "FC: 110, PA: 102/70, FR: 20, SpO2: 98%, GCS: 12",
    examFindings:
      "Laceración de cuero cabelludo de ~8 cm con sangrado activo abundante. Sin deformidad craneal palpable. Paciente orientada pero confusa. Pupilas isocóricas reactivas.",
    clinicalQuestion:
      "El sangrado de cuero cabelludo es muy abundante. No podemos usar torniquete en la cabeza. ¿Cuál es la mejor técnica de empaquetamiento para esta zona y cuánta presión es segura con sospecha de fractura de cráneo?",
    urgency: "Media",
    timestamp: "2026-06-21T09:15:00Z",
    replies: [
      {
        id: 1,
        author: "Dra. Chen",
        role: "Médico de Trauma",
        content:
          "Buena pregunta. Para heridas de cuero cabelludo: presión directa firme con gasa es de primera línea. Si no cede, empaquetamiento hemostático (si disponible) con presión sostenida por 3 minutos. Evitar presión excesiva si hay sospecha de fractura deprimida — en ese caso presión circunferencial alrededor de la herida, no directamente sobre ella. Con GCS 12, priorizar traslado rápido para TC craneal.",
        timestamp: "2026-06-21T09:50:00Z",
      },
    ],
  },
  {
    id: 3,
    title: "Manejo de vía aérea en paciente con trauma facial severo",
    author: "Bombero Castillo",
    authorRole: "Bombero",
    patientAge: 45,
    patientGender: "Masculino",
    mechanism: "Agresión física, múltiples golpes en cara",
    vitals: "FC: 105, PA: 130/85, FR: 24, SpO2: 93%, GCS: 10",
    examFindings:
      "Trauma facial severo bilateral. Nariz fracturada con sangrado activo. Dientes fracturados en boca. Edema periorbital bilateral. Sangre y secreciones en orofaringe. Estridor audible.",
    clinicalQuestion:
      "Con trauma facial severo y estridor, ¿cuál es la mejor posición y técnica para mantener vía aérea permeable? ¿Está indicado cánula nasofaríngea con posible fractura de base de cráneo?",
    urgency: "Alta",
    timestamp: "2026-06-22T11:30:00Z",
    replies: [
      {
        id: 1,
        author: "Dr. Alvarado",
        role: "Médico de Trauma",
        content:
          "Con trauma facial severo y estridor, la vía aérea es la prioridad absoluta. Posición: sentado inclinado hacia adelante si está consciente y puede mantenerla (facilita drenaje de sangre). Aspiración continua. Cánula orofaríngea si tolera. Respecto a cánula nasofaríngea: contraindicada relativa si hay sospecha de fractura de base de cráneo (signos: ojos de mapache, signo de Battle, otorrea/rinorrea de LCR). Con GCS 10, prioridad máxima de traslado para manejo definitivo de vía aérea.",
        timestamp: "2026-06-22T12:05:00Z",
      },
    ],
  },
];
