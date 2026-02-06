import { theme } from '../styles/theme'

export function Watermark({ letter, color }) {
  const style = {
    position: 'absolute',
    bottom: '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: theme.fontSizes.watermark,
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.extrabold,
    color: color,
    opacity: 0.06,
    zIndex: 0,
    userSelect: 'none',
    pointerEvents: 'none',
  }

  return <div style={style}>{letter}</div>
}
