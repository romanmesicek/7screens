export const moduleC = {
  id: 'C',
  name: 'Carbon',
  color: '#059669',
  coreQuestion: 'Wie hoch ist der ökologische Fußabdruck?',
  cards: [
    {
      type: 'hook',
      headline: 'Eine ChatGPT-Anfrage verbraucht 10x so viel Strom wie eine Google-Suche.',
      body: 'KI ist nicht immateriell. Jedes Modell braucht Rechenzentren, Energie, Wasser und Hardware. Das hat einen Preis – nicht nur finanziell.',
      source: 'de Vries, 2023',
    },
    {
      type: 'content',
      headline: 'Die Zahlen dahinter',
      body: 'Das Training von GPT-4 verbrauchte so viel Strom wie 13.000 EU-Haushalte in einem Jahr. Googles CO₂-Emissionen stiegen seit 2019 um 48% – hauptsächlich durch KI-Rechenzentren.',
      stats: [
        { value: '13.000', label: 'Haushalte' },
        { value: '+48%', label: 'CO₂' },
        { value: '160+', label: 'Rechenzentren' },
      ],
      source: 'Patterson et al. (2022), Google Sustainability Report (2024)',
    },
    {
      type: 'concept',
      headline: 'Nicht nur das Training zählt.',
      body: 'KI-Fußabdruck entsteht in vier Phasen: Hardwareherstellung → Training → Inference → Entsorgung. Inference macht bei großen Modellen bis zu 90% des Gesamtverbrauchs aus.',
      conceptLeft: {
        title: 'Training',
        description: 'Einmalig, aber energieintensiv',
      },
      conceptRight: {
        title: 'Inference',
        description: 'Jede einzelne Anfrage zählt',
      },
    },
    {
      type: 'example',
      headline: 'Praxisbeispiel: Standort entscheidet',
      body: 'Ein identisches KI-Modell erzeugt in Polen (Kohlestrom) 13x mehr CO₂ als in Norwegen (Wasserkraft). Die Wahl der Cloud-Region ist eine der wirksamsten Einzelentscheidungen.',
      comparison: {
        left: { label: 'Polen (Kohle)', cost: '13x CO₂' },
        right: { label: 'Norwegen (Wasser)', cost: '1x CO₂' },
        result: 'Region = Klimaentscheidung',
      },
    },
    {
      type: 'action',
      headline: 'Drei Hebel, die Sie sofort nutzen können',
      body: 'Reduzieren Sie den ökologischen Fußabdruck Ihrer KI:',
      checklistItems: [
        'Cloud-Region prüfen: Rechenzentren mit erneuerbarer Energie wählen',
        'Modellgröße hinterfragen: Kleinere/distillierte Modelle brauchen <1/10 der Energie',
        'Messen statt raten: Tools wie CodeCarbon oder ML CO2 Impact nutzen',
      ],
    },
    {
      type: 'quiz',
      headline: 'Die Carbon-Frage',
      question: 'Welche Phase verbraucht bei einem viel genutzten KI-System den meisten Strom?',
      options: [
        { text: 'Das einmalige Training des Modells', correct: false },
        { text: 'Die laufende Nutzung (Inference)', correct: true },
        { text: 'Die Herstellung der Hardware', correct: false },
      ],
      feedback: 'Bei großen, häufig genutzten Modellen macht Inference bis zu 90% des Gesamtenergieverbrauchs aus. Das Training ist einmalig – die Nutzung läuft permanent.',
    },
    {
      type: 'takeaway',
      headline: 'Ihre Leitfrage für heute:',
      quote: '„Kennen wir den ökologischen Fußabdruck unserer KI-Systeme – oder raten wir nur?"',
      cta: 'Fragen Sie Ihren KI-Anbieter nach dem Energiemix. Die Antwort sagt mehr als jeder Nachhaltigkeitsbericht.',
    },
  ],
}
