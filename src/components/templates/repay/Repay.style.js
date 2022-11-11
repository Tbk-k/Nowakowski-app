import styled from "styled-components";

export const RepaySection = styled.section`
  width: 100vw;
  padding: 20px;
`;

export const RepayWrapper = styled.div`
  p {
    font-size: 14px;
    line-height: 1.4;
    max-width: 500px;
    text-align: center;
    margin: 15px auto 0;
  }
  div {
    width: 100%;
    text-align: center;
    margin: 30px 0 40px;
    button {
      width: 60%;
      max-width: 200px;
      border-radius: 30px;
      border: none;
      cursor: pointer;
      padding: 20px;
      background-color: ${({ theme }) => theme.colors.orange};
      color: white;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fonts.pBold};
      font-weight: bold;
      &:hover {
        background-color: ${({ theme }) => theme.colors.orangeDark};
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    div {
      flex: 1;
    }
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 16px;

    }
  }
`;

export const LogosWrapper = styled.div`
  ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin: 40px auto;
    max-width: 450px;

    li {
      flex: 1;
      flex-shrink: 1;
      justify-content: center;
      align-items: center;
      margin: 10px auto;
      cursor: pointer;
      justify-self: center;
      align-self: center;

      img {
        width: 100px;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    ul {
      max-width: 600px;
      li {
        img {
          width: 150px;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    ul {
      max-width: 1000px;
      grid-template-rows: repeat(1, 1fr);
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media only screen and (min-width: 1440px) {
    ul {
      max-width: 1200px;
      grid-template-rows: repeat(1, 1fr);
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
