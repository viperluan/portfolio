import { useEffect, useState } from 'react';

import ActiveLink from '@components/Utils/ActiveLink';

import styles from './MenuDrawer.module.scss';

interface IMenuDrawerProps {
  isActive: boolean;
  handleRequestClose: () => void;
}

const MenuDrawer = ({ isActive, handleRequestClose }: IMenuDrawerProps) => {
  const [html, setHtml] = useState<HTMLElement | null>(null);
  const [menu, setMenu] = useState<HTMLElement | null>(null);

  const handleClickOutside = (htmlEvent: MouseEvent) => {
    if (htmlEvent) {
      if (!menu?.contains(htmlEvent.target as Node)) {
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

    if (!isActive && html) {
      html.style.overflow = 'visible';
    }

    if (isActive && html) {
      html.addEventListener('click', handleClickOutside);
      html.style.overflow = 'hidden';
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <div id="menu" className={`${styles.container} ${isActive && styles.active}`}>
      <nav>
        <ul>
          <li>
            <button type="button" onClick={handleClick}>
              <ActiveLink href="/" activeClassName={styles.activeLink}>
                <a>Início</a>
              </ActiveLink>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleClick}>
              <ActiveLink href="/portfolio" activeClassName={styles.activeLink}>
                <a>Portfólio</a>
              </ActiveLink>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleClick}>
              <ActiveLink href="/contact" activeClassName={styles.activeLink}>
                <a>Contato</a>
              </ActiveLink>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleClick}>
              <ActiveLink href="/about" activeClassName={styles.activeLink}>
                <a>Sobre</a>
              </ActiveLink>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuDrawer;
