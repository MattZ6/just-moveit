import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100vh;
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
