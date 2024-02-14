import { Section } from '..';
import { Title } from '../../Title';
import './styles.scss';

import { useTranslation } from 'react-i18next';

const Action = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="container-action">
        <div className="container-action-section">
          <div>
            <Title>{t('action_section.title')}</Title>
            <p className="text-container">
              {t('action_section.hi')} <span>{t('action_section.name')}</span>.
              {t('action_section.text')}
            </p>
          </div>

          <a className="arrow-container" href="#works">
            {t('action_section.button')}
            <img src="/arrow.webp" alt="Arrow" />
          </a>
        </div>

        <div className="container-action-section">
          <img className="bg-container" src="/bg-concept.webp" alt="Binary Numbers" />
        </div>
      </div>
    </Section>
  );
};

export { Action };
