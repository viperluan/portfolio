import './styles.scss';

interface ITitleProps {
  text: string;
}

const Title = ({ text }: ITitleProps) => {
  return <h2 className="title-component">{text}</h2>;
};

export { Title };
