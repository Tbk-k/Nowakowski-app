import React, { useState } from "react";
import { zipCodes } from "../../../data/ZipCodesData";
import FormInput from "../../atoms/formInput/FormInput";
import { FormAnsw, StyledForm, Wrapper } from "./RewirForm.style";

const RewirForm = () => {
  const [zipCodeInput, setZipCode] = useState({
    zipSearch: "",
    isValid: false,
    wasSubmited: false,
  });

  const inputHandler = (e) => {
    setZipCode({ ...zipCodeInput, zipSearch: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setZipCode({
      ...zipCodeInput,
      isValid: zipCodes.includes(zipCodeInput.zipSearch),
      wasSubmited: true,
    });
  };
  const inputProps = {
    widget: "input",
    type: "text",
    name: "zipSearch",
    placeholder: "Podaj kod pocztowy ",
    errorMessage: "Wprawdź kod pocztowy w formanie 00-000.",
    pattern: "^[0-9]{2}-{1}([0-9]{3})?$",
  };

  return (
    <Wrapper>
      <h3>
        Sprawdź czy miejsce zamieszkania / siedziba dłużnika mieści się w
        obszarze właściwości Komornika Sądowego Marka Nowakowskiego.
      </h3>
      <StyledForm onSubmit={submitHandler}>
        <FormInput
          {...inputProps}
          value={zipCodeInput.zipSearch}
          onChange={inputHandler}
          maxLength="6"
        />

        <button>Sprawdź</button>
        <FormAnsw
          isValid={zipCodeInput.isValid}
          wasSubmited={zipCodeInput.wasSubmited}
        >
          <hr />
          <span>
            Właściwość dłużnika{" "}
            <b style={{ fontFamily: "QuicksandBold" }}>
              {zipCodeInput.isValid
                ? "mieści się w obszarze "
                : "znajduje się poza obszarem "}
            </b>
            działania Komornika Sądowego Marka Nowakowskiego.
          </span>
          <hr />
        </FormAnsw>
      </StyledForm>
    </Wrapper>
  );
};

export default RewirForm;
