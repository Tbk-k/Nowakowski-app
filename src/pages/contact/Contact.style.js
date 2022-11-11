import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f2f2ef;
  height: 100vh;
  overflow: scroll;
`;

export const StyledHeader = styled.header`
  width: 100vw;
  padding: 20px;
  nav {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80px;
    }
    a {
      position: absolute;
      left: 15px;
      cursor: pointer;
      img {
        width: 24px;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    nav {
      img {
        width: 100px;
      }
    }
  }
`;

export const StyledMain = styled.main`
  text-align: center;
  p {
    max-width: 350px;
    line-height: 1.5;
    margin: 20px auto;
  }
  form {
    margin: 20px auto;
    padding-bottom: 90px;
    max-width: 450px;
    div {
      input {
        display: block;
        border-radius: 30px;
        border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
        padding: 20px 20px;
        width: 100%;
        font-size: 16px;
        margin-top: 10px;
        &::placeholder {
          color: #8a968b;
          font-family: Arial, Helvetica, sans-serif;
        }
        &:invalid[focused="true"] {
          border: ${({ theme }) => `1px solid ${theme.colors.error}`};
        }
        &:invalid[focused="true"] ~ p {
          display: block;
        }
      }

      p {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.error};
        text-align: start;
        padding-left: 20px;
        display: none;
        margin: 0;
        padding-top: 5px;
      }
      textarea {
        border: 1px solid #e2e2e2;
        border-radius: 30px;
        padding: 20px 20px;
        width: 100%;
        font-size: 16px;
        margin-top: 10px;

        &::placeholder {
          color: #8a968b;
          font-family: Arial, Helvetica, sans-serif;
        }
        &:invalid[focused="true"] {
          border: ${({ theme }) => `1px solid ${theme.colors.error}`};
        }
        &:invalid[focused="true"] ~ p {
          display: block;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    h2 {
      font-size: 45px;
    }
    p {
      font-size: 18px;
      margin-top: 40px;
    }
  }
`;

export const BtnWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100px;
  background-color: white;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 60%;
    max-width: 150px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.orange};
    color: white;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.pBold};
    &:hover {
      background-color: ${({ theme }) => theme.colors.orangeDark};
    }
  }
  span {
    font-size: 16px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.pBold};
  }
`;
