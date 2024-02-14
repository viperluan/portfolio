import { Section } from '..';
import { Title } from '../../Title';
import './styles.scss';

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <div id="about" className="container-about">
        <Title>{t('about_section.title')}</Title>

        <p className="text-container">{t('about_section.text')}</p>
      </div>
    </Section>
  );
};

export { About };
