import { useEffect } from 'react';

import styles from './MenuDrawer.module.scss';

interface IMenuDrawerProps {
  isActive: boolean;
  handleRequestClose: () => void;
}

const MenuDrawer = ({ isActive, handleRequestClose }: IMenuDrawerProps) => {
  useEffect(() => {
    if (isActive) {
      const html = document.documentElement;
      const menu = document.getElementById('menu');

      const handleClickOutside = (htmlEvent: MouseEvent) => {
        if (htmlEvent) {
          if (!menu?.contains(htmlEvent.target as Node)) {
            handleRequestClose();
            html.removeEventListener('click', handleClickOutside);
          }
        }
      };

      html.addEventListener('click', handleClickOutside);
    }
  }, [isActive, handleRequestClose]);

  return (
    <div id="menu" className={`${styles.container} ${isActive && styles.active}`}>
      <h1>teste</h1>
    </div>
  );
};

export default MenuDrawer;
