import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';

interface IHomeProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

const Home: React.FC<IHomeProps> = ({
  level,
  currentExperience,
  completedChallenges,
}) => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      completedChallenges={completedChallenges}
    >
      <Head>
        <title>Início | move.it</title>
      </Head>

      <div className={styles.container}>
        <ExperienceBar/>

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async (context) => {
  const { moveit_level, moveit_currentExperience, moveit_completedChallenges } = context.req.cookies;

  return {
    props: {
      level: Number(moveit_level),
      currentExperience: Number(moveit_currentExperience),
      completedChallenges: Number(moveit_completedChallenges),
    },
  }
}

export default Home;
