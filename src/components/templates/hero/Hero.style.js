import styled from "styled-components";
import Hero from "../../../assets/img/hero.jpeg";

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: #f2f2ef;
  max-height: 750px;
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Hero}) center;
  background-size: cover;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(1turn, #0c0c0c, #0d0d0d29);
  }
`;

export const HeroContent = styled.div`
  z-index: 1;
  color: white;
  margin: 0 auto;
  text-align: center;
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.fonts.h};
    @media only screen and (min-width: 1024px) {
      font-size: 60px;
    }
  }
  span {
    font-size: 14px;
    @media only screen and (min-width: 1024px) {
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 30px;
  }
`;

export const HeroBtns = styled.div`
  text-align: center;
  padding-bottom: 30px;
  margin-top: 30px;
  max-width: 70%;
  margin: 20px auto 0;
  a {
    button {
      background-color: ${({ theme }) => theme.colors.orange};
      &:hover {
        background-color: ${({ theme }) => theme.colors.orangeDark};
      }
    }
  }
  button {
    height: 50px;
    width: 100%;
    margin: 10px auto 0;
    border-radius: 25px;
    border: none;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.pBold};
    font-weight: bold;
    font-size: 12px;
    background-color: #f3f0f04d;
    &:hover {
      color: black;
      background-color: white;
    }

    @media only screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

export const ContactInfo = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 0px 50px;
  display: none;

  aside {
    max-width: 1200px;
    border-radius: 30px;
    background-color: white;
    margin: 0 auto;
    display: flex;
    transform: translateY(-70%);
    padding: 0 20px;
    div {
      display: flex;
      align-items: center;
      border-right: ${({ theme }) => `1px solid ${theme.colors.bg}`};
      padding: 20px 10px;
      svg {
        margin-left: 5px;
      }
    }
    div:first-of-type,
    div:last-of-type {
      flex: 1.5;
    }
    div:nth-of-type(2),
    div:nth-of-type(3) {
      flex: 1;
    }
    div:last-of-type {
      border-right: none;
    }
    p {
      font-size: 12px;
      padding-left: 5px;
      @media only screen and (min-width: 1280px) {
        font-size: 14px;
      }
    }
  }
  a {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 50%;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      width: 22px;
      fill: white;
    }
    @media only screen and (min-width: 1200px) {
      display: flex;
    }
  }
  @media only screen and (min-width: 1024px) {
    display: block;
  }
`;
