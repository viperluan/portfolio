import { Title } from "../../Title";
import "./styles.scss";

const title = "web, mobile & desktop developer";

const Action = () => {
  return (
    <>
      <div className="container-action">
        <div className="container-action-section">
          <Title title={title} />
          <p className="text-container">
            Hi I’m <span>Luan Conte Soares</span>. A UX/UI design enthusiast and versatile
            programmer, with low level knowledge, based in Brazil.
          </p>
        </div>
        <div className="container-action-section">
          <img className="bg-container" src="bg-binary.jpg" alt="Binary Numbers" />
        </div>
      </div>
    </>
  );
};

export { Action };
