# Bomberos Trauma Platform — Guatemala

**Scoop, Run, and Tell**

A web platform supporting Guatemalan bomberos/firefighters who provide prehospital trauma care. Built with Next.js, TypeScript, and Tailwind CSS, deployable on Vercel.

---

## Project Purpose

This platform standardizes:
- Trauma education (decision trees + assessments)
- Prehospital notification to receiving hospitals
- Clinical case discussion (community of practice)
- Trauma registry data entry

Target users: Guatemalan bomberos, EMTs, prehospital providers, trauma doctors, hospital staff.

---

## Pages / Features

| Route | Name | Description |
|-------|------|-------------|
| `/` | Home | Landing page with platform overview and navigation |
| `/didactics` | Didácticas / Educación | X-ABCD decision trees, flowchart images, MCQ assessments |
| `/notificacion` | Notificación Prehospitalaria | Notification form with auto-generated summary |
| `/comunidad` | Comunidad de Práctica | Forum for clinical case discussion |
| `/registro` | Registro de Trauma | Trauma registry workflow + link to external registry |

---

## How to Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## How to Deploy on Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the GitHub repo — framework is auto-detected as Next.js
4. Click **Deploy** — no additional configuration needed

Or use the Vercel CLI:
```bash
npx vercel
```

---

## How to Add / Edit Didactic Video Links

Open `src/data/didactics.ts`. Find the topic and update `videoPlaceholders`:

```ts
videoPlaceholders: [
  { label: "Video: Evaluación de vía aérea en trauma", url: "https://youtube.com/watch?v=XXXX" },
]
```

Replace `null` with the actual URL string.

---

## How to Add / Edit Multiple-Choice Questions

Open `src/data/questions.ts` and add to the `questions` array:

```ts
{
  id: 6,
  topic: "airway",  // "airway" | "breathing" | "circulation" | "neuro" | "triage"
  question: "Your question text here",
  options: ["Option A", "Option B", "Option C"],
  correctIndex: 1,  // 0-based index of correct option
  rationale: "Explanation shown after answering",
}
```

---

## How to Update Flowchart Images

Replace images in `public/flowcharts/`:
- `airway.jpg` — Airway decision tree
- `breathing.jpg` — Breathing decision tree
- `neuro1.jpg` / `neuro2.jpg` — Neurological deficit decision trees
- Circulation: add `circulation.jpg` and update `imagePath` in `src/data/didactics.ts`

---

## Where to Connect a Backend (Future)

| Feature | File | Suggested backend |
|---------|------|-------------------|
| Forum case persistence | `src/components/CaseForum.tsx` | Supabase, Firebase, Vercel Postgres |
| User authentication | Layout + middleware | NextAuth.js + Supabase |
| Hospital push alerts | `src/components/NotificationForm.tsx` | Twilio SMS / FCM push |
| Assessment score tracking | `src/components/Quiz.tsx` | Supabase or localStorage |

All integration points are marked with `// TODO:` comments in the relevant files.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (zero-config)

---

## Key Files

```
src/
  app/
    layout.tsx              Root layout (Navbar + Footer)
    page.tsx                Homepage
    didactics/page.tsx      Education page
    notificacion/page.tsx   Notification form
    comunidad/page.tsx      Community forum
    registro/page.tsx       Trauma registry
  components/
    Navbar.tsx
    Footer.tsx
    FeatureCard.tsx
    PageHeader.tsx
    DecisionTreeViewer.tsx
    Quiz.tsx
    NotificationForm.tsx
    CaseForum.tsx
  data/
    didactics.ts            Flowchart topics, key points, video placeholders
    questions.ts            MCQ questions by topic
    forumExamples.ts        Seeded forum case examples
public/
  flowcharts/
    airway.jpg
    breathing.jpg
    neuro1.jpg
    neuro2.jpg
```
