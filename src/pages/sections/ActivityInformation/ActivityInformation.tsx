import Image from 'next/image';

import styles from './ActivityInformation.module.scss';

interface IActivityInformationProps {
  user: {
    repositories: number;
    followers: number;
    following: number;
  };
}

const ActivityInformation = ({ user }: IActivityInformationProps) => {
  const { followers, following, repositories } = user;

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Informações de atividades</h1>
            <p>Referência resumida das atividades recentes com dados atualizados.</p>
          </div>
          <div className={styles.info}>
            <a
              href="https://github.com/viperluan"
              target="_blank"
              className={styles.image}
              rel="noreferrer"
            >
              <Image src="/static/images/perfil.jpeg" alt="Foto do perfil GitHub" layout="fill" />
              <div className={styles.name}>
                <p>Luan Conte Soares</p>
              </div>
            </a>

            <div className={styles.github}>
              <a
                href="https://github.com/viperluan?tab=repositories"
                target="_blank"
                className={styles.repository}
                rel="noreferrer"
              >
                <h3>{repositories}</h3>
                <p>Repositórios</p>
              </a>

              <div className={styles.social}>
                <a
                  href="https://github.com/viperluan?tab=following"
                  target="_blank"
                  className={styles.followers}
                  rel="noreferrer"
                >
                  <h3>{following}</h3>
                  <p>Seguidores</p>
                </a>
                <a
                  href="https://github.com/viperluan?tab=followers"
                  target="_blank"
                  className={styles.followers}
                  rel="noreferrer"
                >
                  <h3>{followers}</h3>
                  <p>Seguindo</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityInformation;
