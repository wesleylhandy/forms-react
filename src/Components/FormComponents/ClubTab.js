import React, {useContext} from "react";

import { FormConfigContext } from "../Contexts/FormConfigProvider";

import ClubTabGroup from "./StyledComponents/ClubTabGroup";

function ClubTab({ id, name, checked, handleTabClick, label }) {
	const { getCssConfig } = useContext(FormConfigContext)
	const { 
		toggleColor = "#fff",
		toggleBackgroundColor = "#1775BC",
		toggleBorderColor = "transparent",
		toggleBorderRadius = "5px",
		toggleHoverColor = "#1775BC",
		toggleHoverBackgroundColor = "#fff",
		toggleHoverBorderColor = "#1775BC",
	} = getCssConfig("toggle")
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
		>
			<input
				className="tab-group__input"
				name={name}
				id={`${id}gift`}
				type="checkbox"
				checked={checked}
				onChange={handleTabClick}
				role="tab"
				aria-selected={checked}
				aria-controls=""
				tabIndex={checked ? 0 : -1}

			/>
			<label htmlFor={`${id}gift`}>{label}</label>
		</ClubTabGroup>
	);
}

export default ClubTab;