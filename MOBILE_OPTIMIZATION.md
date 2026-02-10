# Mobile Optimization Plan

**Datum:** 2026-02-09 (erstellt), 2026-02-09 (aktualisiert)
**Kontext:** Umfassende Recherche zu Mobile Webapp Best Practices, iOS Safari Gotchas, Android Chrome Issues, UX Patterns und Native-Wrapper-Vorbereitung. Ergebnisse aus 6 parallelen Research-Agents.

---

## Gesamtbewertung

Die App-Architektur ist **grundsaetzlich solide** (Card-basiert, Story-Format, Dark Theme, Flex-Layout). Die Recherche ergab **12 High-Priority Issues**, **18 Medium-Priority Verbesserungen** und klare Patterns zur Vorbereitung auf native iOS/Android-Wrapping.

---

## Phase A: Quick Wins -- ABGESCHLOSSEN

**Status:** ✅ Abgeschlossen (2026-02-09)

| # | Massnahme | Datei | Status |
|---|-----------|-------|--------|
| 1 | `viewport-fit=cover` im Viewport Meta Tag | `index.html` | ✅ |
| 2 | `overscroll-behavior: none` auf html/body | `index.html` | ✅ |
| 3 | `env(safe-area-inset-*)` auf Navigation + ProgressBar | `Navigation.jsx`, `ProgressBar.jsx` | ✅ |
| 4 | `theme-color` + `color-scheme: dark` Meta Tags | `index.html` | ✅ |
| 5 | `-webkit-font-smoothing: antialiased` + `text-size-adjust: 100%` | `index.html` | ✅ |
| 6 | `100vh` durch `100svh` ersetzen | `App.jsx` | ✅ |
| 7 | `hyphens: auto` + `lang="de"` | `index.html` | ✅ |

### Was wurde geaendert

**index.html:**
- Viewport: `viewport-fit=cover` (ermoeglicht Safe-Area-Handling)
- Meta Tags: `theme-color=#0F172A`, `color-scheme=dark` (Browser-Chrome + Anti-Double-Inversion)
- CSS auf html/body: `overscroll-behavior: none` (kein Rubber-Banding, kein Pull-to-Refresh)
- CSS auf html: `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`, `text-rendering: optimizeLegibility`, `-webkit-text-size-adjust: 100%`, `hyphens: auto`

**App.jsx:** `height: '100vh'` durch `height: '100svh'` ersetzt (iOS Safari Address-Bar-Bug)

**Navigation.jsx:** `paddingBottom: max(16px, env(safe-area-inset-bottom, 0px))` (Home-Indicator-Schutz)

**ProgressBar.jsx:** `paddingTop: max(16px, env(safe-area-inset-top, 0px))` (Notch/Dynamic-Island-Schutz)

---

## Priorisierte naechste Schritte

### Empfohlene Reihenfolge

```
PRIORITAET 1 (Naechster Sprint -- max. 2h)
├── PWA Setup (Manifest + Service Worker + Icons)
├── Swipe-Erkennung verbessern (Winkel + Edge-Guard)
└── role="application" durch role="region" ersetzen

PRIORITAET 2 (Qualitaet -- ~3h)
├── State-Persistenz (localStorage)
├── Card-Transition-Animationen (300ms fade+slide)
├── Quiz-Feedback in Sicht scrollen
└── Landscape-Warning Overlay

PRIORITAET 3 (Accessibility -- ~2h)
├── Interactive <div> durch <button> ersetzen
├── ARIA-Rollen korrigieren (Navigation Dots)
├── Image Alt-Texte verwenden
└── Nav-Buttons von 44px auf 48px

PRIORITAET 4 (Native-Vorbereitung -- ~4h)
├── Service-Abstraktionsschicht (haptics, share, storage)
├── history.pushState Navigation
├── Fonts self-hosten
└── Capacitor-Integration vorbereiten
```

---

## PWA: Detailanalyse

### Warum PWA Prioritaet 1 ist

