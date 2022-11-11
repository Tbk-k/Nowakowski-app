import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  position: absolute;
  z-index: 2;
  padding: ${({ isScroll }) => (isScroll ? "15px 40px" : "40px")};
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isScroll }) => (isScroll ? "white" : "transparent")};
  @media only screen and (min-width: 1024px) {
    justify-content: center;
  }
`;

export const LogoWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    width: 20%;
    text-align: center;
  }
  img {
    width: 80px;
    @media only screen and (min-width: 1024px) {
      width: 120px;
    }
  }
`;

export const MailWrapper = styled.div`
  svg {
    width: 20px;
  }
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
export const BtnsWrapper = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
    width: 40%;

    a {
      font-family: ${({ theme }) => theme.fonts.pBold};
      text-decoration: none;
      padding: 15px 20px;
      border-radius: 30px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
      color: white;
      cursor: pointer;
      &:first-of-type {
        background-color: ${({ theme }) => theme.colors.orange};
        &:hover {
          background-color: ${({ theme }) => theme.colors.orangeDark};
        }
      }
      &:last-of-type {
        background-color: ${({ isScroll }) =>
          isScroll ? "#ececec" : "#f3f0f04d"};
        color: ${({ isScroll }) => (isScroll ? "black" : "white")};
        border: ${({ isScroll }) => (isScroll ? "1px solid #8a968b" : "null")};
        margin-left: 15px;
        &:hover {
          background-color: ${({ isScroll }) =>
            isScroll ? "#8a968b" : "white"};
          color: black;
        }
      }
    }
  }
`;

export const MenuWrapper = styled.div`
  svg {
    width: 24px;
    cursor: pointer;
  }
  @media only screen and (min-width: 1024px) {
    width: 40%;
    text-align: end;
    padding-right: 20px;
    svg {
      width: 30px;
    }
  }
`;
