import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import { Container } from '../styles/components/CompletedChallenges';

export function CompletedChallenges() {
  const { completedChallenges } = useContext(ChallengesContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{completedChallenges}</span>
    </Container>
  );
}
