import { useEffect, useState } from 'react';
import './styles.scss';

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);

  const handleScrollY = () => {
    if (window.scrollY > 80) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
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
              <a href="#portfolio">Portfólio</a>
            </li>
            <li className="header-navigation-item">
              <a href="#resume">Resumo</a>
            </li>
            <li className="header-navigation-item">
              <a href="#about">Sobre</a>
            </li>
            <li className="header-navigation-item">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
