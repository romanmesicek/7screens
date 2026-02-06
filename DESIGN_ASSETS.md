# SCOPE Schnellcheck – Design Assets & Design System

## Farbschema

### Modulfarben

| Modul | Buchstabe | Farbe | Hex | Verwendung |
|-------|-----------|-------|-----|------------|
| Sufficiency | S | Blau | `#2563EB` | Akzentbalken, Highlights, Watermark |
| Carbon | C | Grün | `#059669` | Akzentbalken, Highlights, Watermark |
| Outcomes | O | Orange | `#EA580C` | Akzentbalken, Highlights, Watermark |
| Power | P | Violett | `#7C3AED` | Akzentbalken, Highlights, Watermark |
| Endurance | E | Cyan | `#0891B2` | Akzentbalken, Highlights, Watermark |

### Gemeinsame Farben

| Element | Hex | Beschreibung |
|---------|-----|--------------|
| Hintergrund | `#111827` | Dunkel, fast schwarz |
| Text primär | `#F9FAFB` | Off-white, Headlines + Body |
| Text sekundär | `#9CA3AF` | Grau, Labels + Quellen |
| Flächen/Cards | `#1F2937` | Leicht heller als BG |
| Borders | `#374151` | Subtile Trennlinien |
| Success | `#059669` | Quiz richtig |
| Error | `#DC2626` | Quiz falsch |
| Warning | `#F59E0B` | Hinweise |

---

## Typografie

### Schriften

| Element | Font | Gewicht | Größe (mobil) | Farbe |
|---------|------|---------|---------------|-------|
| Headline | Poppins | 700 (Bold) | 28-32px | `#F9FAFB` |
| Stat-Zahlen | Poppins | 800 (ExtraBold) | 48-64px | Modulfarbe |
| Body | Inter | 400 (Regular) | 16-18px | `#F9FAFB` |
| Body betont | Inter | 600 (SemiBold) | 16-18px | `#F9FAFB` |
| Labels | Inter | 700 (Bold) | 12px, Uppercase | `#9CA3AF` |
| Watermark | Poppins | 800 (ExtraBold) | 240px | Modulfarbe, 6% Opacity |

### Google Fonts Import

```
Poppins:wght@700;800
Inter:wght@400;600;700
```

**Fallback:** DM Sans oder system-ui

---

## Layout-Elemente

### Watermark (Modul-Buchstabe)

- Position: Zentriert im Hintergrund
- Größe: 240px
- Opacity: 6% (0.06)
- Farbe: Modulfarbe
- z-index: 0 (hinter allem Content)

### Akzentbalken

- Position: Top der Card
- Höhe: 4px
- Breite: 100%
- Farbe: Modulfarbe

### Card-Container

- Max-width: 390px (mobil)
- Padding: 24px seitlich, 32px oben/unten
- Background: `#111827`
- Border-radius: 0 (vollflächig)

### Interaktive Elemente

| Element | Default | Hover | Active | Disabled |
|---------|---------|-------|--------|----------|
| Button | Modulfarbe, 100% | 80% Opacity | Scale 0.95 | 30% Opacity |
| Checkbox | Border `#4B5563` | Border Modulfarbe | Fill Modulfarbe | – |
| Quiz-Option | BG `#1F2937` | BG `#374151` | – | Opacity 0.5 |
| Nav-Arrow | `#9CA3AF` | `#F9FAFB` | Scale 0.95 | Opacity 0.3 |

---

## Visual Direction pro Modul

### Bildtypen nach Screen-Typ

| Screen | Bildtyp | Quelle | Behandlung |
|--------|---------|--------|------------|
| 1 Hook | Foto (Vollbild) | Unsplash API | Dunkles Overlay 60-80%, Modulfarbe als Gradient-Akzent |
| 2 Content/Fakten | Ikongrafik + Zahlen | Code-generiert (SVG) | Modulfarbe für Stat-Zahlen, grau für Kontext |
| 3 Konzept | Illustrativ (Zwei-Spalten) | Icons oder einfache SVG | Modulfarbe links, `#4B5563` rechts |
| 4 Praxisbeispiel | Schematische Darstellung | Icons + Layout | Kostenvergleich als visuelle Gegenüberstellung |
| 5 Aktion | Interaktive Elemente | UI-Komponenten | Checkboxen in Modulfarbe |
| 6 Quiz | Minimal | UI-Komponenten | Optionen als Buttons, Feedback-Farben |
| 7 Takeaway | Typografie-dominant | Kein Bild | Modulfarbe als Hintergrund-Gradient (10-20% Opacity) |

---

### Modul S – Sufficiency (Blau `#2563EB`)

