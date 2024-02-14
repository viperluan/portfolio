import './styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media-assingment-container">
        <p className="text-assingment-container">
          Assignment links of icons and images used in this site:
        </p>
        <a
          className="media-assingment"
          target="_blank"
          href="https://www.flaticon.com/free-icons/whatsapp"
          title="whatsapp icons"
        >
          Whatsapp icons created by riajulislam - Flaticon
        </a>
        <a
          className="media-assingment"
          target="_blank"
          href="https://www.flaticon.com/free-icons/linkedin"
          title="linkedin icons"
        >
          Linkedin icons created by riajulislam - Flaticon
        </a>
        <a
          className="media-assingment"
          target="_blank"
          href="https://www.flaticon.com/free-icons/github"
          title="github icons"
        >
          Github icons created by riajulislam - Flaticon
        </a>
        <a
          className="media-assingment"
          target="_blank"
          href="https://www.flaticon.com/free-icons/email"
          title="email icons"
        >
          Email icons created by Uniconlabs - Flaticon
        </a>

        <a
          className="media-assingment"
          target="_blank"
          href="https://br.freepik.com/fotos-gratis/sistema-html-para-o-conceito-de-site_41740264.htm#query=plano%20de%20fundo%20desenvolvedor&position=17&from_view=search&track=ais&uuid=60073cb7-4770-4f6e-8aca-b3be90ff2257"
        >
          Image by Freepik
        </a>
        <a
          className="media-assingment"
          target="_blank"
          href="https://www.flaticon.com/free-icons/translation"
          title="translation icons"
        >
          Translation icons created by Freepik - Flaticon
        </a>
      </div>

      <div className="info-lcs-container">
        <p className="text-container">© LCS Soluções em Tecnologia LTDA - 2022</p>
        <img src="logo.webp" alt="Logo Image" />
      </div>
    </div>
  );
};

export { Footer };
