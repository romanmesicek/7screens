import { theme } from '../styles/theme'

export function ProgressBar({ moduleName, currentCard, totalCards, color, onBack }) {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    zIndex: 10,
  }

  const leftStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  }

  const backButtonStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: 'none',
    background: 'transparent',
    color: theme.colors.textSecondary,
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.fast,
  }

  const moduleNameStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.small,
    color: color,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }

  const progressTextStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
  }

  return (
    <header style={containerStyle} role="banner">
      <div style={leftStyle}>
        {onBack && (
          <button
            style={backButtonStyle}
            onClick={onBack}
            aria-label="Zurück zur Übersicht"
          >
            ✕
          </button>
        )}
        <span style={moduleNameStyle}>{moduleName}</span>
      </div>
      <span
        style={progressTextStyle}
        role="status"
        aria-live="polite"
        aria-label={`Karte ${currentCard + 1} von ${totalCards}`}
      >
        {currentCard + 1} / {totalCards}
      </span>
    </header>
  )
}
