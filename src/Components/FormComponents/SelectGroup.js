import React from "react";
import FormGroup from "./StyledComponents/FormGroup"
import InputError from "./StyledComponents/InputError";

const SelectGroup = ({
  id,
  specialStyle,
  required,
  error,
  value,
  handleInputChange,
  options
}) => {
  return (
    <FormGroup
      id={`form-field-${id}`}
      className={specialStyle ? specialStyle : ""}
    >
      <label htmlFor={id}>
        {id}
        <span>{required ? "*" : ""}</span>
      </label>
      <select
        className={error ? "error" : ""}
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={handleInputChange}
        aria-invalid={error ? true : false}
      >
        {options}
      </select>
      <InputError>{error}</InputError>
    </FormGroup>
  );
};

export default SelectGroup;
