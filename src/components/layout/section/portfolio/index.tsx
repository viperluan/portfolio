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
    image: '',
    name: 'Econext',
    link: 'www.econext.com.br',
    description: `Desenvolvido em Next.js, 
      o portal visa promover a inovação e sustentabilidade entre pessoas e organizações.
      Foi utilizado typescript e padrão funcional na aplicação. Tecnologias: Zustand, React Query,
      MUI, Axios etc.`,
  },
  {
    image: '',
    name: 'Luan Conte Soares',
    link: 'www.luancs.com.br',
    description: `Desenvolvido em React.js, utiliza-se da componentização em diversas áreas do site.
      Tecnologias: React.js, SCSS, Typescript etc.`,
  },
  {
    image: '',
    name: 'Em breve',
    link: '',
    description: ``,
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <Title text="Portfólio" />

      <ul className="portfolio-project-list">
        {projects.map(({ image, name, link, description }) => {
          return (
            <li>
              <ProjectCard image={image} name={name} link={link} description={description} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export { Portfolio };
