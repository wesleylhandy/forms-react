import React from "react";

import CheckboxGroup from "./StyledComponents/CheckboxGroup";

function Checkbox({ id, checked, handleInputChange, label }) {
  return (
    <CheckboxGroup>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={handleInputChange}
      />
      <label htmlFor={id}>{label}</label>
    </CheckboxGroup>
  );
}

export default Checkbox;
