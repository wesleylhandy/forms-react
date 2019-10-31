import React, { useContext } from "react";
import { SignUpFormContext } from "../Contexts/SignUpFormProvider";
import { FormConfigContext } from "../Contexts/FormConfigProvider";

import FormPanel from "../FormComponents/StyledComponents/FormPanel";

const createMarkup = text => {
	return { __html: text };
};

const SignUpSuccessMessage = ({ submitted, successMessage }) => {
	const {
		fields: { Firstname, Lastname, Spousename },
	} = useContext(SignUpFormContext);
	const { clearTimeouts } = useContext(FormConfigContext);
	if (submitted) {
		clearTimeouts();
	}
	return (
		submitted && (
			<FormPanel
				className="success-message"
				dangerouslySetInnerHTML={createMarkup(successMessage)}
			/>
		)
	);
};

export default SignUpSuccessMessage;
