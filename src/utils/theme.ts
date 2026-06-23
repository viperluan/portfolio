import { THEME_COLORS, THEME_STORAGE_KEY, type ResolvedTheme, type ThemePreference } from '~/constants/theme';

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

const getStoredTheme = (): ThemePreference | null => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);

  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return null;
};

const getResolvedTheme = (): ResolvedTheme => getStoredTheme() ?? getSystemTheme();

const applyTheme = (theme: ResolvedTheme) => {
  document.documentElement.setAttribute('data-theme', theme);

  document.querySelectorAll('meta[name="theme-color"]').forEach((element) => {
    element.setAttribute('content', THEME_COLORS[theme]);
  });
};

const initTheme = () => {
  const stored = getStoredTheme();

  if (stored) {
    applyTheme(stored);
  }
};

export { applyTheme, getResolvedTheme, getStoredTheme, getSystemTheme, initTheme };
