import styled, { css } from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 7rem;
  height: 100%;
  background: ${({ theme }) => theme.white};

  @media (max-width: 680px) {
    flex-direction: row;

    width: 100%;
    height: 3.5rem;
  }
`;

interface ILinkButtonProps {
  isActive: boolean;
}

export const LinkButton = styled.a<ILinkButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 100%;
  height: 3.5rem;

  position: relative;

  transition: background-color 200ms ease-out;

  &:focus,
  &:hover {
    background: ${({ theme }) => theme.dividerColor};
  }

  ${({ isActive }) => isActive && css`
    background: ${({ theme }) => theme.dividerColor};

    &:after {
      content: "";
      width: 4px;
      height: 90%;
      position: absolute;

      left: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;

      background: ${({ theme }) => theme.primaryColor};
    }
  `}

  @media (max-width: 680px) {
    &:focus,
    &:hover {
      background: transparent;
    }

    &:active {
      background: ${({ theme }) => theme.dividerColor};
    }

    ${({ isActive }) => isActive && css`
      background: none;

      &:after {
        content: "";
        width: 100%;
        height: 0.2rem;
        position: absolute;

        bottom: 0;
        border-radius: 0;
      }
    `}
  }
`;