**Mood:** Klarheit, Reduktion, bewusste Entscheidung. Weniger ist mehr.
**Bildsprache:** Aufgeräumt, ruhig, kontrastreich. Einfache Formen statt Komplexität.
**Farbtemperatur:** Kühl, sachlich.

| Screen | Visual-Konzept | Unsplash-Query / Umsetzung |
|--------|---------------|---------------------------|
| S-1 Hook | Hammer schlägt auf Nuss vs. Hand öffnet Nuss (Overkill-Metapher) | `simple,solution` oder `minimalism,hand-tool`; alternativ: zweigeteiltes Bild |
| S-2 Problem | Kreisdiagramm 87% rot | SVG: Donut-Chart, 87% in `#DC2626`, Rest in `#4B5563` |
| S-3 Konzept | Zwei Spalten: Zahnräder (Effizienz) vs. Fragezeichen (Suffizienz) | Icons: Zahnrad-Icon links, Fragezeichen-Icon rechts, Trennlinie |
| S-4 Beispiel | Chatbot-Icon (120k €) ↔ FAQ-Icon (5k €), Pfeil „80% gelöst" | Schematisch: zwei Boxen mit Beträgen, Verbindungspfeil |
| S-5 Aktion | 3 Checkboxen, animiert | UI-Komponente, Häkchen in `#2563EB` |
| S-6 Quiz | Multiple-Choice-Buttons | UI-Komponente, Standard-Quiz-Layout |
| S-7 Takeaway | Zitat groß, Bookmark-Icon | Typografie auf `#2563EB` Gradient-Hintergrund (15% Opacity) |

---

### Modul C – Carbon (Grün `#059669`)

**Mood:** Dringlichkeit trifft Sachlichkeit. Faktenbasiert, nicht alarmistisch.
**Bildsprache:** Technisch-industriell, Rechenzentren, Energie-Infrastruktur.
**Farbtemperatur:** Neutral bis kühl, Grün als Kontrast.

| Screen | Visual-Konzept | Unsplash-Query / Umsetzung |
|--------|---------------|---------------------------|
| C-1 Hook | 1 Glühbirne (Google) vs. 10 Glühbirnen (ChatGPT) | `data-center,server` oder `electricity,light-bulb`; Overlay mit Vergleichsgrafik |
| C-2 Fakten | Drei Datenpunkte als Icon-Reihe: Haus (13.000), CO₂-Wolke (+48%), Wassertropfen (160+) | SVG: drei Icons nebeneinander, Zahlen in `#059669`, Labels in `#9CA3AF` |
| C-3 Lebenszyklus | Linearer Fluss: Chip → Server → Smartphone → Mülltonne | SVG: vier Icons mit Pfeilen, Pfeildicke proportional zum Energieanteil (Inference dick) |
| C-4 Beispiel | Europakarte: Polen (rot, 13x) vs. Norwegen (grün, 1x) | Vereinfachte SVG-Karte, zwei Marker mit Zahlen |
| C-5 Aktion | Drei Icons nebeneinander: Weltkugel+Stecker, Größenvergleich, Messgerät | Icons in `#059669`, Checkliste darunter |
| C-6 Quiz | Balkendiagramm (drei Balken, B deutlich höchst) | SVG: Balken in `#059669` (B) und `#4B5563` (A, C) |
| C-7 Takeaway | CO₂-Messgerät-Icon, Zitat | Typografie auf `#059669` Gradient-Hintergrund |

---

### Modul O – Outcomes (Orange `#EA580C`)

**Mood:** Fairness, Verteilung, kritisches Hinterfragen. Wer profitiert?
**Bildsprache:** Menschen, Gruppen, Waage/Balance-Metaphern.
**Farbtemperatur:** Warm, aber nicht gemütlich – aktivierend.

| Screen | Visual-Konzept | Unsplash-Query / Umsetzung |
|--------|---------------|---------------------------|
| O-1 Hook | Waage aus dem Gleichgewicht: „Nutzen" (grün) vs. „Kosten" (rot) | `balance,scale,justice` oder `inequality`; Overlay mit Waage-Grafik |
| O-2 Verteilung | Flussdiagramm: KI-Entscheidung → Gewinner/Verlierer | SVG: zentrale Box, Pfeile zu Personen-Icons (grün/rot) |
| O-3 Stakeholder | Vier Quadranten: Mitarbeitende, Kund*innen, Gesellschaft, Umwelt | SVG: 2×2 Grid, je ein Icon + Kurzfrage, Quadranten in Modulfarbe-Abstufungen |
| O-4 Beispiel | Recruiting-Trichter: oben diverse Icons → schwarze Box → unten homogene Icons | Schematisch: Trichter mit Fragezeichen in der Mitte |
| O-5 Aktion | Netzwerk-Diagramm (Stakeholder-Map) | 4 Checkboxen, Netzwerk-Icon als Hintergrund |
| O-6 Quiz | Multiple-Choice-Buttons | Standard-Quiz-Layout |
| O-7 Takeaway | Waage-Icon, Zitat | Typografie auf `#EA580C` Gradient-Hintergrund |

