import { ScrollReveal } from '~/components/utils/ScrollReveal';
import { scrollToIdOnClick } from '~/components/utils/smoothScroll';
import { FIRST_SECTION_AFTER_HERO } from '~/constants/navigation';

import {
  ChevronDownIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from './social-icons';
import './styles.scss';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/viperluan',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luan-conte-soares',
    Icon: LinkedInIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5547988447503',
    Icon: WhatsAppIcon,
  },
] as const;

const Main = () => {
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    scrollToIdOnClick(event, window.document);
  };

  return (
    <main id="main-content">
      <div className="main-hero-bg" aria-hidden="true" />

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
          <div className="main-buttons-container">
            <a className="main-button-portfolio" href="#portfolio" onClick={handleAnchorClick}>
              Ver portfólio
            </a>

            <a className="main-button-contact" href="#contact" onClick={handleAnchorClick}>
              Contato
            </a>

            <a className="main-button-curriculum" href="/curriculum/luan-conte-soares.pdf" download>
              <DownloadIcon className="main-button-curriculum-icon" />
              Baixar currículo
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} immediate>
          <div className="main-social-container">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                className="main-social-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="main-social-icon" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500} immediate>
          <a
            href={FIRST_SECTION_AFTER_HERO}
            className="scroll-down-container"
            onClick={handleAnchorClick}
            aria-label="Ir para a seção Sobre"
          >
            <ChevronDownIcon className="scroll-down-chevron" />
          </a>
        </ScrollReveal>
      </div>
    </main>
  );
};

export { Main };
