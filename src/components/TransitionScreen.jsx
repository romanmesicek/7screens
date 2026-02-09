import { theme } from '../styles/theme'

export function TransitionScreen({ onContinue, onBack }) {
  const containerStyle = {
    minHeight: '100vh',
    background: theme.colors.background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
    textAlign: 'center',
  }

  const checkmarkStyle = {
    width: '88px',
    height: '88px',
    borderRadius: '50%',
    background: theme.colors.moduleIntro,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '44px',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.lg,
    boxShadow: `0 8px 32px ${theme.colors.moduleIntro}50`,
  }

  const titleStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.headline,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.lg,
  }

  const bodyStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    lineHeight: 1.7,
    maxWidth: '320px',
    marginBottom: theme.spacing.xl,
  }

  const highlightStyle = {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.semibold,
  }

  const buttonStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    background: theme.colors.moduleS,
    border: 'none',
    borderRadius: '14px',
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    cursor: 'pointer',
    transition: theme.transitions.fast,
    marginBottom: theme.spacing.md,
    minWidth: '280px',
    boxShadow: '0 4px 16px rgba(37, 99, 235, 0.35)',
    letterSpacing: '0.3px',
  }

  const backLinkStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    textDecorationColor: theme.colors.border,
    textUnderlineOffset: '3px',
    padding: theme.spacing.sm,
    marginTop: theme.spacing.lg,
    transition: theme.transitions.fast,
  }

  const subtitleStyle = {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.small,
    color: theme.colors.borderLight,
    marginTop: theme.spacing.sm,
  }

  return (
    <div style={containerStyle}>
      <div style={checkmarkStyle} aria-hidden="true">✓</div>

      <h1 style={titleStyle}>Bereit für die Praxis?</h1>

      <p style={bodyStyle}>
        Sie kennen jetzt die 7-Screen-Struktur.
        Im nächsten Schritt erleben Sie das Format in Aktion –{' '}
        am Beispiel <span style={highlightStyle}>nachhaltiger KI-Entscheidungen</span>.
      </p>

      <button
        style={buttonStyle}
        onClick={onContinue}
        aria-label="Weiter zum Anwendungsbeispiel"
      >
        Weiter zum Anwendungsbeispiel →
      </button>

      <p style={subtitleStyle}>5 Module · je 3 Minuten</p>

      {onBack && (
        <button
          style={backLinkStyle}
          onClick={onBack}
          aria-label="Zurück zur Einführung"
        >
          ← Zurück zur Einführung
        </button>
      )}
    </div>
  )
}
