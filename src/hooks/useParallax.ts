import { useEffect, useRef } from 'react';

const useParallax = (speed = 0.32, minWidth = 768) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const scope = element.closest('main') as HTMLElement | null;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const widthQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

    let maxOffset = 0;

    const syncLayer = () => {
      if (!scope || !widthQuery.matches) {
        maxOffset = 0;
        return;
      }

      maxOffset = Math.round(scope.clientHeight * speed);
    };

    const getScrollOffset = () => {
      if (!scope) {
        return 0;
      }

      const scopeTop = window.scrollY + scope.getBoundingClientRect().top;
      const scrolledInScope = Math.max(0, window.scrollY - scopeTop);
      const cappedScroll = Math.min(scrolledInScope, scope.offsetHeight);

      return Math.min(Math.round(cappedScroll * speed), maxOffset);
    };

    const resetParallax = () => {
      element.style.backgroundPosition = '';
    };

    const handleScroll = () => {
      if (!widthQuery.matches || motionQuery.matches) {
        resetParallax();
        return;
      }

      const offset = getScrollOffset();
      element.style.backgroundPosition = offset > 0 ? `center ${offset}px` : 'center top';
    };

    const handleLayoutChange = () => {
      if (!widthQuery.matches) {
        resetParallax();
        maxOffset = 0;
        return;
      }

      syncLayer();
      handleScroll();
    };

    handleLayoutChange();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleLayoutChange);
    widthQuery.addEventListener('change', handleLayoutChange);
    motionQuery.addEventListener('change', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleLayoutChange);
      widthQuery.removeEventListener('change', handleLayoutChange);
      motionQuery.removeEventListener('change', handleScroll);
      resetParallax();
    };
  }, [speed, minWidth]);

  return ref;
};

export { useParallax };
