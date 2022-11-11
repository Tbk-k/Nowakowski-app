import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100vw;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.bg};
  @media only screen and (min-width: 1024px) {
    h2 {
      font-size: 42px;
    }
  }
`;

export const FilesWrapper = styled.div`
  margin: 20px 0 10px;
`;

export const BtnWraper = styled.div`
  width: 100%;
  text-align: center;
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
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.pBold};
    &:hover {
      background-color: ${({ theme }) => theme.colors.orangeDark};
    }
  }
`;
