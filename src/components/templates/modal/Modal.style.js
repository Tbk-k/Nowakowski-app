import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: rgba(12, 12, 12, 0.3);
  backdrop-filter: blur(20px);
  display: ${({ modalIsOpen }) => (modalIsOpen ? "block" : "none")};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InnerWrapper = styled.div`
  flex: 1;
  max-width: 450px;
`;

export const BtnWrapper = styled.div`
  text-align: end;
  button {
    background: inherit;
    border: none;
    cursor: pointer;
    padding-right: 20px;
    img {
      width: 25px;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 30px;
  padding: 20px 10px;
  background-color: white;
`;
