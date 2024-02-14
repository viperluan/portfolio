import './styles.scss';
import { Section } from '..';
import { Title } from '../../Title';

const Contacts = () => {
  return (
    <Section>
      <Title>can I help you with something?</Title>
      <div id="contact" className="contacts-container">
        <img className="help-image" src="/help-image.webp" alt="IT Support Cartoon" />

        <div className="text-and-social-media-container">
          <p className="text-container">
            Feel free to get in touch, if you want to know more about the projects, what was my
            participation or even just to say hi. These are some ways you can contact me:
          </p>

          <div className="social-media-container">
            <a href="https://wa.me/5547988447503" target="_blank">
              <img src="whatsapp.webp" alt="WhatsApp Image" />
            </a>
            <a href="https://github.com/viperluan" target="_blank">
              <img src="github.webp" alt="Github Image" />
            </a>
            <a href="https://www.linkedin.com/in/luan-conte-soares" target="_blank">
              <img src="linkedin.webp" alt="Linked In Image" />
            </a>
            <a href="mailto:viperluan@gmail.com" target="_blank">
              <img src="mail.webp" alt="Mail Image" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Contacts };
