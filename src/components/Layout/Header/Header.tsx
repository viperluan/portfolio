import ActiveLink from 'src/components/Utils/ActiveLink';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.content}>
          <span>
            <ActiveLink href="/" activeClassName={styles.activeLink}>
              <a>LCS</a>
            </ActiveLink>
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
        </div>
      </header>
    </>
  );
};

export default Header;
