# SCOPE Schnellcheck – Content Sources & Referenzen

## Primärquelle

**SCOPE AI Framework** (Mesicek, 2025)
- Fünf-Fragen-Bewertungsrahmen für KI-Projekte
- Entwickelt im Rahmen der LV „Sustainability and AI for Green" (SAG)
- IMC FH Krems, MA Engineering Responsible AI Systems

---

## Datenquellen nach Modul

### Modul S – Sufficiency

| Claim | Quelle | Status |
|-------|--------|--------|
| 87% KI-Projekte scheitern | RAND Corporation / Gartner | Häufig zitiert, Methodik variiert je nach Definition von „Scheitern" |
| Chatbot vs. FAQ Kostenvergleich | Fiktives, aber realistisches Praxisbeispiel | Illustrativ |

### Modul C – Carbon

| Claim | Quelle | Status |
|-------|--------|--------|
| ChatGPT 10x Strom vs. Google-Suche | de Vries, A. (2023). „The growing energy footprint of artificial intelligence." *Joule*, 7(10). | Peer-reviewed |
| GPT-4 Training = 13.000 EU-Haushalte | Patterson, D. et al. (2022). „The Carbon Footprint of Machine Learning Training Will Plateau, Then Shrink." *IEEE Computer*, 55(7). | Peer-reviewed |
| Google CO₂ +48% seit 2019 | Google Environmental Report (2024) | Primärquelle (Unternehmensreport) |
| 160+ Rechenzentren in wasserarmen Regionen | IEA Energy and AI Report (2025) | Institutioneller Report |
| 78% E-Waste im Globalen Süden | Diverse UN/UNEP Reports | Aggregierte Schätzung |
| Polen 13x mehr CO₂ als Norwegen | Berechnung auf Basis nationaler Strommix-Daten | Abgeleiteter Wert |
| Inference = 90% Gesamtverbrauch | Patterson et al. (2022); Luccioni et al. (2023) | Peer-reviewed, modellabhängig |

### Modul O – Outcomes

| Claim | Quelle | Status |
|-------|--------|--------|
| Recruiting-Bias durch KI | Dokumentierte Fälle (Amazon 2018, HireVue-Kritik) | Journalistisch + akademisch belegt |
| Effizienzgewinne fließen in Marge | Allgemeine Wirtschaftsanalyse, Acemoglu & Restrepo (2019) | Akademische Evidenz |

### Modul P – Power

| Claim | Quelle | Status |
|-------|--------|--------|
| EU AI Act Risikoklassifikation | Verordnung (EU) 2024/1689 | Gesetzestext |
| Berichtspflichten ab 2025/2026 | EU AI Act Implementierungs-Timeline | Regulatorisch |

### Modul E – Endurance

| Claim | Quelle | Status |
|-------|--------|--------|
| KI-Lebensdauer 2-3 Jahre | Branchenberichte, McKinsey (2023) | Schätzung, nicht exakt belegbar |
| Data Drift als Hauptursache | Gama et al. (2014); Sculley et al. (2015) „Hidden Technical Debt in ML Systems" | Akademisch etabliert |
| Klimaneutralität 2050 / EU Green Deal | European Green Deal, COM(2019) 640 | Politisches Dokument |
| Predictive Maintenance Kostenvergleich | Fiktives, aber realistisches Praxisbeispiel (Steyr/OÖ) | Illustrativ |

---

## Regulatorische Referenzen

| Dokument | Relevanz |
|----------|----------|
| EU AI Act (2024/1689) | Risikoklassifikation, Transparenzpflichten (Modul P) |
| CSRD (Corporate Sustainability Reporting Directive) | Berichtspflichten, Langfristperspektive (Modul E) |
| DSGVO | Datenschutz bei KI-Verarbeitung (Modul P) |
| EU Green Deal | 2050-Klimaneutralität (Modul E) |

---

## Referenz-Dateien (aus Entwicklung)

| Datei | Inhalt | Pfad |
|-------|--------|------|
| Storyboards | Originale Texte aller 35 Screens | `SCOPE_Schnellcheck_Storyboards.md` |
| React-Prototyp Modul S | Funktionale Referenz-Implementierung | `SCOPE_Schnellcheck_Modul_S.jsx` |
| HTML-Prototyp Modul S | Standalone-Version für Browser | `SCOPE_Schnellcheck_Modul_S.html` |
| Canva Production Kit v2 | Design-Spezifikationen (Farben, Fonts, Templates) | `SCOPE_Schnellcheck_Canva_Production_Kit_v2.md` |
| Canva Bulk-Create CSV | Content für alle 35 Screens als CSV | `scope_schnellcheck_bulkcreate.csv` |

---

## Zitierformat

Innerhalb der App werden Quellen als Kurzverweise angezeigt:
- „Quelle: de Vries, 2023" (auf dem jeweiligen Screen)
- Vollständige Literaturliste optional als separater Screen oder PDF-Download

### Empfohlene Zitierweise des Tools

> Mesicek, R. (2025). SCOPE AI Framework – Schnellcheck für nachhaltige KI-Projekte. 36° sustainability consulting.
