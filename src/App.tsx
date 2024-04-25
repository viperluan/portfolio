import './App.scss';

import { MenuMobile } from '~layout/menuMobile';
import { Main } from '~layout/section/main';
import { Portfolio } from '~layout/section/portfolio';

function App() {
  return (
    <div className="app-container">
      <MenuMobile />

      <Main />
      <Portfolio />
    </div>
  );
}

export default App;
