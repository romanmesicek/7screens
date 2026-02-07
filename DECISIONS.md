# DECISIONS.md – Architektur- und Designentscheidungen

Dieses Dokument protokolliert alle nicht-trivialen Entscheidungen im Projekt.
Neue Einträge werden oben eingefügt (neueste zuerst).

---

## Template

```markdown
### YYYY-MM-DD – [Kurztitel]

**Kontext:** Was war die Ausgangssituation/Fragestellung?

**Optionen:**
1. Option A – Beschreibung
2. Option B – Beschreibung
3. Option C – Beschreibung

**Entscheidung:** Option X

**Begründung:** Warum diese Option?

**Konsequenzen:** Was folgt daraus?
```

---

## Entscheidungen

### 2025-02-06 – Branding: Sustainability Skills Academy

**Kontext:** Footer-Attribution und Copyright für die App.

**Vorher:** `SCOPE AI Framework (Mesicek, 2025)` mit Link zu mesicek.com

**Nachher:** `© 2025 Sustainability Skills Academy` mit Link zu sustainability-skills.at

**Begründung:** Die App ist ein Angebot der Sustainability Skills Academy, nicht eine persönliche Publikation. Klare institutionelle Zuordnung.

**Betroffene Dateien:**
- `src/components/SplashScreen.jsx`
- `src/components/ModuleSelector.jsx`

---

### 2025-02-06 – Domain: demo-7screen.suska.app

**Kontext:** Wahl zwischen Subdomain und Subdirectory für Deployment.

**Optionen:**
1. `demo-7screen.suska.app` (Subdomain)
2. `suska.app/scope` (Subdirectory)

**Entscheidung:** Option 1

**Begründung:** Einfacher zu konfigurieren (CNAME), eigenständige SSL-Zertifikat-Verwaltung, keine Reverse-Proxy-Komplexität.

**Deployment-Schritte:**
1. Netlify: Site aus GitHub-Repo `romanmesicek/scope-framework`
2. Netlify: Custom Domain `demo-7screen.suska.app`
3. DNS: CNAME `demo-7screen` → `demo-7screen.netlify.app`
4. SSL: Automatisch via Let's Encrypt

---

### 2025-02-06 – Repository: scope-framework

**Kontext:** GitHub-Repository für Versionskontrolle und Deployment.

**Repository:** https://github.com/romanmesicek/scope-framework

**Begründung:** Name `scope-framework` ist neutral und erweiterbar für zukünftige SCOPE-Inhalte (PDF-Generator, Workshop-Materialien).

---

### 2025-02-06 – ARIA-Labels & Netlify Deployment-Konfiguration

**Kontext:** Accessibility-Erweiterung und Deployment-Vorbereitung für Netlify.

**ARIA-Labels implementiert:**

| Komponente | ARIA-Attribute |
|------------|----------------|
| Navigation | `role="navigation"`, `role="tablist"` für Dots, `aria-selected` |
| QuizCard | `role="radiogroup"`, `role="radio"`, `aria-checked`, dynamische Labels |
| ActionCard | `role="group"`, `aria-label` mit Status (bedacht/nicht bedacht) |
| ModuleSelector | `role="list"`, `aria-label` mit Modulinfo und Status |
| ProgressBar | `role="banner"`, `aria-live="polite"` für Fortschritt |
| CardContainer | `role="application"`, `main` Landmark |
| SplashScreen | `main` Landmark mit `id="main-content"` |
| index.html | Skip Link für Keyboard-Navigation |

**Netlify Security Headers:**
- `X-Frame-Options: DENY` – Clickjacking-Schutz
- `X-Content-Type-Options: nosniff` – MIME-Sniffing verhindern
- `X-XSS-Protection: 1; mode=block` – XSS-Filter
- `Content-Security-Policy` – Strikte CSP für Scripts, Styles, Fonts, Images
- `Permissions-Policy` – Kamera, Mikrofon, Geolocation deaktiviert
- Cache-Control: Assets immutable, HTML no-cache

**Begründung:** WCAG 2.1 AA Compliance, Security Best Practices, Performance-Optimierung.

---

### 2025-02-06 – Algospeak-Optimierung der Texte

**Kontext:** Texte mit Algospeak-Skill überarbeitet für bessere Aufmerksamkeitsbindung.

**Änderungen:**

| Modul | Element | Vorher | Nachher |
|-------|---------|--------|---------|
| S | Hook | "Nicht jedes Problem braucht KI." | "87% aller KI-Projekte scheitern. Meist aus einem Grund." |
| E | Hook | "Wird Ihre KI-Lösung in 5 Jahren noch funktionieren?" | "Die durchschnittliche KI-Lösung lebt 2-3 Jahre. Dann stirbt sie leise." |
| P | Hook | "Wer kontrolliert Ihre KI?" | "Sie haben die KI gekauft. Aber wem gehört sie wirklich?" |
| Alle | Quiz-Headline | "Kurz nachgedacht:" | Modul-spezifisch (z.B. "Der Suffizienz-Test") |
| Alle | CTAs | Generisch | Schärfer, aktionsorientiert |

