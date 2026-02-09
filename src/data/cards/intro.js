export const moduleIntro = {
  id: '7S',
  name: '7-Screen-Modell',
  color: '#D97706',
  watermarkLetter: '7',
  coreQuestion: 'Wie funktioniert Lernen in 3 Minuten?',
  cards: [
    {
      type: 'hook',
      headline: '84% vergessen Gelerntes innerhalb von 48 Stunden. Dieses Format arbeitet dagegen.',
      body: 'Hermann Ebbinghaus zeigte bereits 1885: Ohne gezielte Wiederholung verschwindet neues Wissen fast vollständig. Das 7-Screen-Modell nutzt sieben Lernmechanismen, um genau das zu verhindern.',
      source: 'Ebbinghaus, 1885; Cepeda et al., 2006',
    },
    {
      type: 'content',
      headline: 'Mikrolernen wirkt – die Zahlen sind eindeutig',
      body: 'Eine Metaanalyse über 40 Studien zeigt: Kurze, strukturierte Lerneinheiten übertreffen längere Formate bei Wissensaufnahme und Behalten. Das Zeitfenster: 3 bis 5 Minuten.',
      stats: [
        { value: '0.74', label: 'Effektstärke (SMD)' },
        { value: '1.87x', label: 'Behaltensrate (OR)' },
        { value: '3 Min', label: 'Optimale Dauer' },
      ],
      source: 'Monib, Qazi & Apong, 2024 (40 Studien, 2020–2024)',
    },
    {
      type: 'concept',
      headline: 'Passive Aufnahme verliert gegen aktive Mikroarchitektur',
      body: 'Das 7-Screen-Modell verdichtet drei Forschungsstränge: Kognitionspsychologie (wie viel passt ins Arbeitsgedächtnis?), Motivation (warum bleibe ich dran?) und Gedächtnisforschung (wie bleibt es haften?).',
      conceptLeft: {
        title: 'Passiv',
        description: 'Lesen, Zuhören, Hoffen',
      },
      conceptRight: {
        title: '7 Screens',
        description: 'Neugier, Struktur, Abruf',
      },
    },
    {
      type: 'example',
      headline: 'Praxisbeispiel: Dieses Format',
      body: 'Im Anwendungsbeispiel nutzen wir das 7-Screen-Modell für KI-Nachhaltigkeit. 5 Module, je 7 Screens, je 3 Minuten. Jeder Screen aktiviert einen anderen Lernmechanismus – von Neugier (Screen 1) bis Erinnerungsanker (Screen 7).',
      comparison: {
        left: { label: '45-Min-Vortrag', cost: '~15% Behalten' },
        right: { label: '7 Screens, 3 Min', cost: '~49% Behalten' },
        result: 'Retrieval Practice verdoppelt die Behaltensrate',
        source: 'Roediger & Karpicke, 2006',
      },
    },
    {
      type: 'action',
      headline: 'Was haben Sie schon erlebt?',
      body: 'Sie sind gerade mittendrin. Haken Sie ab, was Sie in diesem Format bereits durchlaufen haben:',
      badgeLabel: { unchecked: 'Erlebt?', checked: 'Erlebt ✓' },
      checklistItems: [
        'Screen 1 weckt Neugier',
        'Screen 2 liefert Fakten',
        'Screen 3 strukturiert ein Konzept',
        'Screen 4 zeigt ein Praxisbeispiel',
        'Screen 5 aktiviert zum Handeln',
        'Screen 6 testet Wissen',
        'Screen 7 sichert die Kernbotschaft',
      ],
    },
    {
      type: 'quiz',
      headline: 'Der 7-Screen-Test',
      question: 'Warum steht das Quiz auf Screen 6 – und nicht am Anfang?',
      options: [
        { text: 'Weil am Ende weniger Zeit für Fragen bleibt', correct: false },
        { text: 'Weil Wissensabruf nach Verarbeitung das Behalten stärkt', correct: true },
        { text: 'Weil Quiz-Fragen nur als Abschluss Sinn ergeben', correct: false },
      ],
      feedback: 'Der Testing Effect (Roediger & Karpicke, 2006) zeigt: Aktiver Wissensabruf übertrifft nochmaliges Lesen bei der Langzeitretention. Deshalb kommt das Quiz nach der Verarbeitung, nicht davor. Die Metaanalyse von Adesope et al. (2017, 217 Studien) bestätigt diesen Effekt deutlich.',
    },
    {
      type: 'takeaway',
      headline: 'Ihre Leitfrage für heute:',
      quote: '„7 Screens, 7 Mechanismen, 3 Minuten – reicht das, um etwas zu verändern?"',
      cta: 'Jeder der 7 Screens aktiviert einen eigenen Lernmechanismus – von Neugier über Struktur bis zum aktiven Abruf. Zusammen ergeben sie ein Format, das in 3 Minuten mehr bewirkt als eine Stunde passives Zuhören.',
    },
  ],
}
