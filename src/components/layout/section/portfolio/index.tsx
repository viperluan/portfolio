import { Title } from '~layout/title';

import { ProjectCard } from './project-card';

import './styles.scss';

interface IProjectCard {
  image: string;
  name: string;
  link: string;
  description: string;
}

const projects: IProjectCard[] = [
  {
    image: '/portfolio-images/econext.webp',
    name: 'Econext',
    link: 'www.econext.com.br',
    description: `Desenvolvido em Next.js, 
      o portal visa promover a inovação e sustentabilidade entre pessoas e organizações.
      Foi utilizado typescript e padrão funcional na aplicação. Tecnologias: Zustand, React Query,
      MUI, Axios etc.`,
  },
  {
    image: '/portfolio-images/reppos.webp',
    name: 'Reppos',
    link: 'www.reppos.com.br',
    description: `Desenvolvido em PHP, este ecommerce foi desenvolvido com um monolito e aprimorado
      com uma API em Laravel utilizando arquitetura hexagonal. Atuei em todas fases dessa loja, 
      antes e depois do lançamento.`,
  },
  {
    image: '/portfolio-images/luancs.webp',
    name: 'Luan Conte Soares',
    link: 'www.luancs.com.br',
    description: `Desenvolvido em React.js, utiliza-se da componentização em diversas áreas do site.
      Tecnologias: React.js, SCSS, Typescript etc.`,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-container">
      <div className="portfolio-content-container">
        <Title text="Portfólio" />

        <ul className="portfolio-project-list">
          {projects.map(({ image, name, link, description }) => {
            return (
              <li key={name}>
                <ProjectCard image={image} name={name} link={link} description={description} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { Portfolio };
