# Mobile Optimization Plan

**Datum:** 2026-02-09
**Kontext:** Umfassende Recherche zu Mobile Webapp Best Practices, iOS Safari Gotchas, Android Chrome Issues, UX Patterns und Native-Wrapper-Vorbereitung. Ergebnisse aus 6 parallelen Research-Agents.

---

## Gesamtbewertung

Die App-Architektur ist **grundsätzlich solide** (Card-basiert, Story-Format, Dark Theme, Flex-Layout). Die Recherche ergab **12 High-Priority Issues**, **18 Medium-Priority Verbesserungen** und klare Patterns zur Vorbereitung auf native iOS/Android-Wrapping.

---

## Phase A: Quick Wins (< 30 Min gesamt)

| # | Massnahme | Datei | Aufwand | Status |
|---|-----------|-------|---------|--------|
| 1 | `viewport-fit=cover` im Viewport Meta Tag | `index.html` | 2 min | [ ] |
| 2 | `overscroll-behavior: none` auf html/body | `index.html` | 2 min | [ ] |
| 3 | `env(safe-area-inset-*)` auf Navigation + ProgressBar | `Navigation.jsx`, `ProgressBar.jsx` | 10 min | [ ] |
| 4 | `theme-color` + `color-scheme: dark` Meta Tags | `index.html` | 2 min | [ ] |
| 5 | `-webkit-font-smoothing: antialiased` + `text-size-adjust: 100%` | `index.html` | 2 min | [ ] |
| 6 | `100vh` durch `100svh` ersetzen | `App.jsx` | 2 min | [ ] |
| 7 | `hyphens: auto` + `lang="de"` | `index.html` | 2 min | [ ] |

---

## Phase B: High Priority (Funktionale Probleme)

| # | Massnahme | Datei(en) | Aufwand | Beschreibung |
|---|-----------|-----------|---------|--------------|
| B1 | Swipe-Erkennung verbessern | `App.jsx` | 30 min | Winkel-Erkennung (horizontal vs. vertikal), Velocity-Check, Edge-Guard (30px vom linken Rand fuer iOS Back-Gesture) |
| B2 | PWA Manifest erstellen | `public/manifest.json`, `index.html` | 30 min | `display: standalone`, `orientation: portrait`, Icons, `theme_color` |
| B3 | `role="application"` durch `role="region"` ersetzen | `CardContainer.jsx` | 5 min | Screen-Reader-Navigation bricht sonst |
| B4 | Quiz-Feedback in Sicht scrollen | `CardContainer.jsx` | 15 min | Aktuell scrollt es zum TOP statt zum Feedback |
| B5 | Landscape-Warning Overlay | `App.jsx` oder neue Komponente | 20 min | CSS `@media (orientation: landscape) and (max-height: 500px)` |

---

## Phase C: Medium Priority (UX-Verbesserungen)

| # | Massnahme | Datei(en) | Aufwand | Beschreibung |
|---|-----------|-----------|---------|--------------|
| C1 | Interactive `<div>` durch `<button>` ersetzen | `ModuleSelector.jsx`, `QuizCard.jsx`, `ActionCard.jsx` | 1h | Semantische Buttons fuer Accessibility |
| C2 | ARIA-Rollen korrigieren | `Navigation.jsx` | 15 min | `role="tablist/tab"` durch `role="progressbar"` ersetzen |
| C3 | Image Alt-Texte verwenden | `HookCard.jsx` | 15 min | `imageCredits` hat `alt`-Felder, werden aber nie gerendert |
| C4 | Font-Groessen auf `rem` umstellen | `theme.js` | 30 min | Respektiert Browser-Zoom-Einstellungen |
| C5 | Nav-Buttons von 44px auf 48px | `Navigation.jsx` | 5 min | Material Design Minimum |
| C6 | Body Line-Height von 1.5 auf 1.6 | `theme.js` / Cards | 10 min | Deutsche Texte brauchen mehr Zeilenabstand |
| C7 | Card-Transition-Animationen implementieren | `CardContainer.jsx` | 2h | TECHNICAL_SPECS sagt 300ms, aber keine implementiert |
| C8 | State-Persistenz (localStorage) | `App.jsx` | 1h | Fortschritt bleibt bei Reload erhalten |
| C9 | Error Boundary | `App.jsx` | 30 min | Fangtnetz fuer Rendering-Fehler |
| C10 | Inline-Style-Objekte hoisten | Alle Komponenten | 1h | Vermeidet GC-Druck auf schwachen Geraeten |

