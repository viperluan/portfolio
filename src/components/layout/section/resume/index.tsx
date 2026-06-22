import { Title } from '~layout/title';
import { ScrollReveal } from '~/components/utils/ScrollReveal';

import { ResumeCard } from './resume-card';
import './styles.scss';

interface IResumeCard {
  title: string;
  role: string;
  period: string;
  type: string;
  description: string;
  isCurrent?: boolean;
}

const cards: IResumeCard[] = [
  {
    title: 'Amil',
    role: 'Desenvolvedor Fullstack Sênior',
    period: 'Set 2024 - Atual',
    type: 'PJ',
    isCurrent: true,
    description:
      'Desenvolvimento de automatizações nos processos internos para gestão de contas de usuários com Active Directory, integrações entre plataformas externas e criação de funcionalidades em ferramenta interna de ITSM. Tecnologias: PHP, Javascript, Node, Express, MariaDB, OracleDB, CronJobs.',
  },
  {
    title: 'Growtech',
    role: 'Desenvolvedor Front-end Pleno',
    period: 'Fev 2022 - Atual',
    type: 'Freelancer',
    description:
      'Desenvolvimento de sites e APIs para diversas áreas do mercado, em paralelo a outras experiências. Tecnologias: NextJs, ReactJs, Javascript/Typescript, Django, SSH, Git, SCSS, Axios, Zustand, React Query, MUI, Docker.',
  },
  {
    title: 'Infracommerce',
    role: 'Desenvolvedor Fullstack Pleno',
    period: 'Fev 2022 - Fev 2024',
    type: 'PJ',
    description:
      'Desenvolvimento de lojas ecommerce no fullstack, aplicando boas práticas, SOLID, testes automatizados, documentação e devops. Tecnologias: PHP (monolito), Laravel (API hexagonal), ExtJs, VueJs, SCSS, Bootstrap.',
  },
  {
    title: 'Fator Soluções',
    role: 'Desenvolvedor Front-end Júnior',
    period: 'Set 2021 - Jan 2022',
    type: 'CLT',
    description:
      'Desenvolvimento de plataforma com pagamentos, aulas por vídeo, checkout, deploy em VPS, testes automatizados e construção do layout. Tecnologias: NuxtJs, VueJs, Laravel, Git, Github, Adobe XD, Figma.',
  },
  {
    title: 'Ziglab',
    role: 'Desenvolvedor Front-end Júnior',
    period: 'Jul 2020 - Out 2020',
    type: 'Freelancer',
    description:
      'Desenvolvimento de plataforma para venda de impressões 3D. Tecnologias: HTML, CSS, Javascript.',
  },
];

const Resume = () => {
  return (
    <section id="resume" className="resume-container">
      <div className="resume-content-container">
        <Title text="Resumo" />

        <div className="resume-timeline">
          {cards.map(({ title, role, period, type, description, isCurrent }, index) => {
            return (
              <ScrollReveal key={`${title}-${period}`} delay={index * 80}>
                <ResumeCard
                  title={title}
                  role={role}
                  period={period}
                  type={type}
                  description={description}
                  isCurrent={isCurrent}
                  isLast={index === cards.length - 1}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Resume };