**Sprachrichtlinien hinzugefügt:**
- Gewaltfreie Kommunikation (keine Schuldzuweisungen)
- Inklusive Sprache
- Keine Suggestionen, die Schuld verschieben

**Begründung:** Algospeak-Prinzipien erhöhen Engagement, GFK und inklusive Sprache sind ethische Grundvoraussetzung.

---

### 2025-02-06 – Accessibility & Code Quality Fixes

**Kontext:** Web Interface Guidelines und Code Review deckten mehrere Issues auf.

**Fixes:**

1. **Focus-visible Styles** - Global CSS für Keyboard-Navigation
2. **Viewport Zoom erlaubt** - `user-scalable=no` entfernt (WCAG 1.4.4)
3. **borderLight aufgehellt** - Von #475569 zu #64748B für besseren Kontrast
4. **Back-Button vergrößert** - Von 32px auf 44px (Touch Target)
5. **prefers-reduced-motion** - Global CSS Media Query für Vestibularstörungen
6. **React Hook Bug** - checklistStates aus useEffect deps entfernt (verhindert Loop)
7. **goBack Dependency** - Zur Keyboard-Handler deps hinzugefügt
8. **ContentCard stats Array** - Unterstützt jetzt auch `stats[]` Format (Module C)

**Begründung:** WCAG 2.1 AA Compliance, React Best Practices, Bug Fixes.

---

### 2025-02-06 – Neue Hochkant-Bilder

**Kontext:** Die bisherigen Bilder waren im Querformat und sahen auf Mobile (9:16) nicht gut aus.

**Änderungen:** Alle 6 Bilder durch Portrait-Bilder ersetzt.

| Modul | Neu | Fotograf |
|-------|-----|----------|
| Splash | Windrad in Blumenfeld | Maxence Pira |
| S | Straße mit zwei Richtungspfeilen | Anya Chernykh |
| C | Straße mit Windmühlen | Konstantin Dyadyun |
| O | Justitia-Statue mit Waage | Iryna Limborska |
| P | Rostiges Vorhängeschloss | Kiril Bahrov |
| E | Waldweg durch grünen Tunnel | Cabbie Kqwi |

**Begründung:** Hochkant-Bilder passen besser zum Mobile-First 9:16 Format.

---

### 2025-02-06 – UI-Verbesserungen nach Feedback

**Kontext:** Weitere Verbesserungen basierend auf User-Feedback.

**Änderungen:**

1. **Splash-Titel:** "SCOPE / Schnellcheck" → "5 Fragen / bevor Sie ein KI-Projekt starten"
2. **ModuleSelector Haken:** Abgeschlossene Module behalten Modulfarbe (statt grün)
3. **ModuleComplete Button:** Zeigt jetzt Modulname + Kernfrage
4. **Fortschrittsanzeige:** Unter die Modulkarten verschoben, grau statt grün
5. **Next-Button auf letzter Card:** Zeigt ✓ und führt zum Complete-Screen

**Begründung:** Konsistentere Farbsprache, bessere UX, professionellere Optik.

---

### 2025-02-06 – Frontend Design Überarbeitung

**Kontext:** Frontend-Design-Skill Audit ergab mehrere Verbesserungspunkte.

**Änderungen:**

1. **Typography:** Poppins/Inter → DM Sans/Source Sans 3 (weniger generisch)
2. **Farbpalette:** Leicht angepasste Slate-Töne für mehr Tiefe
3. **Schatten & Glow:** Buttons, Cards, Statistik-Zahlen haben jetzt subtile Schatten
4. **Border-Radien:** Konsistent auf 12-14px erhöht
5. **TakeawayCard:** Emoji entfernt, Label "Leitfrage", dynamische Modulfarbe im Gradient
6. **Navigation-Buttons:** Von rund zu abgerundet-rechteckig, mehr Präsenz

**Begründung:** Professionellere Optik, mehr visuelle Tiefe, Vermeidung von "AI-generiert" Ästhetik.

---

### 2025-02-06 – Splash-Screen mit Framework-Intro

**Kontext:** Die App startete direkt mit dem ModuleSelector. Es fehlte eine Einführung zum SCOPE-Framework.

**Optionen:**
1. Kein Intro, direkt zu Modulen
2. Splash-Screen mit Bild und kurzer Erklärung

**Entscheidung:** Option 2

**Begründung:** User-Wunsch. Gibt Kontext zum Framework bevor man startet.

**Konsequenzen:** Neuer SplashScreen.jsx mit Technologie+Natur-Bild, Framework-Beschreibung, Starten-Button.

---

### 2025-02-06 – Modul-Abschluss-Flow

**Kontext:** Nach der letzten Card (7/7) war der Next-Button deaktiviert. User mussten manuell zurück navigieren.

**Optionen:**
1. Automatisch zurück zur Übersicht
2. "Modul abgeschlossen"-Screen mit Optionen
3. Nächstes Modul automatisch starten

