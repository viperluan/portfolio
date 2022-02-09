import Image from 'next/image';
import styles from './SocialMedia.module.scss';

const SocialMedia = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.social}>
            <div className={styles.socialUp}>
              <Image
                src={'/static/icons/social-media/logo-linkedin.svg'}
                alt={'Logo Linkedin'}
                width={80}
                height={80}
              />
              <Image
                src={'/static/icons/social-media/logo-twitter.svg'}
                alt={'Logo Linkedin'}
                width={80}
                height={80}
              />
              <Image
                src={'/static/icons/social-media/logo-instagram.svg'}
                alt={'Logo Linkedin'}
                width={80}
                height={80}
              />
            </div>
            <div className={styles.socialDown}>
              <Image
                src={'/static/icons/social-media/logo-whatsapp.svg'}
                alt={'Logo Linkedin'}
                width={80}
                height={80}
              />
              <Image
                src={'/static/icons/social-media/logo-discord.svg'}
                alt={'Logo Linkedin'}
                width={80}
                height={80}
              />
            </div>
          </div>

          <div className={styles.text}>
            <h1>Redes sociais</h1>
            <p>Algumas redes que você pode usar para me contatar.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
