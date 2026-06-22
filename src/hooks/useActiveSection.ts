import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (!visibleEntries.length) {
          return;
        }

        const closestToTop = visibleEntries.sort(
          (first, second) => first.boundingClientRect.top - second.boundingClientRect.top
        )[0];

        setActiveSection(closestToTop.target.id);
      },
      {
        rootMargin: '-80px 0px -55% 0px',
        threshold: [0, 0.15, 0.5],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};

export { useActiveSection };
