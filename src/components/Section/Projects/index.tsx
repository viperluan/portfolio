import { Section } from '..';
import { Title } from '../../Title';
import { Project } from './Project';
import './styles.scss';

const projects = [
  {
    name: 'Reppos - Ecommerce',
    link: 'https://reppos.com.br',
    image: '/bg-binary.jpg',
  },
  {
    name: 'Test',
    link: 'test.com.br',
    image: '/bg-binary.jpg',
  },
  {
    name: 'Test',
    link: 'test.com.br',
    image: '/bg-binary.jpg',
  },
  {
    name: 'Test',
    link: 'test.com.br',
    image: '/bg-binary.jpg',
  },
  {
    name: 'Test',
    link: 'test.com.br',
    image: '/bg-binary.jpg',
  },
];

const Projects = () => {
  return (
    <Section>
      <div className="container-projects">
        <div className="container-title">
          <Title>some projects that I contributed</Title>
        </div>

        <div className="container-projects-section">
          {projects.map(({ name, link, image }) => {
            return <Project name={name} link={link} image={image} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export { Projects };
