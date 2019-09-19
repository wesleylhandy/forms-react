import React from "react";

import Checkbox from "../FunctionalComponents/Checkbox";
import FormRow from "../StyledComponents/FormRow";

function FormOptionsBlock({ id, checked, handleInputChange, label }) {
	return (
		<FormRow className="ship-to-yes-row">
			<Checkbox
				id={id}
				checked={checked}
				handleInputChange={handleInputChange}
				label={label}
			/>
		</FormRow>
	);
}

export default FormOptionsBlock;
