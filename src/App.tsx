import './App.scss';

import { MenuMobile } from '~layout/menuMobile';
import { About } from '~layout/section/about';
import { Main } from '~layout/section/main';
import { Portfolio } from '~layout/section/portfolio';
import { Resume } from '~layout/section/resume';

function App() {
  return (
    <div className="app-container">
      <MenuMobile />

      <Main />
      <Portfolio />
      <Resume />
      <About />
    </div>
  );
}

export default App;