---

## Phase D: Native-Wrapper-Vorbereitung

| # | Massnahme | Aufwand | Beschreibung |
|---|-----------|---------|--------------|
| D1 | Service-Abstraktionsschicht erstellen | 2h | `src/services/{haptics,share,storage}.js` mit Web-Fallbacks |
| D2 | `history.pushState` Navigation | 2h | Browser-Back-Button + Deep-Linking-Vorbereitung |
| D3 | Service Worker + Offline | 1h | `vite-plugin-pwa`, Cache-First fuer alle Assets |
| D4 | Fonts self-hosten | 30 min | Google Fonts CDN nicht in nativem WebView verfuegbar |
| D5 | Bild-Optimierung in Build-Pipeline | 30 min | `vite-plugin-image-optimizer` |
| D6 | Capacitor-Integration vorbereiten | 1h | `capacitor.config.ts`, Plattform-Erkennung |

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

Auf Geraeten ohne Notch: `0px`. Progressiver Enhancement -- kein Schaden auf aelteren Geraeten.

### iOS Safari Spezifika

- **`-webkit-font-smoothing: antialiased`** -- essenziell auf dunklem Hintergrund
- **`-webkit-text-size-adjust: 100%`** -- verhindert Text-Inflation bei Orientierungswechsel
- **`position: fixed` auf App-Shell** -- verhindert Viewport-Shift bei Adressleisten-Animation
- **Kein Orientation-Lock auf iPhone** -- CSS Landscape-Warning noetig
- **`-webkit-backdrop-filter` Prefix** -- in Safari 18+ noch erforderlich
- **Memory Pressure** -- killt Background-Tabs nach ~7 Tagen; PWA-Storage wird auto-geloescht
- **ProMotion 120fps** -- CSS-Transitions bekommen es gratis, JS `requestAnimationFrame` ist auf 60fps gedeckelt

### Android Chrome Spezifika

- **Edge-to-Edge Modus** (Chrome 135+) -- Content erstreckt sich in Gesture-Bar; braucht Safe-Area-Insets
- **Android Back-Gesture** kollidiert mit Left-Edge-Swipes; 24px Edge-Zone ausschliessen
- **`interactive-widget=resizes-content`** im Viewport Meta fuer Keyboard-Handling
- **Samsung Internet** meldet faelschlich `(hover: hover)` auf Touch-Geraeten
- **Faltbare Geraete** (Galaxy Z Fold/Flip) -- `max-width: 480px` Zentrierung funktioniert

### Deutsche Typografie

- Deutsche Woerter durchschnittlich **11.7 Zeichen** (vs. 8.2 Englisch)
- Texte sind **~30% laenger** als Englisch
- `line-height: 1.6` (nicht 1.5) fuer Lesbarkeit
- `hyphens: auto` + `lang="de"` auf HTML-Element
- Zielbereich: **30-45 Zeichen pro Zeile** auf Mobile
- **Kontrast-Warnung:** Cyan (`#0891B2`, 3.8:1) und Orange (`#EA580C`, 4.0:1) BESTEHEN WCAG AA 4.5:1 NICHT fuer normalen Text auf `#111827`. Fuer Large Text (3:1) OK.

### Native Wrapping: Capacitor

- **Klare Empfehlung** fuer dieses Projekt (Zero Code Changes zum Web-Layer)
- Besser als TWA (Android-only, kein Native-API-Zugriff) und React Native WebView (zweites Framework)
- `env(safe-area-inset-*)` funktioniert in Capacitor WKWebView/Android WebView
- Apple App Store verlangt mindestens ein natives Feature (Haptics/Share/Notifications) + Offline-Support

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
