# SCOPE Framework

Micro-Learning-App zur nachhaltigen Bewertung von KI-Projekten.

**Live:** `scope.suska.app` (Deployment ausstehend)

## Was ist SCOPE?

SCOPE ist ein Framework zur Bewertung von KI-Projekten nach Nachhaltigkeitskriterien:

| Modul | Dimension | Kernfrage |
|-------|-----------|-----------|
| **S** | Sufficiency | Brauchen wir diese KI-Lösung überhaupt? |
| **C** | Carbon | Wie hoch ist der ökologische Fußabdruck? |
| **O** | Outcomes | Wem nützt es, wem schadet es? |
| **P** | Power | Wer kontrolliert die KI? |
| **E** | Endurance | Ist die Lösung langfristig tragfähig? |

## Format

- 5 Module × 7 Cards = 35 Screens
- ~3 Minuten pro Modul
- Mobile-first (9:16 Story-Format)
- Interaktiv: Quiz, Checklisten

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** CSS-in-JS (inline styles)
- **Fonts:** DM Sans, Source Sans 3
- **Deployment:** Netlify
- **Domain:** scope.suska.app

## Entwicklung

```bash
# Installation
npm install

# Development Server
npm run dev

# Production Build
npm run build
```

## Projekt-Status

**Stand: 2025-02-07**

### Abgeschlossen

- [x] Alle 5 Module implementiert (S, C, O, P, E)
- [x] 7 Card-Typen (Hook, Content, Concept, Example, Action, Quiz, Takeaway)
- [x] Navigation (Touch, Keyboard, Mouse)
- [x] Splash Screen mit Framework-Intro
- [x] Modul-Abschluss-Flow
- [x] Design-System (Fonts, Farben, Schatten)
- [x] Accessibility (WCAG 2.1 AA)
  - Focus-visible States
  - ARIA-Labels
  - Skip Link
  - prefers-reduced-motion
  - Touch Targets 44px
- [x] Hochkant-Bilder (WebP, Unsplash)
- [x] Algospeak-optimierte Texte
- [x] Gewaltfreie Kommunikation
- [x] GitHub Repository
- [x] Netlify-Konfiguration (Security Headers, Caching)

### Ausstehend

- [ ] **Netlify Deployment** (nächster Schritt)
- [ ] DNS: CNAME scope → scope-framework.netlify.app
- [ ] Keyboard-only Testing
- [ ] Light Mode (optional)
- [ ] localStorage für Fortschritt (optional)
- [ ] PDF-Export (optional)

## Deployment-Anleitung

1. **Netlify:** New site from Git → `romanmesicek/scope-framework`
2. **Build Settings:** Automatisch aus `netlify.toml`
3. **Custom Domain:** `scope.suska.app` hinzufügen
4. **DNS (suska.app):** CNAME `scope` → `scope-framework.netlify.app`
5. **SSL:** Automatisch via Let's Encrypt

## Dokumentation

| Datei | Inhalt |
|-------|--------|
| `CLAUDE.md` | Arbeitsanweisungen für Claude Code |
| `PROJECT_OVERVIEW.md` | Zielgruppe, Format, Tonalität |
| `CONTENT_MODULES.md` | Alle 35 Cards mit deutschem Text |
| `TECHNICAL_SPECS.md` | Architektur, Komponenten, State |
| `DESIGN_ASSETS.md` | Farben, Typografie, Icons |
| `DEVELOPMENT_ROADMAP.md` | Phasen, Testing, Deployment |
| `DECISIONS.md` | Architekturentscheidungen |
| `PROJEKTVERLAUF.md` | Entwicklungsiterationen |
| `CONTENT_SOURCES.md` | Akademische Quellen |

## Credits

- **Framework:** SCOPE AI Framework (Mesicek, 2025)
- **Entwicklung:** Claude Opus 4.5
- **Bilder:** Unsplash (siehe `src/data/imageCredits.js`)

## Lizenz

© 2025 Sustainability Skills Academy
https://sustainability-skills.at
