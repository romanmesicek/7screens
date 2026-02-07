# SCOPE Schnellcheck – Development Roadmap

## Phase 1: Single Module (Modul S)

**Status:** ✅ Abgeschlossen (2025-02-06)

### Aufgaben

- [x] Vite + React 18 Projekt-Setup
- [x] Alle 7 Card-Typen als wiederverwendbare Komponenten implementiert
- [x] Navigation-System implementieren (Touch, Keyboard, Mouse)
- [x] Responsive Design (max-width 480px Container)
- [x] Quiz mit Feedback (grün/rot) und einmaliger Auswahl
- [x] Checkliste mit Session-State

### Akzeptanzkriterien

- ✅ Alle 7 Cards von Modul S rendern korrekt
- ✅ Navigation funktioniert (Pfeile, Tastatur, Swipe)
- ✅ Quiz gibt korrektes Feedback
- ✅ Checkliste behält State innerhalb Session

---

## Phase 2: Multi-Modul-System

**Status:** ✅ Abgeschlossen (2025-02-06)

### Aufgaben

- [x] Content-Daten für Module C, O, P, E aus `CONTENT_MODULES.md` in Datenstruktur überführen
- [x] Module-Selector/Router implementieren (Startscreen mit 5 Modulen)
- [x] Shared Component Library aufbauen (Card-Typen sind identisch)
- [x] Modulfarben dynamisch anwenden (Watermark, Akzente, Highlights)
- [x] Fortschritt über Module hinweg tracken (welche abgeschlossen)
- [x] Abschluss-Screen nach jedem Modul (ModuleComplete.jsx)
- [x] Splash-Screen mit Framework-Intro (SplashScreen.jsx)
- [x] Hook-Card Hintergrundbilder (WebP, 480px, mit Overlay)

### Module-Selector Design

```
┌────────────────────────────┐
│     SCOPE Schnellcheck     │
│                            │
│  ┌─────┐  ┌─────┐         │
│  │  S  │  │  C  │         │
│  │ blau│  │ grün│         │
│  └─────┘  └─────┘         │
│  ┌─────┐  ┌─────┐  ┌────┐│
│  │  O  │  │  P  │  │ E  ││
│  │orang│  │ lila│  │cyan ││
│  └─────┘  └─────┘  └────┘│
│                            │
│  ✓ 2/5 Module abgeschlossen│
└────────────────────────────┘
```

### Akzeptanzkriterien

- Alle 35 Cards (5 × 7) rendern korrekt
- Module-Wechsel funktioniert ohne Datenverlust
- Fortschritt bleibt innerhalb Session erhalten
- Farben wechseln korrekt pro Modul

---

## Phase 3: Enhancement

### Aufgaben

- [x] Accessibility (WCAG 2.1 AA) vollständig umgesetzt
  - [x] Focus-visible States (global CSS)
  - [x] `prefers-reduced-motion` Media Query
  - [x] Viewport Zoom erlaubt
  - [x] Touch Targets mindestens 44px
  - [x] Farbkontrast borderLight verbessert
  - [x] ARIA-Labels erweitert (Progress Dots, Quiz, Checkliste, Module)
  - [x] Skip Link implementiert
  - [x] Landmarks (main, nav, header, banner) hinzugefügt
  - [x] aria-live für dynamische Inhalte (Fortschritt)
  - [ ] Keyboard-only Navigation testen
- [ ] Light Mode als Alternative zum Dark Mode
  - Theme-Toggle implementieren
  - Neue Farbpalette für Light Mode definieren
  - User-Präferenz speichern (localStorage oder `prefers-color-scheme`)
- [ ] PDF-Export des SCOPE-Einseiter (One-Pager mit allen 5 Leitfragen)
- [ ] Bookmark/Merken-Funktion (Takeaway-Cards)
- [ ] Persistentes Modul-Tracking (localStorage)
- [ ] Call to Action am Ende (z.B. PDF-Download, Newsletter, Kontakt)
- [ ] Optional: Analytics-Integration (Plausible oder Matomo, DSGVO-konform)
- [ ] Optional: Sprach-Toggle (DE/EN) für internationale Nutzung

---

## Phase 4: Deployment (Netlify)

### Voraussetzungen

- Netlify-Account vorhanden
- Statische Site oder SPA (React mit Client-Side Routing)

### Konfiguration

#### `netlify.toml` (Projektstamm)