| Argument | Detail |
|----------|--------|
| **Offline-Lernen** | Nutzer in der U-Bahn, im Zug, im Flugzeug. Gesamte App ist ~700KB -- trivial cachebar |
| **Add to Homescreen** | Ohne Manifest kein "Zum Startbildschirm"-Prompt. App fuehlt sich wie eine Website an, nicht wie eine App |
| **Kein Browser-Chrome** | `display: standalone` entfernt URL-Bar und Tabs -- perfekt fuer das Story-Format |
| **Repeat-Usage** | Micro-Learning lebt von Wiederholungen. Homescreen-Icon = 3x hoehere Rueckkehrrate |
| **Vorbereitung auf Native** | PWA-Setup ist 80% dessen, was Capacitor spaeter braucht |
| **Aufwand** | ~1h mit `vite-plugin-pwa` -- hoechstes Impact/Aufwand-Verhaeltnis aller offenen Tasks |

### Was die App braucht

#### 1. Web App Manifest (`public/manifest.json`)

```json
{
  "name": "7 Screens - Lernen in 3 Minuten",
  "short_name": "7 Screens",
  "description": "Micro-Learning im 7-Screen-Format. KI-Projekte nachhaltig bewerten mit dem SCOPE-Framework.",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#0F172A",
  "background_color": "#0F172A",
  "lang": "de",
  "dir": "ltr",
  "categories": ["education"],
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" },
    { "src": "/icons/icon-maskable-192.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable" },
    { "src": "/icons/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

**Erklaerung der Felder:**
- `display: "standalone"` -- entfernt Browser-Chrome (URL-Bar, Tabs). `fullscreen` wuerde auch die Statusbar entfernen, was bei einer Lern-App die Uhrzeit verbirgt -- nicht gewuenscht.
- `orientation: "portrait"` -- Sperrt auf Hochformat (in PWA-Modus). Im Browser nur als Hint.
- `background_color` -- Farbe des Splash-Screens beim App-Start. Muss zum App-Hintergrund passen.
- Maskable Icons: Fuer Android Adaptive Icons (runder/quadratischer Rahmen je nach Launcher)

#### 2. Apple-spezifische Meta Tags (`index.html`)

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="7 Screens" />
<link rel="apple-touch-icon" href="/icons/apple-touch-icon-180.png" />
```

**Wichtig:** iOS ignoriert `manifest.json` Icons komplett. Es braucht IMMER ein `<link rel="apple-touch-icon">`.

#### 3. Service Worker (Offline-Support)

**Strategie:** Cache-First fuer alles. Die App hat keine API-Calls -- alle Inhalte sind im JS-Bundle.

| Ressource | Strategie | Begruendung |
|-----------|-----------|-------------|
| App Shell (HTML, JS, CSS) | **Precache** (beim Install) | Muss offline sofort verfuegbar sein |
| Hook-Card-Bilder (WebP) | **Precache** | 6 Bilder x ~7KB = ~42KB -- trivial |
| Google Fonts CSS | **CacheFirst** (1 Jahr) | Stabil, gross, kritisch fuer Rendering |
| Google Fonts WOFF2 | **CacheFirst** (1 Jahr) | Font-Dateien aendern sich nie |

**Implementierung:** `vite-plugin-pwa` generiert automatisch:
- Service Worker mit Workbox
- Cache-Manifest aus dem Vite-Build
- Auto-Update bei neuen Deployments

```bash
npm install -D vite-plugin-pwa
```

#### 4. Icons (muessen erstellt werden)

| Datei | Groesse | Verwendung |
|-------|---------|-----------|
| `public/icons/icon-192.png` | 192x192 | Android Chrome, Manifest |
| `public/icons/icon-512.png` | 512x512 | Android Splash, Manifest |
| `public/icons/icon-maskable-192.png` | 192x192 | Android Adaptive Icons (mit Safe Zone) |
| `public/icons/icon-maskable-512.png` | 512x512 | Android Adaptive Icons (mit Safe Zone) |
| `public/icons/apple-touch-icon-180.png` | 180x180 | iOS Homescreen |
| `public/favicon.svg` | SVG | Browser-Tab |

