import React from "react";

import { LinkCardsData } from "../../../data/LinkCardsData";
import LinkCard from "../../organisms/linkCard/LinkCard";
import { StyledSection } from "./WebsiteLinks.style";
function WebsiteLinks() {
  return (
    <StyledSection>
      <ul>
        {LinkCardsData.map(({ text, title, icon, id, link }) => (
          <LinkCard
            key={id}
            id={id}
            content={text}
            title={title}
            icon={icon}
            link={link}
          />
        ))}
      </ul>
    </StyledSection>
  );
}

export default WebsiteLinks;
