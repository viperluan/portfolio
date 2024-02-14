import { ButtonNavigator } from './ButtonNavigator';
import './styles.scss';

const buttons = ['about', 'works', 'contact'];

const Navigator = () => {
  return (
    <nav className="nav-container">
      {buttons.map((button) => {
        return <ButtonNavigator name={button} />;
      })}
    </nav>
  );
};

export { Navigator };
