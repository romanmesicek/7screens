# UX Research: Mobile Micro-Learning & Card-Based Educational Apps

**Datum:** 2026-02-09
**Kontext:** Recherche zu UX Best Practices für SCOPE Schnellcheck (5 Module x 7 Cards, Dark Mode, 390x700px, German text)
**Quellen:** Web-Recherche zu aktuellen (2025-2026) Richtlinien, App-Analysen (Duolingo, Blinkist, Mimo, Brilliant), WCAG-Standards, Forschungsliteratur

---

## 1. Card/Screen Transitions

### Empfohlene Werte

| Parameter | Empfehlung | Begründung |
|-----------|------------|------------|
| **Transition-Typ** | Slide + Fade (horizontal) | Instagram Stories, Duolingo und Blinkist nutzen slide-basierte Übergänge; Nutzer erwarten horizontale Wischbewegung bei Card-Decks |
| **Dauer** | 250-300ms | 200ms für Mikrointeraktionen (Buttons, Feedback), 300ms für Card-Wechsel. Unter 200ms wirkt abrupt, über 400ms fühlt sich träge an |
| **Easing** | `cubic-bezier(0.4, 0.0, 0.2, 1)` (Material Design standard) | Natürliche Beschleunigung/Verzögerung; lineares Easing wirkt robotisch |
| **Slide-Distanz** | 30-50px (partial slide) | Vollbreiten-Slide (100%) wirkt zu dramatisch für Content-Cards; 30px gibt Richtungsfeedback ohne Ablenkung |
| **Fade-Opacity** | 0 → 1 über 200ms | Kombiniert mit Slide entsteht ein sanfter "Aufdecken"-Effekt |

### Spring-Physics (für Swipe-Gesten)

| Parameter | Wert | Library |
|-----------|------|---------|
| **Stiffness** | 300-400 | Framer Motion / react-spring |
| **Damping** | 25-35 | Höher = weniger Bounce; 30 ist ein guter Mittelwert für Cards |
| **Mass** | 1 | Standard; erhöhen nur für "schwere" UI-Elemente |
| **Beispiel (Framer Motion)** | `{ type: "spring", stiffness: 380, damping: 32 }` | Empfohlen für Card-Swipe-Gesten |

### GPU-Performance-Regeln

```css
/* NUR diese Properties animieren für 60fps */
.card-transition {
  transform: translateX(0);  /* GPU-beschleunigt */
  opacity: 1;                /* GPU-beschleunigt */
  will-change: transform, opacity;
}

/* NIEMALS animieren (löst Layout-Neuberechnung aus): */
/* left, top, right, bottom, width, height, margin, padding */
```

### Aktueller Stand vs. Empfehlung

**Ist:** Fade + Slide (30px), 300ms, ease-out
**Empfehlung:** Sehr gut gewählt. Optional: Spring-Physics für Swipe-Gesten hinzufügen, was sich natürlicher anfühlt als `ease-out`. CSS-basierte Transitions (aktueller Ansatz) sind performanter als JS-basierte.

---

## 2. Progress Indication

### Zweistufiges System (Modul + Card)

| Ebene | Element | Design | Position |
|-------|---------|--------|----------|
| **Modul-Level** | Text + Icon | "S - Sufficiency (1/5)" oder Buchstaben-Reihe S C O P E mit aktivem hervorgehoben | Header (Stretch Zone) |
| **Card-Level** | Progress Dots (Pill-Form) | 7 Dots, aktiv = Pill (24px breit), Modulfarbe | Footer (Natural Zone) |
| **Gesamt** | Segmented Bar (optional) | 5 Segmente je 7 Einheiten = 35 Gesamtfortschritt | ModuleSelector |

### Progress-Dot-Spezifikationen

| State | Breite | Höhe | Farbe | Border-Radius |
|-------|--------|------|-------|---------------|
| Inaktiv (zukünftig) | 8px | 8px | `#4B5563` | 50% (Kreis) |
| Aktiv (aktuell) | 24px | 8px | Modulfarbe | 4px (Pill) |
| Abgeschlossen | 8px | 8px | Modulfarbe (50% Opacity) | 50% (Kreis) |
| Transition | width 300ms ease | - | - | - |

### Forschungsergebnisse

- Progress Bars erhöhen die Completion Rate um **bis zu 40%** (Trophy.so, 2025)
- "Goal Gradient Effect": Nutzer beschleunigen, je näher sie dem Ziel sind
- Granulares Tracking (Card-Ebene + Modul-Ebene) reduziert das Gefühl, in einer großen Menge Material verloren zu sein
- **Empfehlung:** 7 Dots sind ideal (unter 10 ist übersichtlich). Duolingo nutzt eine Segmented Progress Bar oben; für 7 Cards reichen Dots

### Aktueller Stand vs. Empfehlung

**Ist:** 7 Dots (Pill-Form), Modulname + Fortschritt
**Empfehlung:** Gut. Ergänzung: "Completed"-State für besuchte Cards (halbtransparente Modulfarbe) statt nur Grau, damit der Nutzer sieht, was bereits besucht wurde.

---

## 3. Gamification Elements

### Für Web-Kontext geeignete Mechanismen

