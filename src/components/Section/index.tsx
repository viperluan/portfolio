import './styles.scss';

import { useInView } from 'react-intersection-observer';
import { PropsWithChildren } from 'react';

const Section = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  const animationClassName = inView ? 'inview' : '';

  return (
    <div ref={ref} className={`section ${animationClassName}`}>
      {children}
    </div>
  );
};

export { Section };
