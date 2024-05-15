import './styles.scss';

import { Title } from '~layout/title';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-content-container">
        <Title text="Contato" />

        <div className="social-media-container">
          <a className="contact-link" href="https://wa.me/5547988447503" target="_blank">
            <p>
              <span>WhatsApp: </span>
              +55 47988447503
            </p>
          </a>

          <a className="contact-link" href="mailto:viperluan@gmail.com" target="_blank">
            <p>
              <span>Email: </span>
              viperluan@gmail.com
            </p>
          </a>

          <a className="contact-link" href="https://www.github.com/viperluan" target="_blank">
            <p>
              <span>Github: </span>
              https://www.github.com/viperluan
            </p>
          </a>

          <a
            className="contact-link"
            href="https://www.linkedin.com/in/luan-conte-soares"
            target="_blank"
          >
            <p>
              <span>LinkedIn: </span>
              https://www.linkedin.com/in/luan-conte-soares
            </p>
          </a>
        </div>

        <div className="contact-user-container">
          <div className="input-container">
            <input type="text" name="name" id="name" placeholder="Seu nome" />
          </div>
          <div className="input-container">
            <input type="email" name="email" id="email" placeholder="Seu email" />
          </div>
          <div className="text-area-container">
            <textarea
              name="text-area"
              id="text-area"
              placeholder="Sinta-se a vontade para tirar dúvidas, será um prazer ajudar para juntos encontrarmos uma solução que impulsione seu empreendimento"
              maxLength={800}
            />
          </div>
          <button className="send-message-button">Enviar mensagem</button>
        </div>
      </div>
    </section>
  );
};

export { Contact };
