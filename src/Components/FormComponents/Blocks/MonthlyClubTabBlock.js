import React from "react";

import ClubTab from "../FunctionalComponents/ClubTab";
import Divider from "../StyledComponents/Divider";
import FieldSet from "../StyledComponents/FieldSet";
import FormRow from "../StyledComponents/FormRow";

const MonthlyTabGroup = ({ monthlyChecked, handleTabClick }) => {
	let monthly = monthlyChecked;
	let single = !monthlyChecked;
	const handleKeyUp = e => {
		const { keyCode } = e;
		switch (keyCode) {
			case 35: // end key
				e.preventDefault();
				handleTabClick({ target: { id: "singlegift" } });
				break;
			case 36: // home key
				e.preventDefault();
				handleTabClick({ target: { id: "monthlygift" } });
				break;
			case 37: // left arrow
				e.preventDefault();
				handleTabClick({
					target: { id: monthlyChecked ? "singlegift" : "monthlygift" },
				});
				break;
			case 39: // right arrow
				e.preventDefault();
				handleTabClick({
					target: { id: monthlyChecked ? "singlegift" : "monthlygift" },
				});
				break;
		}
	};
	return (
		<FieldSet className="monthly-giving-info">
			<legend>Select Monthly or One-Time Gift</legend>
			<FormRow
				className="monthly-tab"
				role="tablist"
				aria-label="Giving Tabs"
				id="monthlhy-club-tab-block"
				aria-controls="giving-tabs"
				onKeyUp={handleKeyUp}
			>
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
};

export default MonthlyTabGroup;
