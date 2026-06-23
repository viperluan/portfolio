import { useEffect, useState } from 'react';

const HEADER_OFFSET = 120;

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) {
      return;
    }

    const updateActiveSection = () => {
      let current = '';

      for (let index = elements.length - 1; index >= 0; index -= 1) {
        const section = elements[index];
        const { top } = section.getBoundingClientRect();

        if (top <= HEADER_OFFSET) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
};

export { useActiveSection };
