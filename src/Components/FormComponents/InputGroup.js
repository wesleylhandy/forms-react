import React from "react";
import FormGroup from "./StyledComponents/FormGroup"
import InputError from "./StyledComponents/InputError";

const InputGroup = ({
  id,
  specialStyle,
  label,
  required,
  error,
  value,
  type,
  maxLength,
  placeholder,
  disabled,
  validation,
  handleInputChange,
  textareaSize
}) => {
  return (
    <FormGroup
      id={`form-field-${id}`}
      className={specialStyle ? specialStyle : ""}
      textareaSize={textareaSize}
    >
      <label htmlFor={id}>
        {label}
        <span>{required ? "*" : ""}</span>
      </label>
      <input
        className={error ? "error" : ""}
        type={type}
        id={id}
        maxLength={maxLength}
        name={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleInputChange}
        aria-invalid={error ? true : false}
        disabled={disabled}
        pattern={validation ? validation : ".*"}
      />
      <InputError>{error}</InputError>
    </FormGroup>
  );
};

export default InputGroup;
