import { ButtonNavigator } from './ButtonNavigator';
import './styles.scss';

const buttons = ['About', 'Works', 'Contact'];

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
