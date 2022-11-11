import React from "react";
import { Link } from "react-router-dom";
import HeaderUnderLine from "../../atoms/headerUnderline/HeaderUnderLine";
import LinkCardIcon from "../../atoms/linkCardIcon/LinkCardIcon";
import { StyledCard, StyledFrame } from "./LinkCard.style";

function LinkCard({ content, title, icon, link, id }) {
  return (
    <StyledCard>
      <StyledFrame>
        <LinkCardIcon icon={icon} />
        <h2>{title}</h2>
        <HeaderUnderLine />
        <p>{content}</p>
        {id === 3 ? (
          <Link to="kontakt">- Przejdź -</Link>
        ) : (
          <a href={link}>- Przejdź -</a>
        )}
      </StyledFrame>
    </StyledCard>
  );
}

export default LinkCard;
