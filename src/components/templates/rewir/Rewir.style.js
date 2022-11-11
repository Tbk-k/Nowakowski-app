import styled from "styled-components";

export const RewirSection = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  width: 100vw;
  padding: 20px;
`;
export const Wrapper = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: white;
  padding: 30px;
  margin-top: 40px;
  max-width: 1250px;
  margin: 40px auto 0;
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 60px;
  }
`;

export const StyledBar = styled.hr`
  width: 80%;
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.bg};
  margin: 35px auto;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
