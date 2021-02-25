import { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './styles.module.css';

let countdownTimeout: NodeJS.Timeout;

const DEFAULT_TIME = 0.05 * 60;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(DEFAULT_TIME);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const {
    minuteLeft,
    minuteRight,
    secondLeft,
    secondRight,
  } = useMemo(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return {
      minuteLeft,
      minuteRight,
      secondLeft,
      secondRight,
    }
  }, [time]);

  const startCountdown = useCallback(() => {
    setIsCountdownActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);

    setIsCountdownActive(false);

    setTime(DEFAULT_TIME);
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
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {
        hasFinished ? (
          <button
            disabled
            className={styles.countdownButton}
          >
            Ciclo encerrado
          </button>
        ) : isCountdownActive ? (
          <button
            type="button"
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
          >
            Abandonar ciclo
          </button>
        ) : (
          <button
            type="button"
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            Iniciar um ciclo
          </button>
        )
      }
    </div>
  );
}
