import { FC, useContext, useMemo } from 'react';

import { CountdownContext } from '@contexts/CountdownContext';

import { Container, CountdownButton } from '@styles/components/Countdown';

export const Countdown: FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isCountdownActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const { minuteLeft, minuteRight, secondLeft, secondRight } = useMemo(() => {
    const [minuteLeft, minuteRight] = String(minutes)
      .padStart(2, '0')
      .split('');
    const [secondLeft, secondRight] = String(seconds)
      .padStart(2, '0')
      .split('');

    return {
      minuteLeft,
      minuteRight,
      secondLeft,
      secondRight,
    };
  }, [minutes, seconds]);

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished && !isCountdownActive && (
        <CountdownButton disabled>Ciclo encerrado</CountdownButton>
      )}

      {!hasFinished && isCountdownActive && (
        <CountdownButton type="button" isActive onClick={resetCountdown}>
          Abandonar ciclo
        </CountdownButton>
      )}

      {!hasFinished && !isCountdownActive && (
        <CountdownButton type="button" onClick={startCountdown}>
          Iniciar um ciclo
        </CountdownButton>
      )}
    </>
  );
};
