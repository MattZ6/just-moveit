import { useContext,  useMemo } from 'react';

import { CountdownContext } from '../../contexts/CountdownContext';

import styles from './styles.module.css';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isCountdownActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext)

  const {
    minuteLeft,
    minuteRight,
    secondLeft,
    secondRight,
  } = useMemo(() => {
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return {
      minuteLeft,
      minuteRight,
      secondLeft,
      secondRight,
    }
  }, [minutes, seconds]);

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
