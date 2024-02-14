import { ButtonNavigator } from './ButtonNavigator';
import './styles.scss';

import { useTranslation } from 'react-i18next';

const Navigator = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const actualLanguage = i18n.language;

    if (actualLanguage == 'en_US') {
      i18n.changeLanguage('pt_BR');
      return;
    }

    i18n.changeLanguage('en_US');
  };

  const buttons = [
    t('navigation_buttons.about'),
    t('navigation_buttons.projects'),
    t('navigation_buttons.contact'),
  ];

  return (
    <nav className="nav-container">
      {buttons.map((button) => {
        return <ButtonNavigator key={button} name={button} />;
      })}
      <img onClick={changeLanguage} src="images/translation.webp" alt="" />
    </nav>
  );
};

export { Navigator };
