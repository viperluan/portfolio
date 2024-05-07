import './styles.scss';

const Main = () => {
  return (
    <>
      <main>
        <p className="main-tag">Desenvolvedor Web & Mobile</p>

        <h1 className="main-title">
          Bem vindo! Meu nome é <span>Luan</span>.
        </h1>

        <p className="main-text">
          Crio soluções consistentes, inteligentes e seguras para impulsionar o futuro do seu
          empreendimento.
        </p>

        <div className="main-buttons-container">
          <button className="main-button-curriculum">
            <a href="">Baixar currículo</a>
          </button>

          <button className="main-button-contact">
            <a href="">Contato</a>
          </button>
        </div>

        <span className="main-scroll-down">{'>>>'}</span>
      </main>
    </>
  );
};

export { Main };
