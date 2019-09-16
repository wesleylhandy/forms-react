import React, { useContext } from "react";
import FormGroup from "./StyledComponents/FormGroup";
import InputError from "./StyledComponents/InputError";

import { FormConfigContext } from "../Contexts/FormConfigProvider";

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
	handleBlur,
	textareaSize,
	allowInternational,
	inputMode = "text",
}) => {
	const { getCssConfig, allowInputPlaceholders } = useContext(
		FormConfigContext
	);
	const {
		inputBackgroundColor = "#f0f0f0",
		inputBorderColor = "#333",
		inputBorderRadius = "0",
		inputBorderWidth = "1px",
		inputColor = "#333",
		inputHoverBorderColor = "#777777",
		inputHoverBorderWidth = "1px",
		inputHoverBoxShadow = "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #747474",
		inputHoverBackgroundColor = "#fff",
		inputErrorColor = "crimson",
		inputErrorBorderWidth = "1px",
		inputPlaceholderColor = "#747474",
	} = getCssConfig("input");
	const {
		labelColor = "#333",
		labelFontWeight = "600",
		labelOpacity = "0",
		labelTextTransform = "none",
	} = getCssConfig("label");

	return (
		<FormGroup
			id={`form-field-${id}`}
			className={`input-group ${specialStyle ? specialStyle : ""}`}
			textareaSize={textareaSize}
			inputBackgroundColor={inputBackgroundColor}
			inputBorderColor={inputBorderColor}
			inputBorderRadius={inputBorderRadius}
			inputBorderWidth={inputBorderWidth}
			inputColor={inputColor}
			inputHoverBackgroundColor={inputHoverBackgroundColor}
			inputHoverBorderColor={inputHoverBorderColor}
			inputHoverBorderWidth={inputHoverBorderWidth}
			inputHoverBoxShadow={inputHoverBoxShadow}
			inputErrorColor={inputErrorColor}
			inputErrorBorderWidth={inputErrorBorderWidth}
			inputPlaceholderColor={inputPlaceholderColor}
			labelColor={labelColor}
			labelFontWeight={labelFontWeight}
			labelOpacity={labelOpacity}
			labelTextTransform={labelTextTransform}
		>
			<label htmlFor={id}>
				{label}
				<span>{required ? "*" : ""}</span>
				{allowInternational ? (
					<small style={{ fontSize: "10px", marginLeft: 8 }}>
						(Outside U.S. use &ldquo;NA&rdquo;}
					</small>
				) : null}
			</label>
			<input
				className={error ? "error" : ""}
				type={type}
				id={id}
				maxLength={maxLength}
				name={id}
				placeholder={allowInputPlaceholders ? placeholder : ""}
				required={required}
				value={value}
				onChange={handleInputChange}
				onBlur={handleBlur}
				aria-invalid={error ? true : false}
				disabled={disabled}
				pattern={validation ? validation : ".*"}
				inputMode={inputMode}
			/>
			<InputError className="input-error" inputErrorColor={inputErrorColor}>
				{error}
			</InputError>
		</FormGroup>
	);
};

export default InputGroup;
