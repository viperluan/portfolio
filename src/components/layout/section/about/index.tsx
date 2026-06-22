import './styles.scss';

import { Title } from '~layout/title';

const HIGHLIGHTS = [
  'Mais de 10 anos de experiência técnica antes da transição para desenvolvimento',
  'Atuação fullstack com foco em qualidade, testes e boas práticas',
  'Background em eletrônica e baixo nível, acelerando a curva de aprendizado',
  'Interesse em projetos com impacto social e compartilhamento de conhecimento',
];

const SKILLS = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PHP',
  'Laravel',
  'Vue.js',
  'Docker',
  'MySQL',
  'Git',
  'SCSS',
  'REST APIs',
];

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content-and-title-container">
        <Title text="Sobre" />

        <div className="about-content-container">
          <h3>Técnico, autodidata e minimalista</h3>

          <div className="about-blocks">
            <div className="about-block">
              <h4>Minha trajetória</h4>
              <p>
                Desde jovem tive facilidade com informática. Iniciei em 2005 com cursos técnicos na
                área, passei por manutenção de computadores e me formei como técnico em eletrônica
                industrial, atuando por 10 anos na manutenção de equipamentos eletrônicos.
              </p>
            </div>

            <div className="about-block">
              <h4>Transição para programação</h4>
              <p>
                Em 2019, após anos tentando estudar programação, entrei no bootcamp do IGTI e os
                conceitos finalmente fizeram sentido. A partir daí, dediquei-me a desenvolvimento web
                e mobile com consistência e foco em evolução contínua.
              </p>
            </div>

            <div className="about-block">
              <h4>O que me move hoje</h4>
              <p>
                Busco criar soluções consistentes e seguras, com apreço por projetos que geram impacto
                positivo. Tenho metas de apoiar ONGs, compartilhar conhecimento e contribuir para uma
                sociedade mais colaborativa através da tecnologia.
              </p>
            </div>
          </div>

          <ul className="about-highlights">
            {HIGHLIGHTS.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="about-skills">
            <h4>Principais tecnologias</h4>
            <ul className="about-skills-list">
              {SKILLS.map((skill) => (
                <li key={skill} className="about-skill-chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
