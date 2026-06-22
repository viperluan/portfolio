import './styles.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p className="footer-text-container">
        © LCS Soluções em Tecnologia LTDA - {currentYear}
      </p>
    </footer>
  );
};

export { Footer };
