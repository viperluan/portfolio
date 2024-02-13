import './styles.scss';
import { Section } from '..';
import { Title } from '../../Title';

const Contacts = () => {
  return (
    <Section>
      <Title>can I help you with something?</Title>
      <div className="contacts-container">
        <img className="help-image" src="/help-image.png" alt="IT Support Cartoon" />

        <div className="text-and-social-media-container">
          <p className="text-container">
            Feel free to get in touch, if you want to know more about the projects, what was my
            participation or even just to say hi. These are some ways you can contact me:
          </p>

          <div className="social-media-container">
            <a href="">
              <img src="whatsapp.png" alt="WhatsApp Image" />
            </a>
            <a href="">
              <img src="github.png" alt="Github Image" />
            </a>
            <a href="">
              <img src="linkedin.png" alt="Linked In Image" />
            </a>
            <a href="">
              <img src="mail.png" alt="Mail Image" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Contacts };
