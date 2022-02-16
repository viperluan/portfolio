import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '@components/Layout/Header/Header';
import ActivityInformation from './sections/ActivityInformation/ActivityInformation';
import PersonalCharacteristcs from './sections/PersonalCharacteristics/PersonalCharacteristics';
import SocialMedia from './sections/SocialMedia/SocialMedia';
import Technologies from './sections/Technologies/Technologies';

import styles from './Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LuanCS | Página Inicial</title>
        <meta name="description" content="Portfólio pessoal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        <main>
          <ActivityInformation />
          <Technologies />
          <PersonalCharacteristcs />
          <SocialMedia />
        </main>
      </div>
    </>
  );
};

export default Home;
