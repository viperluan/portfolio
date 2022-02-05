import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.content}>
          <span>
            <Link href={'/'}>LCS</Link>
          </span>
          <nav>
            <ul>
              <li>
                <Link href={'/'}>Início</Link>
              </li>
              <li>
                <Link href={'/'}>Portfólio</Link>
              </li>
              <li>
                <Link href={'/'}>Contato</Link>
              </li>
              <li>
                <Link href={'/'}>Sobre</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
