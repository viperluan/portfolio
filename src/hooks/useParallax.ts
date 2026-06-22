import { useEffect, useRef } from 'react';

const useParallax = (speed = 0.25, minWidth = 992) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const widthQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

    const resetTransform = () => {
      element.style.transform = '';
    };

    const handleScroll = () => {
      if (!widthQuery.matches || motionQuery.matches) {
        resetTransform();
        return;
      }

      element.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
    };

    const handleWidthChange = () => {
      if (!widthQuery.matches) {
        resetTransform();
        return;
      }

      handleScroll();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    widthQuery.addEventListener('change', handleWidthChange);
    motionQuery.addEventListener('change', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      widthQuery.removeEventListener('change', handleWidthChange);
      motionQuery.removeEventListener('change', handleScroll);
      resetTransform();
    };
  }, [speed, minWidth]);

  return ref;
};

export { useParallax };