---

### Modul P – Power (Violett `#7C3AED`)

**Mood:** Kontrolle, Abhängigkeit, strategische Autonomie. Wer hat den Schlüssel?
**Bildsprache:** Schlösser, Ketten, Verträge, Kontrollräume.
**Farbtemperatur:** Dunkel, kontrastreich, leicht dramatisch.

| Screen | Visual-Konzept | Unsplash-Query / Umsetzung |
|--------|---------------|---------------------------|
| P-1 Hook | Schloss mit Ketten, Frage „Wer hat den Schlüssel?" | `lock,chain,security` oder `padlock,control`; dunkles Overlay |
| P-2 Abhängigkeiten | Drei Kettenglieder: Lock-in, Daten, Interpretation | SVG: drei verlinkte Kettenglieder mit Labels |
| P-3 Regulierung | EU AI Act Risiko-Pyramide (4 Ebenen) + EU-Flagge | SVG: Pyramide rot→orange→gelb→grün, EU-Flagge daneben |
| P-4 Beispiel | Bewerbungs-Trichter + schwarze Box mit Fragezeichen | Wie O-4, aber Fokus auf Kontrollverlust (Fragezeichen größer) |
| P-5 Power-Check | 5 Checkboxen mit Schloss-Icons | Checkliste, Schloss-Icon je Punkt |
| P-6 Quiz | Vertrag mit Lupe, hervorgehobener Paragraph | SVG: Vertrag-Silhouette, Lupe auf einem Abschnitt |
| P-7 Takeaway | Schlüssel-Icon, Zitat | Typografie auf `#7C3AED` Gradient-Hintergrund |

---

### Modul E – Endurance (Cyan `#0891B2`)

**Mood:** Langfristigkeit, Weitsicht, Zukunftsfähigkeit. Denken über den Horizont hinaus.
**Bildsprache:** Horizonte, Straßen, Kompass, Zeitverläufe.
**Farbtemperatur:** Kühl, offen, ruhig-zuversichtlich.

| Screen | Visual-Konzept | Unsplash-Query / Umsetzung |
|--------|---------------|---------------------------|
| E-1 Hook | Zeitstrahl, KI-Icon verblasst nach 2-3 Jahren, Fragezeichen bei Jahr 5 | `horizon,long-road` oder `future,path`; Overlay mit Timeline-Grafik |
| E-2 Scheitern | Drei Dominosteine fallen: „Daten", „Regulierung", „Kosten" | SVG: drei Dominosteine, progressiv kippend |
| E-3 Langfrist | Pfeil „Heute → 2050", KI-Icon darauf: „Hilft oder hindert?" | SVG: Zeitpfeil, KI-Symbol mittig, Fragezeichen |
| E-4 Beispiel | Zwei parallele Pfade: Vendor-Lock-in (rot, steigende Kosten) vs. Modular (grün, stabil) | SVG: zwei Linien, links steigend rot, rechts flach grün, Kostenangaben |
| E-5 Zukunftscheck | Vier ineinandergreifende Zahnräder (Wartbarkeit, Skalierbarkeit, Regulierung, Adaptierbarkeit) | SVG: 4 Zahnräder mit Keywords |
| E-6 Quiz | Performance-Kurve: anfangs gut, dann Abfall mit Markierung „Data Drift" | SVG: Linienchart, Knick nach unten, Annotation |
| E-7 Takeaway | Kompass-Icon, Zitat | Typografie auf `#0891B2` Gradient-Hintergrund |

---

## Icons – Bedarf pro Modul

### Modul S – Sufficiency

| Screen | Icon-Bedarf |
|--------|-------------|
| S-1 Hook | Hammer + Nuss (Overkill-Metapher) |
| S-2 Problem | Kreisdiagramm (87%) |
| S-3 Konzept | Zahnräder (Effizienz) + Fragezeichen (Suffizienz) |
| S-4 Beispiel | Chatbot-Icon + FAQ-Icon + Pfeil |
| S-5 Aktion | Checkliste mit 3 Checkboxen |
| S-6 Quiz | Multiple-Choice-Format |
| S-7 Takeaway | Bookmark-Icon |

