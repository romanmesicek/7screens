export const moduleS = {
  id: 'S',
  name: 'Sufficiency',
  color: '#2563EB',
  coreQuestion: 'Brauchen wir diese KI-Lösung überhaupt?',
  cards: [
    {
      type: 'hook',
      headline: '87% aller KI-Projekte scheitern. Meist aus einem Grund.',
      body: 'Es liegt nicht an der Technik. Es liegt nicht am Budget. Der häufigste Fehler: Das Problem hätte gar keine KI gebraucht.',
    },
    {
      type: 'content',
      headline: 'Der Reflex: „Da machen wir KI drauf."',
      body: '87% aller KI-Projekte in Unternehmen scheitern oder liefern weniger als erwartet. Einer der häufigsten Gründe: Das Problem hätte keine KI gebraucht.',
      stat: '87%',
      statLabel: 'scheitern',
      source: 'RAND Corporation / Gartner',
    },
    {
      type: 'concept',
      headline: 'Effizienz fragt „Wie machen wir es besser?" Suffizienz fragt „Brauchen wir das?"',
      body: 'Suffizienz ist kein Technologie-Verzicht. Es bedeutet: die richtige Lösung für das richtige Problem wählen. Manchmal ist ein Excel-Sheet die beste KI.',
      conceptLeft: {
        title: 'Effizienz',
        description: 'Zahnräder schneller drehen',
      },
      conceptRight: {
        title: 'Suffizienz',
        description: 'Brauchen wir die Zahnräder?',
      },
    },
    {
      type: 'example',
      headline: 'Praxisbeispiel: Chatbot vs. FAQ-Seite',
      body: 'Ein Mittelständler wollte einen KI-Chatbot für den Kundenservice. Nach Analyse: 80% der Anfragen betreffen 12 Themen.',
      comparison: {
        left: { label: 'KI-Chatbot', cost: '120.000 €/Jahr' },
        right: { label: 'FAQ-Seite', cost: '5.000 €' },
        result: '80% der Fälle gelöst',
      },
    },
    {
      type: 'action',
      headline: 'Der 30-Sekunden-Test',
      body: 'Haben Sie diese Fragen für sich beantwortet, bevor Sie „Ja" zu einem KI-Projekt sagen?',
      checklistItems: [
        'Welches konkrete Problem lösen wir?',
        'Haben wir eine einfachere Alternative geprüft?',
        'Würde die einfache Lösung 80% des Nutzens liefern?',
      ],
    },
    {
      type: 'quiz',
      headline: 'Der Suffizienz-Test',
      question: 'Ihr Team schlägt vor, eine KI zur Analyse von Mitarbeiter-Feedback einzusetzen. Was ist der richtige erste Schritt?',
      options: [
        { text: 'Anbieter vergleichen und Budget beantragen', correct: false },
        { text: 'Prüfen, ob die bestehende Umfrage-Software das gleiche Ergebnis liefert', correct: true },
        { text: 'Ein Pilotprojekt mit 10 Mitarbeitenden starten', correct: false },
      ],
      feedback: 'Bevor Sie in KI investieren, prüfen Sie vorhandene Tools. Oft reichen sie aus – oder liefern die Daten, die zeigen, wo KI tatsächlich Mehrwert schafft.',
    },
    {
      type: 'takeaway',
      headline: 'Ihre Leitfrage für heute:',
      quote: '„Löst diese KI ein echtes Problem – oder macht sie ein einfaches Problem nur komplizierter?"',
      cta: 'Stellen Sie diese Frage im nächsten Projektmeeting. Die Antworten zeigen, wo Klarheit fehlt.',
    },
  ],
}
