import { FC, useContext } from 'react';

import { ChallengesContext } from '@contexts/ChallengesContext';

import { Container } from '@styles/components/CompletedChallenges';

export const CompletedChallenges: FC = () => {
  const { completedChallenges } = useContext(ChallengesContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{completedChallenges}</span>
    </Container>
  );
};
