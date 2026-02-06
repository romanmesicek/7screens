import { theme } from '../../styles/theme'

export function ActionCard({ card, color, checklistState, onChecklistChange }) {
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
    marginBottom: theme.spacing.sm,
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

  const checklistStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
  }

  const checkItemStyle = (checked) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing.sm,
    padding: theme.spacing.sm,
    background: theme.colors.cardBg,
    borderRadius: '12px',
    cursor: 'pointer',
    transition: theme.transitions.fast,
    border: `2px solid ${checked ? color : theme.colors.border}`,
    boxShadow: checked ? `0 0 0 3px ${color}20` : 'none',
  })

  const checkboxStyle = (checked) => ({
    width: '24px',
    height: '24px',
    minWidth: '24px',
    borderRadius: '6px',
    border: `2px solid ${checked ? color : theme.colors.borderLight}`,
    background: checked ? color : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.textPrimary,
    fontSize: '14px',
    transition: theme.transitions.fast,
  })

  const checkTextStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    lineHeight: 1.4,
    flex: 1,
  }

  const checkLabelStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  }

  const badgeStyle = (checked) => ({
    fontFamily: theme.fonts.body,
    fontSize: '10px',
    fontWeight: theme.fontWeights.bold,
    color: checked ? color : theme.colors.borderLight,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    whiteSpace: 'nowrap',
  })

  const handleToggle = (index) => {
    const newState = [...checklistState]
    newState[index] = !newState[index]
    onChecklistChange(newState)
  }

  return (
    <div style={containerStyle}>
      <div style={accentBarStyle} />
      <div style={labelStyle}>Reflexion</div>
      <h2 style={headlineStyle}>{card.headline}</h2>
      <p style={bodyStyle}>{card.body}</p>

      <div style={checklistStyle} role="group" aria-label="Reflexions-Checkliste">
        {card.checklistItems.map((item, index) => (
          <div
            key={index}
            style={checkItemStyle(checklistState[index])}
            onClick={() => handleToggle(index)}
            role="checkbox"
            aria-checked={checklistState[index]}
            aria-label={`${item} – ${checklistState[index] ? 'bedacht' : 'noch nicht bedacht'}`}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleToggle(index)}
          >
            <div style={checkboxStyle(checklistState[index])} aria-hidden="true">
              {checklistState[index] && '✓'}
            </div>
            <span style={checkTextStyle}>{item}</span>
            <span style={badgeStyle(checklistState[index])} aria-hidden="true">
              {checklistState[index] ? 'Bedacht ✓' : 'Bedacht?'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
