/**
 * Unsplash Image Credits
 *
 * Diese Bilder werden für die Hook-Cards (Screen 1) jedes Moduls verwendet.
 * Attribution ist gemäß Unsplash License erforderlich.
 *
 * Bilder: WebP-Format, 480px Breite, optimiert für Mobile
 * Speicherort: public/images/hooks/ und public/images/
 */

export const splashCredit = {
  id: 'jw4iXIvZIds',
  localPath: '/images/splash.webp',
  photographer: 'Maxence Pira',
  photographerUrl: 'https://unsplash.com/@maxencepira',
  unsplashUrl: 'https://unsplash.com/photos/jw4iXIvZIds',
  alt: 'A wind turbine in a field of wildflowers',
}

export const introSplashCredit = {
  id: '8_RAu7IklwU',
  localPath: '/images/intro-splash.webp',
  photographer: 'Sean Sinclair',
  photographerUrl: 'https://unsplash.com/@seanwsinclair',
  unsplashUrl: 'https://unsplash.com/photos/8_RAu7IklwU',
  alt: 'Blue and orange light digital wallpaper',
}

export const imageCredits = {
  '7S': {
    id: 'tEVGmMaPFXk',
    localPath: '/images/hooks/7s-hook.webp',
    photographer: 'Alina Grubnyak',
    photographerUrl: 'https://unsplash.com/@alinnnaaaa',
    unsplashUrl: 'https://unsplash.com/photos/tEVGmMaPFXk',
    alt: 'Abstract black and white visualization of a brain and neural network',
  },
  S: {
    id: 'F7jvodoDxWA',
    localPath: '/images/hooks/s-hook.webp',
    photographer: 'Anya Chernykh',
    photographerUrl: 'https://unsplash.com/@anyuta_ch',
    unsplashUrl: 'https://unsplash.com/photos/F7jvodoDxWA',
    alt: 'Road with arrows pointing in two directions',
  },
  C: {
    id: '5_G1uVw7WRM',
    localPath: '/images/hooks/c-hook.webp',
    photographer: 'Konstantin Dyadyun',
    photographerUrl: 'https://unsplash.com/@dyadyun',
    unsplashUrl: 'https://unsplash.com/photos/5_G1uVw7WRM',
    alt: 'A road with windmills on either side',
  },
  O: {
    id: 'P75RDoDuhtA',
    localPath: '/images/hooks/o-hook.webp',
    photographer: 'Iryna Limborska',
    photographerUrl: 'https://unsplash.com/@ira_lim',
    unsplashUrl: 'https://unsplash.com/photos/P75RDoDuhtA',
    alt: 'Statue of justice holding scales and sword',
  },
  P: {
    id: 'vp1daJT8AP8',
    localPath: '/images/hooks/p-hook.webp',
    photographer: 'Kiril Bahrov',
    photographerUrl: 'https://unsplash.com/@kirilbahrov',
    unsplashUrl: 'https://unsplash.com/photos/vp1daJT8AP8',
    alt: 'Old rusty padlock on a weathered wooden door',
  },
  E: {
    id: 'uV60K617qLU',
    localPath: '/images/hooks/e-hook.webp',
    photographer: 'Cabbie Kqwi',
    photographerUrl: 'https://unsplash.com/@cabbiekqwi',
    unsplashUrl: 'https://unsplash.com/photos/uV60K617qLU',
    alt: 'A winding road through a lush green forest tunnel',
  },
}

/**
 * Get image path for a module
 */
export function getHookImage(moduleId) {
  return imageCredits[moduleId]?.localPath || null
}

/**
 * Get attribution text for a module
 */
export function getAttribution(moduleId) {
  const credit = imageCredits[moduleId]
  if (!credit) return null
  return `Photo by ${credit.photographer} on Unsplash`
}

/**
 * Alle Credits als Array (für Credits-Seite)
 */
export const allCredits = Object.entries(imageCredits).map(([moduleId, credit]) => ({
  moduleId,
  ...credit,
}))
