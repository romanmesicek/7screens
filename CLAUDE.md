# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Dokumentationspflicht

Dieses Projekt hat KEIN Gedächtnis zwischen Sessions.
Was nicht in den Dateien steht, existiert nicht.

### Regeln

1. **Sofort dokumentieren**: Jede Erkenntnis, Entscheidung,
   Statusänderung wird SOFORT in der zuständigen Datei festgehalten –
   nicht am Ende, nicht später, sondern als Teil der Aufgabe selbst.

2. **Keine mündlichen Vereinbarungen**: Wenn etwas besprochen oder
   entschieden wurde, ist es erst real, wenn es in einer .md-Datei steht.

3. **Status aktuell halten**: Nach jeder inhaltlichen Arbeit wird
   `DEVELOPMENT_ROADMAP.md` aktualisiert (Checkboxen, Phasen-Status).

4. **Entscheidungen begründen**: Jede nicht-triviale Entscheidung wird
   in `DECISIONS.md` protokolliert mit:
   - Datum
   - Kontext / Fragestellung
   - Optionen die erwogen wurden
   - Gewählte Option mit Begründung

5. **Selbstaktualisierung**: Wenn du (Claude) beim Arbeiten feststellst,
   dass eine Konvention, ein Pattern oder eine Erkenntnis noch nicht
   dokumentiert ist, ergänze die entsprechende Datei proaktiv.

### Vor jeder Aufgabe

Lies zuerst:
- `DEVELOPMENT_ROADMAP.md` (Gesamtstatus, aktuelle Phase)
- Die für die Aufgabe relevanten Dateien (siehe Dokumentation unten)
- `CLAUDE.md` (diese Datei)

### Nach jeder Aufgabe

- Aktualisiere betroffene Dateien
- Aktualisiere Checkboxen in `DEVELOPMENT_ROADMAP.md`
- Prüfe: Kann jemand, der nur die Dateien liest, den aktuellen
  Stand vollständig verstehen? Falls nein → nachbessern.

### Dokumenten-Zuständigkeit

| Thema | Datei |
|-------|-------|
| Implementierungsfortschritt | `DEVELOPMENT_ROADMAP.md` |
| Technische Architektur | `TECHNICAL_SPECS.md` |
| Design-System, Farben | `DESIGN_ASSETS.md` |
| Content der 35 Cards | `CONTENT_MODULES.md` |
| Projekt-Kontext, Zielgruppe | `PROJECT_OVERVIEW.md` |
| Quellenangaben | `CONTENT_SOURCES.md` |
| Architektur-Entscheidungen | `DECISIONS.md` |
| Entwicklungsiterationen | `PROJEKTVERLAUF.md` |

---

## Project Overview

SCOPE Schnellcheck is a German-language micro-learning app that teaches employees to evaluate AI projects using five sustainability dimensions (SCOPE AI Framework by Mesicek, 2025):

- **S** – Sufficiency: "Brauchen wir diese KI-Lösung überhaupt?"
- **C** – Carbon: "Wie hoch ist der ökologische Fußabdruck?"
- **O** – Outcomes: "Wem nützt es, wem schadet es?"
- **P** – Power: "Wer kontrolliert die KI?"
- **E** – Endurance: "Ist die Lösung langfristig tragfähig?"

Format: 5 modules × 7 screens = 35 cards, ~3 minutes per module, mobile-first (9:16 story format).

## Tech Stack

- **Framework:** React 18+ (TypeScript optional)
- **Styling:** Inline styles or CSS-in-JS (no external CSS files)
- **State:** React Hooks only (`useState`, `useEffect`) – no Redux/Context API
- **Fonts:** Google Fonts (Poppins, Inter)
- **Deployment:** Netlify (static site)
- **Viewport:** 390×700px base, max-width 480px container

## Build & Deploy Commands

```bash
# Local development
npm run dev

# Production build
npm run build

# Netlify CLI deploy (preview)
netlify deploy

# Netlify CLI deploy (production)
netlify deploy --prod
```

## Architecture

