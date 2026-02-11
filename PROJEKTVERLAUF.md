# SCOPE Schnellcheck – Projektverlauf

Dokumentation der Entwicklungsiterationen für spätere Visualisierung (Mermaid).

---

## Phase 1: Planung & Setup

### 1.1 Initiale Anforderungsanalyse
- CLAUDE.md gelesen (Projektkontext, Tech-Stack)
- CONTENT_MODULES.md analysiert (35 Cards, 5 Module)
- DEVELOPMENT_ROADMAP.md geprüft (Phasen, Akzeptanzkriterien)

### 1.2 Implementierungsplan erstellt
- Dateistruktur definiert
- Komponenten-Hierarchie festgelegt
- State-Management geplant (useState für Quiz, Checklist, Navigation)

### 1.3 Projekt-Setup
- Vite + React 18 initialisiert
- package.json, vite.config.js, netlify.toml erstellt
- Google Fonts eingebunden (initial: Poppins, Inter)

---

## Phase 2: Design-System

### 2.1 Theme-Datei erstellt
- Modulfarben definiert (S=blau, C=grün, O=orange, P=violett, E=cyan)
- Spacing, Font-Sizes, Transitions als Tokens

### 2.2 Basis-Komponenten
- Watermark.jsx (großer Buchstabe im Hintergrund)
- ProgressBar.jsx (Modulname + Fortschritt)
- Navigation.jsx (Prev/Next + Dots)

---

## Phase 3: Card-Komponenten

### 3.1 Sieben Card-Typen implementiert
1. HookCard - Hintergrundbild + Headline
2. ContentCard - Statistik + Fakten
3. ConceptCard - Zwei-Spalten-Vergleich
4. ExampleCard - Praxisbeispiel mit Kostenvergleich
5. ActionCard - Interaktive Checkliste
6. QuizCard - Multiple Choice mit Feedback
7. TakeawayCard - Leitfrage + CTA

### 3.2 Datenstruktur
- src/data/cards/{s,c,o,p,e}.js erstellt
- Alle 35 Cards als JavaScript-Objekte

---

## Phase 4: User-Flow

### 4.1 Screen-Navigation
- App.jsx mit screen-State: 'splash' | 'selector' | 'module' | 'complete'

### 4.2 Neue Screens
- SplashScreen.jsx - Framework-Intro, Starten-Button
- ModuleSelector.jsx - 5 Module als Karten
- ModuleComplete.jsx - Abschluss-Screen mit "Weiter zu nächstem Modul"

### 4.3 Iteration: User-Feedback
- Farbige SCOPE-Buchstaben entfernt (zu kindisch)
- Checkliste UX: "Bedacht?" Label hinzugefügt
- Watermark nach unten verschoben

---

## Phase 5: Bilder

### 5.1 Unsplash API Integration
- API-Credentials in .env
- Bilder für alle 5 Module + Splash recherchiert

### 5.2 Erste Bildauswahl (Querformat)
- Bilder heruntergeladen und zu WebP konvertiert
- imageCredits.js mit Attribution erstellt

### 5.3 Iteration: Hochformat-Bilder
- Problem: Querformat-Bilder sehen auf Mobile (9:16) nicht gut aus
- Lösung: Alle 6 Bilder durch Portrait-Bilder ersetzt
- Neue Fotografen, neue IDs, imageCredits.js aktualisiert

---

## Phase 6: Design-Review (Frontend-Design Skill)

### 6.1 Analyse
- Poppins/Inter als generische Fonts identifiziert
- Fehlende visuelle Tiefe (keine Schatten)
- TakeawayCard mit hardcoded Gradient

