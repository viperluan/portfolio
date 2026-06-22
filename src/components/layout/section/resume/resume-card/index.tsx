import './styles.scss';

interface IResumeCardProps {
  title: string;
  role: string;
  period: string;
  type: string;
  description: string;
}

const ResumeCard = ({ title, role, period, type, description }: IResumeCardProps) => {
  return (
    <div className="resume-card-container">
      <div className="resume-card-info-container">
        <div className="resume-card-title-container">
          <h3 className="resume-card-title">{title}</h3>
          <h4 className="resume-card-role">
            {role} <span>({type})</span>
          </h4>
        </div>
        <p className="resume-card-period">{period}</p>
      </div>
      <p className="resume-card-description">{description}</p>
    </div>
  );
};

export { ResumeCard };