**Entscheidung:** Option 2 (mit Element von 3)

**Begründung:** Bestätigt Erfolg, bietet Wahl zwischen nächstem Modul und Übersicht.

**Konsequenzen:**
- Neuer ModuleComplete.jsx
- Automatischer Vorschlag des nächsten Moduls
- "Zurück zur Übersicht" als sekundäre Option
- Fortschritts-Tracking (completedModules State)

---

### 2025-02-06 – Bilder im WebP-Format

**Kontext:** Hook-Cards brauchen Hintergrundbilder. Format-Wahl für Performance.

**Optionen:**
1. JPEG (Standard)
2. WebP (modernes Format)
3. AVIF (neuestes Format)

**Entscheidung:** Option 2

**Begründung:**
- Breite Browser-Unterstützung
- ~30-50% kleiner als JPEG
- Gute Qualität bei niedriger Dateigröße
- 480px Breite für Mobile reicht aus

**Konsequenzen:** Alle Bilder als WebP, ~44KB total für 6 Bilder.

---

### 2025-02-06 – Checkliste UX: "Bedacht?" Label

**Kontext:** Die Checkliste auf Folie 5 (ActionCard) war unklar. User verstanden nicht, was sie mit den Checkboxen tun sollen.

**Optionen:**
1. Text ändern zu "Stellen Sie sich diese Fragen:" (ohne Checkboxen)
2. Checkboxen behalten mit Label "Bedacht?" / "Bedacht ✓"
3. Karten zum Durchblättern statt Liste

**Entscheidung:** Option 2

**Begründung:** Beibehaltung der Interaktivität, aber klarere Kommunikation des Zwecks. Die Checkboxen sind jetzt Selbst-Reflexions-Marker.

**Konsequenzen:** ActionCard.jsx zeigt jetzt "Bedacht?" neben jeder Frage, wird zu "Bedacht ✓" nach Anklicken.

---

### 2025-02-06 – Farbige SCOPE-Buchstaben auf Startseite entfernt

**Kontext:** Die Opener-Seite hatte eine Reihe bunter S-C-O-P-E Buchstaben über den Modul-Karten.

**Optionen:**
1. Buchstaben behalten
2. Buchstaben entfernen

**Entscheidung:** Option 2

**Begründung:** User-Feedback: "Schaut ein bisschen zu kindisch aus"

**Konsequenzen:** Cleaner Look, Fokus auf die Modul-Karten selbst.

---

### 2025-02-06 – Watermark-Position nach unten

**Kontext:** Der große Modul-Buchstabe im Hintergrund war mittig positioniert und wurde oft von Text verdeckt.

**Optionen:**
1. Mittig belassen (top: 50%)
2. Nach unten verschieben (über Navigation-Dots)

**Entscheidung:** Option 2

**Begründung:** Weniger Überlappung mit Content-Text, bessere visuelle Balance.

**Konsequenzen:** Watermark jetzt bei `bottom: 60px`.

---

### 2025-02-06 – Unsplash Bilder: Statisch vs. Dynamisch

**Kontext:** Hook-Cards benötigen Hintergrundbilder. Unsplash API ist verfügbar.

**Optionen:**
1. Dynamisches Laden via API bei jedem Seitenaufruf
2. Statische Bilder vorauswählen und einbetten
3. Hybrid: Statisch mit API-Fallback

**Entscheidung:** Option 2 (empfohlen für Production)

**Begründung:**
- Schnellere Ladezeit
- Keine API-Rate-Limits
- Konsistente User Experience
- Bilder können optimiert werden

**Konsequenzen:**
- Bilder in UNSPLASH_IMAGES.md dokumentiert
- Credits in src/data/imageCredits.js hinterlegt
- Fotografen müssen kreditiert werden

---

### 2025-02-06 – Tech Stack: Vite + React 18

**Kontext:** Projekt-Setup für SCOPE Schnellcheck Alpha.

**Optionen:**
1. Vite + React 18 (empfohlen)
2. Create React App
3. Next.js
4. Standalone HTML (kein Build)

**Entscheidung:** Option 1

**Begründung:**
- Schneller Dev-Server
- Moderne Build-Pipeline
- Einfaches Netlify-Deployment
- Keine SSR-Komplexität nötig

**Konsequenzen:** package.json mit Vite-Dependencies, vite.config.js für Konfiguration.

---

### 2025-02-06 – Datenstruktur: Separate Dateien pro Modul

**Kontext:** Wo sollen die Content-Daten für die 5 Module gespeichert werden?

**Optionen:**
1. Eine große modules.js Datei
2. Separate Dateien: s.js, c.js, o.js, p.js, e.js
3. JSON-Dateien
4. Markdown mit Frontmatter

**Entscheidung:** Option 2

**Begründung:**
- Bessere Übersichtlichkeit
- Einfacheres Bearbeiten einzelner Module
- Kein zusätzlicher JSON-Parser nötig
- Tree-Shaking möglich

**Konsequenzen:** src/data/cards/ Verzeichnis mit 5 JS-Dateien + index.js für Exports.
