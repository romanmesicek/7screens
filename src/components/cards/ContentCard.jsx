import { theme } from '../../styles/theme'

export function ContentCard({ card, color }) {
  const containerStyle = {
    position: 'relative',
    height: '100%',
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

  const statStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.stat,
    color: color,
    marginBottom: theme.spacing.xs,
    textShadow: `0 2px 20px ${color}40`,
  }

  const statLabelStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.lg,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }

  // Für mehrere Stats nebeneinander (z.B. Module C)
  const statsRowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.sm,
  }

  const statItemStyle = {
    textAlign: 'center',
    flex: 1,
  }

  const statItemValueStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: '32px',
    color: color,
    marginBottom: '4px',
    textShadow: `0 2px 16px ${color}40`,
  }

  const statItemLabelStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  }

  const headlineStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.headline,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
    lineHeight: 1.2,
  }

  const bodyStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    lineHeight: 1.6,
    marginBottom: theme.spacing.lg,
  }

  const sourceStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.small,
    color: theme.colors.borderLight,
    fontStyle: 'italic',
  }

  return (
    <div style={containerStyle}>
      <div style={accentBarStyle} />
      {/* Einzelner Stat (z.B. Module S) */}
      {card.stat && (
        <>
          <div style={statStyle}>{card.stat}</div>
          <div style={statLabelStyle}>{card.statLabel}</div>
        </>
      )}
      {/* Mehrere Stats nebeneinander (z.B. Module C) */}
      {card.stats && (
        <div style={statsRowStyle}>
          {card.stats.map((stat, index) => (
            <div key={index} style={statItemStyle}>
              <div style={statItemValueStyle}>{stat.value}</div>
              <div style={statItemLabelStyle}>{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      <h2 style={headlineStyle}>{card.headline}</h2>
      <p style={bodyStyle}>{card.body}</p>
      {card.source && <p style={sourceStyle}>Quelle: {card.source}</p>}
    </div>
  )
}
