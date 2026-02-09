import { theme } from '../styles/theme'

const moduleOrder = ['S', 'C', 'O', 'P', 'E']
const moduleNames = {
  S: 'Sufficiency',
  C: 'Carbon',
  O: 'Outcomes',
  P: 'Power',
  E: 'Endurance',
}
const moduleQuestions = {
  S: 'Brauchen wir diese KI-Lösung überhaupt?',
  C: 'Wie hoch ist der ökologische Fußabdruck?',
  O: 'Wem nützt es, wem schadet es?',
  P: 'Wer kontrolliert die KI?',
  E: 'Ist die Lösung langfristig tragfähig?',
}
const moduleColors = {
  S: theme.colors.moduleS,
  C: theme.colors.moduleC,
  O: theme.colors.moduleO,
  P: theme.colors.moduleP,
  E: theme.colors.moduleE,
}

export function ModuleComplete({ moduleId, onNextModule, onBackToOverview, completedModules = [] }) {
  const currentIndex = moduleOrder.indexOf(moduleId)
  const allCompleted = moduleOrder.every(id => completedModules.includes(id))

  // Find next uncompleted module (in order), or next in sequence if all done
  const nextUncompleted = moduleOrder.find(id => !completedModules.includes(id))
  const nextInSequence = currentIndex < moduleOrder.length - 1 ? moduleOrder[currentIndex + 1] : null
  const nextModuleId = allCompleted ? null : (nextUncompleted || null)
  const color = moduleColors[moduleId]

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
    background: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '44px',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.lg,
    boxShadow: `0 8px 32px ${color}50`,
  }

  const titleStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.headline,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
  }

  const moduleNameStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.body,
    color: color,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: theme.spacing.xl,
  }

  const nextBtnColor = (nextModuleId && moduleColors[nextModuleId]) || color
  const nextButtonStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.semibold,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    background: nextBtnColor,
    border: 'none',
    borderRadius: '14px',
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    cursor: 'pointer',
    transition: theme.transitions.fast,
    marginBottom: theme.spacing.md,
    minWidth: '280px',
    boxShadow: `0 4px 16px ${nextBtnColor}40`,
    letterSpacing: '0.3px',
    textAlign: 'center',
  }

  const buttonSubtitleStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.small,
    opacity: 0.85,
    marginTop: '4px',
    display: 'block',
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
    padding: theme.spacing.sm,
  }

  const progressStyle = {
    display: 'flex',
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.xl,
  }

  const progressDotStyle = (index) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: completedModules.includes(moduleOrder[index]) ? moduleColors[moduleOrder[index]] : theme.colors.borderLight,
    transition: theme.transitions.fast,
  })

  return (
    <div style={containerStyle}>
      <div style={checkmarkStyle}>✓</div>

      <h1 style={titleStyle}>Modul abgeschlossen</h1>
      <p style={moduleNameStyle}>{moduleNames[moduleId]}</p>

      <div style={progressStyle}>
        {moduleOrder.map((id, index) => (
          <div key={id} style={progressDotStyle(index)} />
        ))}
      </div>

      {allCompleted ? (
        <>
          <button style={nextButtonStyle} onClick={onBackToOverview}>
            Alle Module abgeschlossen!
          </button>
          <button style={backLinkStyle} onClick={onBackToOverview}>
            Zurück zur Übersicht
          </button>
        </>
      ) : nextModuleId ? (
        <>
          <button style={nextButtonStyle} onClick={() => onNextModule(nextModuleId)}>
            Weiter zu {moduleNames[nextModuleId]}
            <span style={buttonSubtitleStyle}>{moduleQuestions[nextModuleId]}</span>
          </button>
          <button style={backLinkStyle} onClick={onBackToOverview}>
            Zurück zur Übersicht
          </button>
        </>
      ) : (
        <button style={backLinkStyle} onClick={onBackToOverview}>
          Zurück zur Übersicht
        </button>
      )}
    </div>
  )
}
