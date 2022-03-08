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
            <div className={styles.image}>
              <Image src="/static/images/perfil.jpeg" alt="Foto do perfil GitHub" layout="fill" />
              <div className={styles.name}>
                <p>Luan Conte Soares</p>
              </div>
            </div>

            <div className={styles.github}>
              <div className={styles.repository}>
                <h3>{repositories}</h3>
                <p>Repositórios</p>
              </div>

              <div className={styles.social}>
                <div className={styles.followers}>
                  <h3>{following}</h3>
                  <p>Seguidores</p>
                </div>
                <div className={styles.followers}>
                  <h3>{followers}</h3>
                  <p>Seguindo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityInformation;
