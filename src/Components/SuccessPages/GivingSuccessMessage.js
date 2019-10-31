import React, { useContext } from "react";
import { GivingFormContext } from "../Contexts/GivingFormProvider";
import { FormConfigContext } from "../Contexts/FormConfigProvider";

import FormPanel from "../FormComponents/StyledComponents/FormPanel";

const createMarkup = text => {
	return { __html: text };
};

const GivingSuccessMessage = ({ confirmed, successMessage }) => {
	const { trackingVars } = useContext(GivingFormContext);
	const { clearTimeouts } = useContext(FormConfigContext)
	if (confirmed) {
		clearTimeouts();
	}
	return (
		confirmed && (
			<FormPanel
				className="success-message"
				dangerouslySetInnerHTML={createMarkup(successMessage)}
			/>
		)
	);
};

export default GivingSuccessMessage;
