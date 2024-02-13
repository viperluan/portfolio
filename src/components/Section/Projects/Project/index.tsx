import './styles.scss';

interface ProjectProps {
  name: string;
  link: string;
  image: string;
}

const Project = ({ name, link, image }: ProjectProps) => {
  return (
    <div className="project-container">
      <a href={link} target="_blank">
        <img src={image} alt={name} />
      </a>

      <span>{name}</span>
    </div>
  );
};

export { Project };
