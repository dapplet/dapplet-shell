import create from 'zustand';

function getPreferredTheme() {
  if (!window.matchMedia) return;

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    window.localStorage.setItem('theme', 'dark');
    return 'dark';
  }
  window.localStorage.setItem('theme', 'light');
  return 'light';
}

interface ThemeState {
  theme: string;
  toggle: (e: typeof event) => void;
}

export const useTheme = create<ThemeState>((set) => ({
  theme: getPreferredTheme() || 'light',
  toggle: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
