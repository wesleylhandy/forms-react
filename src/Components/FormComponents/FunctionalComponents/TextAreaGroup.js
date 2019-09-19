import React from "react";
import FormGroup from "../StyledComponents/FormGroup";
import InputError from "../StyledComponents/InputError";

const TextAreaGroup = ({
	id,
	specialStyle,
	label,
	required,
	maxLength,
	minHeight,
	error,
	placeholder,
	handleBlur,
	handleInputChange,
	value,
}) => {
	return (
		<FormGroup
			id={`form-field-${id}`}
			className={`input-group ${specialStyle ? specialStyle : ""}`}
			minHeight={minHeight}
		>
			<label htmlFor={id}>
				{label}
				<span>{required ? "*" : ""}</span>
			</label>
			<textarea
				className={error ? "error" : ""}
				id={id}
				maxLength={maxLength}
				name={id}
				placeholder={placeholder}
				required={required}
				onChange={handleInputChange}
				value={value}
				aria-invalid={error ? true : false}
				onBlur={handleBlur}
			/>
			<InputError className="input-error">{error}</InputError>
		</FormGroup>
	);
};

export default TextAreaGroup;
