import { useEffect, useState } from 'react';

import './styles.scss';
import { scrollToIdOnClick } from '~/components/utils/smoothScroll';

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);

  const handleScrollY = () => {
    if (window.scrollY > 80) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  const handleClickMenu = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const document = window.document;

    scrollToIdOnClick(event, document);
  };

  // useEffect for listener scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScrollY);

    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);

  return (
    <header className={`header-container ${scrollActive ? 'active' : ''}`}>
      <div className="header-content-container">
        <a href="/" className="header-logo">
          LCS
        </a>

        <nav className="header-navigation-container">
          <ul className="header-navigation-list-container">
            <li className="header-navigation-item">
              <a href="#portfolio" onClick={handleClickMenu}>
                Portfólio
              </a>
            </li>
            <li className="header-navigation-item">
              <a href="#resume" onClick={handleClickMenu}>
                Resumo
              </a>
            </li>
            <li className="header-navigation-item">
              <a href="#about" onClick={handleClickMenu}>
                Sobre
              </a>
            </li>
            <li className="header-navigation-item">
              <a href="#contact" onClick={handleClickMenu}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
