import { Title } from '~layout/title';
import { ScrollReveal } from '~/components/utils/ScrollReveal';

import { ProjectCard } from './project-card';

import './styles.scss';

interface IProjectCard {
  image: string;
  name: string;
  link: string;
  description: string;
  tags: string[];
  imageWidth: number;
  imageHeight: number;
  githubLink?: string;
}

const projects: IProjectCard[] = [
  {
    image: '/portfolio-images/econext.webp',
    name: 'Econext',
    link: 'www.econext.com.br',
    imageWidth: 1902,
    imageHeight: 938,
    tags: ['Next.js', 'TypeScript', 'Zustand', 'React Query', 'MUI'],
    description:
      'Portal que promove inovação e sustentabilidade entre pessoas e organizações. Desenvolvido com padrão funcional, foco em performance e experiência consistente entre áreas do produto.',
  },
  {
    image: '/portfolio-images/reppos.webp',
    name: 'Reppos',
    link: 'www.reppos.com.br',
    imageWidth: 1912,
    imageHeight: 938,
    tags: ['PHP', 'Laravel', 'E-commerce', 'API Hexagonal'],
    description:
      'E-commerce desenvolvido com monolito PHP e API em Laravel com arquitetura hexagonal. Atuação em todas as fases do projeto, antes e depois do lançamento.',
  },
  {
    image: '/portfolio-images/luancs.webp',
    name: 'Luan Conte Soares',
    link: 'www.luancs.com.br',
    imageWidth: 1912,
    imageHeight: 938,
    tags: ['React', 'TypeScript', 'SCSS', 'Vite'],
    description:
      'Site pessoal com componentização em diversas áreas, tipagem com TypeScript e estilização modular em SCSS.',
    githubLink: 'https://www.github.com/viperluan/portfolio',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-container">
      <div className="portfolio-content-container">
        <Title text="Portfólio" />

        <ul className="portfolio-project-list">
          {projects.map(
            ({ image, name, link, description, tags, imageWidth, imageHeight, githubLink }, index) => {
              return (
                <li key={name}>
                  <ScrollReveal delay={index * 120}>
                    <ProjectCard
                      image={image}
                      name={name}
                      link={link}
                      description={description}
                      tags={tags}
                      imageWidth={imageWidth}
                      imageHeight={imageHeight}
                      githubLink={githubLink}
                    />
                  </ScrollReveal>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export { Portfolio };
