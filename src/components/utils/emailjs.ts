import { FormEvent, MutableRefObject } from 'react';

import emailjs from '@emailjs/browser';

const emailjs_variables = {
  service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  public_key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const sendEmail = (event: FormEvent<HTMLFormElement>, form: MutableRefObject<HTMLFormElement>) => {
  event.preventDefault();

  const { service_id, template_id, public_key } = emailjs_variables;

  emailjs
    .sendForm(service_id, template_id, form.current, {
      publicKey: public_key,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        form.current.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
};

export { sendEmail };
