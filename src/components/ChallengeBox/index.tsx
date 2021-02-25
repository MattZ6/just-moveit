import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './styles.module.css';

export function ChallengeBox () {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
     {
       activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}xp</header>

          <main>
            {
              activeChallenge.type == 'body' ? (
                <img src="icons/body.svg" alt="Desafio de movimento"/>
              ) : activeChallenge.type == 'eye' && (
                <img src="icons/eye.svg" alt="Desafio de visão"/>
              )
            }
            <strong>Novo desafio</strong>
            <p>{ activeChallenge.description }</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailureButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSuccessButton}
            >
              Completei
            </button>
          </footer>
        </div>
       ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Finalize um ciclo para receber desafios
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios
          </p>
        </div>
       )
     }
    </div>
  );
}
