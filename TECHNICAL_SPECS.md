# SCOPE Schnellcheck – Technical Specifications

## Architektur

### Stack

- **Framework:** React 18+ mit TypeScript (optional, JavaScript akzeptabel)
- **Build:** Kein Build-Step erforderlich; Standalone-HTML-Export als Option
- **Styling:** Inline Styles oder CSS-in-JS (für Portabilität, keine externen CSS-Dateien)
- **Animationen:** CSS-basiert (bessere Performance als JS-Animationen)
- **State:** React Hooks (`useState`, `useEffect`) – kein Redux, kein Context API nötig
- **Externe Abhängigkeiten:** Google Fonts (Poppins, Inter), Unsplash API (Bilder, ACCESS_KEY vorhanden)

### Deployment-Ziel

- **Plattform:** Netlify (Account vorhanden)
- **Typ:** Static Site / Single Page Application
- **Details:** siehe `DEVELOPMENT_ROADMAP.md`, Phase 4

### Viewport

- **Basis:** 390 × 700 px (mobil, Story-Format)
- **Responsive:** Skalierung bis Desktop (max-width: 480px Container, zentriert)
- **Orientierung:** Portrait-first, Landscape akzeptabel

---

## Komponenten-Architektur

```
<App>
  ├── <ModuleSelector />          // Multi-Modul: Auswahl S/C/O/P/E
  └── <CardContainer>
        ├── <Watermark />          // Großer Buchstabe im Hintergrund
        ├── <ProgressBar />        // Modulname + Fortschritt
        ├── <CardArea>
        │     ├── <HookCard />     // Screen 1
        │     ├── <ContentCard />  // Screen 2 (Fakten)
        │     ├── <ConceptCard />  // Screen 3 (Zwei-Spalten)
        │     ├── <ExampleCard />  // Screen 4 (Praxisfall)
        │     ├── <ActionCard />   // Screen 5 (Checkliste)
        │     ├── <QuizCard />     // Screen 6 (Multiple Choice)
        │     └── <TakeawayCard /> // Screen 7 (Leitfrage)
        └── <Navigation>
              ├── <PrevButton />
              ├── <ProgressDots />
              └── <NextButton />
```

---

## Card-Typen (7 pro Modul)

### 1. HookCard

- Hintergrundbild (Unsplash, 800×600px min.) mit Overlay
- Headline groß (Poppins Bold)
- Body-Text darunter
- Modulfarben-Akzentbalken oben (4px)

### 2. ContentCard (Fakten)

- Statistik-Zahlen groß hervorgehoben (Modulfarbe)
- Body-Text mit Quellenangabe
- Optional: 2-3 Datenpunkte als Icon-Reihe

### 3. ConceptCard (Zwei-Spalten)

- Headline
- Zwei Spalten nebeneinander (bei Mobile: gestapelt)
- Links: Konzept A mit Icon
- Rechts: Konzept B mit Icon
- Trennlinie oder „vs."-Element

### 4. ExampleCard (Praxisbeispiel)

- Label: „PRAXISBEISPIEL" (Uppercase, Sekundärfarbe)
- Headline
- Kostenvergleich als visuelle Gegenüberstellung
- Zwei Optionen mit Beträgen

### 5. ActionCard (Checkliste)

- Headline
- Interaktive Checkboxen (Tap zum Abhaken)
- State: Checked/Unchecked persistiert innerhalb Session
- Visuelles Feedback bei Tap (Häkchen-Animation, Farbe wechselt)

### 6. QuizCard (Multiple Choice)

- Label: „QUIZ"
- Fragetext
- 3 Optionen als tappbare Buttons
- **Vor Auswahl:** Alle Optionen neutral gestylt
- **Nach Auswahl (richtig):** Gewählte Option grün (`#059669`), Erklärungstext eingeblendet
- **Nach Auswahl (falsch):** Gewählte Option rot (`#DC2626`), richtige Option grün markiert, Erklärungstext eingeblendet
- Kein Retry – einmalige Auswahl pro Session

### 7. TakeawayCard (Leitfrage)

- Zitat groß (kursiv, Modulfarbe)
- CTA-Text darunter
- Optional: Bookmark/Share-Icon
- Modulfarbe als Hintergrund-Gradient (subtil)

---

## Navigation

### Steuerung

| Input | Aktion |
|-------|--------|
| Tap/Click rechter Pfeil | Nächste Card |
| Tap/Click linker Pfeil | Vorherige Card |
| Swipe links | Nächste Card |
| Swipe rechts | Vorherige Card |
| Tastatur → | Nächste Card |
| Tastatur ← | Vorherige Card |
| Tastatur Space | Nächste Card |

### Swipe-Detection

- Threshold: 50px horizontal
- Vertical-Lock: Swipe nur horizontal, nicht diagonal
- `touchstart` / `touchend` Events
- `preventDefault()` auf Navigation-Events

### Progress Dots

- 7 Dots pro Modul (einer pro Card)
- Inaktiv: 8px Kreis, `#4B5563` (grau)
- Aktiv: 24px breit (Pill-Form), Modulfarbe
- Transition: 0.3s ease

### Button States

- Größe: 40×40px
- Disabled: Opacity 0.3 (erste/letzte Card)
- Hover: Opacity 0.8
- Active: Scale 0.95

---

## State Management

```typescript
interface AppState {
  currentModule: 'S' | 'C' | 'O' | 'P' | 'E';
  currentCard: number; // 0-6
  quizAnswers: Record<string, string | null>; // module -> selected answer
  checklistState: Record<string, boolean[]>; // module -> checked items
  completedModules: string[];
}
```

- State lebt in `useState` im `<App>`-Level
- Kein localStorage (Session-only, kein Tracking)
- Reset bei Seiten-Reload

---

## Datenstruktur (Card-Content)

```typescript
interface Module {
  id: string; // 'S', 'C', 'O', 'P', 'E'
  name: string;
  color: string; // Hex
  coreQuestion: string;
  cards: Card[];
}

interface Card {
  type: 'hook' | 'content' | 'concept' | 'example' | 'action' | 'quiz' | 'takeaway';
  headline: string;
  body: string;
  // Typ-spezifisch:
  source?: string;
  checklistItems?: string[];
  quizOptions?: { text: string; correct: boolean }[];
  quizFeedback?: string;
  quote?: string;
  cta?: string;
}
```

Content als JavaScript-Objekte im Code (kein externer JSON-Load nötig).

---

## Animationen

| Element | Animation | Dauer | Timing |
|---------|-----------|-------|--------|
| Card-Transition | Fade + Slide (30px) | 300ms | ease-out |
| Progress-Dot-Wechsel | Width-Transition | 300ms | ease |
| Quiz-Feedback | Fade-in + Slide-up | 200ms | ease-out |
| Checkbox-Tap | Scale bounce (1.0 → 1.1 → 1.0) | 200ms | ease |
| Watermark | Statisch (keine Animation) | – | – |

---

## Accessibility-Anforderungen

- Kontrast: WCAG 2.1 AA (4.5:1 für Text)
- Focus-States: Sichtbarer Outline auf interaktiven Elementen
- Keyboard-Navigation: Vollständig steuerbar ohne Maus
- ARIA-Labels: Auf Buttons, Quiz-Optionen, Checkboxen
- Reduced Motion: `prefers-reduced-motion` respektieren (Animationen aus)

---

## Performance-Ziele

- First Contentful Paint: < 1.5s
- Gesamtladezeit: < 3s (inkl. Fonts)
- Animation: 60fps
- Bundle: < 200KB (ohne Bilder)
- Bilder: Lazy Loading ab Card 3
