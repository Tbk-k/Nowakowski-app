import React from "react";
import {
  Backdrop,
  MapWrapper,
  StyledMenu,
  StyledNav,
  StyledSection,
} from "./HideMenu.style";
import DarkLogo from "../../../assets/img/logoDark.png";
import DarkMark from "../../../assets/img/darkXMark.png";
import { Link } from "react-router-dom";

const HideMenu = ({ menuIsHide, onClick }) => {
  return (
    <>
      <Backdrop menuIsHide={menuIsHide} />
      <StyledSection menuIsHide={menuIsHide}>
        <div>
          <StyledNav>
            <img src={DarkLogo} alt="" />
            <button onClick={onClick}>
              <img src={DarkMark} alt="" />
            </button>
          </StyledNav>
          <StyledMenu onClick={onClick}>
            <a href="#files-link">
              <li>Wnioski do pobrania</li>
            </a>
            <Link to="kontakt">
              <li>Kontakt z kancelarią</li>
            </Link>
            <a href="#rewir-link">
              <li>Rewir komorniczy</li>
            </a>
            <a href="#repay-link">
              <li>Spłać zadłużenie</li>
            </a>
          </StyledMenu>
        </div>
        <MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.6448388491326!2d18.5325408!3d54.345585299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd75c998e4f819%3A0x661e7cd3bf9fec3!2sKartuska%20422a%2C%2080-125%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1667825907589!5m2!1spl!2spl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </MapWrapper>
      </StyledSection>
    </>
  );
};

export default HideMenu;
