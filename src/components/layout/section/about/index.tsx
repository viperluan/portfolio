import './styles.scss';

import { Title } from '~layout/title';

const About = () => {
  return (
    <section className="about-container">
      <Title text="Sobre" />

      <div className="about-content-container">
        <h1>Técnico, autotdidata e minimalista</h1>

        <p>
          Costumo contar minha história, revelando que desde muito jovem tive facilidade para
          aprender assuntos relacionados à informática. Iniciei minha trajetória em 2005, com cursos
          técnicos e profissionalizantes na área da informática. Após alguns anos consertando e
          formatando computadores, finalizei uma formação como técnico em eletrônica industrial,
          onde atuei por 10 anos na manutenção de diversos equipamentos eletrônicos.
        </p>

        <p>
          Já em 2019, após alguns anos tentando estudar programação e tudo parecer que não fazia
          sentido, entrei em um bootcamp realizado pelo Instituto de Gestão e Tecnologia da
          Informação (IGTI), e finalmente, entendi alguns conceitos necessários e minha dedicação
          voltou-se para programação web e mobile.
        </p>

        <p>
          Tenho diversos conhecimentos em linguagens de baixo nível e isso foi de extrema
          importância para minha evolução rápida e meu sucesso nesta área. Também tenho apreço pelas
          atividades que visam proporcionar o bem estar da nossa sociedade. Nos próximos anos, tenho
          metas para cumprir, desenvolvendo soluções para instituições sem fins lucrativos e ONGs
          que auxiliam no resgate e cuidado de diversos animais, compartilhar conhecimento para que
          mais pessoas possam mudar suas vidas através da programação e propagar a ideia de que uma
          sociedade unida sempre tende a prosperar.
        </p>
      </div>
    </section>
  );
};

export { About };
