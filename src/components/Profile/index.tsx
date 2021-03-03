import { useCallback, useContext, useState } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, ImageContainer, ProfileImage, ProfileData } from './styles';

export function Profile () {
  const [showImage, setShowImage] = useState(false);

  const { level } = useContext(ChallengesContext);

  const handleImageLoaded = useCallback(() => {
    setShowImage(true);
  }, []);

  return (
    <Container>
      <ImageContainer>
        <ProfileImage
          showImage={showImage}
          onLoad={handleImageLoaded}
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
}
