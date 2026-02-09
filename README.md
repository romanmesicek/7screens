# 7 Screens – Lernen in 3 Minuten

Micro-Learning-App mit wissenschaftlich fundiertem 7-Screen-Format. Jeder Screen aktiviert einen eigenen Lernmechanismus – von Neugier wecken bis zum aktiven Abruf.

**Live:** `7screens.suska.app`

## Konzept

Das 7-Screen-Format komprimiert Lerninhalte in 7 aufeinander abgestimmte Screens (~3 Minuten pro Modul). Die App besteht aus zwei Decks:

### Deck 1: Das Format verstehen

1 Modul mit 7 Screens, das die Lernmechanismen hinter dem Format erklärt (Microlearning, Cognitive Load Theory, Testing Effect).

### Deck 2: SCOPE – KI nachhaltig bewerten

5 Module mit je 7 Screens zur Bewertung von KI-Projekten nach Nachhaltigkeitskriterien (SCOPE AI Framework, Mesicek 2025):

| Modul | Dimension | Kernfrage |
|-------|-----------|-----------|
| **S** | Sufficiency | Brauchen wir diese KI-Lösung überhaupt? |
| **C** | Carbon | Wie hoch ist der ökologische Fußabdruck? |
| **O** | Outcomes | Wem nützt es, wem schadet es? |
| **P** | Power | Wer kontrolliert die KI? |
| **E** | Endurance | Ist die Lösung langfristig tragfähig? |

## 7-Screen-Struktur

Jedes Modul folgt der gleichen Architektur:

| Screen | Typ | Lernmechanismus |
|--------|-----|-----------------|
| 1 | Hook | Curiosity Gap |
| 2 | Content | Cognitive Load Theory |
| 3 | Concept | Schema-Bildung |
| 4 | Example | Situated Learning |
| 5 | Action | Implementation Intentions |
| 6 | Quiz | Testing Effect |
| 7 | Takeaway | Recency-Effekt |

## Tech Stack

- **Framework:** React 18 + Vite 5
- **Styling:** CSS-in-JS (inline styles)
- **Fonts:** DM Sans, Source Sans 3
- **Deployment:** Netlify
- **Domain:** 7screens.suska.app

## Entwicklung

```bash
npm install
npm run dev       # Development Server
npm run build     # Production Build
```

## Credits

- **Content & Coding:** Roman Mesicek, 2026
- **Framework:** SCOPE AI Framework (Mesicek, 2025)
- **Bilder:** Unsplash (siehe `src/data/imageCredits.js`)
