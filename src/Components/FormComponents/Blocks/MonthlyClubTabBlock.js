import React from "react";

import ClubTab from "../ClubTab";
import Divider from "../StyledComponents/Divider";
import FieldSet from "../StyledComponents/FieldSet";
import FormRow from "../StyledComponents/FormRow";

function MonthlyTabGroup({ monthlyChecked, handleTabClick }) {
	let monthly = monthlyChecked;
	let single = !monthlyChecked;

	return (
		<FieldSet className="monthly-giving-info">
			<legend>Select Monthly or One-Time Gift</legend>
			<FormRow className="monthly-tab" role="tablist" aria-label="Giving Tabs">
				<ClubTab
					id="monthly"
					name="monthly-toggle"
					label="Monthly Partner"
					checked={monthly}
					handleTabClick={handleTabClick}
				/>
				<Divider color="transparent" />
				<ClubTab
					id="single"
					name="monthly-toggle"
					label="Single Gift"
					checked={single}
					handleTabClick={handleTabClick}
				/>
			</FormRow>
		</FieldSet>
	);
}

export default MonthlyTabGroup;
