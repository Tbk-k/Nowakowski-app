import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100vw;
  background-color: #f2f2ef;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    @media only screen and (min-width: 1200px) {
      display: flex;
      gap: 20px;
      padding: 60px 0 40px;
    }
  }
`;
