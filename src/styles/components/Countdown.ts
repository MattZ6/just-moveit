import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryDarkTextHighlight};

  > span {
    font-size: 6.25rem;
    margin: 0 0 0.5rem;
  }

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    > span {
      flex: 1;

      &:first-child {
        border-right: 1px solid ${({ theme }) => theme.dividerColor};
      }

      &:last-child {
        border-left: 1px solid ${({ theme }) => theme.dividerColor};
      }
    }
  }
`;

interface ICountdownButtonProps {
  isActive?: boolean;
}

export const CountdownButton = styled.button<ICountdownButtonProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${({ theme, isActive }) =>
    isActive ? theme.white : theme.primaryColor};
  color: ${({ theme, isActive }) =>
    isActive ? theme.primaryDarkTextHighlight : theme.white};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 200ms ease-out, color 200ms ease-out;

  &:disabled {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text};
    cursor: not-allowed;
    border-bottom: 5px solid ${({ theme }) => theme.success};
  }

  &:not(:disabled):focus,
  &:not(:disabled):hover {
    background: ${({ theme, isActive }) =>
      isActive ? theme.warn : theme.primaryDark};

    ${({ isActive }) =>
      isActive &&
      css`
        color: ${({ theme }) => theme.white};
      `}
  }
`;
