export { moduleS } from './s'
export { moduleC } from './c'
export { moduleO } from './o'
export { moduleP } from './p'
export { moduleE } from './e'

export const modules = {
  S: () => import('./s').then(m => m.moduleS),
  C: () => import('./c').then(m => m.moduleC),
  O: () => import('./o').then(m => m.moduleO),
  P: () => import('./p').then(m => m.moduleP),
  E: () => import('./e').then(m => m.moduleE),
}
