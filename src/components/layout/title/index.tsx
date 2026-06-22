import './styles.scss';

import { ScrollReveal } from '~/components/utils/ScrollReveal';

interface ITitleProps {
  text: string;
}

const Title = ({ text }: ITitleProps) => {
  return (
    <ScrollReveal>
      <h2 className="title-component">{text}</h2>
    </ScrollReveal>
  );
};

export { Title };
