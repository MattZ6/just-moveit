import { createContext, useState, useEffect, useCallback, useMemo } from 'react';

import challenges from '../../challenges.json';

interface IChallenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface IChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  completedChallenges: number;
  activeChallenge: IChallenge;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

export const ChallengesContext = createContext({} as IChallengesContextData);

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState<IChallenge>(null);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  function getExperienceToNextLevel(level: number) {
    return Math.pow((level + 1) * 4, 2);
  }

  const experienceToNextLevel = useMemo(() => getExperienceToNextLevel(level), [level]);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge as IChallenge);

    if (Notification.permission === 'granted') {
      new Audio('/notification.mp3').play();

      new Notification('Novo desafio disponível 🎉', {
        body: `Valendo ${challenge.amount}xp!`,
        icon: '/favicon.png',
        silent: true,
      });
    }
  }, []);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    let levelsToUp = level;
    let experienceToNextLvl = getExperienceToNextLevel(levelsToUp);

    while (finalExperience >= experienceToNextLvl) {
      finalExperience = finalExperience - experienceToNextLvl;

      levelsToUp += 1;
      experienceToNextLvl = getExperienceToNextLevel(levelsToUp);
    }

    setLevel(levelsToUp);
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setCompletedChallenges(state => state + 1);
  }, [activeChallenge, currentExperience, experienceToNextLevel, level]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        completedChallenges,
        activeChallenge,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      { children }
    </ChallengesContext.Provider>
  );
}
