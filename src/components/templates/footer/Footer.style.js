import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 20px;
  padding-bottom: 0;
  width: 100vw;
`;

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: white;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  hr {
    width: 80%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.bg};
    border: none;
  }
  h3 {
    margin: 50px auto 20px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.pBold};
  }
`;

export const UpperRow = styled.div`
  flex: 4;
  text-align: center;
  width: 80%;
  div {
    flex: 1;
  }
  ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    li {
      margin-bottom: 10px;
      a {
        text-decoration: none;
        cursor: pointer;
        color: #000;
        font-size: 14px;
        &:hover {
          color: ${({ theme }) => theme.colors.orange};
        }
      }
    }
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    max-width: 350px;
    margin: 0 auto 50px;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 150px;
  }
`;

export const LowerRow = styled.div`
  flex: 1;
  text-align: center;
  img {
    height: 80px;
  }
  p {
    font-size: 8px;
  }
`;