```toml
[build]
  publish = "dist"
  command = "npm run build"

# SPA-Routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security Headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com; connect-src 'self'"

# Cache-Control für Assets (1 Jahr, immutable)
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Cache-Control für Bilder (30 Tage)
[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=2592000"

# Cache-Control für Fonts
[[headers]]
  for = "*.woff2"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# HTML nicht cachen (für Updates)
[[headers]]
  for = "/index.html"
  [headers.values]
    Cache-Control = "no-cache, no-store, must-revalidate"
```

#### Deployment-Optionen

**Option A: Git-basiert (empfohlen)**
1. GitHub-Repository erstellen
2. In Netlify: „New site from Git" → Repository verbinden
3. Build-Einstellungen werden aus `netlify.toml` gelesen
4. Automatisches Deploy bei Push auf `main`
5. Preview Deploys für Feature-Branches (z.B. `feature/module-c`)

**Option B: CLI-Deploy (für schnelles Testen)**
```bash
# Netlify CLI installieren
npm install -g netlify-cli

# Login
netlify login

# Erstmaliges Setup
netlify init

# Deploy (Draft/Preview)
netlify deploy

# Deploy (Production)
netlify deploy --prod
```

**Option C: Drag & Drop**
1. Build lokal: `npm run build`
2. `dist/`-Ordner in Netlify-Dashboard ziehen
3. Sofort live

### Custom Domain

**Entschieden:** `demo-7screen.suska.app`

**Deployment-Schritte:**
1. Netlify: Site aus GitHub-Repo erstellen
2. Netlify: Custom Domain `demo-7screen.suska.app` hinzufügen
3. DNS (suska.app): CNAME `demo-7screen` → `demo-7screen.netlify.app`
4. SSL: Automatisch via Let's Encrypt (Netlify)

### Environment Variables (falls nötig)

Im Netlify-Dashboard unter Site Settings → Environment Variables:
- `VITE_APP_VERSION` = Versionsnummer
- `VITE_ANALYTICS_ID` = Plausible/Matomo ID (optional)
- `UNSPLASH_ACCESS_KEY` = Unsplash API Client-ID (für dynamisches Bildladen)

### Preview Deploys

Netlify erstellt automatisch Preview-URLs für jeden Branch und Pull Request:
- `feature/module-c` → `deploy-preview-3--scope-schnellcheck.netlify.app`
- Nützlich zum Testen einzelner Module vor Merge

---

## Testing-Checkliste

### Funktional

- [ ] Alle 35 Cards rendern korrekt (Text, Layout, Farben)
- [ ] Navigation: Touch (Swipe), Keyboard (← → Space), Mouse (Click)
- [ ] Quiz: Feedback bei richtig und falsch, einmalige Auswahl
- [ ] Checkliste: State bleibt innerhalb Modul erhalten
- [ ] Module-Selector: Alle 5 Module anwählbar
- [ ] Fortschritt: Abgeschlossene Module markiert
- [ ] Watermark: Korrekter Buchstabe + Farbe pro Modul

### Responsive

- [ ] 320px (iPhone SE)
- [ ] 390px (iPhone 14)
- [ ] 430px (iPhone 14 Pro Max)
- [ ] 768px (Tablet, zentrierter Container)
- [ ] 1920px (Desktop, zentrierter Container)

### Browser

- [ ] iOS Safari (primär)
- [ ] Chrome (Android + Desktop)
- [ ] Firefox
- [ ] Edge

### Performance

- [ ] First Contentful Paint < 1.5s
- [ ] Gesamtladezeit < 3s
- [ ] Animationen 60fps
- [ ] Lighthouse Score > 90 (Performance, Accessibility)

### Accessibility

- [ ] Keyboard-only Navigation möglich
- [ ] Alle interaktiven Elemente haben Focus-States
- [ ] ARIA-Labels auf Buttons, Quiz-Optionen, Checkboxen
- [ ] Kontrast WCAG 2.1 AA (4.5:1)
- [ ] `prefers-reduced-motion` deaktiviert Animationen

---

## Zeitschätzung (grob)

| Phase | Aufwand |
|-------|---------|
| Phase 1: Single Module | 2-4h (Basis existiert) |
| Phase 2: Multi-Modul | 4-6h |
| Phase 3: Enhancement | 2-4h |
| Phase 4: Deployment | 1h |
| **Gesamt** | **~10-15h** |
