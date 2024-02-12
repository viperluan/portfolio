import "./App.scss";
import "@fontsource/jetbrains-mono";
import "@fontsource/jetbrains-mono/100.css";
import "@fontsource/jetbrains-mono/700.css";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Action } from "./components/Section/Action";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Section>
          <Action />
        </Section>
      </Container>
    </>
  );
}

export default App;
