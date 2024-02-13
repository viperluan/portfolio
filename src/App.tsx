import './App.scss';
import '@fontsource/jetbrains-mono';
import '@fontsource/jetbrains-mono/100.css';
import '@fontsource/jetbrains-mono/700.css';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Action } from './components/Section/Action';
import { Projects } from './components/Section/Projects';
import { About } from './components/Section/About';
import { Contacts } from './components/Section/Contacts';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Action />
        <Projects />
        <About />
        <Contacts />
        <Footer />
      </Container>
    </>
  );
}

export default App;