**Design-Vorschlag:** Dunkler Hintergrund (`#0F172A`), grosses "7" in Weiss/Amber (`#D97706`), minimalistisch.

### PWA: Plattform-Unterschiede

| Feature | Android Chrome | iOS Safari |
|---------|---------------|------------|
| Install-Prompt | Automatisch (beforeinstallprompt Event) | Manuell ("Teilen" > "Zum Home-Bildschirm") |
| Service Worker | Voll unterstuetzt | Voll unterstuetzt (seit iOS 11.3) |
| Push Notifications | Ja | Ja (seit iOS 16.4, nur installierte PWAs) |
| Background Sync | Ja | Nein |
| Manifest Icons | Aus manifest.json | Ignoriert -- braucht apple-touch-icon |
| Cache-Limit | Grosszuegig (~mehrere GB) | ~50MB; nach 7 Tagen ohne Nutzung auto-geloescht |
| Standalone Mode | Aus manifest.json | Braucht zusaetzlich apple-mobile-web-app-capable |

### PWA: Was es NICHT braucht (vorerst)

- **Push Notifications** -- Lern-App ohne taegliche Erinnerungen (kein Backend)
- **Background Sync** -- Keine Daten zum Synchronisieren
- **App Badging** -- Kein Notification-Counter noetig
- **iOS Splash Screens** -- Braucht viele Aufloesung-spezifische PNGs; kann spaeter ergaenzt werden
- **Custom Install Prompt** -- Kann spaeter als "In-App-Banner" implementiert werden

---

## Phase B: High Priority (Funktionale Probleme)

**Status:** Offen

| # | Massnahme | Datei(en) | Aufwand | Prio |
|---|-----------|-----------|---------|------|
| B1 | Swipe-Erkennung verbessern | `App.jsx` | 30 min | P1 |
| B2 | **PWA Manifest + Service Worker + Icons** | `public/`, `vite.config.js`, `index.html` | 1h | **P1** |
| B3 | `role="application"` durch `role="region"` ersetzen | `CardContainer.jsx` | 5 min | P1 |
| B4 | Quiz-Feedback in Sicht scrollen | `CardContainer.jsx` | 15 min | P2 |
| B5 | Landscape-Warning Overlay | `App.jsx` oder neue Komponente | 20 min | P2 |

### B1: Swipe-Erkennung verbessern

**Problem:** Aktuelle Erkennung (50px horizontal, kein Winkel-Check) feuert bei diagonalen Scroll-Gesten auf content-reichen Cards (ActionCard Checkliste, QuizCard nach Feedback).

**Loesung:**
```javascript
// Winkel-Check: nur horizontal swipe wenn |dx| > |dy| * 1.5
// Velocity-Check: innerhalb 300ms abgeschlossen
// Edge-Guard: Swipes <30px vom linken Rand ignorieren (iOS Back-Gesture)
```

### B3: role="application" ersetzen

**Problem:** `role="application"` auf CardContainer deaktiviert alle Screen-Reader-Keyboard-Shortcuts. Nutzer koennen nicht mit Standard-Befehlen navigieren.

**Fix:** `role="region"` oder komplett entfernen.

---

## Phase C: Medium Priority (UX-Verbesserungen)

**Status:** Offen

| # | Massnahme | Datei(en) | Aufwand | Prio |
|---|-----------|-----------|---------|------|
| C1 | Interactive `<div>` durch `<button>` ersetzen | `ModuleSelector.jsx`, `QuizCard.jsx`, `ActionCard.jsx` | 1h | P3 |
| C2 | ARIA-Rollen korrigieren | `Navigation.jsx` | 15 min | P3 |
| C3 | Image Alt-Texte verwenden | `HookCard.jsx` | 15 min | P3 |
| C4 | Font-Groessen auf `rem` umstellen | `theme.js` | 30 min | P3 |
| C5 | Nav-Buttons von 44px auf 48px | `Navigation.jsx` | 5 min | P3 |
| C6 | Body Line-Height von 1.5 auf 1.6 | `theme.js` / Cards | 10 min | P3 |
| C7 | Card-Transition-Animationen implementieren | `CardContainer.jsx` | 2h | P2 |
| C8 | State-Persistenz (localStorage) | `App.jsx` | 1h | P2 |
| C9 | Error Boundary | `App.jsx` | 30 min | P2 |
| C10 | Inline-Style-Objekte hoisten | Alle Komponenten | 1h | P3 |

