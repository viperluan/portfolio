import Link from 'next/link';

import { MouseEvent, useState } from 'react';

import ActiveLink from 'src/components/Utils/ActiveLink';

import MenuDrawer from '../MenuDrawer/MenuDrawer';

import styles from './Header.module.scss';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleClickMenu = (mouseEvent: MouseEvent<HTMLButtonElement>) => {
    mouseEvent.preventDefault();
    setIsDrawerOpen(true);
  };

  const handleRequestClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header className={styles.container}>
        <div className={styles.content}>
          <span>
            <Link href="/">LCS</Link>
          </span>

          <nav>
            <ul>
              <li>
                <ActiveLink href="/" activeClassName={styles.activeLink}>
                  <a>Início</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/portfolio" activeClassName={styles.activeLink}>
                  <a>Portfólio</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/contact" activeClassName={styles.activeLink}>
                  <a>Contato</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/about" activeClassName={styles.activeLink}>
                  <a>Sobre</a>
                </ActiveLink>
              </li>
            </ul>
          </nav>

          <button type="button" onClick={handleClickMenu}>
            <span className={`${isDrawerOpen && styles.active}`} />
          </button>
        </div>
      </header>

      <MenuDrawer isActive={isDrawerOpen} handleRequestClose={handleRequestClose} />
    </>
  );
};

export default Header;
