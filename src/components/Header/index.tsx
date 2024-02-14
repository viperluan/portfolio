import { MouseEvent, useState } from 'react';
import { Logo } from '../Logo';
import { Navigator } from '../Navigator';
import { MenuMobile } from '../MenuMobile';
import './styles.scss';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClickMenu = (mouseEvent: MouseEvent<HTMLButtonElement>) => {
    mouseEvent.preventDefault();
    setMenuIsOpen(!menuIsOpen);
  };

  const handleRequestClose = () => {
    setMenuIsOpen(false);
  };

  return (
    <div className="header">
      <Logo />
      <Navigator />

      <button className="menu-button" onClick={handleClickMenu}>
        <span className={`${menuIsOpen ? 'active' : 'inactive'}`}></span>
      </button>

      <MenuMobile isOpen={menuIsOpen} handleRequestClose={handleRequestClose} />
    </div>
  );
};

export { Header };
