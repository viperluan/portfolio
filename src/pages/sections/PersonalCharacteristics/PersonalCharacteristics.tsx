import styles from './PersonalCharacteristcs.module.scss';

const PersonalCharacteristcs = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Características pessoais</h1>
            <p>
              Algumas carcaterísticas pessoais que acho interessante que você
              saiba.
            </p>
          </div>
          <div className={styles.characteristics}>
            <ul>
              <li>Sinceridade</li>
              <li>Honestidade</li>
              <li>Determinação</li>
              <li>Respeito</li>
              <li>Sensibilidade</li>
            </ul>
            <ul>
              <li>Ambição</li>
              <li>Carisma</li>
              <li>Empatia</li>
              <li>Paciência</li>
              <li>Generosidade</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalCharacteristcs;
