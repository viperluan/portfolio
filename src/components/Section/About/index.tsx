import { Section } from '..';
import { Title } from '../../Title';
import './styles.scss';

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <div id="about" className="container-about">
        <div className="title-and-text">
          <Title>{t('about_section.title')}</Title>

          <div className="text-container">
            <p>{t('about_section.text')}</p>
          </div>
        </div>

        <div className="image-container">
          <img src="/images/about.webp" alt="" />
        </div>
      </div>
    </Section>
  );
};

export { About };
