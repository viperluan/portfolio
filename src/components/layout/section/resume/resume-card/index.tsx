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
      <h1 className="resume-card-title">{title}</h1>
      <h2 className="resume-card-role">
        {role} <span>({type})</span>
      </h2>
      <p className="resume-card-period">{period}</p>
      <p className="resume-card-description">{description}</p>
    </div>
  );
};

export { ResumeCard };
