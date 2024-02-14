import { useEffect, useState } from 'react';
import './styles.scss';

import { useTranslation } from 'react-i18next';

interface MenuMobileProps {
  isOpen: boolean;
  handleRequestClose: () => void;
}

const MenuMobile = ({ isOpen, handleRequestClose }: MenuMobileProps) => {
  const { t } = useTranslation();

  const [html, setHtml] = useState<HTMLElement | null>(null);
  const [menu, setMenu] = useState<HTMLElement | null>(null);

  const handleClickOutside = (htmlEvent: MouseEvent) => {
    if (htmlEvent) {
      if (menu?.contains(htmlEvent.target as Node)) {
        handleRequestClose();
        html?.removeEventListener('click', handleClickOutside);
      }
    }
  };

  const handleClick = () => {
    html?.removeEventListener('click', handleClickOutside);
    handleRequestClose();
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
    <div id="menu" className={`menu-mobile-container ${isOpen ? 'active' : 'inactive'}`}>
      <nav className="nav-container">
        <ul>
          <li onClick={handleClick}>
            <a href="#about">{t('navigation_buttons.about')}</a>
          </li>
          <li onClick={handleClick}>
            <a href="#works">{t('navigation_buttons.projects')}</a>
          </li>
          <li onClick={handleClick}>
            <a href="#contact">{t('navigation_buttons.contact')}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { MenuMobile };
