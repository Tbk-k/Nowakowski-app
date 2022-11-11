import React from "react";
import styled from "styled-components";

const StyledUnderline = styled.hr`
  width: 100px;
  height: 2.5px;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 20px;
`;

const HeaderUnderLine = () => {
  return <StyledUnderline />;
};

export default HeaderUnderLine;