```
<App>
  ├── <ModuleSelector />          # Landing page with S/C/O/P/E selection
  └── <CardContainer>
        ├── <Watermark />          # Large letter background (240px, 6% opacity)
        ├── <ProgressBar />        # Module name + progress
        ├── <CardArea>             # 7 card types per module
        │     ├── <HookCard />     # Screen 1: Background image + headline
        │     ├── <ContentCard />  # Screen 2: Statistics/facts
        │     ├── <ConceptCard />  # Screen 3: Two-column comparison
        │     ├── <ExampleCard />  # Screen 4: Practical case study
        │     ├── <ActionCard />   # Screen 5: Interactive checklist
        │     ├── <QuizCard />     # Screen 6: Multiple choice with feedback
        │     └── <TakeawayCard /> # Screen 7: Key question + CTA
        └── <Navigation>           # Prev/Next + ProgressDots
```

## Module Color System

| Module | Hex |
|--------|-----|
| S (Sufficiency) | `#2563EB` (blue) |
| C (Carbon) | `#059669` (green) |
| O (Outcomes) | `#EA580C` (orange) |
| P (Power) | `#7C3AED` (violet) |
| E (Endurance) | `#0891B2` (cyan) |

Common: Background `#111827`, Text primary `#F9FAFB`, Text secondary `#9CA3AF`, Cards `#1F2937`

## Key Implementation Details

- **Navigation:** Touch swipe (50px threshold), keyboard (←→ Space), mouse click
- **Quiz:** Single selection per session, green (#059669) for correct, red (#DC2626) for incorrect, feedback text appears after selection
- **Checklist:** Session-persisted state, tap to toggle, bounce animation on check
- **Animations:** 300ms card transitions, 200ms quiz feedback, respect `prefers-reduced-motion`
- **Accessibility:** WCAG 2.1 AA contrast (4.5:1), visible focus states, ARIA labels, full keyboard navigation

## Content Structure

All 35 cards are documented in `CONTENT_MODULES.md`. Content is embedded as JavaScript objects (no external JSON loading).

## Sprachrichtlinien

**Grundvoraussetzungen für alle Texte:**

1. **Gewaltfreie Kommunikation (GFK)**
   - Keine Schuldzuweisungen oder Bewertungen von Personen
   - Fokus auf Beobachtungen und Bedürfnisse
   - Keine Suggestionen, die Schuld verschieben ("Beobachten Sie, wer ausweicht")

2. **Inklusive Sprache**
   - Genderneutrale Formulierungen (z.B. "Mitarbeitende", "Kund*innen")
   - Keine ausgrenzende oder diskriminierende Sprache
   - Keine "Jeder weiß..." oder "Normale Menschen..." Konstruktionen

3. **Algospeak-Prinzipien** (Attention-optimierte Texte)
   - Curiosity Gaps: Neugier wecken ohne alles sofort zu verraten
   - Spezifische Zahlen: "87%" statt "fast 90%"
   - Konkrete Beispiele mit Namen/Orten
   - Keine AI-Pattern-Wörter: "Moreover", "Furthermore", "crucial", "vital", "game-changing"

**Anti-Patterns (vermeiden):**
- ❌ "Beobachten Sie, wer ausweicht" → Suggestiv, schuldzuweisend
- ❌ "Schlechte Manager machen X" → Wertend
- ❌ "Jeder weiß, dass..." → Ausschließend
- ❌ "Das ist doch logisch" → Abwertend

**Gute Alternativen:**
- ✓ "Die Antworten zeigen, wo Klarheit fehlt"
- ✓ "Die Zahlen erzählen eine andere Geschichte"
- ✓ "Fragen Sie nach – die Antwort sagt mehr als jeder Bericht"

```typescript
interface Module {
  id: 'S' | 'C' | 'O' | 'P' | 'E';
  name: string;
  color: string;
  coreQuestion: string;
  cards: Card[];
}
```

## Development Phases

1. **Phase 1:** Implement Module S (prototype exists as reference)
2. **Phase 2:** Add remaining modules C, O, P, E with shared components
3. **Phase 3:** Accessibility, PDF export, optional analytics
4. **Phase 4:** Netlify deployment

## Documentation Files

- `PROJECT_OVERVIEW.md` – Target audience, format, tonality
- `CONTENT_MODULES.md` – All 35 cards with full German text
- `TECHNICAL_SPECS.md` – Component architecture, state management, animations
- `DESIGN_ASSETS.md` – Colors, typography, icons, image requirements
- `DEVELOPMENT_ROADMAP.md` – Phases, testing checklist, Netlify config
- `CONTENT_SOURCES.md` – Academic references
