import React from "react";
import {
  StyledSection,
  HeroContainer,
  HeroContent,
  HeroBtns,
  ContactInfo,
} from "./Hero.style";
import { Link } from "react-router-dom";
import { ReactComponent as CardIcon } from "../../../assets/img/card.svg";
import { ReactComponent as GeoIcon } from "../../../assets/img/geo-alt.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/img/phone.svg";
import { ReactComponent as PlaneIcon } from "../../../assets/img/paperPlane.svg";
import { ReactComponent as MailIcon } from "../../../assets/img/mail.svg";

const Hero = () => {
  const contactInfoData = [
    { id: 1, icon: <GeoIcon />, content: "ul. Kartuska 422a/6, 80-125 Gdańsk" },
    { id: 2, icon: <PhoneIcon />, content: "+48 518 050 238" },
    { id: 3, icon: <PlaneIcon />, content: "gdansk.nowakowski@komornik.pl" },
    { id: 4, icon: <CardIcon />, content: "52 1600 1462 1895 1220 5000 0001" },
  ];
  return (
    <>
      <StyledSection>
        <HeroContainer>
          <HeroContent>
            <h1>
              MAREK <br /> NOWAKOWSKI
            </h1>
            <span>
              Komornik Sądowy przy Sądzie Rejonowym <br /> Gdańsk - Południe w Gdańsku
            </span>
            <HeroBtns>
              <Link to="kontakt">
                <button>Kontakt z kancelarią</button>
              </Link>
              <button>Spłać zadłużenie</button>
            </HeroBtns>
          </HeroContent>
        </HeroContainer>
      </StyledSection>
      <ContactInfo>
        <aside>
          {contactInfoData.map((item) => (
            <div key={item.id}>
              {item.icon}
              <p>{item.content}</p>
            </div>
          ))}
          <Link to="kontakt">
            <MailIcon />
          </Link>
        </aside>
      </ContactInfo>
    </>
  );
};

export default Hero;
