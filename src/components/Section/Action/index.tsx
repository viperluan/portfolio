import { Section } from '..';
import { Title } from '../../Title';
import './styles.scss';

const Action = () => {
  return (
    <Section>
      <div className="container-action">
        <div className="container-action-section">
          <Title>web, mobile & desktop developer</Title>

          <p className="text-container">
            Hi I’m <span>Luan Conte Soares</span>. A UX/UI design enthusiast and versatile
            programmer, with low level knowledge, based in Brazil.
          </p>

          <button className="button">
            See my works
            <a className="arrow-container" href="/">
              <img src="/arrow.svg" alt="Arrow" />
            </a>
          </button>
        </div>

        <div className="container-action-section">
          <img className="bg-container" src="/bg-binary.jpg" alt="Binary Numbers" />
        </div>
      </div>
    </Section>
  );
};

export { Action };
