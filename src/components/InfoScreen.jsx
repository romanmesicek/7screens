import { theme } from '../styles/theme'
import { splashCredit } from '../data/imageCredits'

export function InfoScreen({ onContinue, onBack }) {
  const containerStyle = {
    minHeight: '100vh',
    background: theme.colors.background,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  }

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${splashCredit.localPath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
  }

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to bottom,
      rgba(15, 23, 42, 0.85) 0%,
      rgba(15, 23, 42, 0.95) 50%,
      rgba(15, 23, 42, 0.98) 100%)`,
    zIndex: 1,
  }

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
    textAlign: 'center',
  }

  const titleStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: '26px',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
    letterSpacing: '1px',
  }

  const demoBadgeStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: '11px',
    color: theme.colors.warning,
    border: `1px solid ${theme.colors.warning}`,
    borderRadius: '6px',
    padding: '4px 14px',
    letterSpacing: '2px',
    marginBottom: theme.spacing.lg,
  }

  const subtitleStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.semibold,
    fontSize: '14px',
    color: theme.colors.warning,
    letterSpacing: '1.5px',
    marginBottom: theme.spacing.xl,
  }

  const blockStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: '14px',
    color: theme.colors.textSecondary,
    lineHeight: 1.7,
    maxWidth: '340px',
    textAlign: 'left',
    marginBottom: theme.spacing.lg,
  }

  const highlightStyle = {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.semibold,
  }

  const dividerStyle = {
    width: '40px',
    height: '1px',
    background: theme.colors.border,
    margin: `0 auto ${theme.spacing.lg}`,
  }

  const buttonStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    background: theme.colors.moduleS,
    border: 'none',
    borderRadius: '12px',
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    cursor: 'pointer',
    transition: theme.transitions.fast,
    boxShadow: '0 4px 16px rgba(37, 99, 235, 0.35)',
    letterSpacing: '0.5px',
  }

  const footerNoteStyle = {
    fontFamily: theme.fonts.body,
    fontSize: '11px',
    color: theme.colors.borderLight,
    marginTop: theme.spacing.lg,
    letterSpacing: '0.3px',
  }

  const backButtonStyle = {
    position: 'absolute',
    top: theme.spacing.md,
    left: theme.spacing.md,
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
    zIndex: 10,
  }

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle} aria-hidden="true" />
      <div style={overlayStyle} aria-hidden="true" />

      {onBack && (
        <button
          style={backButtonStyle}
          onClick={onBack}
          aria-label="Zurück zur Startseite"
        >
          ←
        </button>
      )}

      <main style={contentStyle}>
        <div style={demoBadgeStyle}>DEMO</div>

        <h1 style={titleStyle}>Warum dieses Format?</h1>
        <p style={subtitleStyle}>7 Screens · 3 Minuten</p>

        <p style={blockStyle}>
          Die 7-Screen-Sequenz integriert{' '}
          <span style={highlightStyle}>Cognitive Load Theory</span> (Sweller),{' '}
          <span style={highlightStyle}>Retrieval Practice</span> (Roediger &amp; Karpicke)
          und das <span style={highlightStyle}>ARCS-Motivationsmodell</span> (Keller)
          in eine didaktische Mikroarchitektur. Jeder Screen aktiviert einen eigenen
          Lernmechanismus: Neugier wecken, Fakten verankern, Konzepte strukturieren,
          Praxis zeigen, zum Handeln aktivieren, Wissen testen und Kernbotschaft sichern.
        </p>

        <div style={dividerStyle} aria-hidden="true" />

        <p style={blockStyle}>
          <span style={highlightStyle}>KI-Nachhaltigkeit ist nur das Beispielthema.</span>{' '}
          Die 7-Screen-Struktur funktioniert für jedes Nachhaltigkeitsthema –
          von Kreislaufwirtschaft über Lieferkettensorgfalt bis
          Inklusion &amp; Diversität.
        </p>

        <button
          style={buttonStyle}
          onClick={onContinue}
          aria-label="Weiter zu den Modulen"
        >
          Weiter zu den Modulen
        </button>

      </main>
    </div>
  )
}
