export const moduleO = {
  id: 'O',
  name: 'Outcomes',
  color: '#EA580C',
  coreQuestion: 'Wem nützt es, wem schadet es?',
  cards: [
    {
      type: 'hook',
      headline: 'KI ist nie neutral. Sie verteilt nur um.',
      body: 'Jede KI-Entscheidung verschiebt Vorteile und Kosten. Die Frage ist nicht ob, sondern an wen. Haben Sie das gesteuert – oder ist es einfach passiert?',
    },
    {
      type: 'content',
      headline: 'Wer gewinnt, wer verliert?',
      body: 'Wenn KI eine Aufgabe übernimmt, verändert sich die Verteilung von Arbeit, Geld und Einfluss. Das kann fair sein – oder unfair. Die meisten Unternehmen stellen diese Frage erst, wenn der Schaden sichtbar wird.',
    },
    {
      type: 'concept',
      headline: 'Vier Gruppen, vier Perspektiven',
      body: 'Jedes KI-Projekt hat mindestens vier Stakeholder-Gruppen mit unterschiedlichen Interessen.',
      conceptLeft: {
        title: 'Mitarbeitende',
        description: 'Job einfacher oder überflüssig?',
      },
      conceptRight: {
        title: 'Kund*innen',
        description: 'Service besser oder unpersönlicher?',
      },
    },
    {
      type: 'example',
      headline: 'Praxisbeispiel: KI im Recruiting',
      body: 'Ein Unternehmen setzt KI zur Bewerbervorauswahl ein. Effizienz steigt um 60%. Aber: Das System bevorzugt systematisch Profile, die den bisherigen Mitarbeitenden ähneln.',
      comparison: {
        left: { label: 'Effizienz', cost: '+60%' },
        right: { label: 'Vielfalt', cost: '−30%' },
        result: 'Für wen funktioniert die KI?',
      },
    },
    {
      type: 'action',
      headline: 'Stakeholder-Mapping in 60 Sekunden',
      body: 'Denken Sie an Ihr aktuelles KI-Projekt. Wer ist betroffen?',
      checklistItems: [
        'Wer profitiert direkt? (z.B. Management, Kund*innen)',
        'Wer trägt Kosten? (z.B. Mitarbeitende, Zulieferer)',
        'Wer wurde nicht gefragt?',
        'Wessen Daten werden genutzt?',
      ],
    },
    {
      type: 'quiz',
      headline: 'Die Verteilungsfrage',
      question: 'Ein KI-System steigert die Effizienz einer Abteilung um 40%. Wo landen die Effizienzgewinne am häufigsten?',
      options: [
        { text: 'Bei den Mitarbeitenden (weniger Überstunden)', correct: false },
        { text: 'Bei den Kund*innen (besserer Service)', correct: false },
        { text: 'Bei den Aktionär*innen (höhere Marge)', correct: true },
      ],
      feedback: 'Effizienzgewinne durch KI fließen in den meisten Unternehmen zuerst in die Marge. Ob Mitarbeitende und Kund*innen profitieren, ist eine bewusste Verteilungsentscheidung.',
    },
    {
      type: 'takeaway',
      headline: 'Ihre Leitfrage für heute:',
      quote: '„Wer profitiert von diesem KI-Projekt – und wer trägt die Kosten, ohne gefragt worden zu sein?"',
      cta: 'Schreiben Sie die Namen auf. Echte Namen. Dann wird die Verteilung sichtbar.',
    },
  ],
}
