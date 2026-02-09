import { theme } from '../../styles/theme'

export function ExampleCard({ card, color }) {
  const containerStyle = {
    position: 'relative',
    minHeight: '100%',
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

  const comparisonStyle = {
    display: 'flex',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  }

  const optionStyle = (isLeft) => ({
    flex: 1,
    background: theme.colors.cardBg,
    borderRadius: '14px',
    padding: theme.spacing.md,
    textAlign: 'center',
    border: `2px solid ${isLeft ? theme.colors.error : theme.colors.success}`,
    boxShadow: `0 2px 8px ${isLeft ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)'}`,
  })

  const optionLabelStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  }

  const optionCostStyle = (isLeft) => ({
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: '20px',
    color: isLeft ? theme.colors.error : theme.colors.success,
  })

  const resultStyle = {
    background: color,
    borderRadius: '10px',
    padding: theme.spacing.sm,
    textAlign: 'center',
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSizes.small,
    color: theme.colors.textPrimary,
    boxShadow: `0 4px 12px ${color}40`,
  }

  const sourceStyle = {
    textAlign: 'center',
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: '11px',
    color: theme.colors.borderLight,
    marginTop: theme.spacing.xs,
    fontStyle: 'italic',
  }

  return (
    <div style={containerStyle}>
      <div style={accentBarStyle} />
      <div style={labelStyle}>Praxisbeispiel</div>
      <h2 style={headlineStyle}>{card.headline}</h2>
      <p style={bodyStyle}>{card.body}</p>

      {card.comparison && (
        <>
          <div style={comparisonStyle}>
            <div style={optionStyle(true)}>
              <div style={optionLabelStyle}>{card.comparison.left.label}</div>
              <div style={optionCostStyle(true)}>{card.comparison.left.cost}</div>
            </div>
            <div style={optionStyle(false)}>
              <div style={optionLabelStyle}>{card.comparison.right.label}</div>
              <div style={optionCostStyle(false)}>{card.comparison.right.cost}</div>
            </div>
          </div>
          {card.comparison.source ? (
            <div style={sourceStyle}>{card.comparison.result} — {card.comparison.source}</div>
          ) : (
            <div style={resultStyle}>{card.comparison.result}</div>
          )}
        </>
      )}
    </div>
  )
}
