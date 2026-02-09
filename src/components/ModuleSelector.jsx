import { theme } from '../styles/theme'
import { splashCredit } from '../data/imageCredits'

const modules = [
  { id: 'S', name: 'Sufficiency', color: theme.colors.moduleS, question: 'Brauchen wir diese KI-Lösung überhaupt?' },
  { id: 'C', name: 'Carbon', color: theme.colors.moduleC, question: 'Wie hoch ist der ökologische Fußabdruck?' },
  { id: 'O', name: 'Outcomes', color: theme.colors.moduleO, question: 'Wem nützt es, wem schadet es?' },
  { id: 'P', name: 'Power', color: theme.colors.moduleP, question: 'Wer kontrolliert die KI?' },
  { id: 'E', name: 'Endurance', color: theme.colors.moduleE, question: 'Ist die Lösung langfristig tragfähig?' },
]

export function ModuleSelector({ onSelectModule, completedModules = [], onBack }) {
  const containerStyle = {
    minHeight: '100vh',
    background: theme.colors.background,
    padding: theme.spacing.lg,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
      rgba(15, 23, 42, 0.7) 0%,
      rgba(15, 23, 42, 0.85) 30%,
      rgba(15, 23, 42, 0.95) 100%)`,
    zIndex: 1,
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    marginTop: theme.spacing.xl,
    position: 'relative',
    zIndex: 2,
  }

  const titleStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.extrabold,
    fontSize: '36px',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
    letterSpacing: '4px',
  }

  const subtitleStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    maxWidth: '300px',
  }

  const timeStyle = {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.small,
    color: theme.colors.borderLight,
    marginTop: theme.spacing.sm,
  }

  const progressStyle = {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.lg,
    position: 'relative',
    zIndex: 2,
  }

  const modulesListStyle = {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
    position: 'relative',
    zIndex: 2,
  }

  const moduleButtonStyle = (color, isCompleted) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    padding: theme.spacing.md,
    background: theme.colors.cardBg,
    borderRadius: '14px',
    border: isCompleted ? `2px solid ${color}` : `1px solid ${theme.colors.border}`,
    cursor: 'pointer',
    transition: theme.transitions.fast,
    textAlign: 'left',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  })

  const moduleLetterStyle = (color, isCompleted) => ({
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    background: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: isCompleted ? '22px' : '26px',
    color: theme.colors.textPrimary,
    boxShadow: `0 4px 12px ${color}33`,
  })

  const moduleInfoStyle = {
    flex: 1,
  }

  const moduleNameStyle = {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    marginBottom: '2px',
  }

  const moduleQuestionStyle = {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    lineHeight: 1.3,
  }

  const footerStyle = {
    marginTop: 'auto',
    paddingTop: theme.spacing.xl,
    textAlign: 'center',
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.small,
    color: theme.colors.borderLight,
    position: 'relative',
    zIndex: 2,
  }

  const linkStyle = {
    color: theme.colors.textSecondary,
    textDecoration: 'none',
    transition: theme.transitions.fast,
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
    textDecorationColor: theme.colors.border,
    textUnderlineOffset: '3px',
    padding: theme.spacing.sm,
    marginTop: theme.spacing.md,
    transition: theme.transitions.fast,
    position: 'relative',
    zIndex: 2,
  }

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle} />
      <div style={overlayStyle} />

      <div style={headerStyle}>
        <h1 style={titleStyle}>SCOPE</h1>
        <p style={subtitleStyle}>
          Ein Entscheidungsmodell zur Bewertung von sozialen
          und ökologischen Auswirkungen von KI-Projekten
        </p>
        <p style={timeStyle}>5 Module · je 3 Minuten</p>
      </div>

      <div style={modulesListStyle} role="list" aria-label="SCOPE Module">
        {modules.map((m) => {
          const isCompleted = completedModules.includes(m.id)
          return (
            <div
              key={m.id}
              style={moduleButtonStyle(m.color, isCompleted)}
              onClick={() => onSelectModule(m.id)}
              role="listitem"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectModule(m.id)}
              aria-label={`Modul ${m.id}: ${m.name} – ${m.question}${isCompleted ? ' (abgeschlossen)' : ''}`}
            >
              <div style={moduleLetterStyle(m.color, isCompleted)} aria-hidden="true">
                {isCompleted ? '✓' : m.id}
              </div>
              <div style={moduleInfoStyle}>
                <div style={moduleNameStyle}>{m.name}</div>
                <div style={moduleQuestionStyle}>{m.question}</div>
              </div>
            </div>
          )
        })}
      </div>

      {completedModules.length > 0 && (
        <p style={progressStyle}>
          {completedModules.length}/5 Module abgeschlossen
        </p>
      )}

      {onBack && (
        <button
          style={backLinkStyle}
          onClick={onBack}
          aria-label="Zurück"
        >
          ← Zurück
        </button>
      )}

    </div>
  )
}
