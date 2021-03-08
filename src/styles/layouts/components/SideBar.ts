import styled, { css } from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 112px;
  height: 100%;
  background: ${({ theme }) => theme.white};
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
`;
