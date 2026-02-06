import { theme } from '../styles/theme'

export function Navigation({ currentCard, totalCards, onPrev, onNext, color }) {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    zIndex: 10,
  }

  const buttonStyle = (disabled) => ({
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    border: `1px solid ${disabled ? 'transparent' : theme.colors.border}`,
    background: disabled ? 'transparent' : theme.colors.cardBg,
    color: disabled ? theme.colors.borderLight : theme.colors.textPrimary,
    fontSize: '18px',
    fontWeight: 600,
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.25 : 1,
    transition: theme.transitions.fast,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: disabled ? 'none' : '0 2px 8px rgba(0,0,0,0.2)',
  })

  const dotsContainerStyle = {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
  }

  const dotStyle = (isActive) => ({
    width: isActive ? '20px' : '6px',
    height: '6px',
    borderRadius: '3px',
    background: isActive ? color : theme.colors.border,
    transition: theme.transitions.normal,
    opacity: isActive ? 1 : 0.5,
  })

  return (
    <nav style={containerStyle} role="navigation" aria-label="Karten-Navigation">
      <button
        style={buttonStyle(currentCard === 0)}
        onClick={onPrev}
        disabled={currentCard === 0}
        aria-label="Vorherige Karte"
      >
        ←
      </button>

      <div
        style={dotsContainerStyle}
        role="tablist"
        aria-label={`Fortschritt: Karte ${currentCard + 1} von ${totalCards}`}
      >
        {Array.from({ length: totalCards }, (_, i) => (
          <div
            key={i}
            style={dotStyle(i === currentCard)}
            role="tab"
            aria-selected={i === currentCard}
            aria-label={`Karte ${i + 1}${i === currentCard ? ' (aktuell)' : ''}`}
          />
        ))}
      </div>

      <button
        style={buttonStyle(false)}
        onClick={onNext}
        aria-label={currentCard === totalCards - 1 ? "Modul abschließen" : "Nächste Karte"}
      >
        {currentCard === totalCards - 1 ? '✓' : '→'}
      </button>
    </nav>
  )
}
