import { MutableRefObject, useRef } from 'react';
import './styles.scss';

import { sendEmail } from '~/components/utils/emailjs';
import { Title } from '~layout/title';

const Contact = () => {
  const form = useRef() as MutableRefObject<HTMLFormElement>;

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

        <form
          ref={form}
          className="contact-user-container"
          onSubmit={(event) => sendEmail(event, form)}
        >
          <div className="input-container">
            <input type="text" name="from_name" id="name" placeholder="Seu nome" maxLength={100} />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="Seu email"
              maxLength={100}
            />
          </div>
          <div className="text-area-container">
            <textarea
              name="message"
              id="text-area"
              placeholder="Sinta-se a vontade para tirar dúvidas, será um prazer ajudar para juntos encontrarmos uma solução que impulsione seu empreendimento"
              maxLength={800}
            />
          </div>
          <button className="send-message-button">Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
};

export { Contact };
