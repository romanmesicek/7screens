import { theme } from '../styles/theme'
import { introSplashCredit } from '../data/imageCredits'

export function IntroSplashScreen({ onStart, onSkip }) {
  const containerStyle = {
    minHeight: '100vh',
    background: theme.colors.background,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
  }

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${introSplashCredit.localPath})`,
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
      rgba(17, 24, 39, 0.3) 0%,
      rgba(17, 24, 39, 0.6) 50%,
      rgba(17, 24, 39, 0.92) 100%)`,
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
    fontSize: '44px',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
    letterSpacing: '3px',
  }

  const subtitleStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.semibold,
    fontSize: '20px',
    color: theme.colors.textPrimary,
    letterSpacing: '0.5px',
    lineHeight: 1.2,
    marginBottom: theme.spacing.xl,
    maxWidth: '320px',
  }

  const descriptionStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    lineHeight: 1.7,
    maxWidth: '320px',
    marginBottom: theme.spacing.xl,
  }

  const highlightStyle = {
    color: theme.colors.textSecondary,
    fontWeight: theme.fontWeights.semibold,
  }

  const timeStyle = {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.small,
    color: theme.colors.borderLight,
    marginBottom: theme.spacing.xl,
  }

  const buttonStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    background: theme.colors.moduleIntro,
    border: 'none',
    borderRadius: '12px',
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    cursor: 'pointer',
    transition: theme.transitions.fast,
    boxShadow: '0 4px 16px rgba(217, 119, 6, 0.35)',
    letterSpacing: '0.5px',
    marginBottom: theme.spacing.lg,
  }

  const skipLinkStyle = {
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
    transition: theme.transitions.fast,
  }

  const footerStyle = {
    position: 'absolute',
    bottom: theme.spacing.xl,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.small,
    color: theme.colors.borderLight,
    zIndex: 3,
  }

  const linkStyle = {
    color: theme.colors.textSecondary,
    textDecoration: 'none',
  }

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle} aria-hidden="true" />
      <div style={overlayStyle} aria-hidden="true" />

      <main id="main-content" style={contentStyle}>
        <h1 style={titleStyle}>7 Screens</h1>
        <p style={subtitleStyle}>Wie Lernen in 3 Minuten funktioniert</p>

        <p style={descriptionStyle}>
          Jeder Screen aktiviert einen eigenen{' '}
          <span style={highlightStyle}>Lernmechanismus</span> –
          von Neugier wecken über Wissen strukturieren
          bis zum aktiven Abruf. Wissenschaftlich fundiert,
          kompakt verpackt.
        </p>

        <p style={timeStyle}>1 Modul · 7 Screens · ~3 Minuten</p>

        <button
          style={buttonStyle}
          onClick={onStart}
          aria-label="7-Screen-Format kennenlernen"
        >
          Format kennenlernen
        </button>

        <button
          style={skipLinkStyle}
          onClick={onSkip}
          aria-label="Direkt zum Anwendungsbeispiel"
        >
          Direkt zum Anwendungsbeispiel →
        </button>
      </main>

      <div style={{
        position: 'absolute',
        bottom: theme.spacing.xs,
        left: theme.spacing.sm,
        fontFamily: theme.fonts.body,
        fontSize: '10px',
        color: 'rgba(255,255,255,0.3)',
        zIndex: 3,
      }}>
        Content & Coding: Roman Mesicek, 2026
      </div>

      <a
        href={introSplashCredit.unsplashUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          bottom: theme.spacing.xs,
          right: theme.spacing.sm,
          fontFamily: theme.fonts.body,
          fontSize: '10px',
          color: 'rgba(255,255,255,0.3)',
          textDecoration: 'none',
          zIndex: 3,
        }}
      >
        Photo: {introSplashCredit.photographer}
      </a>
    </div>
  )
}
