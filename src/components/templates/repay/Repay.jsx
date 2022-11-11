import Modal from "../modal/Modal";
import React, { useState } from "react";
import { SystemsLogosData } from "../../../data/SystemsLogosData";
import HeaderUnderLine from "../../atoms/headerUnderline/HeaderUnderLine";
import { LogosWrapper, RepaySection, RepayWrapper } from "./Repay.style";

const Repay = ({ repayLink }) => {
  const [modalIsOpen, setModalState] = useState(false);
  const modalHandler = () => {
    setModalState(!modalIsOpen);
  };

  return (
    <>
      <Modal modalIsOpen={modalIsOpen} onClick={modalHandler} />
      <RepaySection id="repay-link" ref={repayLink}>
        <RepayWrapper>
          <div>
            <h2>Jak spłacić zadłużenie ?</h2>
            <HeaderUnderLine />
            <p>
              Wszelkich wpłat w postępowaniach egzekucyjnych można dokonywać w
              formie gotówkowej w toku czynności egzekucyjnych badź w kasie
              kacelarii czynnej w godzinach urzędowania kancelarii oraz w formie
              bezgotówkowej.
            </p>
          </div>

          <div>
            <button onClick={modalHandler}>Dane do przelewu</button>
          </div>
        </RepayWrapper>
        <LogosWrapper>
          <ul>
            {SystemsLogosData.map(({ icon, id }) => (
              <li key={id}>
                <img src={icon} alt="" />
              </li>
            ))}
          </ul>
        </LogosWrapper>
      </RepaySection>
    </>
  );
};

export default Repay;
