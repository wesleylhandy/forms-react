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
	backgroundColor,
	hoverBackgroundColor,
	hoverColor,
	hoverBorderColor,
	borderRadius,
	styles
}) => {
	const group = styles && styles.hasOwnProperty("group") ? styles.group : {};
	const input = styles && styles.hasOwnProperty("input") ? styles.input : {};
	return (
		<SubmitButtonGroup 
			className="submit-row" 
			color={color} 
			backgroundColor={backgroundColor}
			hoverBackgroundColor={hoverBackgroundColor}
			hoverColor={hoverColor}
			hoverBorderColor={hoverBorderColor}
			borderRadius={borderRadius}
			style={group}
		>
			<input
				className="submit-btn"
				type="submit"
				id="submit"
				onClick={handleSubmit}
				disabled={submitting}
				value={submitting ? "Please Wait..." : value}
				style={input}
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
