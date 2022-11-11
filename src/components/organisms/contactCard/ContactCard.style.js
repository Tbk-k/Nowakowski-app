import styled from "styled-components";

export const StyledCard = styled.aside`
  width: 100%;
  background-color: white;
  border-radius: 30px;
  border: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 5%);
  margin-top: 30px;
  max-width: 400px;
  margin: 35px auto 50px;
  text-align: start;

  div {
    flex: 1;
    margin: 0 auto;
    div {
      display: flex;
      p {
        padding-left: 10px;
        margin: 15px 0;
      }
    }
  }
  hr {
    width: 100%;
    height: 1px;
    background-color: #e2e2e2;
    border: none;
  }
`;
