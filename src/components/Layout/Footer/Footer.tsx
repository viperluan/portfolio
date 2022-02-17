import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.content}>
          <div className={styles.about}>
            <h3>Sobre mim</h3>
            <p>
              Estudando programação desde novembro de 2019, meus esforços estão focados em aprender
              as tecnologias mais utilizadas e como aplicar meus conhecimentos para resolver as
              necessidades de cada objetivo.
            </p>
            <p>
              Ainda pretendo contribuir em muitas questões sociais, desenvolvendo soluções sem fins
              lucrativos e que possam gerar mais oportunidades para os mais vulneráveis na nossa
              sociedade.
            </p>
          </div>
          <div className={styles.linksAndSocialContainer}>
            <div className={styles.links}>
              <h3>Links úteis</h3>
              <ul>
                <li>Início</li>
                <li>Contato</li>
                <li>Portfólio</li>
                <li>Sobre</li>
              </ul>
            </div>
            <div className={styles.social}>
              <h3>Redes sociais</h3>
              <ul>
                <li>Whatsapp</li>
                <li>Linkedin</li>
                <li>Discord</li>
              </ul>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
