import './styles.scss';

import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { sendEmail } from '~/components/utils/emailjs';
import { Title } from '~layout/title';

const SOCIAL_LINKS = [
  {
    label: 'WhatsApp',
    value: '+55 47 98844-7503',
    href: 'https://wa.me/5547988447503',
  },
  {
    label: 'Email',
    value: 'viperluan@gmail.com',
    href: 'mailto:viperluan@gmail.com',
  },
  {
    label: 'Github',
    value: '@viperluan',
    href: 'https://www.github.com/viperluan',
  },
  {
    label: 'LinkedIn',
    value: 'Luan Conte Soares',
    href: 'https://www.linkedin.com/in/luan-conte-soares',
  },
];

const Contact = () => {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      handleToastMessage('Erro', 'Preencha todos os campos antes de enviar sua mensagem.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { status, text } = await sendEmail(event, form);
      handleToastMessage(status, text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-content-container">
        <Title text="Contato" />

        <div className="social-media-container">
          {SOCIAL_LINKS.map(({ label, value, href }) => (
            <a
              key={label}
              className="contact-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <span>{label}: </span>
                {value}
              </p>
            </a>
          ))}
        </div>

        <form
          ref={form}
          className="contact-user-container"
          onSubmit={(event) => handleSendEmail(event, form)}
        >
          <div className="input-field">
            <label htmlFor="name">Seu nome</label>
            <div className="input-container">
              <input
                type="text"
                name="from_name"
                id="name"
                placeholder="Como devemos te chamar?"
                maxLength={100}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="email">Seu email</label>
            <div className="input-container">
              <input
                type="email"
                name="from_email"
                id="email"
                placeholder="seu@email.com"
                maxLength={100}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="text-area">Sua mensagem</label>
            <div className="text-area-container">
              <textarea
                name="message"
                id="text-area"
                placeholder="Sinta-se à vontade para tirar dúvidas. Será um prazer ajudar a encontrarmos uma solução para o seu empreendimento."
                maxLength={800}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <button type="submit" className="send-message-button" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
};

export { Contact };
