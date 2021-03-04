import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100vh;
`;

export const SideBar = styled.aside`
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

export const Content = styled.main`
  width: 100%;
  overflow: auto;

  > div {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    max-width: 992px;
    margin: 0 auto;
    padding: 0 2rem;

    > section {
      flex: 1;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 1rem 0;
`;

export const SwitchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
