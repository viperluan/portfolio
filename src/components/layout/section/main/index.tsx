import './styles.scss';

const Main = () => {
  return (
    <>
      <main>
        <div className="main-content-container">
          <p className="main-tag">Desenvolvedor Web & Mobile</p>

          <h1 className="main-title">
            Bem vindo! Meu nome é <span>Luan</span>.
          </h1>

          <p className="main-text">
            Crio soluções consistentes, inteligentes e seguras para impulsionar o futuro do seu
            empreendimento.
          </p>

          <div className="main-buttons-container">
            <a className="main-button-curriculum" href="">
              <button>Baixar currículo</button>
            </a>

            <a className="main-button-contact" href="">
              <button>Contato</button>
            </a>
          </div>

          <div className="scroll-down-container">
            <span className="first-scroll-down">{'>'}</span>
            <span className="second-scroll-down">{'>'}</span>
            <span className="third-scroll-down">{'>'}</span>
          </div>
        </div>
      </main>
    </>
  );
};

export { Main };