### 6.2 Umsetzung
- Fonts geändert: DM Sans + Source Sans 3
- Hintergrundfarbe angepasst (#0F172A)
- Schatten auf Buttons, Cards, Stats
- Border-Radien vereinheitlicht (12-14px)
- TakeawayCard: Emoji entfernt, dynamischer Gradient

### 6.3 Iteration: Splash-Titel
- "SCOPE / Schnellcheck" → "5 Fragen / bevor Sie ein KI-Projekt starten"
- Grund: "Schnellcheck" klingt abwertend

### 6.4 Iteration: ModuleSelector
- Hintergrundbild von Splash übernommen (visuelle Kontinuität)
- Abgeschlossene Module: Haken in Modulfarbe statt grün
- Fortschrittsanzeige unter Module verschoben, grau statt grün

---

## Phase 7: Accessibility & Code-Review

### 7.1 Web Interface Guidelines Review
- Focus-visible Styles fehlten
- Viewport verhinderte Zoom
- borderLight Kontrast zu niedrig
- Back-Button zu klein (32px < 44px)
- Kein prefers-reduced-motion

### 7.2 Code-Review (feature-dev:code-reviewer)
- React Hook Dependency Bug (checklistStates Loop)
- Fehlende goBack Dependency
- ContentCard unterstützte stats-Array nicht (Module C Bug)

### 7.3 Fixes umgesetzt
- Global CSS: focus-visible, prefers-reduced-motion
- Viewport: user-scalable erlaubt
- borderLight aufgehellt (#475569 → #64748B)
- Back-Button auf 44px
- React Hook Dependencies korrigiert
- ContentCard erweitert für stats-Array

---

## Phase 8: Text-Optimierung (Algospeak Skill)

### 8.1 Analyse
- Hook-Headlines könnten stärkere Curiosity Gaps haben
- Quiz-Headlines alle gleich ("Kurz nachgedacht:")
- CTAs teilweise generisch

### 8.2 Umsetzung
- Hook-Headlines geschärft (z.B. "87% scheitern. Meist aus einem Grund.")
- Quiz-Headlines individualisiert (z.B. "Der Suffizienz-Test")
- CTAs aktionsorientierter

### 8.3 Iteration: Gewaltfreie Kommunikation
- Problem: "Beobachten Sie, wer ausweicht" ist suggestiv/schuldzuweisend
- Lösung: "Die Antworten zeigen, wo Klarheit fehlt"
- Sprachrichtlinien in CLAUDE.md dokumentiert

---

## Phase 9: Deployment-Vorbereitung

### 9.1 ARIA-Labels erweitert
- Navigation: `role="navigation"`, Dots als `tablist` mit `aria-selected`
- QuizCard: `radiogroup` mit dynamischen Status-Labels
- ActionCard: `group` mit Checklisten-Status
- ModuleSelector: `list` mit vollständigen Modul-Infos
- ProgressBar: `aria-live="polite"` für Fortschrittsansagen
- Landmarks: `main`, `header`, `nav`, `banner` hinzugefügt

### 9.2 Skip Link
- Versteckter Link in index.html
- Wird bei Focus sichtbar (Keyboard-Navigation)
- Springt zu `#main-content`

### 9.3 Netlify-Konfiguration erweitert
- Security Headers (CSP, X-Frame-Options, Permissions-Policy)
- Cache-Control differenziert (Assets immutable, HTML no-cache)
- SPA-Redirect für Client-Side-Routing

---

## Phase 10: Repository & Branding

### 10.1 GitHub Repository erstellt
- Repository: `romanmesicek/7screens`
- Initial Commit mit 51 Dateien
- Public Repository

### 10.2 Domain entschieden
- `7screens.suska.app` (Subdomain-Lösung)
- Deployment via Netlify geplant

### 10.3 Footer-Branding geändert
- Von: `SCOPE AI Framework (Mesicek, 2025)`
- Zu: `© 2025 Sustainability Skills Academy`
- Link: sustainability-skills.at

### 10.4 Navigation verbessert
- Back-Button auf ModuleSelector hinzugefügt
- Konsistentes Styling (✕, transparent)

---

## Phase 13: PWA & Accessibility Sprint (2026-02-10)

### 13.1 PWA Setup
- `vite-plugin-pwa` installiert und konfiguriert
- Service Worker mit Workbox (Precache 22 Einträge, 586KB)
- manifest.webmanifest: standalone, portrait, #0F172A
- App Icons: 5 Varianten (192, 512, maskable, apple-touch-icon)
- favicon.svg erstellt (dunkler Hintergrund, "7" in Amber)
- Apple Meta Tags (apple-mobile-web-app-capable, apple-touch-icon)
- Google Fonts Runtime-Caching (CacheFirst, 1 Jahr)

### 13.2 Swipe-Erkennung verbessert
- Winkelprüfung: |dx| > |dy| * 1.5 (nur horizontale Gesten)
- Geschwindigkeit: < 300ms Zeitfenster
- Edge-Guard: startX > 30px (Android Back-Geste)

### 13.3 ARIA & Semantik Korrekturen
- `role="application"` → `role="region"` auf CardContainer
- Navigation Dots: `tablist/tab` → `group` + `aria-hidden`
- Interactive `<div>` → `<button>` in QuizCard, ActionCard, ModuleSelector
- Manuelle `onKeyDown`-Handler entfernt (native Button-Verhalten)

---

## Aktueller Status (2026-02-10)

### Fertig
- App vollständig implementiert und funktionsfähig
- Alle 5 Module mit 35 Cards + 7 Intro-Cards = 42 Cards
- Two-Deck-Architektur (Intro + SCOPE)
- Accessibility (WCAG 2.1 AA)
- Mobile Optimization (Phase A + B1 + C teilweise)
- PWA: Standalone-Modus, Offline-Support, Homescreen-Installation
- GitHub Repository: https://github.com/romanmesicek/7screens

### Nächste Schritte
1. Deployment auf Netlify (Konfiguration steht bereit)
2. Sprint 2: Card-Transitions, localStorage-Persistence, Landscape-Warning
3. Sprint 3: Farbkontrast-Fix, Self-Hosted Fonts, history.pushState

---

## Iterationen-Übersicht (für Mermaid)

```
1. Planung
   └─> 2. Setup (Vite, Config)
       └─> 3. Design-System (Theme, Basis-Komponenten)
           └─> 4. Cards (7 Typen, Daten)
               └─> 5. User-Flow (Splash, Selector, Complete)
                   ├─> 5a. Feedback: SCOPE-Buchstaben entfernt
                   ├─> 5b. Feedback: Checkliste UX
                   └─> 5c. Feedback: Watermark Position
               └─> 6. Bilder
                   └─> 6a. Iteration: Querformat → Hochformat
               └─> 7. Design-Review
                   ├─> 7a. Fonts geändert
                   ├─> 7b. Schatten hinzugefügt
                   ├─> 7c. Splash-Titel geändert
                   └─> 7d. ModuleSelector Hintergrund
               └─> 8. Accessibility
                   ├─> 8a. Focus-visible
                   ├─> 8b. prefers-reduced-motion
                   └─> 8c. Touch-Targets
               └─> 9. Code-Review
                   ├─> 9a. Hook Dependencies
                   └─> 9b. ContentCard stats
               └─> 10. Text-Optimierung
                   ├─> 10a. Algospeak Hooks
                   ├─> 10b. Quiz-Headlines
                   └─> 10c. GFK-Korrektur
              └─> 11. Deployment-Vorbereitung
                   ├─> 11a. ARIA-Labels erweitert
                   ├─> 11b. Skip Link
                   ├─> 11c. Landmarks hinzugefügt
                   └─> 11d. Netlify Security Headers
              └─> 12. Repository & Branding
                   ├─> 12a. GitHub Repo erstellt
                   ├─> 12b. Domain 7screens.suska.app
                   ├─> 12c. Footer: Sustainability Skills Academy
                   └─> 12d. Back-Button ModuleSelector
```

---

## Verwendete Skills/Tools

| Phase | Skill/Tool |
|-------|------------|
| 1-5 | Manuell (Read, Write, Edit, Bash) |
| 5 | Unsplash API |
| 6 | frontend-design |
| 7 | web-design-guidelines, feature-dev:code-reviewer |
| 8 | algospeak, humanizer |
| 9 | Manuell (ARIA, Netlify Config) |
| 10 | GitHub CLI, Manuell |

---

## Metriken

| Metrik | Wert |
|--------|------|
| Komponenten | 14 |
| Card-Typen | 7 |
| Module | 5 + 1 Intro = 6 |
| Cards gesamt | 35 + 7 Intro = 42 |
| Bilder | 8 (WebP, Portrait) |
| Iterationen | ~24 |
| Dokumentationsdateien | 11 |
| PWA | Ja (Offline, Standalone, Installierbar) |

---

*Erstellt: 2025-02-06*
*Aktualisiert: 2026-02-10*
*Zweck: Grundlage für Mermaid-Prozessdiagramm*
