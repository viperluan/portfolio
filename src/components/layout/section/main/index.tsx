import { FIRST_SECTION_AFTER_HERO } from '~/constants/navigation';
import { ScrollReveal } from '~/components/utils/ScrollReveal';
import { scrollToIdOnClick } from '~/components/utils/smoothScroll';
import { useParallax } from '~/hooks/useParallax';

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
  const parallaxRef = useParallax(0.08, 992);

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    scrollToIdOnClick(event, window.document);
  };

  return (
    <main id="main-content">
      <div ref={parallaxRef} className="main-parallax-bg" aria-hidden="true" />

      <div className="main-content-container">
        <ScrollReveal delay={0} immediate>
          <p className="main-tag">Desenvolvedor Fullstack · React, Node & PHP</p>
        </ScrollReveal>

        <ScrollReveal delay={100} immediate>
          <h1 className="main-title">
            Bem-vindo! Meu nome é <span className="main-title-highlight">Luan</span>.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200} immediate>
          <p className="main-text">
            Crio soluções consistentes, inteligentes e seguras para impulsionar o futuro do seu
            empreendimento.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300} immediate>
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
        </ScrollReveal>

        <ScrollReveal delay={400} immediate>
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
        </ScrollReveal>

        <ScrollReveal delay={500} immediate>
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
        </ScrollReveal>
      </div>
    </main>
  );
};

export { Main };
