import { theme } from '../styles/theme'
import { Watermark } from './Watermark'
import { ProgressBar } from './ProgressBar'
import { Navigation } from './Navigation'
import { HookCard } from './cards/HookCard'
import { ContentCard } from './cards/ContentCard'
import { ConceptCard } from './cards/ConceptCard'
import { ExampleCard } from './cards/ExampleCard'
import { ActionCard } from './cards/ActionCard'
import { QuizCard } from './cards/QuizCard'
import { TakeawayCard } from './cards/TakeawayCard'

export function CardContainer({
  module,
  currentCard,
  onPrev,
  onNext,
  onBack,
  quizAnswer,
  onQuizAnswer,
  checklistState,
  onChecklistChange,
}) {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '480px',
    height: '100%',
    maxHeight: '100vh',
    margin: '0 auto',
    background: theme.colors.background,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  }

  const cardAreaStyle = {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  }

  const card = module.cards[currentCard]

  const renderCard = () => {
    const props = { card, color: module.color }

    switch (card.type) {
      case 'hook':
        return <HookCard {...props} moduleId={module.id} />
      case 'content':
        return <ContentCard {...props} />
      case 'concept':
        return <ConceptCard {...props} />
      case 'example':
        return <ExampleCard {...props} />
      case 'action':
        return (
          <ActionCard
            {...props}
            checklistState={checklistState}
            onChecklistChange={onChecklistChange}
          />
        )
      case 'quiz':
        return (
          <QuizCard
            {...props}
            selectedAnswer={quizAnswer}
            onAnswerSelect={onQuizAnswer}
          />
        )
      case 'takeaway':
        return <TakeawayCard {...props} />
      default:
        return <div>Unknown card type</div>
    }
  }

  return (
    <div style={containerStyle} role="application" aria-label={`Modul ${module.id}: ${module.name}`}>
      <Watermark letter={module.id} color={module.color} />
      <ProgressBar
        moduleName={module.name}
        currentCard={currentCard}
        totalCards={module.cards.length}
        color={module.color}
        onBack={onBack}
      />
      <main id="main-content" style={cardAreaStyle} aria-label={`Karte ${currentCard + 1} von ${module.cards.length}`}>
        {renderCard()}
      </main>
      <Navigation
        currentCard={currentCard}
        totalCards={module.cards.length}
        onPrev={onPrev}
        onNext={onNext}
        color={module.color}
      />
    </div>
  )
}
