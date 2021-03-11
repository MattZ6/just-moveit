import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;

  background: ${({ theme }) => theme.white};

  border-radius: 5px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const InactiveChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  > strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4rem;
  }

  > p {
    display: flex;
    align-items: center;

    line-height: 1.4rem;
    max-width: 70%;
    margin-top: 3rem;
    text-align: start;

    > img {
      margin-right: 1rem;
      width: 2rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    text-align: start;
  }
`;

export const ActiveChallengeContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  > header {
    color: ${({ theme }) => theme.primaryColor};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
  }

  > main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
     padding: 1rem 0;
    }

    > header {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 112px;

      @media (max-width: 768px) {
        text-align: start;
      }
    }

    > strong {
      font-weight: 600;
      font-size: 2rem;
      color: ${({ theme }) => theme.primaryDarkTextHighlight};
      margin: 1.5rem 0 1rem;
    }

    > p {
      line-height: 1.5;
      padding: 0 1rem;
    }
  }

  > footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

interface IActionButtonProps {
  actionType: 'success' | 'warn';
}

export const ActionButton = styled.button<IActionButtonProps>`
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  color: ${({ theme }) => theme.white};
  font-size: 1rem;
  font-weight: 600;

  transition: filter 200ms ease-out;

  &:focus,
  &:hover {
    filter: brightness(0.9);
  }

  ${({ actionType }) =>
    actionType === 'warn' &&
    css`
      background: ${({ theme }) => theme.warn};
    `}

  ${({ actionType }) =>
    actionType === 'success' &&
    css`
      background: ${({ theme }) => theme.success};
    `}
`;
