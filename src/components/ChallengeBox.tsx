import { useCallback, useContext } from 'react';

import { ChallengesContext } from '@contexts/ChallengesContext';
import { CountdownContext } from '@contexts/CountdownContext';

import { Container, ActiveChallengeContainer, InactiveChallengeContainer, ActionButton } from '../styles/components/ChallengeBox';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeFailed = useCallback(() => {
    resetChallenge();
    resetCountdown();
  }, [resetChallenge, resetCountdown]);

  const handleChallengeSucceeded = useCallback(() => {
    completeChallenge();
    resetCountdown();
  }, [resetCountdown, completeChallenge]);

  return (
    <Container>
      {
        activeChallenge ? (
          <ActiveChallengeContainer>
            <header>Ganhe {activeChallenge.amount}xp</header>

            <main>
              <header>
                {
                  activeChallenge.type === 'body' ? (
                    <img src="icons/body.svg" alt="Desafio de movimento" />
                  ) : activeChallenge.type === 'eye' && (
                    <img src="icons/eye.svg" alt="Desafio de visão" />
                  )
                }
              </header>
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <ActionButton
                type="button"
                actionType="warn"
                onClick={handleChallengeFailed}
              >
                Falhei
            </ActionButton>
              <ActionButton
                type="button"
                actionType="success"
                onClick={handleChallengeSucceeded}
              >
                Completei
            </ActionButton>
            </footer>
          </ActiveChallengeContainer>
        ) : (
            <InactiveChallengeContainer>
              <strong>
                Finalize um ciclo para receber desafios
          </strong>
              <p>
                <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
            </InactiveChallengeContainer>
          )
      }
    </Container>
  );
}
