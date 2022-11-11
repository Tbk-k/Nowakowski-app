import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 14;
  position: fixed;
  top: 0;
  background-color: rgba(12, 12, 12, 0.3);
  backdrop-filter: blur(20px);
  display: ${({ menuIsHide }) => (menuIsHide ? "none" : "block")};
`;

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  z-index: 15;
  background: ${({ theme }) => theme.colors.bg};
  position: fixed;
  top: 0;
  right: 0;
  max-width: 400px;
  display: ${({ menuIsHide }) => (menuIsHide ? "none" : "flex")};
  flex-direction: column;
`;

export const StyledNav = styled.nav`
  text-align: center;
  background: white;
  border-bottom: ${({ theme }) => `1.5px solid ${theme.colors.gray}`};
  padding-top: 10px;
  position: relative;
  img {
    width: 80px;
  }
  button {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    img {
      width: 26px;
      height: 26px;
    }
  }
`;

export const StyledMenu = styled.menu`
  background: white;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  a {
    text-decoration: none;
    color: black;
  }
  li {
    display: block;
    padding: 25px 0;
    border-bottom: ${({ theme }) => `1.5px solid ${theme.colors.gray}`};
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const MapWrapper = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
    border-radius: 30px;
    height: 80%;
  }
`;
