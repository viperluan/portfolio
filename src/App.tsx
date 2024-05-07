import './App.scss';

import { MenuMobile } from '~layout/menuMobile';
import { Main } from '~layout/section/main';
import { Portfolio } from '~layout/section/portfolio';

import { Resume } from './components/layout/section/resume';

function App() {
  return (
    <div className="app-container">
      <MenuMobile />

      <Main />
      <Portfolio />
      <Resume />
    </div>
  );
}

export default App;
