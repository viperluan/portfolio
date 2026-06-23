import { useTheme } from '~/hooks/useTheme';

import { MoonIcon, SunIcon } from './theme-icons';
import './styles.scss';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {isDark ? <SunIcon className="theme-toggle-icon" /> : <MoonIcon className="theme-toggle-icon" />}
    </button>
  );
};

export { ThemeToggle };
