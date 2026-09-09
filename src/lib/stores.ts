// stores.ts
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Language: 'tr' | 'en'
const initialLang = browser ? (localStorage.getItem('lang') || 'tr') : 'tr';
export const lang = writable(initialLang);
if (browser) lang.subscribe((v) => localStorage.setItem('lang', v));

// Theme: 'light' | 'dark'
// Priority: 1) localStorage  2) OS/browser prefers-color-scheme  3) 'light'
function getInitialTheme(): 'light' | 'dark' {
  if (!browser) return 'light';
  const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (saved === 'light' || saved === 'dark') return saved;
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

const initialTheme = getInitialTheme();
export const theme = writable<'light' | 'dark'>(initialTheme);

if (browser) {
  // Apply immediately on mount
  document.documentElement.setAttribute('data-theme', initialTheme);

  theme.subscribe((v) => {
    localStorage.setItem('theme', v);
    document.documentElement.setAttribute('data-theme', v);
  });

  // Keep in sync with OS theme changes (only when user hasn't manually set a preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      theme.set(e.matches ? 'dark' : 'light');
    }
  });
}

