import { ReactNode, useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  immediate = false,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || immediate) {
      element.classList.add('scroll-reveal-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('scroll-reveal-visible');
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export { ScrollReveal };
