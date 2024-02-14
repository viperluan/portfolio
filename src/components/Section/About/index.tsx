import { Section } from '..';
import { Title } from '../../Title';
import './styles.scss';

const About = () => {
  return (
    <Section>
      <div className="container-about">
        <Title>a little history about me</Title>

        <p className="text-container">
          My story begins in 2005, when I started studying computer science. First it was just
          computer maintenance, formatting, etc. Afterwards, I took a technical course in IT and
          another in industrial electronics. I worked for 10 years as an electronics technician,
          repairing different types of equipment. In 2018, I started my studies in programming,
          where I found my passion: creating my own solutions. Today, I seek new challenges to
          create solutions that can innovate the world.
        </p>
      </div>
    </Section>
  );
};

export { About };
