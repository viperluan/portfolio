import type { GetServerSideProps, NextPage } from 'next';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import Footer from '@components/Layout/Footer/Footer';
import Header from '@components/Layout/Header/Header';
import { AxiosResponse } from 'axios';
import axiosInstance from 'src/services/api/axios';

import ActivityInformation from './sections/ActivityInformation/ActivityInformation';
import PersonalCharacteristcs from './sections/PersonalCharacteristics/PersonalCharacteristics';
import SocialMedia from './sections/SocialMedia/SocialMedia';
import Technologies from './sections/Technologies/Technologies';

import styles from './Home.module.scss';

interface IUserDataResponse extends AxiosResponse {
  data: {
    public_repos: number;
    followers: number;
    following: number;
  };
}

const Home: NextPage = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
          <ActivityInformation user={user} />
          <Technologies />
          <PersonalCharacteristcs />
          <SocialMedia />
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: IUserDataResponse = await axiosInstance.get('/users/viperluan');

    const { followers, following, public_repos } = data;

    const user = {
      followers,
      following,
      repositories: public_repos,
    };

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home;
