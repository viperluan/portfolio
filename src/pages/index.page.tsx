import type { NextPage } from 'next';
import Head from 'next/head';
import Header from 'src/components/Layout/Header/Header';

import styles from './Home.module.scss';
import ActivityInformation from './sections/ActivityInformation/ActivityInformation';

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
        <ActivityInformation />
      </div>
    </>
  );
};

export default Home;
