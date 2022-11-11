import React, { useEffect, useState } from "react";
import {
  BtnsWrapper,
  LogoWrapper,
  MailWrapper,
  MenuWrapper,
  Wrapper,
} from "./NavBar.style";
import LightLogo from "../../../assets/img/logoLight.png";
import DarkLogo from "../../../assets/img/logoDark.png";
import { Link } from "react-router-dom";
import HideMenu from "../hideMenu/HideMenu";
import { ReactComponent as MenuIcon } from "../../../assets/img/menu.svg";
import { ReactComponent as MailIcon } from "../../../assets/img/mail.svg";

const NavBar = () => {
  const [isScroll, setScrollState] = useState(false);
  const [menuIsHide, setMenuState] = useState(true);
  const menuHandler = () => {
    setMenuState(!menuIsHide);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollState(window.scrollY > 10 ? false : false);
    });
  }, []);

  return (
    <>
      <header>
        <Wrapper isScroll={isScroll}>
          <MailWrapper>
            <Link to="kontakt">
              <MailIcon style={{ fill: isScroll ? "black" : "white" }} />
            </Link>
          </MailWrapper>
          <BtnsWrapper isScroll={isScroll}>
            <Link to="kontakt">Kontakt z kancelarią</Link>
            <a href="#repay-link">Spłać zadłużenie</a>
          </BtnsWrapper>
          <LogoWrapper>
            <Link to="">
              <img src={isScroll ? DarkLogo : LightLogo} alt="" />
            </Link>
          </LogoWrapper>
          <MenuWrapper>
            <MenuIcon
              color={isScroll ? "black" : "white"}
              onClick={menuHandler}
            />
          </MenuWrapper>
        </Wrapper>
      </header>
      <HideMenu menuIsHide={menuIsHide} onClick={menuHandler} />
    </>
  );
};

export default NavBar;
