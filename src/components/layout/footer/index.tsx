import { scrollToTop } from '~/components/utils/smoothScroll';

import './styles.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    scrollToTop();
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text-container">
          © LCS Soluções em Tecnologia LTDA - {currentYear}
        </p>

        <a
          href="#main-content"
          className="footer-back-to-top"
          onClick={handleBackToTop}
        >
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
};

export { Footer };
