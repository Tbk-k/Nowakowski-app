import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  flex: 1;
  margin: 0 auto;
  max-width: 450px;
  p {
    font-size: 14px;
    line-height: 1.4;
  }
  button {
    background-color: transparent;
    border: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.txtLight};
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  @media only screen and (min-width: 1024px) {
    margin: 0;
    h2 {
      font-size: 35px;
    }
    p,
    li {
      font-size: 16px;
    }
  }
`;

export const FirstLine = styled.div`
  max-width: 450px;
  margin: 0 auto;
  div {
    text-align: end;
    display: ${({ isShow }) => (isShow ? "none" : "block")};
  }
`;
export const SecondLine = styled.div`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  max-width: 450px;
  margin: 0 auto;
  ul {
    list-style: decimal;
    font-size: 14px;
    text-align: start;

    li {
      padding-left: 10px;
      padding-bottom: 5px;
    }
  }
  div {
    text-align: end;
  }
`;
