import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: auto;

  width: 100%;
  height: 100%;

  > h1 {
    margin-top: 1.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryDarkTextHighlight};
  }

  > ul {
    display: flex;
    flex-direction: column;

    list-style: none;
    margin: 2.5rem 0 0;
    padding: 0;

    > header {
      display: flex;
      align-items: center;

      margin-bottom: 1.5rem;

      @media (max-width: 680px) {
        display: none;
      }

      > span {
        text-align: start;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.9rem;
        opacity: 0.56;

        &:nth-child(1) {
          width: 4.5rem;
        }

        &:nth-child(2) {
          flex: 1;
          padding: 0 1.5rem;
        }

        &:nth-child(3),
        &:nth-child(4) {
          width: 10rem;
        }
      }
    }

    > li {
      display: flex;
      align-items: center;

      margin-bottom: 0.5rem;

      > div {
        background: ${({ theme }) => theme.white};
        height: 100%;

        &:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 1.5rem;
          font-weight: 500;

          width: 4.5rem;
          min-height: 6rem;
          height: 100%;

          margin-right: 0.25rem;

          @media (max-width: 680px) {
            width: 2.5rem;
          }
        }

        &:nth-child(2) {
          flex: 1;
          display: flex;
          align-items: center;

          padding: 1rem 1.5rem;

          > img {
            width: 4rem;
            height: 4rem;
            border-radius: calc(4rem / 2);
            object-fit: cover;

            margin-right: 1rem;
          }

          > div {
            display: flex;
            flex-direction: column;

            > strong {
              color: ${({ theme }) => theme.primaryDarkTextHighlight};
              font-size: 1.25rem;
              line-height: 1.5rem;
              font-weight: 600;
            }

            > span {
              display: flex;
              align-items: center;

              margin-top: 0.5rem;

              > img {
                margin-right: 0.5rem;
              }
            }
          }
        }

        &:nth-child(3),
        &:nth-child(4) {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          width: 10rem;

          > span {
            text-align: start;

            > b {
              font-weight: 400;
              color: ${({ theme }) => theme.primaryColor};
            }
          }

          @media (max-width: 680px) {
            display: none;
          }
        }
      }
    }
  }

  > table {
    margin-top: 2.5rem;

    > thead {
      > tr {
        > th {
          text-align: start;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.9rem;
        }
      }
    }

    > tbody {
      > tr {
        background: ${({ theme }) => theme.white};
        margin-bottom: 0.5rem;

        > td {
          &:nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 1.5rem;
            font-weight: 500;

            width: 4.5rem;
            height: 6rem;
          }

          &:nth-child(2) {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;

            padding: 1rem 1.5rem;

            > img {
              width: 4rem;
              height: 4rem;
              border-radius: calc(4rem / 2);
              object-fit: cover;
            }
          }
        }
      }
    }
  }
`;
