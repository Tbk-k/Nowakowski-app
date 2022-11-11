import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  border-radius: 30px;
  padding: 20px;
  background-color: white;
  max-width: 400px;
  margin-bottom: 20px;
`;

export const StyledFrame = styled.div`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  border: 1px solid #f2f2ef;
  padding: 20px;
  text-align: center;
  position: relative;
  h2 {
    @media only screen and (min-width: 1024px) {
      font-size: 35px;
    }
  }
  p {
    padding-bottom: 20px;
    font-size: 14px;
    line-height: 1.35;
    @media only screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }
  a {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #af864d;
    font-weight: bold;
    text-decoration: none;
    position: absolute;
    transform: translate(-50%);
    bottom: 10px;
    @media only screen and (min-width: 1024px) {
      font-size: 16px;
    }
    &:hover {
      color: black;
    }
  }
`;
