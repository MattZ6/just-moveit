import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100vh;


  @media (max-width: 680px) {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.main`
  flex: 1;
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

    @media (max-width: 680px) {
      padding: 0 1rem;
    }

    > section {
      flex: 1;
    }
  }
`;
