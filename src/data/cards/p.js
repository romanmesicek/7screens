export const moduleP = {
  id: 'P',
  name: 'Power',
  color: '#7C3AED',
  coreQuestion: 'Wer kontrolliert die KI?',
  cards: [
    {
      type: 'hook',
      headline: 'Sie haben die KI gekauft. Aber wem gehört sie wirklich?',
      body: 'Die wichtigste Frage ist nicht „Was kann sie?" – sondern „Wer kontrolliert sie?". Und die Antwort steht im Kleingedruckten.',
    },
    {
      type: 'content',
      headline: 'Drei Formen der Abhängigkeit',
      body: 'Vendor Lock-in: Können Sie den Anbieter wechseln? Datenhoheit: Wer hat Zugriff auf Ihre Trainingsdaten? Interpretationshoheit: Wer entscheidet, was die KI-Ergebnisse bedeuten?',
    },
    {
      type: 'concept',
      headline: 'Europa reagiert – der EU AI Act',
      body: 'Der EU AI Act klassifiziert KI-Systeme nach Risiko. Hochrisiko-Systeme müssen transparente Entscheidungswege nachweisen. „Die KI hat das so entschieden" reicht nicht mehr.',
      conceptLeft: {
        title: 'High Risk',
        description: 'HR, Kreditvergabe, Justiz',
      },
      conceptRight: {
        title: 'Pflicht',
        description: 'Transparenz & Nachweise',
      },
    },
    {
      type: 'example',
      headline: 'Praxisbeispiel: KI im Recruiting',
      body: 'Ein Unternehmen nutzt ein KI-Tool zur Vorauswahl von Bewerbungen. Trainiert auf US-Kundendaten. Das Unternehmen hat weder Einblick in die Trainingsdaten noch Kontrolle über die Gewichtung.',
      comparison: {
        left: { label: 'Kontrolle', cost: '0%' },
        right: { label: 'Abhängigkeit', cost: '100%' },
        result: 'Black Box entscheidet über Menschen',
      },
    },
    {
      type: 'action',
      headline: 'Fünf Fragen zur Machtkontrolle',
      body: 'Prüfen Sie Ihre KI-Projekte:',
      checklistItems: [
        'Gehören die Trainingsdaten uns – oder dem Anbieter?',
        'Können wir den Anbieter wechseln, ohne alles zu verlieren?',
        'Verstehen wir, wie das Modell zu seinen Ergebnissen kommt?',
        'Wer im Unternehmen darf KI-Entscheidungen überstimmen?',
        'Haben die Betroffenen ein Einspruchsrecht?',
      ],
    },
    {
      type: 'quiz',
      headline: 'Der Machtcheck',
      question: 'Der Cloud-KI-Anbieter ändert seine AGBs – Ihre Daten dürfen jetzt auch für das Training anderer Modelle genutzt werden. Was ist Ihre stärkste Verhandlungsposition?',
      options: [
        { text: 'Den Anbieter bitten, eine Ausnahme zu machen', correct: false },
        { text: 'Datenhoheit vertraglich absichern – idealerweise von Anfang an', correct: true },
        { text: 'Die AGBs akzeptieren, weil ein Wechsel zu teuer wäre', correct: false },
      ],
      feedback: 'Datenhoheit muss von Beginn an vertraglich geregelt sein. Nachverhandlungen sind teuer und schwach. Wer die Verträge erst beim Problem liest, hat das Problem schon.',
    },
    {
      type: 'takeaway',
      headline: 'Ihre Leitfrage für heute:',
      quote: '„Wenn wir diesen KI-Anbieter morgen verlassen müssten – könnten wir das?"',
      cta: 'Lesen Sie Ihre KI-Verträge. Heute. Was im Kleingedruckten steht, bestimmt, wer die Macht hat.',
    },
  ],
}
