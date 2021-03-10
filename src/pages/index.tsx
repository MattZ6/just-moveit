import { GetServerSideProps } from 'next';

import { ChallengesProvider } from '@contexts/ChallengesContext';
import { CountdownProvider } from '@contexts/CountdownContext';

import { ExperienceBar } from '@components/ExperienceBar';
import { Profile } from '@components/Profile';
import { CompletedChallenges } from '@components/CompletedChallenges';
import { Countdown } from '@components/Countdown';
import { ChallengeBox } from '@components/ChallengeBox';
import SEO from '@components/SEO';

import { Container } from '@styles/pages/Home';

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
      <SEO
        title="Bora completar uns desafios?"
        description="Finalize um ciclo para receber desafios e evoluir cada vez mais! 🚀"
        image="favicon.png"
      />

      <Container>
        <ExperienceBar />

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
      </Container>
    </ChallengesProvider>
  );
};

export const getServerSideProps: GetServerSideProps<IHomeProps> = async context => {
  const {
    moveit_level,
    moveit_currentExperience,
    moveit_completedChallenges,
  } = context.req.cookies;

  return {
    props: {
      level: Number(moveit_level ?? 0),
      currentExperience: Number(moveit_currentExperience ?? 0),
      completedChallenges: Number(moveit_completedChallenges ?? 0),
    },
  };
};

export default Home;
