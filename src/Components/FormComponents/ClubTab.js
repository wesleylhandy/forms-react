import React, { useContext } from "react";

import { FormConfigContext } from "../Contexts/FormConfigProvider";

import ClubTabGroup from "./StyledComponents/ClubTabGroup";

const ClubTab = ({ id, name, checked, handleTabClick, label }) => {
	const { getCssConfig } = useContext(FormConfigContext);
	const {
		toggleColor = "#fff",
		toggleBackgroundColor = "#1775BC",
		toggleBorderColor = "transparent",
		toggleBorderRadius = "5px",
		toggleHoverColor = "#1775BC",
		toggleHoverBackgroundColor = "#fff",
		toggleHoverBorderColor = "#1775BC",
	} = getCssConfig("toggle");
	const handleKeyUp = e => {
		const {keyCode} = e
		// console.log({keyCode})
		if (checked && (keyCode == 13 || keyCode == 32)) { // return or space
			e.preventDefault();
			handleTabClick({ target: { id: `${id}gift`}})
		}
	}
	return (
		<ClubTabGroup
			id={`${id}-group`}
			className="tab-group"
			toggleColor={toggleColor}
			toggleBackgroundColor={toggleBackgroundColor}
			toggleBorderColor={toggleBorderColor}
			toggleBorderRadius={toggleBorderRadius}
			toggleHoverColor={toggleHoverColor}
			toggleHoverBackgroundColor={toggleHoverBackgroundColor}
			toggleHoverBorderColor={toggleHoverBorderColor}
			onKeyUp={handleKeyUp}
		>
			<input
				className="tab-group__input"
				name={name}
				id={`${id}gift`}
				type="checkbox"
				checked={checked}
				onChange={handleTabClick}
			/>
			<label 
				htmlFor={`${id}gift`}
				role="tab"
				aria-selected={checked}
				aria-controls={`AskArray-${id}`}
				id={`${id}gift-label`}
				tabIndex={checked ? "0" : "-1"}
			>{label}</label>
		</ClubTabGroup>
	);
}

export default ClubTab;
