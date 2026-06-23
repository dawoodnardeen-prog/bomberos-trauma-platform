# Bomberos Trauma Platform — Claude Code Context

## What this project is
A Next.js 15 + TypeScript + Tailwind CSS web app for Guatemalan bomberos (firefighters) providing prehospital trauma care. The platform is called **"Scoop, Run, and Tell"** and is part of the PGSSC Guatemala initiative.

**Live repo:** https://github.com/dawoodnardeen-prog/bomberos-trauma-platform  
**External trauma registry:** https://trauma-registry.vercel.app  
**Deploy target:** Vercel (zero-config)

## Pages
- `/` — Homepage with 4 feature cards
- `/didactics` — X-ABCD decision trees + MCQ quiz
- `/notificacion` — Prehospital notification form
- `/comunidad` — Community of practice forum
- `/registro` — Trauma registry workflow + external link

## Key files to edit for content changes
| What to change | File |
|---|---|
| Add/edit video links | `src/data/didactics.ts` → `videoPlaceholders[].url` |
| Add/edit MCQ questions | `src/data/questions.ts` |
| Add/edit forum example cases | `src/data/forumExamples.ts` |
| Add circulation flowchart | `public/flowcharts/circulation.jpg` + update `src/data/didactics.ts` |
| Edit notification form fields | `src/components/NotificationForm.tsx` |
| Edit hospitals list | `src/components/NotificationForm.tsx` → `hospitals` array |

## Flowchart images (extracted from source docx)
- `public/flowcharts/airway.jpg`
- `public/flowcharts/breathing.jpg`
- `public/flowcharts/neuro1.jpg` + `neuro2.jpg`
- Circulation: **pending** (marked in UI, add image when available)

## Source documents (on local machine)
- `~/Desktop/PGSSC/Guatemala/Guatemala App Features.docx` — feature requirements
- `~/Desktop/PGSSC/Guatemala/DIDACTICS FLOWCHARTS.docx` — flowchart images source
- `~/Desktop/PGSSC/Guatemala/Bombero Sample MCQ.docx` — sample quiz questions

## Design system
- Burgundy: `#7D1A1A` (primary, medical/fire)
- Blue: `#1E3A5F` (secondary, institutional)
- Background: `#f9f7f7`
- No emoji icons in UI (user preference)
- Spanish-language labels, English code/comments

## Future backend integration points
All marked with `// TODO:` comments in component files:
- Forum persistence → Supabase / Firebase / Vercel Postgres
- Auth → NextAuth.js
- Hospital push alerts → Twilio / FCM
- Quiz score tracking → Supabase or localStorage

## Commands
```bash
npm run dev     # local dev server
npm run build   # production build check
npm run lint    # ESLint
```
