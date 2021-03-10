import styled, { keyframes } from 'styled-components';

const animateOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  `;

export const Overlay = styled.div`
  background: ${({ theme }) => theme.modalOverlay};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${animateOpacity} 300ms ease-out;
`;

const animateFromBottom = keyframes`
  from {
    transform: translateY(16px);
  }
  to {
    transform: translateY(0);
  }
`;

export const Dialog = styled.div`
  background: ${({ theme }) => theme.white};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  animation: ${animateOpacity} 300ms ease-out,
    ${animateFromBottom} 300ms ease-out;

  > header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryColor};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  > strong {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.primaryDarkTextHighlight};
  }

  > p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
    margin-top: 0.25rem;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    font-size: 0;

    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: 0;
    transition: background-color 200ms ease-out;

    &:focus,
    &:hover {
      background: ${({ theme }) => theme.backgroundColor};
    }
  }
`;
