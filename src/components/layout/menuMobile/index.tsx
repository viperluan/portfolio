import { useEffect, useState } from 'react';

import { Container } from '../container';

import './styles.scss';

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [html, setHtml] = useState<HTMLElement | null>(null);
  const [menu, setMenu] = useState<HTMLElement | null>(null);

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
    <Container>
      <div
        className={`menu-mobile-container ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      />

      <nav id="menu" className={`menu-mobile-content ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>Portfólio</li>
          <li>Resumo</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </Container>
  );
};

export { MenuMobile };
