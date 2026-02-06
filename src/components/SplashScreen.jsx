import { theme } from '../styles/theme'

export function SplashScreen({ onStart }) {
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
    backgroundImage: 'url(/images/splash.webp)',
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
      rgba(17, 24, 39, 0.5) 0%,
      rgba(17, 24, 39, 0.8) 50%,
      rgba(17, 24, 39, 0.98) 100%)`,
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
    fontSize: '15px',
    color: theme.colors.textSecondary,
    letterSpacing: '1px',
    marginBottom: theme.spacing.xl,
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
    color: theme.colors.textPrimary,
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
    background: theme.colors.moduleS,
    border: 'none',
    borderRadius: '12px',
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    cursor: 'pointer',
    transition: theme.transitions.fast,
    boxShadow: '0 4px 16px rgba(37, 99, 235, 0.35)',
    letterSpacing: '0.5px',
  }

  const footerStyle = {
    position: 'absolute',
    bottom: theme.spacing.md,
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

  const creditStyle = {
    position: 'absolute',
    bottom: theme.spacing.xs,
    right: theme.spacing.sm,
    fontFamily: theme.fonts.body,
    fontSize: '10px',
    color: 'rgba(255,255,255,0.3)',
    textDecoration: 'none',
    zIndex: 3,
  }

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle} aria-hidden="true" />
      <div style={overlayStyle} aria-hidden="true" />

      <main id="main-content" style={contentStyle}>
        <h1 style={titleStyle}>5 Fragen</h1>
        <p style={subtitleStyle}>bevor Sie ein KI-Projekt starten</p>

        <p style={descriptionStyle}>
          Das <span style={highlightStyle}>SCOPE-Framework</span> hilft Ihnen,
          KI-Entscheidungen <span style={highlightStyle}>nachhaltig</span> zu treffen –
          von der Notwendigkeit bis zur langfristigen Tragfähigkeit.
        </p>

        <p style={timeStyle}>5 Module · je 3 Minuten · ~15 Min. gesamt</p>

        <button
          style={buttonStyle}
          onClick={onStart}
          aria-label="SCOPE-Module starten"
        >
          Starten
        </button>
      </main>

      <div style={footerStyle}>
        SCOPE AI Framework (<a href="https://mesicek.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Mesicek</a>, 2025)
      </div>

      <a
        href="https://unsplash.com/photos/uRXeR2bQa5Y"
        target="_blank"
        rel="noopener noreferrer"
        style={creditStyle}
      >
        Photo: Đào Việt Hoàng
      </a>
    </div>
  )
}
