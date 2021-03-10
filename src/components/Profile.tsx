import { FC, useContext } from 'react';

import { ChallengesContext } from '@contexts/ChallengesContext';

import {
  Container,
  ImageContainer,
  ProfileImage,
  ProfileData,
} from '@styles/components/Profile';

export const Profile: FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <ImageContainer>
        <ProfileImage
          src="https://github.com/mattz6.png"
          alt="Matheus Felipe Zanin"
        />
      </ImageContainer>

      <ProfileData>
        <strong>Matheus Felipe Zanin</strong>

        <span>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </span>
      </ProfileData>
    </Container>
  );
};
