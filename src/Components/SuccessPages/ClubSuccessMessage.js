import React, { useContext } from "react";
import { GivingFormContext } from "../Contexts/GivingFormProvider";
import { LiveMessage } from 'react-aria-live'

import FormWrapper from '../StyledComponents/FormWrapper';
import FormPanel from "../FormComponents/StyledComponents/FormPanel";

const createMarkup = text => {
	return { __html: text };
};

const ClubSuccessMessage = ({ confirmed, successMessage }) => {
	const { trackingVars } = useContext(GivingFormContext);
	return (
		confirmed && (
			<>
				<LiveMessage message={"Your payment is being processed. A new page with a thank you message just loaded."} aria-live="polite" />
				<FormWrapper style={{maxWidth: "818px", margin: "0 auto"}}>
					<FormPanel
						className="success-message"
						dangerouslySetInnerHTML={createMarkup(successMessage)}
					/>
				</FormWrapper>
			</>
		)
	);
};

export default ClubSuccessMessage;
