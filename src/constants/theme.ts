const THEME_STORAGE_KEY = 'theme-preference';

type ThemePreference = 'light' | 'dark';
type ResolvedTheme = ThemePreference;

const THEME_COLORS: Record<ResolvedTheme, string> = {
  dark: '#070b14',
  light: '#f8fafc',
};

export { THEME_COLORS, THEME_STORAGE_KEY, type ResolvedTheme, type ThemePreference };
