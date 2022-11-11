import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f2f2ef;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const InnerWrapper = styled.div`
  width: 45px;
  height: 45px;
  background-color: #af864d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 25px;
  }
`;

function LinkCardIcon({ icon }) {
  return (
    <Wrapper>
      <InnerWrapper>
        <img src={icon} alt="" />
      </InnerWrapper>
    </Wrapper>
  );
}

export default LinkCardIcon;
