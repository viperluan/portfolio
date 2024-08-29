import './styles.scss';

import { useRef } from 'react';
import { toast } from 'react-toastify';

import { sendEmail } from '~/components/utils/emailjs';
import { Title } from '~layout/title';

const Contact = () => {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleToastMessage = (status: 'Erro' | 'Sucesso', text: string) => {
    const type = status == 'Sucesso' ? 'success' : 'error';

    return toast(text, { type });
  };

  const preventSubmitEmptyInputs = (form: React.MutableRefObject<HTMLFormElement>) => {
    const elementsNotFilled = Array.from(form.current).filter((element) => {
      if (element.tagName != 'BUTTON') {
        return (element as HTMLInputElement)?.value == '';
      }
    });

    return elementsNotFilled;
  };

  const handleSendEmail = async (
    event: React.FormEvent<HTMLFormElement>,
    form: React.MutableRefObject<HTMLFormElement>
  ) => {
    event.preventDefault();

    const elementsNotFilled = preventSubmitEmptyInputs(form);

    if (elementsNotFilled.length > 0) {
      return;
    }

    const { status, text } = await sendEmail(event, form);

    handleToastMessage(status, text);
  };

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
          onSubmit={(event) => handleSendEmail(event, form)}
        >
          <div className="input-container">
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="Seu nome"
              maxLength={100}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="Seu email"
              maxLength={100}
              required
            />
          </div>
          <div className="text-area-container">
            <textarea
              name="message"
              id="text-area"
              placeholder="Sinta-se a vontade para tirar dúvidas, será um prazer ajudar para juntos encontrarmos uma solução que impulsione seu empreendimento"
              maxLength={800}
              required
            />
          </div>
          <button type="submit" className="send-message-button">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export { Contact };
