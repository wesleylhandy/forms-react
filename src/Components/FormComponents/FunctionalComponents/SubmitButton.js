import React, { useContext } from "react";

import { FormConfigContext } from "../../Contexts/FormConfigProvider";

import SubmitButtonGroup from "../StyledComponents/SubmitButtonGroup";
import FormError from "../StyledComponents/FormError";

const SubmitButton = ({
	hasErrors,
	error,
	handleSubmit,
	submitting,
	value,
}) => {
	const { getCssConfig } = useContext(FormConfigContext);
	const {
		submitBtnColor = "#fff",
		submitBtnBackgroundColor = "#333",
		submitBtnBorderColor = "transparent",
		submitBtnBorderRadius = "0",
		submitBtnHoverBackgroundColor = "#fff",
		submitBtnHoverColor = "#333",
		submitBtnHoverBorderColor = "#333",
		submitBtnBoxShadow = "none",
	} = getCssConfig("submitBtn");
	const { formErrorColor = "crimson" } = getCssConfig("form");

	return (
		<SubmitButtonGroup
			className="submit-row"
			submitBtnColor={submitBtnColor}
			submitBtnBackgroundColor={submitBtnBackgroundColor}
			submitBtnBorderColor={submitBtnBorderColor}
			submitBtnBorderRadius={submitBtnBorderRadius}
			submitBtnHoverBackgroundColor={submitBtnHoverBackgroundColor}
			submitBtnHoverColor={submitBtnHoverColor}
			submitBtnHoverBorderColor={submitBtnHoverBorderColor}
			submitBtnBoxShadow={submitBtnBoxShadow}
		>
			<input
				className="submit-btn"
				type="submit"
				id="submit"
				onClick={handleSubmit}
				disabled={submitting}
				value={submitting ? "Please Wait..." : value}
			/>
			<FormError color={formErrorColor}>
				{hasErrors && error
					? error
					: hasErrors
					? "Please scroll up to correct errors."
					: ""}
			</FormError>
		</SubmitButtonGroup>
	);
};

export default SubmitButton;
