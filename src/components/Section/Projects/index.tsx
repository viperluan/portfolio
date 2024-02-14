import { Section } from '..';
import { Title } from '../../Title';
import { Project } from './Project';
import './styles.scss';

const projects = [
  {
    name: 'Reppos - Marketplace',
    link: 'https://reppos.com.br',
    image: '/reppos.png',
    stylesClassName: 'reppos-project',
  },
  {
    name: 'Econext - Sustainability',
    link: 'https://www.econext.com.br/',
    image: '/econext.png',
    stylesClassName: 'econext-project',
  },
];

const Projects = () => {
  return (
    <Section>
      <div id="works" className="container-projects">
        <div className="container-title">
          <Title>some projects that I contributed</Title>
        </div>

        <div className="container-projects-section">
          {projects.map(({ name, link, image, stylesClassName }) => {
            return (
              <Project name={name} link={link} image={image} stylesClassName={stylesClassName} />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export { Projects };