### Modul C – Carbon

| Screen | Icon-Bedarf |
|--------|-------------|
| C-1 Hook | Glühbirne(n) – 1 vs. 10 |
| C-2 Fakten | Haus + CO₂-Wolke + Wassertropfen |
| C-3 Lebenszyklus | Chip → Server → Smartphone → Mülltonne |
| C-4 Beispiel | Europakarte mit Markierungen |
| C-5 Aktion | Weltkugel + Größenvergleich + Messgerät |
| C-6 Quiz | Balkendiagramm |
| C-7 Takeaway | CO₂-Messgerät-Icon |

### Modul O – Outcomes

| Screen | Icon-Bedarf |
|--------|-------------|
| O-1 Hook | Waage (Nutzen vs. Kosten) |
| O-2 Verteilung | Personen-Icons + Flussdiagramm |
| O-3 Stakeholder | 4-Quadranten mit Personen/Symbolen |
| O-4 Beispiel | Trichter + Schwarze Box |
| O-5 Aktion | Netzwerk-Diagramm |
| O-6 Quiz | Multiple-Choice-Format |
| O-7 Takeaway | Waage-Icon |

### Modul P – Power

| Screen | Icon-Bedarf |
|--------|-------------|
| P-1 Hook | Schloss + Ketten |
| P-2 Abhängigkeiten | 3 Kettenglieder (Lock-in, Daten, Interpretation) |
| P-3 Regulierung | Risiko-Pyramide (4 Ebenen) + EU-Flagge |
| P-4 Beispiel | Trichter + Schwarze Box + Fragezeichen |
| P-5 Power-Check | Checkliste mit Schloss-Icons |
| P-6 Quiz | Vertrag mit Lupe |
| P-7 Takeaway | Schlüssel-Icon |

### Modul E – Endurance

| Screen | Icon-Bedarf |
|--------|-------------|
| E-1 Hook | Zeitstrahl mit verblassendem KI-Icon |
| E-2 Scheitern | 3 Dominosteine (Daten, Regulierung, Kosten) |
| E-3 Langfrist | Pfeil „Heute → 2050" + KI-Icon |
| E-4 Beispiel | 2 parallele Pfade (rot/grün) |
| E-5 Zukunftscheck | 4 ineinandergreifende Zahnräder |
| E-6 Quiz | Performance-Kurve mit Abfall |
| E-7 Takeaway | Kompass-Icon |

### Icon-Empfehlung

- **Bibliothek:** Phosphor Icons (konsistenter Stil, Open Source)
- **Alternativ:** Flaticon (falls spezifischere Icons nötig)
- **Stil:** Line-Icons, 2px Stroke, Modulfarbe
- **Größe:** 48×48px Standard, 64×64px für Hauptelemente

---

## Bildquellen

### Hook-Cards (Screen 1)

- **Quelle:** Unsplash (lizenzfrei, API-Zugang vorhanden)
- **Mindestgröße:** 800×600px
- **Behandlung:** Dunkles Overlay (60-80% Opacity) für Textlesbarkeit
- **Keine KI-generierten Bilder**

### Unsplash API

```
Endpoint: https://api.unsplash.com/photos/random
Auth:     Authorization: Client-ID {ACCESS_KEY}
Params:   ?query={keywords}&orientation=landscape
```

**Empfohlene Queries pro Modul:**

| Modul | Query-Vorschläge |
|-------|-----------------|
| S – Hook | `technology,simplicity` oder `minimalism,tools` |
| C – Hook | `data-center,energy` oder `power-plant,electricity` |
| O – Hook | `balance,scale` oder `diversity,crowd` |
| P – Hook | `lock,chain` oder `control,security` |
| E – Hook | `horizon,future` oder `compass,long-road` |

**Hinweis:** ACCESS_KEY als Environment Variable speichern, nicht im Code. In Netlify unter Site Settings → Environment Variables als `UNSPLASH_ACCESS_KEY` hinterlegen, falls dynamisches Laden gewünscht. Für statischen Build reichen vorausgewählte Bilder.

### Charts/Diagramme

- Im Code generiert (SVG oder Canvas)
- Farben: Modulfarbe + `#4B5563` (Grau) für Kontrast
- Keine Schatten, flat Design
- Labels: Inter 12px

---

## Screen-Dimensionen

| Kontext | Breite | Höhe | Seitenverhältnis |
|---------|--------|------|-------------------|
| Canva-Export (7taps) | 1080px | 1920px | 9:16 |
| App-Viewport (mobil) | 390px | 700px | ~9:16 |
| App-Container (max) | 480px | – | Responsive |
