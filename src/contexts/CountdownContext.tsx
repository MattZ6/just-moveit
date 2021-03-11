import {
  FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ChallengesContext } from '@contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

interface ICountdownContextData {
  minutes: number;
  seconds: number;
  isCountdownActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

const DEFAULT_TIME = 0.05 * 60;

export const CountdownContext = createContext({} as ICountdownContextData);

export const CountdownProvider: FC = ({ children }) => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(DEFAULT_TIME);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { minutes, seconds } = useMemo(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return {
      minutes,
      seconds,
    };
  }, [time]);

  const startCountdown = useCallback(() => {
    setIsCountdownActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);

    setIsCountdownActive(false);

    setTime(DEFAULT_TIME);

    setHasFinished(false);
  }, []);

  useEffect(() => {
    if (isCountdownActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isCountdownActive && time === 0) {
      setHasFinished(true);
      setIsCountdownActive(false);
      startNewChallenge();
    }
  }, [isCountdownActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isCountdownActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
