import { FC, useContext } from 'react';

import { ChallengesContext } from '@contexts/ChallengesContext';

import { Overlay, Dialog } from '@styles/components/LevelUpModal';

const LevelUpModal: FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Dialog>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar" />
        </button>
      </Dialog>
    </Overlay>
  );
};

export default LevelUpModal;
