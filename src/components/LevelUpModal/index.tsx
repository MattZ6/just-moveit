import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './styles.module.css';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar"/>
        </button>
      </div>
    </div>
  );
}

export default LevelUpModal;
