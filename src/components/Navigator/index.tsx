import { ButtonNavigator } from './ButtonNavigator';
import './styles.scss';

import { useTranslation } from 'react-i18next';

const Navigator = () => {
  const { t } = useTranslation();

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
    </nav>
  );
};

export { Navigator };
