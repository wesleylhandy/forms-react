import React from "react";

import TabGroup from "./StyledComponents/TabGroup";

function Tab({ id, name, checked, handleTabClick, label }) {
	return (
		<TabGroup id={`${id}-group`} className="tab-group">
			<input
				className="tab-group__input"
				name={name}
				id={`${id}gift`}
				type="checkbox"
				checked={checked}
				onChange={handleTabClick}
			/>
			<label htmlFor={`${id}gift`}>{label}</label>
		</TabGroup>
	);
}

export default Tab;
