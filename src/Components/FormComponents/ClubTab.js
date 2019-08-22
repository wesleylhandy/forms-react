import React from "react";

import ClubTabGroup from "./StyledComponents/ClubTabGroup";

function ClubTab({ id, name, checked, handleTabClick, label }) {
	return (
		<ClubTabGroup id={`${id}-group`} className="tab-group">
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