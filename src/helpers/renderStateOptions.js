import React from "react";

import {
	canadianProvinces,
	other,
	usMilitary,
	usStates,
	usTerritories,
} from "../config/dropdowns.json";

function getStateOptions(international) {
	function renderOptGroup(type, options) {
		return (
			<optgroup key={type.replace(" ", "")} label={type}>
				{options.map((opt, i) => {
					return (
						<option key={`${type.replace(" ", "")}State-${i}`} value={opt[1]}>
							{opt[1]}
						</option>
					);
				})}
			</optgroup>
		);
	}

	let optGroups = [];
	const states = renderOptGroup("U.S. States", usStates);
	const military = renderOptGroup("U.S. Military", usMilitary);
	const territories = renderOptGroup("U.S. Territories", usTerritories);
	const otherOpt = renderOptGroup("Other", other);
	let provinces = null;

	if (international) {
		provinces = renderOptGroup("Canadian Provinces", canadianProvinces);
	}
	optGroups.push(states, military, provinces, territories, otherOpt);

	return optGroups;
}

export default getStateOptions;
