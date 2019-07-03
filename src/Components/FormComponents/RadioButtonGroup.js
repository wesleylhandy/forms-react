import React from "react";

import RadioButton from "./StyledComponents/RadioButton";

const RadioButtonGroup = ({ id, name, checked, handleRadioClick, label }) => {
	return (
		<RadioButton id={`${id}-group`} className="radio-group">
			<input
				name={name}
				id={`${id}gift`}
				type="radio"
				checked={checked}
				onChange={handleRadioClick}
			/>
			<label htmlFor={`${id}gift`}>{label}</label>
		</RadioButton>
	);
};

export default RadioButtonGroup;
