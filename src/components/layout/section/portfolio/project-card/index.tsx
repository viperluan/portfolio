import './styles.scss';

interface IProjectCardProps {
  image: string;
  name: string;
  link: string;
  description: string;
}

const ProjectCard = ({ image, name, link, description }: IProjectCardProps) => {
  return (
    <div className="project-card-container">
      <img className="project-card-image" src={image} alt={name} />

      <div className="project-card-info-container">
        <p className="project-card-name">
          <a href={`https://${link}`} target="_blank">
            {link}
          </a>
        </p>

        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

export { ProjectCard };
