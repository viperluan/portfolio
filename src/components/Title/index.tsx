import { PropsWithChildren } from 'react';
import './styles.scss';

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className="title">{children}</h1>;
};

export { Title };
