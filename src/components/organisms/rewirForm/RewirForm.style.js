import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;

  flex: 1;
  h3 {
    font-size: 16px;
    text-align: center;
    line-height: 1.45;
    font-family: ${({ theme }) => theme.fonts.pBold};
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }
`;
export const StyledForm = styled.form`
  text-align: center;

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
      font-family: inherit;
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
    margin-top: 20px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.orangeDark};
    }
  }
`;

export const FormAnsw = styled.div`
  display: ${({ wasSubmited }) => (wasSubmited ? "block" : "none")};
  hr {
    width: 90%;
    background-color: ${({ theme }) => theme.colors.bg};
    border: none;
    height: 1px;
    margin: 20px auto;
  }
`;
