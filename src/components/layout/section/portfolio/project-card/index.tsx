import './styles.scss';

interface IProjectCardProps {
  image: string;
  name: string;
  link: string;
  description: string;
  imageWidth: number;
  imageHeight: number;
}

const ProjectCard = ({
  image,
  name,
  link,
  description,
  imageWidth,
  imageHeight,
}: IProjectCardProps) => {
  return (
    <div className="project-card-container">
      <img
        className="project-card-image"
        src={image}
        alt={`Captura de tela do projeto ${name}`}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        decoding="async"
      />

      <div className="project-card-info-container">
        <p className="project-card-name">
          <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </p>

        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

export { ProjectCard };
