import './styles.scss';
import { Section } from '..';
import { Title } from '../../Title';

import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Title>{t('contact_section.title')}</Title>
      <div id="contact" className="contacts-container">
        <div className="image-container">
          <img className="help-image" src="images/help-image.webp" alt="IT Support Cartoon" />
        </div>

        <div className="text-and-social-media-container">
          <p className="text-container">{t('contact_section.text')}</p>

          <div className="social-media-container">
            <a href="https://wa.me/5547988447503" target="_blank">
              <img src="images/whatsapp.webp" alt="WhatsApp Image" />
            </a>
            <a href="https://github.com/viperluan" target="_blank">
              <img src="images/github.webp" alt="Github Image" />
            </a>
            <a href="https://www.linkedin.com/in/luan-conte-soares" target="_blank">
              <img src="images/linkedin.webp" alt="Linked In Image" />
            </a>
            <a href="mailto:viperluan@gmail.com" target="_blank">
              <img src="images/mail.webp" alt="Mail Image" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Contacts };