---

## Phase D: Native-Wrapper-Vorbereitung

**Status:** Offen (nach Phase B+C)

| # | Massnahme | Aufwand | Prio |
|---|-----------|---------|------|
| D1 | Service-Abstraktionsschicht erstellen | 2h | P4 |
| D2 | `history.pushState` Navigation | 2h | P4 |
| D3 | Fonts self-hosten | 30 min | P4 |
| D4 | Bild-Optimierung in Build-Pipeline | 30 min | P4 |
| D5 | Capacitor-Integration vorbereiten | 1h | P4 |

**Hinweis:** Service Worker + Offline (vormals D3) ist jetzt Teil von B2 (PWA Setup).

---

## Technische Details

### Viewport Units: `svh` vs `dvh` vs `lvh`

| Unit | Bedeutung | Toolbar-Status | Empfohlen fuer |
|------|-----------|----------------|----------------|
| `svh` | Small Viewport Height | Toolbars sichtbar | **App-Shell** (stabil, kein Jitter) |
| `lvh` | Large Viewport Height | Toolbars versteckt | Hintergrund-Sizing |
| `dvh` | Dynamic Viewport Height | Passt sich in Echtzeit an | Hero-Sections (animiert mit UI-Chrome) |

**Entscheidung:** `100svh` fuer die App-Shell, da Card-basiertes Format eine stabile Rahmenhoehe braucht.

### Safe Area Insets

```
env(safe-area-inset-top)     // Notch / Dynamic Island: ~47-59px
env(safe-area-inset-bottom)  // Home Indicator: ~34px
env(safe-area-inset-left)    // Landscape Notch
env(safe-area-inset-right)   // Landscape Notch
```

Auf Geraeten ohne Notch: `0px`. Progressive Enhancement -- kein Schaden auf aelteren Geraeten.

### iOS Safari Spezifika

- **`-webkit-font-smoothing: antialiased`** -- essenziell auf dunklem Hintergrund ✅
- **`-webkit-text-size-adjust: 100%`** -- verhindert Text-Inflation bei Orientierungswechsel ✅
- **`position: fixed` auf App-Shell** -- verhindert Viewport-Shift bei Adressleisten-Animation (noch offen)
- **Kein Orientation-Lock auf iPhone** -- CSS Landscape-Warning noetig (B5)
- **`-webkit-backdrop-filter` Prefix** -- in Safari 18+ noch erforderlich
- **Memory Pressure** -- killt Background-Tabs nach ~7 Tagen; PWA-Storage wird auto-geloescht
- **ProMotion 120fps** -- CSS-Transitions bekommen es gratis, JS `requestAnimationFrame` ist auf 60fps gedeckelt

### Android Chrome Spezifika

- **Edge-to-Edge Modus** (Chrome 135+) -- Content erstreckt sich in Gesture-Bar; braucht Safe-Area-Insets ✅
- **Android Back-Gesture** kollidiert mit Left-Edge-Swipes; 24px Edge-Zone ausschliessen (B1)
- **`interactive-widget=resizes-content`** im Viewport Meta fuer Keyboard-Handling (nicht noetig, da keine Text-Inputs)
- **Samsung Internet** meldet faelschlich `(hover: hover)` auf Touch-Geraeten
- **Faltbare Geraete** (Galaxy Z Fold/Flip) -- `max-width: 480px` Zentrierung funktioniert

### Deutsche Typografie

