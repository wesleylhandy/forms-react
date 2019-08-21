import React from "react";

import SubmitButtonGroup from "./StyledComponents/SubmitButtonGroup";
import FormError from "./StyledComponents/FormError";

const SubmitButton = ({
	hasErrors,
	error,
	handleSubmit,
	submitting,
	value,
	color,
	backgroundColor
}) => {
	return (
		<SubmitButtonGroup className="submit-row" color={color} backgroundColor={backgroundColor}>
			<input
				className="submit-btn"
				type="submit"
				id="submit"
				onClick={handleSubmit}
				disabled={submitting}
				value={submitting ? "Please Wait..." : value}
			/>
			<FormError>
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
