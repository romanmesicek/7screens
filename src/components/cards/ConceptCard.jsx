import { theme } from '../../styles/theme'

export function ConceptCard({ card, color }) {
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

  const headlineStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: '22px',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.lg,
    lineHeight: 1.3,
  }

  const columnsStyle = {
    display: 'flex',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  }

  const columnStyle = {
    flex: 1,
    background: theme.colors.cardBg,
    borderRadius: '14px',
    padding: theme.spacing.md,
    textAlign: 'center',
    border: `1px solid ${theme.colors.border}`,
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  }

  const columnTitleStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.body,
    color: color,
    marginBottom: theme.spacing.xs,
  }

  const columnDescStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    lineHeight: 1.4,
  }

  const vsStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.small,
    color: theme.colors.borderLight,
  }

  const bodyStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    lineHeight: 1.6,
  }

  return (
    <div style={containerStyle}>
      <div style={accentBarStyle} />
      <h2 style={headlineStyle}>{card.headline}</h2>

      <div style={columnsStyle}>
        <div style={columnStyle}>
          <div style={columnTitleStyle}>{card.conceptLeft.title}</div>
          <div style={columnDescStyle}>{card.conceptLeft.description}</div>
        </div>
        <div style={vsStyle}>vs.</div>
        <div style={columnStyle}>
          <div style={columnTitleStyle}>{card.conceptRight.title}</div>
          <div style={columnDescStyle}>{card.conceptRight.description}</div>
        </div>
      </div>

      <p style={bodyStyle}>{card.body}</p>
    </div>
  )
}
