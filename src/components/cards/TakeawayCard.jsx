import { theme } from '../../styles/theme'

export function TakeawayCard({ card, color }) {
  // Convert hex to rgba for gradient
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  const containerStyle = {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.lg,
    zIndex: 1,
    background: `linear-gradient(180deg, ${theme.colors.background} 0%, ${hexToRgba(color, 0.08)} 100%)`,
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
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: theme.spacing.sm,
  }

  const headlineStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.headline,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.lg,
    lineHeight: 1.2,
  }

  const quoteStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.semibold,
    fontSize: '22px',
    color: color,
    lineHeight: 1.4,
    fontStyle: 'normal',
    marginBottom: theme.spacing.xl,
    padding: `${theme.spacing.md} 0`,
    borderLeft: `4px solid ${color}`,
    paddingLeft: theme.spacing.md,
    textShadow: `0 2px 16px ${hexToRgba(color, 0.2)}`,
  }

  const ctaStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    lineHeight: 1.6,
  }

  return (
    <div style={containerStyle}>
      <div style={accentBarStyle} />
      <div style={labelStyle}>Leitfrage</div>
      <h2 style={headlineStyle}>{card.headline}</h2>
      <blockquote style={quoteStyle}>{card.quote}</blockquote>
      <p style={ctaStyle}>{card.cta}</p>
    </div>
  )
}
