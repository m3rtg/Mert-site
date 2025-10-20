export const dict = {
  tr: {
    name: 'Mert GÖRGÜLÜ',
    resume: 'Öz Geçmiş ve Eğitim',
    langLabel: 'TR / EN',
    themeLight: 'Açık',
    themeDark: 'Koyu'
  },
  en: {
    name: 'Mert GÖRGÜLÜ',
    resume: 'Resume & Education',
    langLabel: 'EN / TR',
    themeLight: 'Light',
    themeDark: 'Dark'
  }
} as const;
export type LangKey = keyof typeof dict;