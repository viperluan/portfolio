import './styles.scss';

interface ButtonNavigatorProps {
  name: string;
}

const ButtonNavigator = ({ name }: ButtonNavigatorProps) => {
  return (
    <a href={`#${name}`} className="button-navigator">
      {name}
    </a>
  );
};

export { ButtonNavigator };
