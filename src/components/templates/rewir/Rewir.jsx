import React from "react";
import RewirAbout from "../../organisms/rewirAbout/RewirAbout";
import RewirForm from "../../organisms/rewirForm/RewirForm";
import { RewirSection, StyledBar, Wrapper } from "./Rewir.style";

const Rewir = () => {
  return (
    <RewirSection id="rewir-link">
      <Wrapper>
        <RewirAbout />
        <StyledBar />
        <RewirForm />
      </Wrapper>
    </RewirSection>
  );
};

export default Rewir;
