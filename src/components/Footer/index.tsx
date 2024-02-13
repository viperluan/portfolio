import './styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <p className="text-container">© LCS Soluções em Tecnologia LTDA - 2022</p>

      <div className="social-media-assingment-container">
        <a
          className="media-assingment"
          href="https://www.flaticon.com/free-icons/whatsapp"
          title="whatsapp icons"
        >
          Whatsapp icons created by riajulislam - Flaticon
        </a>
        <a
          className="media-assingment"
          href="https://www.flaticon.com/free-icons/linkedin"
          title="linkedin icons"
        >
          Linkedin icons created by riajulislam - Flaticon
        </a>
        <a
          className="media-assingment"
          href="https://www.flaticon.com/free-icons/github"
          title="github icons"
        >
          Github icons created by riajulislam - Flaticon
        </a>
        <a
          className="media-assingment"
          href="https://www.flaticon.com/free-icons/email"
          title="email icons"
        >
          Email icons created by Uniconlabs - Flaticon
        </a>
      </div>
    </div>
  );
};

export { Footer };
