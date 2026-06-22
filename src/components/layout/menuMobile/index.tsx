import { useEffect, useState } from 'react';

import { scrollToIdOnClick, scrollToTop } from '~/components/utils/smoothScroll';
import { NAV_SECTIONS } from '~/constants/navigation';

import './styles.scss';

interface MenuMobileProps {
  activeSection: string;
}

const MenuMobile = ({ activeSection }: MenuMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [html, setHtml] = useState<HTMLElement | null>(null);
  const [menu, setMenu] = useState<HTMLElement | null>(null);
  const [scrollActive, setScrollActive] = useState(false);

  const handleClickOutside = (htmlEvent: MouseEvent) => {
    if (htmlEvent && menu?.contains(htmlEvent.target as Node)) {
      setIsOpen(false);
      html?.removeEventListener('click', handleClickOutside);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    scrollToIdOnClick(event, window.document);
    html?.removeEventListener('click', handleClickOutside);
    setIsOpen(false);
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    scrollToTop();
    setIsOpen(false);
  };

  const handleScrollY = () => {
    setScrollActive(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY);

    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={`menu-mobile-bg ${scrollActive ? 'scroll-active' : ''}`}>
      <a href="#main-content" className="menu-mobile-logo" onClick={handleLogoClick}>
        LCS
      </a>

      <button
        type="button"
        className={`menu-mobile-container ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls="menu"
      />

      <nav
        id="menu"
        className={`menu-mobile-content ${isOpen ? 'active' : ''}`}
        aria-label="Navegação mobile"
      >
        <ul className="menu-list-content">
          {NAV_SECTIONS.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                className={activeSection === id ? 'active' : ''}
                onClick={handleClick}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export { MenuMobile };
