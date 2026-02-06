export const moduleE = {
  id: 'E',
  name: 'Endurance',
  color: '#0891B2',
  coreQuestion: 'Ist die Lösung langfristig tragfähig?',
  cards: [
    {
      type: 'hook',
      headline: 'Die durchschnittliche KI-Lösung lebt 2-3 Jahre. Dann stirbt sie leise.',
      body: 'Nicht mit einem Knall. Sondern schleichend: schlechtere Ergebnisse, steigende Kosten, neue Regulierung. Langfristig denken beginnt vor dem Kauf.',
    },
    {
      type: 'content',
      headline: 'Drei Gründe, warum KI-Projekte nicht altern',
      body: 'Data Drift: Die Welt ändert sich, die Trainingsdaten nicht. Regulatorischer Wandel: CSRD, EU AI Act, DSGVO-Updates. Kostenspirale: Cloud-Kosten, Wartung, Retraining.',
      stats: [
        { value: '2-3', label: 'Jahre Lebensdauer' },
        { value: '90%', label: 'Data Drift unerkannt' },
      ],
    },
    {
      type: 'concept',
      headline: 'Der 2050-Test',
      body: 'Klimaneutralität bis 2050 ist kein Slogan – es ist eine regulatorische Vorgabe (EU Green Deal). Unterstützt diese KI-Lösung unseren Weg zu Net Zero – oder macht sie ihn schwieriger?',
      conceptLeft: {
        title: 'Heute',
        description: 'Technologie-Entscheidung',
      },
      conceptRight: {
        title: '2050',
        description: 'Net Zero Pflicht',
      },
    },
    {
      type: 'example',
      headline: 'Praxisbeispiel: Predictive Maintenance',
      body: 'Ein Fertigungsunternehmen (500 Mitarbeitende, Steyr/OÖ) vergleicht zwei Ansätze für KI-basierte Wartung.',
      comparison: {
        left: { label: 'US-Vendor Lock-in', cost: '200.000 €/Jahr ↑' },
        right: { label: 'Modular & offen', cost: '80.000 €/Jahr →' },
        result: 'Kontrolle = Kostenstabilität',
      },
    },
    {
      type: 'action',
      headline: 'Vier Fragen zur Langfristigkeit',
      body: 'Prüfen Sie die Zukunftsfähigkeit Ihrer KI-Lösung:',
      checklistItems: [
        'Wartbarkeit: Wer pflegt das System, wenn der Anbieter vom Markt geht?',
        'Skalierbarkeit: Wächst die Lösung mit – oder müssen wir neu anfangen?',
        'Regulierung: Erfüllt die Lösung absehbare Anforderungen (EU AI Act, CSRD)?',
        'Adaptierbarkeit: Kann das Modell mit neuen Daten nachtrainiert werden?',
      ],
    },
    {
      type: 'quiz',
      headline: 'Der Langfrist-Check',
      question: 'Ihr KI-System zur Energieoptimierung liefert seit 2 Jahren schlechtere Ergebnisse. Was ist die wahrscheinlichste Ursache?',
      options: [
        { text: 'Die Hardware ist veraltet', correct: false },
        { text: 'Die Trainingsdaten spiegeln nicht mehr die aktuelle Realität wider (Data Drift)', correct: true },
        { text: 'Die Mitarbeitenden nutzen das System falsch', correct: false },
      ],
      feedback: 'Data Drift ist der häufigste Grund für nachlassende KI-Leistung. Energiepreise, Nutzungsmuster und Gebäudetechnik ändern sich – das Modell weiß davon nichts, wenn es nicht regelmäßig aktualisiert wird.',
    },
    {
      type: 'takeaway',
      headline: 'Ihre Leitfrage für heute:',
      quote: '„Wird diese KI-Lösung 2030 noch sinnvoll sein – oder planen wir schon den nächsten Neukauf?"',
      cta: 'Rechnen Sie die Kosten für 5 Jahre. Nicht für 1. Die Zahlen erzählen eine andere Geschichte.',
    },
  ],
}
