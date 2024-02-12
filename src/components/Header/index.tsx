import { Logo } from "../Logo";
import { Navigator } from "../Navigator";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigator />
    </div>
  );
};

export { Header };
