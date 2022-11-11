import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  width: 90%;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: 30px;
  position: relative;
  margin: 20px auto;
  padding: 15px 15px 10px;
  text-align: center;
  span {
    position: absolute;
    left: 30px;
    transform: translateY(calc(-50% - 15px));
    background-color: white;
    padding: 0 5px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.pBold};
    font-weight: bold;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.txtLight};
  }
  p {
    margin: 0;
    font-size: 15px;
  }
`;

const ModalItem = ({ title, content }) => {
  return (
    <StyledDiv>
      <span>{title}</span>
      <p>{content.firstLine}</p>
      {content.secondLine ? <p>{content.secondLine}</p> : null}
    </StyledDiv>
  );
};

export default ModalItem;