| Element | Aufwand | Impact | Empfehlung für SCOPE |
|---------|---------|--------|---------------------|
| **Modul-Completion-Badge** | Gering | Hoch | Animiertes Checkmark + Farbburst beim Abschließen eines Moduls |
| **Fortschritts-Counter** | Gering | Mittel | "2/5 Module abgeschlossen" auf ModuleSelector |
| **Micro-Celebration** | Mittel | Hoch | Confetti/Partikel bei Quiz-Richtigantwort und Modul-Abschluss |
| **Streak (Daily)** | Hoch | Hoch | NUR mit localStorage/Backend sinnvoll; für Session-only App nicht empfohlen |
| **XP/Punkte** | Hoch | Mittel | Zu komplex für 35 Cards; bei Duolingo nur wegen täglicher Wiederholung sinnvoll |
| **Leaderboard** | Sehr hoch | Mittel | Braucht Backend; nicht relevant für Lern-Tool ohne Social-Kontext |

### Konkrete Implementierungen

**1. Modul-Abschluss-Animation (empfohlen)**
```
Dauer: 1200ms gesamt
Phase 1 (0-400ms): Checkmark-Icon zeichnet sich (stroke-dashoffset)
Phase 2 (200-800ms): Partikel-Burst (8-12 Partikel in Modulfarbe)
Phase 3 (400-1200ms): Text-Fade "Modul [X] abgeschlossen!"
Trigger: Nach Screen 7 (TakeawayCard) → Weiter → ModuleComplete
```

**2. Quiz-Richtig-Feedback (empfohlen)**
```
Dauer: 600ms
Phase 1 (0-200ms): Button wird grün, Scale 1.0 → 1.05 → 1.0
Phase 2 (100-400ms): Checkmark erscheint (fade + scale)
Phase 3 (200-600ms): Feedback-Text slide-up
Optional: Haptic (navigator.vibrate(50)) auf Android
```

**3. ModuleSelector-Badges (empfohlen)**
```
Nicht abgeschlossen: Modulfarbe-Border, Letter groß
Abgeschlossen: Ausgefüllt + kleines Checkmark-Overlay
Alle fertig: Goldener Rahmen + "SCOPE komplett" Badge
```

### Forschung

- Badges erhöhen Completion Rates um **30%** (Trophy.so, 2025)
- Nutzer mit 7-Tage-Streak bei Duolingo sind **3.6x** wahrscheinlicher langfristig aktiv
- Streaks + Milestones kombiniert: **40-60% höhere DAU** (Daily Active Users)
- **Für Session-only Web-App:** Fokus auf Completion-Rewards statt Streaks. Streaks erfordern Persistenz (localStorage mindestens)

---

## 4. Quiz/Interaction Design

### Touch Targets

| Standard | Mindestgröße | Empfehlung |
|----------|-------------|------------|
| **WCAG 2.2 AA** (gesetzlich ab 2025 EAA) | 24x24 CSS px | Minimum-Compliance |
| **Apple HIG** | 44x44 pt | Empfohlen für iOS-Nutzer |
| **Material Design** | 48x48 dp | Empfohlen für Android-Nutzer |
| **SCOPE Schnellcheck** | **48x48px Minimum** | Alle tappbaren Elemente (Quiz-Optionen, Checkboxen, Navigation) |

### Quiz-Feedback-States

| State | Visuell | Timing |
|-------|---------|--------|
| **Neutral (vor Auswahl)** | BG `#1F2937`, Border `#374151`, Text `#F9FAFB` | - |
| **Hover/Focus** | BG `#374151`, Border Modulfarbe | Sofort |
| **Richtig gewählt** | BG `#059669` (20% Opacity), Border `#059669`, Checkmark-Icon | 0-200ms |
| **Falsch gewählt** | BG `#DC2626` (20% Opacity), Border `#DC2626`, X-Icon | 0-200ms |
| **Richtige Antwort (bei Fehler)** | Border `#059669` (pulsierend), Text hervorgehoben | 200-400ms |
| **Feedback-Text** | Slide-up + Fade, unter den Optionen | 200-600ms |

### Haptic Feedback (Vibration API)

```javascript
// Nur auf Android (iOS Safari unterstützt Vibration API NICHT)
const haptic = {
  correct: () => navigator.vibrate?.(50),      // Kurzer "Tap"
  incorrect: () => navigator.vibrate?.([30, 50, 30]), // Doppelter kurzer Buzz
  complete: () => navigator.vibrate?.([50, 30, 50, 30, 100]), // Celebration-Pattern
};

// Feature Detection + User Preference Check
if ('vibrate' in navigator && userPreference !== 'off') {
  haptic.correct();
}
```

**Wichtig:** Vibration API funktioniert NUR auf Android-Browsern. iOS Safari unterstützt es nicht. Die Haptic-Feedback-Strategie muss optional sein und darf nicht die einzige Feedbackform sein.

### Interaktions-Patterns

