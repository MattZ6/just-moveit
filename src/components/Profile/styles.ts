import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: calc(5.5rem / 2);
  background: ${({ theme }) => theme.dividerColor};
  background-image: url('icons/user-placeholder.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  overflow: hidden;
`;

interface IProfileImageProps {
  showImage: boolean;
}

export const ProfileImage = styled.img<IProfileImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 250ms ease-out;
  opacity: ${props => !!props.showImage ? 1 : 0};
  z-index: 5;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1.5rem;

  > strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryDarkTextHighlight};
  }

  > span {
    display: flex;
    align-items: center;

    font-size: 1rem;
    margin-top: 0.5rem;

    > img {
      margin-right: 0.5rem;
    }
  }
`;
