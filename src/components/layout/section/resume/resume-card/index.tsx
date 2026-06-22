import { useState } from 'react';

import './styles.scss';

interface IResumeCardProps {
  title: string;
  role: string;
  period: string;
  type: string;
  description: string;
  isCurrent?: boolean;
  isLast?: boolean;
}

const DESCRIPTION_PREVIEW_LENGTH = 200;

const ResumeCard = ({
  title,
  role,
  period,
  type,
  description,
  isCurrent = false,
  isLast = false,
}: IResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = description.length > DESCRIPTION_PREVIEW_LENGTH;
  const displayDescription =
    isExpanded || !isLongDescription
      ? description
      : `${description.slice(0, DESCRIPTION_PREVIEW_LENGTH).trim()}...`;

  return (
    <article
      className={`resume-card-container ${isCurrent ? 'is-current' : ''} ${isLast ? 'is-last' : ''}`}
    >
      <div className="resume-card-marker" aria-hidden="true" />

      <div className="resume-card-content">
        <div className="resume-card-header">
          <div className="resume-card-title-container">
            <div className="resume-card-title-row">
              <h3 className="resume-card-title">{title}</h3>
              {isCurrent && <span className="resume-card-badge">Atual</span>}
            </div>
            <h4 className="resume-card-role">
              {role} <span>({type})</span>
            </h4>
          </div>
          <p className="resume-card-period">{period}</p>
        </div>

        <p className="resume-card-description">{displayDescription}</p>

        {isLongDescription && (
          <button
            type="button"
            className="resume-card-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Ler menos' : 'Ler mais'}
          </button>
        )}
      </div>
    </article>
  );
};

export { ResumeCard };
