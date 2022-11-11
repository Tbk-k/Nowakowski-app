import React from "react";
import { StyledCard } from "./ContactCard.style";
import GeoIcon from "../../../assets/img/geo-alt.svg";
import PhoneIcon from "../../../assets/img/phone.svg";
import PaperPlaneIcon from "../../../assets/img/paperPlane.svg";
import CardIcon from "../../../assets/img/card.svg";

const ContactCard = () => {
  return (
    <StyledCard>
      <div>
        <div>
          <img src={GeoIcon} alt="" />
          <p>ul. Kartuska 422a/6, 80-125 Gdańsk</p>
        </div>
        <div>
          <img src={PhoneIcon} alt="" />
          <p>+48 518 050 238</p>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <img src={PaperPlaneIcon} alt="" />
          <p>gdansk.nowakowski@komornik.pl</p>
        </div>
        <div>
          <img src={CardIcon} alt="" />
          <p>52 1600 1462 1895 1220 5000 0001</p>
        </div>
      </div>
    </StyledCard>
  );
};

export default ContactCard;
