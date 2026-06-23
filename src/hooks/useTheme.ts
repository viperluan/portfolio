import { useCallback, useEffect, useState } from 'react';

import { THEME_STORAGE_KEY, type ResolvedTheme, type ThemePreference } from '~/constants/theme';
import { applyTheme, getResolvedTheme, getStoredTheme, getSystemTheme } from '~/utils/theme';

const useTheme = () => {
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => getResolvedTheme());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    const handleSystemChange = () => {
      if (!getStoredTheme()) {
        setResolvedTheme(getSystemTheme());
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme: ThemePreference = resolvedTheme === 'dark' ? 'light' : 'dark';

    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
    setResolvedTheme(nextTheme);
  }, [resolvedTheme]);

  return {
    isDark: resolvedTheme === 'dark',
    resolvedTheme,
    toggleTheme,
  };
};

export { useTheme };
