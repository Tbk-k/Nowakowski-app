import React from "react";
import { LowerRow, StyledFooter, UpperRow, Wrapper } from "./Footer.style";
import DarkLogo from "../../../assets/img/logoDark.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <StyledFooter>
        <UpperRow>
          <div>
            <h3>Przydatne linki</h3>
            <ul>
              <li>
                <a href="#rewir-link">Właściwość</a>
              </li>
              <li>
                <Link to="kontakt">Kontakt z kancelarią</Link>
              </li>
              <li>
                <a href="https://www.komornik-online.eu/">Komornik online</a>
              </li>
              <li>
                <a href="#repay-link">Spłać zadłużenie</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>O kancelarii</h3>
            <p>
              Kancelaria Komornicza nr XXII w Gdańsku jest zaufanym partnerem w
              zakresie postępowania egzekucyjnego i zabezpieczającego,
              działająym na obszarze właściwości Sądu Rejonowego
              Gdańsk-Południe.
            </p>
          </div>
        </UpperRow>
        <hr />
        <LowerRow>
          <img src={DarkLogo} alt="" />
          <p>Copyright 2021 © TbkDev. All right reserved</p>
        </LowerRow>
      </StyledFooter>
    </Wrapper>
  );
};

export default Footer;
