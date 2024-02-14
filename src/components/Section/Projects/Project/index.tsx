import './styles.scss';

interface ProjectProps {
  name: string;
  link: string;
  image: string;
  stylesClassName: string;
}

const Project = ({ name, link, image, stylesClassName }: ProjectProps) => {
  return (
    <a className="project-container" href={link} target="_blank">
      <p className="project-name">{name}</p>
      <div className={`project ${stylesClassName}`}>
        <img className="project-image" src={image} alt={name} />
      </div>
    </a>
  );
};

export { Project };
