import Image from 'next/image';
import styles from './Technologies.module.scss';

const Technologies = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.techs}>
            <ul>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/javascript-original.svg'}
                  alt="Icone Javascript"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/typescript-original.svg'}
                  alt="Icone Typescript"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/nodejs-original.svg'}
                  alt="Icone Node.js"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/express-original.svg'}
                  alt="Icone Express.js"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/nextjs-original.svg'}
                  alt="Icone Next.js"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/react-original.svg'}
                  alt="Icone React.js"
                  width={80}
                  height={80}
                />
              </li>
            </ul>
            <ul>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/html5-original.svg'}
                  alt="Icone HTML5"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/css3-original.svg'}
                  alt="Icone CSS3"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/sass-original.svg'}
                  alt="Icone Sass"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/vuejs-original.svg'}
                  alt="Icone Vue.js"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/nuxtjs-original.svg'}
                  alt="Icone Nuxt.js"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/postgresql-original.svg'}
                  alt="Icone PostgreSQL"
                  width={80}
                  height={80}
                />
              </li>
            </ul>
            <ul>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/materialui-original.svg'}
                  alt="Icone Material UI"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/git-original.svg'}
                  alt="Icone Git"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/yarn-original.svg'}
                  alt="Icone Yarn"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/debian-original.svg'}
                  alt="Icone Debian"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/vscode-original.svg'}
                  alt="Icone VSCode"
                  width={80}
                  height={80}
                />
              </li>
              <li>
                <Image
                  className={styles.iconImage}
                  src={'/static/icons/figma-original.svg'}
                  alt="Icone Figma"
                  width={80}
                  height={80}
                />
              </li>
            </ul>
          </div>

          <div className={styles.text}>
            <h1>Tecnologias em destaque</h1>
            <p>As tech&apos;s que mais estou dedicando tempo para estudar e evoluir</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
