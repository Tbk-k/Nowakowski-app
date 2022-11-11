import React, { useState } from "react";
import { useEffect } from "react";

function FormInput(props) {
  const { id, widget, onChange, errorMessage, isSend, ...inputProps } = props;
  const [wasFocused, setFocusState] = useState(false);

  useEffect(() => {
    setFocusState(false);
  }, [isSend]);

  return (
    <div>
      {widget === "input" ? (
        <input
          {...inputProps}
          onChange={onChange}
          autoComplete="off"
          focused={wasFocused.toString()}
          onBlur={() => setFocusState(true)}
          required
        />
      ) : (
        <textarea
          {...inputProps}
          onChange={onChange}
          autoComplete="off"
          focused={wasFocused.toString()}
          onBlur={() => setFocusState(true)}
          onFocus={() => setFocusState(true)}
          required
        />
      )}
      <p>{errorMessage}</p>
    </div>
  );
}

export default FormInput;
