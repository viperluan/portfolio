import './App.scss';

import { MenuMobile } from '~layout/menuMobile';
import { About } from '~layout/section/about';
import { Contact } from '~layout/section/contact';
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
      <Contact />
    </div>
  );
}

export default App;
