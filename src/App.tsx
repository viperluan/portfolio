import './App.scss';
import { MenuMobile } from './components/layout/menuMobile';
import { Main } from './components/layout/section/main';

function App() {
  return (
    <div className="app-container">
      <MenuMobile />

      <Main />
    </div>
  );
}

export default App;
