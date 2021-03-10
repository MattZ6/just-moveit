import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  > section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media (max-width: 1024px) {
    > section {
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    > section {
      display: flex;
      flex-direction: column;

      padding: 1rem 0;
    }
  }
`;
