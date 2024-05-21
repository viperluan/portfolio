import { FormEvent, MutableRefObject } from 'react';

import emailjs from '@emailjs/browser';

interface ISendEmailResponse {
  text: string;
  status: 'Erro' | 'Sucesso';
}

const emailjs_variables = {
  service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  public_key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const sendEmail = async (
  event: FormEvent<HTMLFormElement>,
  form: MutableRefObject<HTMLFormElement>
): Promise<ISendEmailResponse> => {
  event.preventDefault();

  const { service_id, template_id, public_key } = emailjs_variables;

  try {
    await emailjs.sendForm(service_id, template_id, form.current, {
      publicKey: public_key,
    });

    form.current.reset();

    return {
      text: 'Sua mensagem foi enviada com sucesso! Iremos lhe retornar o mais breve possível! Obrigado pelo contato!',
      status: 'Sucesso',
    };
  } catch (error) {
    return {
      text: 'Ocorreu algum erro ao tentarmos enviar sua mensagem. Aguarde alguns instantes e tente novamente!',
      status: 'Erro',
    };
  }
};

export { sendEmail };
