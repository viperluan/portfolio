import { useEffect, useState } from 'react';

import './styles.scss';

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="reading-progress-bar"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de leitura da página"
    >
      <div className="reading-progress-bar-fill" style={{ width: `${progress}%` }} />
    </div>
  );
};

export { ReadingProgressBar };
