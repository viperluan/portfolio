import './App.scss';

import { Footer } from '~layout/footer';
import { Header } from '~layout/header';
import { MenuMobile } from '~layout/menuMobile';
import { ReadingProgressBar } from '~layout/readingProgressBar';
import { About } from '~layout/section/about';
import { Contact } from '~layout/section/contact';
import { Main } from '~layout/section/main';
import { Portfolio } from '~layout/section/portfolio';
import { Resume } from '~layout/section/resume';
import { SkipLink } from '~layout/skipLink';
import { WhatsAppFloat } from '~layout/whatsappFloat';

import { ToastifyContainer } from './components/layout/toastContainer';
import { SECTION_IDS } from './constants/navigation';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="app-container">
      <SkipLink />
      <ReadingProgressBar />
      <ToastifyContainer />

      <MenuMobile activeSection={activeSection} />
      <Header activeSection={activeSection} />

      <Main />
      <About />
      <Portfolio />
      <Resume />
      <Contact />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}

export default App;
