import { Section } from '..';
import { Title } from '../../Title';
import './styles.scss';

const Action = () => {
  return (
    <Section>
      <div className="container-action">
        <div className="container-action-section">
          <div>
            <Title>web, mobile & desktop developer</Title>
            <p className="text-container">
              Hi I’m <span>Luan Conte Soares</span>. A UX/UI design enthusiast and versatile
              programmer, with a knowledge of low level languages, based in Brazil. I'm looking for
              new challenges, opportunities that can awaken my potential to grow together with the
              team.
            </p>
          </div>

          <button className="button">
            See my works
            <a className="arrow-container" href="#works">
              <img src="/arrow.webp" alt="Arrow" />
            </a>
          </button>
        </div>

        <div className="container-action-section">
          <img className="bg-container" src="/bg-concept.webp" alt="Binary Numbers" />
        </div>
      </div>
    </Section>
  );
};

export { Action };
