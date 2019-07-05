import React from "react";
import FormGroup from "./StyledComponents/FormGroup";
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
	textareaSize,
	allowInternational
}) => {
	return (
		<FormGroup
			id={`form-field-${id}`}
			className={`input-group ${specialStyle ? specialStyle : ""}`}
			textareaSize={textareaSize}
		>
			<label htmlFor={id}>
				{label}
				<span>{required ? "*" : ""}</span>
				{ allowInternational ? <small style={{fontSize: "10px"}}>(Outside U.S. use &ldquo;NA&rdquo;}</small> : null }
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
			<InputError className="input-error">{error}</InputError>
		</FormGroup>
	);
};

export default InputGroup;
