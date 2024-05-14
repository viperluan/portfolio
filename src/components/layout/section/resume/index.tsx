import { Title } from '~layout/title';

import { ResumeCard } from './resume-card';
import './styles.scss';

interface IResumeCard {
  title: string;
  role: string;
  period: string;
  type: string;
  description: string;
}

const cards: IResumeCard[] = [
  {
    title: 'Infracommerce',
    role: 'Desenvolvedor Fullstack Pleno',
    period: 'Fev 2022 - Fev 2024',
    type: 'PJ',
    description: `Desenvolvimento de lojas ecommerce, atuando no fullstack e aplicando boas práticas, 
      conceitos de SOLID, testes automatizados, documentação e devops. Tecnologias: 
      PHP (monolito), Laravel (API com arquitetura hexagonal), ExtJs, VueJs, SCSS, Bootstrap.`,
  },
  {
    title: 'Fator Soluções',
    role: 'Desenvolvedor Front-end Júnior',
    period: 'Set 2021 - Jan 2022',
    type: 'CLT',
    description: `Desenvolvimento de uma plataforma para atender clientes da empresa, com opções de 
      pagamento, aulas por vídeo, sistema de checkout, deploy em VPS, testes automatizados e a 
      construção do layout. Tecnologias: NuxtJs, VueJs, Laravel, Git, Github, Adobe XD, Figma.`,
  },
  {
    title: 'Growtech',
    role: 'Desenvolvedor Front-end Pleno',
    period: 'Fev 2022 - Atual',
    type: 'freelancer',
    description: `Desenvolvimento de sites e APIs para atender diversas áreas do mercado. Tecnologias: 
      NextJs, ReactJs, Javascript/Typescript, Django (python), SSH, Git, Github, SCSS, Axios, 
      Zustand, React Query, MUI, Docker.`,
  },
  {
    title: 'Ziglab',
    role: 'Desenvolvedor Front-end Júnior',
    period: 'Jul 2020 - Out 2020',
    type: 'freelancer',
    description: `Desenvolvimento de uma plataforma para venda de impressões 3D. Tecnologias: 
      HTML, CSS, Javascript.`,
  },
];

const Resume = () => {
  return (
    <section id="resume" className="resume-container">
      <div className="resume-content-container">
        <Title text="Resumo" />

        <div className="resume-cards-container">
          {cards.map(({ title, role, period, type, description }) => {
            return (
              <ResumeCard
                key={title}
                title={title}
                role={role}
                period={period}
                type={type}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Resume };
