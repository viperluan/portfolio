import { useEffect, useState } from 'react';

import { scrollToIdOnClick, scrollToTop } from '~/components/utils/smoothScroll';
import { NAV_SECTIONS } from '~/constants/navigation';

import './styles.scss';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [scrollActive, setScrollActive] = useState(false);

  const handleScrollY = () => {
    setScrollActive(window.scrollY > 80);
  };

  const handleClickMenu = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    scrollToIdOnClick(event, window.document);
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY);

    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);

  return (
    <header className={`header-container ${scrollActive ? 'active' : ''}`}>
      <div className="header-content-container">
        <a href="#main-content" className="header-logo" onClick={handleLogoClick}>
          LCS
        </a>

        <nav className="header-navigation-container" aria-label="Navegação principal">
          <ul className="header-navigation-list-container">
            {NAV_SECTIONS.map(({ id, label, href }) => (
              <li key={id} className="header-navigation-item">
                <a
                  href={href}
                  className={activeSection === id ? 'active' : ''}
                  onClick={handleClickMenu}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
