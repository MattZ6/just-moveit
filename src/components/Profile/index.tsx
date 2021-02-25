import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './styles.module.css';

export function Profile () {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/mattz6.png" alt="Matheus Felipe Zanin" />

      <div>
        <strong>Matheus Felipe Zanin</strong>
        <span>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </span>
      </div>
    </div>
  );
}
