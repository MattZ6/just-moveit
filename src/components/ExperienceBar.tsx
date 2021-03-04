import { useContext, useMemo } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import { Container, Progress, CurrentProgress, CurrentProgressIndicator } from '../styles/components/ExperienceBar';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = useMemo(() => {
    return Math.round(currentExperience * 100) / experienceToNextLevel;
  }, [currentExperience, experienceToNextLevel]);

  return (
    <Container>
      <span>0xp</span>

      <Progress>
        <CurrentProgress progress={percentToNextLevel} />

        <CurrentProgressIndicator progress={percentToNextLevel}>
          {currentExperience}xp
        </CurrentProgressIndicator>
      </Progress>

      <span>{experienceToNextLevel}xp</span>
    </Container>
  );
}
