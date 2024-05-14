import { useEffect, useState } from 'react';

import './styles.scss';

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [html, setHtml] = useState<HTMLElement | null>(null);
  const [menu, setMenu] = useState<HTMLElement | null>(null);
  const [scrollActive, setScrollActive] = useState(false);

  const handleClickOutside = (htmlEvent: MouseEvent) => {
    if (htmlEvent) {
      if (menu?.contains(htmlEvent.target as Node)) {
        setIsOpen(false);
        html?.removeEventListener('click', handleClickOutside);
      }
    }
  };

  const handleClick = () => {
    html?.removeEventListener('click', handleClickOutside);
    setIsOpen(false);
  };

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

  // useEffect for listener click outside area of menu
  useEffect(() => {
    if (!html || !menu) {
      const htmlElement = document.documentElement;
      const menuElement = document.getElementById('menu');

      if (htmlElement && menuElement) {
        setHtml(htmlElement);
        setMenu(menuElement);
      }
    }

    if (isOpen && html) {
      html.addEventListener('click', handleClickOutside);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div className={`menu-mobile-bg ${scrollActive ? 'scroll-active' : ''}`}>
      <a href="/" className="menu-mobile-logo">
        LCS
      </a>

      <div
        className={`menu-mobile-container ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      />

      <nav id="menu" className={`menu-mobile-content ${isOpen ? 'active' : ''}`}>
        <ul className="menu-list-content">
          <li>
            <a href="#portfolio" onClick={handleClick}>
              Portfólio
            </a>
          </li>
          <li>
            <a href="#resume" onClick={handleClick}>
              Resumo
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleClick}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClick}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { MenuMobile };