| Element | Tap-Verhalten | Feedback |
|---------|---------------|----------|
| Quiz-Option | Single-Tap wählt aus, kein Deselect | Visuell + optional Haptic |
| Checkbox | Toggle bei Tap | Bounce-Animation (scale 1.0 → 1.1 → 1.0, 200ms) + Color-Change |
| Nav-Button | Tap → nächste/vorherige Card | Active: Scale 0.95 (100ms) |
| Progress Dot | Tap → navigiert zu Card (optional) | Color-Transition (300ms) |

### Aktueller Stand vs. Empfehlung

**Ist:** Quiz mit grün/rot Feedback, 44px Touch Targets, Bounce-Animation
**Empfehlung:** Touch Targets auf 48px erhöhen (Material Design). Haptic Feedback als Progressive Enhancement hinzufügen. Feedback-Timing und States sind gut spezifiziert.

---

## 5. Typography for Mobile Reading (German Text)

### Schriftgrößen

| Element | Empfohlen | Aktuell | Anpassung? |
|---------|-----------|---------|------------|
| **Body Text** | 16-18px | 16-18px | Gut; 16px als Minimum beibehalten |
| **Headlines** | 24-32px | 28-32px | Gut |
| **Labels/Captions** | 12-14px | 12px | OK, aber 13-14px für bessere Lesbarkeit auf kleinen Screens |
| **Stat-Zahlen** | 40-64px | 48-64px | Gut |
| **Quiz-Optionen** | 16-18px mit min. 48px Taphöhe | Nicht spezifiziert | 16px Text in 52px hohem Button |

### Line Height

| Element | Empfohlen | Begründung |
|---------|-----------|------------|
| **Body (German)** | **1.6** (≈160%) | Deutsche Texte brauchen MEHR Zeilenabstand als Englisch wegen längerer Wörter und Komposita. Standard 1.5 reicht nicht. |
| **Headlines** | **1.2-1.3** | Bei großen Schriftgrößen ist weniger Zeilenabstand nötig |
| **Labels** | **1.4** | Kompakt, aber lesbar |

### Zeichen pro Zeile (German-spezifisch)

| Screen-Breite | Zeichenzahl | Begründung |
|---------------|-------------|------------|
| **390px (mit 24px Padding)** | **~35-40 Zeichen** | Bei 342px nutzbarer Breite und 16px Inter ergeben sich ~38 Zeichen. Deutsche Wörter sind im Schnitt 11.7 Zeichen lang (vs. 8.2 Englisch). |
| **Empfohlen für Deutsch** | **30-45 Zeichen/Zeile** | Weniger als die englischen 50-75 Zeichen. Kürzere Zeilen kompensieren die längeren Wörter. |

### German-spezifische Herausforderungen

| Problem | Lösung |
|---------|--------|
| **Komposita (z.B. "Nachhaltigkeitsbewertung")** | `word-break: break-word` oder `hyphens: auto; lang="de"` |
| **30% längere Texte als Englisch** | Etwas kleinere Font-Size (16px statt 18px) für Body ODER scrollbaren Bereich |
| **200% längere Wörter möglich** | Buttons/Labels mit `overflow: hidden; text-overflow: ellipsis` oder mehrzeilig |
| **Umlaute (ä, ö, ü, ß)** | Font muss alle Glyphen enthalten (Poppins + Inter: OK) |

### CSS-Empfehlungen für German Text

```css
body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-hyphens: auto;
  hyphens: auto;
  lang: "de";
  word-break: break-word;
  overflow-wrap: break-word;
}

h1, h2, h3 {
  font-family: 'Poppins', system-ui, sans-serif;
  line-height: 1.25;
  -webkit-hyphens: none;
  hyphens: none;  /* Headlines nicht umbrechen */
}
```

### Aktueller Stand vs. Empfehlung

**Ist:** Poppins Bold 28-32px Headlines, Inter 16-18px Body
**Empfehlung:** Gut gewählt. Ergänzen: `hyphens: auto` mit `lang="de"` auf dem HTML-Element. Line-Height von 1.5 auf 1.6 erhöhen für German Body Text.

---

## 6. Color and Contrast (Dark Mode)

### Hintergrundfarben-Validierung

| Farbe | Hex | Verwendung | Kontrast zu `#F9FAFB` | WCAG AA? |
|-------|-----|------------|----------------------|----------|
| Hintergrund | `#111827` | Basis-BG | **15.4:1** | Weit über 4.5:1 |
| Card-Fläche | `#1F2937` | Card-BG | **12.5:1** | Weit über 4.5:1 |
| Text sekundär | `#9CA3AF` auf `#111827` | Labels | **5.6:1** | Ja (AA) |
| Text sekundär | `#9CA3AF` auf `#1F2937` | Labels auf Cards | **4.6:1** | Knapp (AA) |
| Borders | `#374151` auf `#111827` | Trennlinien | **3.2:1** | Non-Text OK (3:1) |

### Dark Mode Best Practices (2025-2026 Forschung)

