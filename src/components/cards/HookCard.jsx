import { theme } from '../../styles/theme'
import { imageCredits } from '../../data/imageCredits'

export function HookCard({ card, color, moduleId }) {
  const credit = imageCredits[moduleId]
  const hasImage = credit?.localPath

  const containerStyle = {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    zIndex: 1,
    overflow: 'hidden',
  }

  const backgroundStyle = hasImage ? {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${credit.localPath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -2,
  } : {}

  const overlayStyle = hasImage ? {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to bottom,
      rgba(17, 24, 39, 0.4) 0%,
      rgba(17, 24, 39, 0.7) 50%,
      rgba(17, 24, 39, 0.95) 100%)`,
    zIndex: -1,
  } : {}

  const accentBarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: color,
    zIndex: 2,
  }

  const headlineStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.headlineLarge,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.lg,
    lineHeight: 1.2,
    textShadow: hasImage ? '0 2px 4px rgba(0,0,0,0.3)' : 'none',
  }

  const bodyStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.bodyLarge,
    color: theme.colors.textPrimary,
    lineHeight: 1.6,
    opacity: 0.9,
  }

  const creditStyle = {
    position: 'absolute',
    bottom: theme.spacing.xs,
    right: theme.spacing.sm,
    fontFamily: theme.fonts.body,
    fontSize: '10px',
    color: 'rgba(255,255,255,0.4)',
    textDecoration: 'none',
  }

  return (
    <div style={containerStyle}>
      {hasImage && <div style={backgroundStyle} />}
      {hasImage && <div style={overlayStyle} />}
      <div style={accentBarStyle} />
      <h1 style={headlineStyle}>{card.headline}</h1>
      <p style={bodyStyle}>{card.body}</p>
      {credit && (
        <a
          href={credit.unsplashUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={creditStyle}
        >
          Photo: {credit.photographer}
        </a>
      )}
    </div>
  )
}
