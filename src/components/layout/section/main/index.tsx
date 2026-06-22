import { FIRST_SECTION_AFTER_HERO } from '~/constants/navigation';
import { scrollToIdOnClick } from '~/components/utils/smoothScroll';

import './styles.scss';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/viperluan',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luan-conte-soares',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5547988447503',
  },
];

const Main = () => {
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    scrollToIdOnClick(event, window.document);
  };

  return (
    <main id="main-content">
      <div className="main-content-container">
        <p className="main-tag">Desenvolvedor Fullstack · React, Node & PHP</p>

        <h1 className="main-title">
          Bem-vindo! Meu nome é <span>Luan</span>.
        </h1>

        <p className="main-text">
          Crio soluções consistentes, inteligentes e seguras para impulsionar o futuro do seu
          empreendimento.
        </p>

        <div className="main-social-container">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              className="main-social-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="main-buttons-container">
          <a className="main-button-portfolio" href="#portfolio" onClick={handleAnchorClick}>
            Ver portfólio
          </a>

          <a className="main-button-curriculum" href="/curriculum/luan-conte-soares.pdf" download>
            Baixar currículo
          </a>

          <a className="main-button-contact" href="#contact" onClick={handleAnchorClick}>
            Contato
          </a>
        </div>

        <a
          href={FIRST_SECTION_AFTER_HERO}
          className="scroll-down-container"
          onClick={handleAnchorClick}
          aria-label="Ir para a seção Sobre"
        >
          <span className="first-scroll-down">{'>'}</span>
          <span className="second-scroll-down">{'>'}</span>
          <span className="third-scroll-down">{'>'}</span>
        </a>
      </div>
    </main>
  );
};

export { Main };