| Regel | Detail |
|-------|--------|
| **Kein reines Schwarz (#000)** | `#111827` ist korrekt; reines Schwarz + weißer Text erzeugt "Halation" (Leuchteffekt), besonders bei Astigmatismus |
| **Kein reines Weiß (#FFF)** | `#F9FAFB` ist korrekt; reduziert Blendung in dunkler Umgebung |
| **Komfort-Kontrast** | 2026-Trend: über WCAG-Minimum hinausgehen, aber unter 21:1 bleiben. `#F9FAFB` auf `#111827` (15.4:1) ist optimal |
| **Modulfarben auf Dark BG** | Alle 5 Modulfarben testen! Einige (besonders Orange #EA580C) können auf `#111827` schwächer wirken |
| **Retention-Vorteil** | Studie 2024: Dark Mode Nutzer behalten **14% mehr Information** nach 30-Minuten-Sessions |
| **Nutzer-Akzeptanz** | 81% Android, 75% iOS Nutzer haben Dark Mode aktiviert (2024) |

### Modulfarben-Kontrast-Check auf `#111827`

| Modul | Farbe | Kontrast zu BG | Status |
|-------|-------|---------------|--------|
| S (Blau) | `#2563EB` | ~4.2:1 | Knapp unter AA für Text! Nur für Large Text (3:1) oder UI-Komponenten OK |
| C (Grün) | `#059669` | ~4.1:1 | Gleiche Situation wie Blau |
| O (Orange) | `#EA580C` | ~4.0:1 | Grenzwertig; als Akzentfarbe OK, nicht als einziger Textkontrast |
| P (Violett) | `#7C3AED` | ~4.5:1 | Knapp AA |
| E (Cyan) | `#0891B2` | ~3.8:1 | Unter AA für normalen Text |

**Wichtiger Hinweis:** Die Modulfarben als Textfarbe auf `#111827` erreichen teilweise NICHT WCAG AA (4.5:1). Empfehlungen:
1. Modulfarben nur für **large text** (>= 18.66px bold oder >= 24px normal) verwenden, wo 3:1 reicht
2. Oder: Hellere Varianten der Modulfarben für Text-on-Dark nutzen (z.B. `#60A5FA` statt `#2563EB`)
3. Stat-Zahlen (48-64px) sind Large Text und brauchen nur 3:1 -- alle Farben bestehen

### Aktueller Stand vs. Empfehlung

**Ist:** `#111827` BG, `#F9FAFB` Text, `#9CA3AF` sekundär
**Empfehlung:** Sehr gut. ABER: Modulfarben als Text auf dunklem BG prüfen -- besonders Cyan (`#0891B2`) und Orange (`#EA580C`) sind grenzwertig. Für Body-Text hellere Varianten erwägen.

---

## 7. Cognitive Load

### Elemente pro Screen

| Guideline | Empfehlung | Anwendung auf SCOPE |
|-----------|------------|---------------------|
| **Miller's Law** | 5-9 Chunks gleichzeitig verarbeitbar | Max. 5-7 distinkte visuelle Elemente pro Card |
| **Hick's Law** | Weniger Optionen = schnellere Entscheidung | Quiz: 3 Optionen (aktuell) ist ideal; 4+ erhöht Entscheidungszeit signifikant |
| **Progressive Disclosure** | Max. 2-3 Ebenen Tiefe | Card 1 = Einstieg, Card 2-6 = Details, Card 7 = Zusammenfassung |
| **Attention Budget** | ~8 Sekunden initiale Aufmerksamkeit | Hook-Card muss in <3 Sekunden den Kern kommunizieren |

### Informationsdichte pro Card-Typ

| Card-Typ | Max. Elemente | Text-Limit | Visuelle Elemente |
|----------|---------------|------------|-------------------|
| HookCard | 3 (Bild, Headline, Subtext) | Headline: 8 Wörter, Body: 20 Wörter | 1 Bild (Vollbild) |
| ContentCard | 4 (Stat, Body, Quelle, ggf. Icons) | Body: 40-60 Wörter | 1-3 Datenpunkte |
| ConceptCard | 5 (Headline, 2 Spalten, ggf. vs.-Element) | Je Spalte: 30 Wörter | 2 Icons + Trennlinie |
| ExampleCard | 4 (Label, Headline, 2 Optionen) | Body: 40-50 Wörter | 2 Vergleichselemente |
| ActionCard | 5 (Headline, 3-5 Checkboxen) | Pro Checkbox: 10-15 Wörter | Checkboxen als interaktive Elemente |
| QuizCard | 5 (Label, Frage, 3 Optionen) | Frage: 15-25 Wörter, je Option: 10-15 Wörter | Farbiges Feedback |
| TakeawayCard | 3 (Zitat, CTA, ggf. Icon) | Zitat: 15-20 Wörter | Gradient-Hintergrund |

### Progressive Disclosure in SCOPE

```
Screen 1 (Hook): "Attention Grabber" → Neugier wecken
Screen 2 (Content): "Problem" → Kontext + Fakten
Screen 3 (Concept): "Framework" → Konzept vorstellen
Screen 4 (Example): "Beweis" → Praxisbeispiel
Screen 5 (Action): "Handlung" → Selbst anwenden
Screen 6 (Quiz): "Überprüfung" → Gelerntes testen
Screen 7 (Takeaway): "Verankerung" → Kernbotschaft mitnehmen
```

Dies folgt der klassischen Lernpyramide: Aufmerksamkeit → Verstehen → Anwenden → Evaluieren → Erinnern.

### Aktueller Stand vs. Empfehlung

**Ist:** 7 Card-Typen mit unterschiedlicher Informationsdichte
**Empfehlung:** Struktur ist exzellent. Achten auf: max. 60 Wörter Body-Text pro Card (German Text ist ~30% länger!). Hook-Card-Headline auf max. 8 Wörter begrenzen.

---

## 8. Retention Patterns

### Session-Länge

| Metrik | Forschungsergebnis | Anwendung |
|--------|-------------------|-----------|
| **Optimale Micro-Learning-Dauer** | 3-5 Minuten pro Modul | 7 Cards x 25-40 Sekunden = ~3-4.5 Minuten. Ideal. |
| **Retention-Lift bei <5 Min** | +20% gegenüber längeren Sessions | SCOPE-Module passen perfekt |
| **Completion Rate Micro-Learning** | ~80% (vs. 20% bei langen Kursen) | 7 Cards fühlen sich erreichbar an |
| **Spacing Effect** | Quiz-Wiederholung nach Tagen: 34% → 73% Retention | Optional: "Wiederholungs-Quiz" Feature für spätere Phase |

### Was hält Nutzer bei der Stange?

| Faktor | Mechanismus | Implementierung in SCOPE |
|--------|------------|------------------------|
| **Goal Gradient** | Je näher am Ziel, desto motivierter | Progress Dots zeigen: "Noch 2 Cards!" |
| **Endowed Progress** | Gefühl, schon angefangen zu haben | Erster Dot sofort aktiv (nicht "0/7") |
| **Completion Bias** | Menschen wollen Angefangenes beenden | "3/5 Module" auf Selector anzeigen |
| **Immediate Feedback** | Sofortige Rückmeldung auf Aktionen | Quiz-Feedback in <200ms |
| **Variable Reward** | Unerwartete Belohnungen | Unterschiedliche Card-Typen halten Interesse (Hook → Quiz → Takeaway) |
| **Self-Assessment** | Selbsttest hebt Recall auf >80% | Quiz auf Screen 6 ist ideal positioniert |
| **Zeigarnik-Effekt** | Unvollständige Aufgaben bleiben im Gedächtnis | Checkliste (Screen 5) ohne Zwang, alles abzuhaken |

### Forschungszahlen

- **Micro-Learning Retention:** 25-60% besser als traditionelles E-Learning
- **Interaktive Elemente:** +36% Verweildauer gegenüber passivem Text/Video
- **Selbst-Assessment nach jedem Segment:** >80% Recall (vs. 47% bei passivem Konsum)
- **Completion Rate mit Micro-Units:** 58% (vs. 24% bei langen Tracks)

### Aktueller Stand vs. Empfehlung

**Ist:** 7 Cards pro Modul, Quiz auf Screen 6, Checkliste auf Screen 5
**Empfehlung:** Perfekte Struktur. Ergänzung: "Endowed Progress" nutzen (Start bei "1/7" statt "0/7"). Nach Modul-Abschluss kurze Feier-Animation als Variable Reward.

---

## 9. Thumb Zone Design

### Zonen-Mapping (390px breit, 700px hoch)

```
┌──────────────────────────┐ 0px
│                          │
│     NO-GO ZONE           │ 0-210px (obere 30%)
│  (Nicht-interaktiv:      │ → ProgressBar, Watermark, Headlines
│   Info-Anzeige)          │
│                          │
├──────────────────────────┤ 210px
│                          │
│     STRETCH ZONE         │ 210-420px (mittlere 30%)
│  (Sekundäre Aktionen:    │ → Body-Text, Konzept-Spalten
│   Leseinhalte)           │
│                          │
├──────────────────────────┤ 420px
│                          │
│     NATURAL ZONE         │ 420-700px (untere 40%)
│  (Primäre Aktionen:      │ → Quiz-Optionen, Checkboxen,
│   Alle Interaktionen)    │   Navigation, Progress Dots
│                          │
└──────────────────────────┘ 700px
```

### Platzierungsempfehlungen

| Element | Zone | Begründung |
|---------|------|------------|
| **ProgressBar** | Top (No-Go) | Nur Info-Anzeige, kein Tap nötig |
| **Watermark** | Center (Stretch) | Visuelles Element, kein Tap |
| **Card-Content (Text)** | Stretch + Natural | Scrollbar bei Bedarf |
| **Quiz-Optionen** | Natural (Bottom Half) | Primäre Interaktion, muss leicht erreichbar sein |
| **Checkboxen** | Natural (Bottom Half) | Interaktiv, Daumen-erreichbar |
| **Navigation (Prev/Next)** | Bottom (Natural) | Häufigste Aktion |
| **Progress Dots** | Bottom (Natural) | In der Nähe der Navigation |

### Touch-Target-Spacing

```
Minimum Tap Target: 48x48px (empfohlen)
Minimum Spacing zwischen Targets: 8px
Quiz-Option-Höhe: 52-56px (48px Target + 4-8px Padding)
Navigation-Button: 48x48px (aktuell 40x40px → erhöhen!)
```

### Forschung

- **>80% der Nutzer** bedienen Smartphones einhändig
- Auf 6.5+ Zoll Screens: nur ~40% der Fläche ist mit dem Daumen erreichbar
- Bottom-Navigation ist **49% schneller** zu erreichen als Top-Navigation

### Aktueller Stand vs. Empfehlung

**Ist:** Navigation unten, Nav-Buttons 40x40px
**Empfehlung:** Nav-Buttons auf 48x48px erhöhen. Quiz-Optionen und Checkboxen in die untere Hälfte des Screens platzieren. ProgressBar oben (nur Anzeige) ist korrekt.

---

## 10. Scroll vs. Paginate

### Entscheidungsmatrix für SCOPE

| Szenario | Empfehlung | Begründung |
|----------|------------|------------|
| **Card-zu-Card-Wechsel** | Strict Pagination (Horizontal Swipe) | Story-Format; jede Card ist eine abgeschlossene Einheit. Kein vertikaler Scroll zwischen Cards. |
| **Inhalt innerhalb einer Card** | Vertical Scroll (bei Bedarf) | Wenn Body-Text + Quiz-Optionen + Feedback den sichtbaren Bereich überschreiten |
| **ModuleSelector** | Keine Scroll nötig | 5 Module passen auf einen Screen (2x3 Grid bei 390px) |

### Wann vertikaler Scroll innerhalb einer Card?

| Card-Typ | Scroll nötig? | Bedingung |
|----------|---------------|-----------|
| HookCard | Nein | Bild + kurzer Text passt immer |
| ContentCard | Selten | Bei >60 Wörtern Body-Text |
| ConceptCard | Möglich | Wenn beide Spalten lang sind |
| ExampleCard | Selten | Kompakter Layout |
| ActionCard | **Ja, bei 5+ Checkboxen** | 5 Items x 52px = 260px + Header |
| QuizCard | **Ja, nach Feedback** | Frage + 3 Optionen + Feedback-Text |
| TakeawayCard | Nein | Zitat + CTA ist kompakt |

### Scroll-Indikatoren

```css
/* Subtiler Fade-Gradient am unteren Rand bei scrollbarem Inhalt */
.card-content::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(transparent, #111827);
  pointer-events: none;
  opacity: 1; /* Ausblenden wenn am Ende gescrollt */
}
```

### Forschung

- Vertikaler Scroll auf Mobile ist **die natürlichste Geste** (Daumen-Flick)
- Pagination ist besser für **begrenzten, diskreten Content** (Story-Format)
- Kombination (Horizontal-Pagination zwischen Cards, Vertical-Scroll innerhalb) wird von Instagram Stories und Google Web Stories genutzt
- Zu langes Scrollen (>3 Screen-Höhen) → Abbruchgefahr steigt

### Aktueller Stand vs. Empfehlung

**Ist:** Horizontal-Pagination zwischen Cards, teilweise vertikaler Scroll innerhalb
**Empfehlung:** Korrekte Architektur. Ergänzung: Visuellen Scroll-Indikator (Fade-Gradient unten) hinzufügen, wenn Card-Inhalt überfließt. Scroll-Tiefe auf max. 1.5x Viewport-Höhe begrenzen.

---

## 11. Loading States and Skeleton Screens

### Empfehlungen für SCOPE

| Zustand | Empfehlung | Begründung |
|---------|------------|------------|
| **Initial Load** | Splash Screen (bereits vorhanden) | App-Shell sofort, Content nachgeladen |
| **Card-Wechsel** | Kein Skeleton nötig | Content ist lokal (JS-Objekte), kein Network-Request |
| **Bilder (Hook-Cards)** | Skeleton + Blur-up | Placeholder in Modulfarbe (10% Opacity), Bild fade-in wenn geladen |
| **Font-Loading** | `font-display: swap` | Text sofort sichtbar mit Fallback-Font, swap wenn geladen |

### Bild-Lade-Strategie

```css
/* Skeleton für Hook-Card-Bilder */
.hook-image-skeleton {
  background: linear-gradient(
    90deg,
    #1F2937 25%,    /* Dunkel */
    #2D3748 50%,    /* Etwas heller (Shimmer) */
    #1F2937 75%     /* Dunkel */
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Skeleton-Farben für Dark Mode

| Element | Farbe |
|---------|-------|
| Basis | `#1F2937` (Card-BG) |
| Shimmer-Highlight | `#374151` (Border-Farbe) |
| Shimmer-Bewegung | Links → Rechts, 1.5s, ease-in-out, infinite |

### Performance-Wahrnehmung

- Skeleton Screens werden als **30% schneller** wahrgenommen als Spinner (identische Ladezeit)
- Content-Layout-Shift (CLS) vermeiden: Skeleton muss **gleiche Dimensionen** haben wie finaler Content
- Progressive Loading: Header → Text → Bilder (in dieser Reihenfolge)

### Aktueller Stand vs. Empfehlung

**Ist:** SplashScreen als Initial Load, Content als JS-Objekte (kein API-Loading)
**Empfehlung:** Minimal-Aufwand nötig, da Content lokal ist. Einzige Verbesserung: `font-display: swap` für Google Fonts und optional Shimmer-Skeleton für Hook-Card-Bilder (WebP-Dateien).

---

## 12. Offline Capability

### Service Worker Strategie für SCOPE

| Ressource | Caching-Strategie | Begründung |
|-----------|-------------------|------------|
| **App Shell (HTML, CSS, JS)** | Cache-First | Statische Dateien, ändern sich nur bei Deploy |
| **Google Fonts** | Cache-First (Stale-While-Revalidate) | Fonts ändern sich nie |
| **Hook-Card-Bilder (WebP)** | Cache-First | Bilder sind statisch (vorbereitet, nicht API) |
| **Content (JS-Objekte)** | Im Bundle enthalten | Kein separates Caching nötig |

### Minimalistische Implementierung

```javascript
// service-worker.js
const CACHE_NAME = 'scope-schnellcheck-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/index.js',    // Vite-generiertes Bundle
  '/assets/index.css',   // Falls vorhanden
  '/images/s-hook.webp',
  '/images/c-hook.webp',
  '/images/o-hook.webp',
  '/images/p-hook.webp',
  '/images/e-hook.webp',
  // Google Fonts werden beim ersten Load gecacht
];

// Install: Alle statischen Assets cachen
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// Fetch: Cache-First mit Network-Fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
```

### PWA-Manifest (Optional, aber empfohlen)

```json
{
  "name": "SCOPE Schnellcheck",
  "short_name": "SCOPE",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#111827",
  "theme_color": "#111827",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### Vorteil für Micro-Learning

- Nutzer können SCOPE in der U-Bahn, im Zug, offline durcharbeiten
- Gesamtes Bundle < 200KB + ~5 Bilder (~500KB) = ~700KB gesamt
- Einmal geladen, immer verfügbar
- Kein Backend nötig (rein statische Inhalte)

### Aktueller Stand vs. Empfehlung

**Ist:** Statische Site auf Netlify, kein Service Worker
**Empfehlung:** Service Worker mit Cache-First-Strategie hinzufügen (Phase 3 Enhancement). Gesamtgröße der App (~700KB) macht vollständiges Offline-Caching trivial. PWA-Manifest ermöglicht "Add to Homescreen".

---

## Zusammenfassung: Top-10 Quick Wins

| # | Maßnahme | Aufwand | Impact | Phase |
|---|----------|---------|--------|-------|
| 1 | **Nav-Buttons 40→48px** | 5 min | Hoch | Sofort |
| 2 | **Line-Height 1.5→1.6 für Body** | 5 min | Mittel | Sofort |
| 3 | **`hyphens: auto; lang="de"`** auf HTML | 5 min | Mittel | Sofort |
| 4 | **font-display: swap** bei Google Fonts | 5 min | Mittel | Sofort |
| 5 | **Modul-Completion-Animation** | 2-3h | Hoch | Phase 3 |
| 6 | **Haptic Feedback (Android)** | 1h | Mittel | Phase 3 |
| 7 | **Scroll-Indikator bei überlaufenden Cards** | 1-2h | Hoch | Phase 3 |
| 8 | **Hellere Modulfarben-Varianten für Text** | 1h | Hoch (Accessibility) | Phase 3 |
| 9 | **Service Worker + Offline** | 2-3h | Mittel | Phase 3 |
| 10 | **Quiz-Richtig-Confetti/Celebration** | 1-2h | Mittel (Engagement) | Phase 3 |

---

## Quellen

### Animation & Motion
- [UI/UX Evolution 2026: Micro-Interactions & Motion](https://primotech.com/ui-ux-evolution-2026-why-micro-interactions-and-motion-matter-more-than-ever/)
- [Motion Design & Micro-Interactions: What Users Expect in 2026](https://www.techqware.com/blog/motion-design-micro-interactions-what-users-expect)
- [The Physics Behind Spring Animations](https://blog.maximeheckel.com/posts/the-physics-behind-spring-animations/)
- [Framer Motion vs Motion One: Mobile Animation Performance 2025](https://reactlibraries.com/blog/framer-motion-vs-motion-one-mobile-animation-performance-in-2025)
- [React Transitions - Motion.dev](https://motion.dev/docs/react-transitions)
- [60 FPS Mobile Animations with CSS3](https://www.sitepoint.com/achieve-60-fps-mobile-animations-with-css3/)
- [CSS GPU Animation: Doing It Right - Smashing Magazine](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)

### Gamification & Retention
- [How to Design Like Duolingo: Gamification & Engagement](https://www.uinkits.com/blog-post/how-to-design-like-duolingo-gamification-engagement)
- [Duolingo's Gamification Secrets: Streaks & XP Boost Engagement by 60%](https://www.orizon.co/blog/duolingos-gamification-secrets)
- [Progress Bars Gamification Examples 2025](https://trophy.so/blog/progress-bars-feature-gamification-examples)
- [Streaks Gamification Case Study 2025](https://trophy.so/blog/streaks-gamification-case-study)
- [Microlearning Statistics, Facts and Trends 2025](https://elearningindustry.com/microlearning-statistics-facts-and-trends)
- [Microlearning vs Traditional Learning: 2025 Guide](https://vouchfor.com/blog/microlearning-vs-traditional-learning)
- [2025 Microlearning vs Traditional eLearning Retention & ROI](https://www.arist.co/post/2025-microlearning-vs-traditional-elearning-retention-roi-benchmarks/blogrelixir)

### Typography & Readability
- [Typography in UX: Best Practices Guide](https://developerux.com/2025/02/12/typography-in-ux-best-practices-guide/)
- [Optimal Line Length for Readability - UXPin](https://www.uxpin.com/studio/blog/optimal-line-length-for-readability/)
- [Font Size Guidelines for Responsive Websites](https://www.learnui.design/blog/mobile-desktop-website-font-size-guidelines.html)
- [Line Length & Line Height - Pimp my Type](https://pimpmytype.com/line-length-line-height/)
- [Character Count Localization - MyShyft](https://www.myshyft.com/blog/character-count-variations/)
- [Best Practices for Text Components in Mobile Design - Phrase](https://phrase.com/blog/posts/best-practices-for-text-components-in-mobile-design/)

### Accessibility & Touch Targets
- [WCAG 2.5.8 Target Size Minimum - W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [WCAG 2.5.8 Implementation Guide - AllAccessible](https://www.allaccessible.org/blog/wcag-258-target-size-minimum-implementation-guide)
- [Color Contrast Accessibility Guide 2025](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [WCAG 3.0 Updates 2026-2030](https://rubyroidlabs.com/blog/2025/10/how-to-prepare-for-wcag-3-0/)

### Dark Mode & Color
- [Dark Mode Design Best Practices 2026](https://www.tech-rz.com/blog/dark-mode-design-best-practices-in-2026/)
- [Dark Mode vs Light Mode: UX Guide 2025](https://altersquare.medium.com/dark-mode-vs-light-mode-the-complete-ux-guide-for-2025-5cbdaf4e5366)
- [Dark Mode and High Contrast for Learning Apps](https://midlandsinbusiness.com/dark-mode-and-high-contrast-themes-for-learning-apps)
- [Immediate Effects of Light/Dark Mode on Visual Fatigue - PMC 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12027292/)

### Haptics & Interaction
- [2025 Guide to Haptics: Enhancing Mobile UX](https://saropa-contacts.medium.com/2025-guide-to-haptics-enhancing-mobile-ux-with-tactile-feedback-676dd5937774)
- [Haptic Feedback for Web Apps with Vibration API](https://blog.openreplay.com/haptic-feedback-for-web-apps-with-the-vibration-api/)
- [Touch-Friendly UI Design Best Practices](https://dev.to/okoye_ndidiamaka_5e3b7d30/touch-friendly-ui-design-best-practices-to-ensure-seamless-mobile-interactions-4b1c)

### Cognitive Load & UX Patterns
- [Progressive Disclosure in UX - LogRocket](https://blog.logrocket.com/ux-design/progressive-disclosure-ux-types-use-cases/)
- [Progressive Disclosure - Interaction Design Foundation](https://www.interaction-design.org/literature/topics/progressive-disclosure)
- [Design for the Human Mind: Cognitive Science in UX](https://medium.com/design-bootcamp/design-for-the-human-mind-how-cognitive-science-shapes-ux-design-f0b83e3da6b6)

### Thumb Zone & Mobile Layout
- [The Thumb Zone: Designing for Mobile Users - Smashing Magazine](https://www.smashingmagazine.com/2016/09/the-thumb-zone-designing-for-mobile-users/)
- [Thumb-Friendly Design: Optimizing Mobile UI](https://medium.com/@uxandyouti/thumb-friendly-design-optimizing-mobile-ui-for-one-handed-use-0f4acc446b3f)
- [How to Design for Thumbs in the Era of Huge Screens](https://www.scotthurff.com/posts/how-to-design-for-thumbs-in-the-era-of-huge-screens/)

### Loading & Performance
- [Skeleton Loading Screen Design - LogRocket](https://blog.logrocket.com/ux-design/skeleton-loading-screen-design/)
- [Skeleton Screens 101 - NN/g](https://www.nngroup.com/articles/skeleton-screens/)
- [Skeleton Screens vs Spinners: Perceived Performance](https://ui-deploy.com/blog/skeleton-screens-vs-spinners-optimizing-perceived-performance)

### Scroll vs Paginate
- [Pagination vs Infinite Scroll UX - LogRocket](https://blog.logrocket.com/ux-design/pagination-vs-infinite-scroll-ux/)
- [Creative Scrolling Patterns for UX](https://blog.logrocket.com/ux-design/creative-scrolling-patterns-ux/)

### Offline & PWA
- [Offline-First PWAs: Service Worker Caching Strategies](https://www.magicbell.com/blog/offline-first-pwas-service-worker-caching-strategies)
- [PWA Caching - MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Caching)
- [PWA 2025 - Web Almanac](https://almanac.httparchive.org/en/2025/pwa)

### Learning Apps Analysis
- [Mobile UX Design Examples from Apps That Convert 2025](https://www.eleken.co/blog-posts/mobile-ux-design-examples)
- [Mobile-First Learning: Designing Engaging Educational Apps](https://elearningindustry.com/mobile-first-learning-designing-educational-apps-that-actually-engage)
- [Education App Gamification Examples 2025](https://trophy.so/blog/education-gamification-examples)
