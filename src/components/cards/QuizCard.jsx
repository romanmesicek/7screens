import { theme } from '../../styles/theme'

export function QuizCard({ card, color, selectedAnswer, onAnswerSelect }) {
  const containerStyle = {
    position: 'relative',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.lg,
    zIndex: 1,
  }

  const accentBarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: color,
  }

  const labelStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.small,
    color: color,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: theme.spacing.sm,
  }

  const headlineStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.headline,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
    lineHeight: 1.2,
  }

  const questionStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    lineHeight: 1.6,
    marginBottom: theme.spacing.lg,
  }

  const optionsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  }

  const getOptionStyle = (index, option) => {
    const isSelected = selectedAnswer === index
    const hasAnswered = selectedAnswer !== null
    const isCorrect = option.correct

    let borderColor = theme.colors.border
    let bgColor = theme.colors.cardBg

    if (hasAnswered) {
      if (isCorrect) {
        borderColor = theme.colors.success
        bgColor = 'rgba(5, 150, 105, 0.15)'
      } else if (isSelected && !isCorrect) {
        borderColor = theme.colors.error
        bgColor = 'rgba(220, 38, 38, 0.15)'
      }
    }

    return {
      padding: theme.spacing.md,
      background: bgColor,
      borderRadius: '12px',
      border: `2px solid ${borderColor}`,
      cursor: hasAnswered ? 'default' : 'pointer',
      opacity: hasAnswered && !isSelected && !isCorrect ? 0.5 : 1,
      transition: theme.transitions.fast,
      boxShadow: isSelected ? `0 0 0 3px ${borderColor}30` : 'none',
    }
  }

  const optionTextStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    lineHeight: 1.4,
  }

  const feedbackStyle = {
    padding: theme.spacing.md,
    background: 'rgba(16, 185, 129, 0.08)',
    borderRadius: '12px',
    borderLeft: `4px solid ${theme.colors.success}`,
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    lineHeight: 1.5,
  }

  const handleSelect = (index) => {
    if (selectedAnswer === null) {
      onAnswerSelect(index)
    }
  }

  return (
    <div style={containerStyle}>
      <div style={accentBarStyle} />
      <div style={labelStyle}>Quiz</div>
      <h2 style={headlineStyle}>{card.headline}</h2>
      <p style={questionStyle}>{card.question}</p>

      <div style={optionsStyle} role="radiogroup" aria-label="Quiz-Antwortmöglichkeiten">
        {card.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          const hasAnswered = selectedAnswer !== null
          const isCorrect = option.correct

          let ariaLabel = option.text
          if (hasAnswered) {
            if (isCorrect) {
              ariaLabel += ' (richtige Antwort)'
            } else if (isSelected) {
              ariaLabel += ' (Ihre Auswahl, falsch)'
            }
          }

          return (
            <div
              key={index}
              style={getOptionStyle(index, option)}
              onClick={() => handleSelect(index)}
              role="radio"
              aria-checked={isSelected}
              aria-label={ariaLabel}
              tabIndex={selectedAnswer === null ? 0 : -1}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(index)}
            >
              <span style={optionTextStyle}>{option.text}</span>
            </div>
          )
        })}
      </div>

      {selectedAnswer !== null && (
        <div style={feedbackStyle}>
          {card.feedback}
        </div>
      )}
    </div>
  )
}
