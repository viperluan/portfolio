import './styles.scss';

interface IProjectCardProps {
  image: string;
  name: string;
  link: string;
  description: string;
  tags: string[];
  imageWidth: number;
  imageHeight: number;
  githubLink?: string;
}

const ProjectCard = ({
  image,
  name,
  link,
  description,
  tags,
  imageWidth,
  imageHeight,
  githubLink,
}: IProjectCardProps) => {
  const siteUrl = `https://${link}`;

  return (
    <article className="project-card-container">
      <div className="project-card-image-wrapper">
        <img
          className="project-card-image"
          src={image}
          alt={`Captura de tela do projeto ${name}`}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
        />

        <a
          className="project-card-overlay"
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver site
        </a>
      </div>

      <div className="project-card-info-container">
        <h3 className="project-card-name">{name}</h3>
        <p className="project-card-url">{link}</p>

        <ul className="project-card-tags">
          {tags.map((tag) => (
            <li key={tag} className="project-card-tag">
              {tag}
            </li>
          ))}
        </ul>

        <p className="project-card-description">{description}</p>

        <div className="project-card-actions">
          <a
            className="project-card-button project-card-button-primary"
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver site
          </a>

          {githubLink && (
            <a
              className="project-card-button project-card-button-secondary"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export { ProjectCard };
