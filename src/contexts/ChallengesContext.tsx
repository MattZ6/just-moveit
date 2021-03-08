import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';

import LevelUpModal from '@components/LevelUpModal';

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
  closeLevelUpModal: () => void;
}

export const ChallengesContext = createContext({} as IChallengesContextData);


interface IChallengesProviderProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

export const ChallengesProvider: React.FC<IChallengesProviderProps> = ({
  children,
  ...rest
}) => {
  const [level, setLevel] = useState(rest?.level ?? 0);
  const [currentExperience, setCurrentExperience] = useState(rest?.currentExperience ?? 0);
  const [completedChallenges, setCompletedChallenges] = useState(rest?.completedChallenges ?? 0);

  const [activeChallenge, setActiveChallenge] = useState<IChallenge>(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  useEffect(() => {
    function requestNotificationPermission() {
      if (!('Notification' in window)) {
        return
      }

      Notification.requestPermission();
    }

    requestNotificationPermission();
  }, []);

  useEffect(() => {
    Cookies.set('moveit_level', String(level));
    Cookies.set('moveit_currentExperience', String(currentExperience));
    Cookies.set('moveit_completedChallenges', String(completedChallenges));

  }, [level, currentExperience, completedChallenges]);

  function getExperienceToNextLevel(level: number) {
    return Math.pow((level + 1) * 4, 2);
  }

  const experienceToNextLevel = useMemo(() => getExperienceToNextLevel(level), [level]);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge as IChallenge);

    if (!('Notification' in window)) {
      return
    }

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

    if (levelsToUp !== level) {
      setLevel(levelsToUp);
      setIsLevelUpModalOpen(true);
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setCompletedChallenges(state => state + 1);
  }, [activeChallenge, currentExperience, experienceToNextLevel, level]);

  const closeLevelUpModal = useCallback(() => {
    setIsLevelUpModalOpen(false);
  }, []);

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
        closeLevelUpModal,
      }}
    >
      { children}

      { isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
