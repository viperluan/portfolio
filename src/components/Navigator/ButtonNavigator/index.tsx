import "./styles.scss";

interface ButtonNavigatorProps {
  name: string;
}

const ButtonNavigator = ({ name }: ButtonNavigatorProps) => {
  return <button className="button-navigator">{name}</button>;
};

export { ButtonNavigator };
