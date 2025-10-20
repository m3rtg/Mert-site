// stores.ts
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Dil: 'tr' | 'en'
const initialLang = browser ? (localStorage.getItem('lang') || 'tr') : 'tr';
export const lang = writable(initialLang);
if (browser) lang.subscribe((v) => localStorage.setItem('lang', v));

// Tema: 'light' | 'dark'
const preferred = browser
  ? (document.documentElement.dataset.theme as 'light' | 'dark' | undefined)
  : undefined;
const initialTheme = browser
  ? (localStorage.getItem('theme') as 'light' | 'dark') || preferred || 'light'
  : 'light';

export const theme = writable<'light' | 'dark'>(initialTheme);

if (browser) {
  theme.subscribe((v) => {
    localStorage.setItem('theme', v);
    document.documentElement.setAttribute("data-theme", v);
  });

  document.documentElement.setAttribute("data-theme", initialTheme);
}
