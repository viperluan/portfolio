import { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';
import './styles.scss';

const Title = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });

  const animationClassName = inView ? 'inview' : '';

  return (
    <h1 ref={ref} className={`title ${animationClassName}`}>
      {children}
    </h1>
  );
};

export { Title };
