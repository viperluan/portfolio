import { PropsWithChildren } from 'react';

import './styles.scss';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container">{children}</div>;
};

export { Container };