- Deutsche Woerter durchschnittlich **11.7 Zeichen** (vs. 8.2 Englisch)
- Texte sind **~30% laenger** als Englisch
- `line-height: 1.6` (nicht 1.5) fuer Lesbarkeit (C6)
- `hyphens: auto` + `lang="de"` auf HTML-Element ✅
- Zielbereich: **30-45 Zeichen pro Zeile** auf Mobile
- **Kontrast-Warnung:** Cyan (`#0891B2`, 3.8:1) und Orange (`#EA580C`, 4.0:1) BESTEHEN WCAG AA 4.5:1 NICHT fuer normalen Text auf `#111827`. Fuer Large Text (3:1) OK.

### Native Wrapping: Capacitor

- **Klare Empfehlung** fuer dieses Projekt (Zero Code Changes zum Web-Layer)
- Besser als TWA (Android-only, kein Native-API-Zugriff) und React Native WebView (zweites Framework)
- `env(safe-area-inset-*)` funktioniert in Capacitor WKWebView/Android WebView
- Apple App Store verlangt mindestens ein natives Feature (Haptics/Share/Notifications) + Offline-Support
- PWA-Setup (B2) ist direkte Vorarbeit fuer Capacitor

---

## Kontrastcheck: Modulfarben auf #111827

| Modul | Farbe | Kontrast | WCAG AA (4.5:1)? | Large Text (3:1)? |
|-------|-------|----------|-------------------|-------------------|
| S (Blau) | `#2563EB` | ~4.2:1 | Knapp unter AA | Ja |
| C (Gruen) | `#059669` | ~4.1:1 | Knapp unter AA | Ja |
| O (Orange) | `#EA580C` | ~4.0:1 | Nein | Ja |
| P (Violett) | `#7C3AED` | ~4.5:1 | Knapp AA | Ja |
| E (Cyan) | `#0891B2` | ~3.8:1 | Nein | Ja |

**Empfehlung (Phase C):** Hellere Varianten fuer Text-Verwendung:
- S: `#60A5FA`, C: `#34D399`, O: `#FB923C`, P: `#A78BFA`, E: `#22D3EE`

---

## Quellen

Ausfuehrliche Quellen in `UX_RESEARCH.md`. Zusaetzliche Quellen aus der Mobile-Recherche:

### Viewport & Layout
- [CSS Viewport Units: svh, lvh, dvh (web.dev)](https://web.dev/blog/viewport-units)
- [Fixing iOS Safari Toolbar Overlap (Opus.ing)](https://opus.ing/posts/fixing-ios-safaris-menu-bar-overlap-css-viewport-units)
- [env() Safe Area Insets (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/env)
- [Designing Websites for iPhone X (WebKit)](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)

### iOS Safari
- [Safari Release Notes (Apple)](https://developer.apple.com/documentation/safari-release-notes/)
- [touch-action CSS (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/touch-action)
- [overscroll-behavior (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overscroll-behavior)
- [PWA on iOS Limitations (Brainhub)](https://brainhub.eu/library/pwa-on-ios)

### Android Chrome
- [Chrome Edge-to-Edge Migration (Chrome Dev)](https://developer.chrome.com/docs/css-ui/edge-to-edge)
- [Chrome Auto Dark Theme (Chrome Dev)](https://developer.chrome.com/blog/auto-dark-theme)
- [Samsung Internet Hover Bug (Ctrl Blog)](https://www.ctrl.blog/entry/css-media-hover-samsung.html)

### Native Wrapping
- [Capacitor vs React Native 2025 (NextNative)](https://nextnative.dev/blog/capacitor-vs-react-native)
- [App Store Review Guidelines (Apple)](https://developer.apple.com/app-store/review/guidelines/)
- [Capacitor Safe Area Plugin](https://github.com/capacitor-community/safe-area)

### PWA
- [PWA Best Practices (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Best_practices)
- [Making PWAs Installable (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
- [vite-plugin-pwa Documentation](https://vite-pwa-org.netlify.app/)
- [PWA on iOS Current Status (firt.dev)](https://firt.dev/notes/pwa-ios/)
- [Workbox Caching Strategies (Chrome Dev)](https://developer.chrome.com/docs/workbox/caching-strategies-overview)
