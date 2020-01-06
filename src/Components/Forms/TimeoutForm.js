import React from "react";

import AskForm from "./AskForm";
import Banner from "../StyledComponents/Banner";

const TimeoutForm = props => (
	<>
		<Banner expired={props.expired} />
		<AskForm {...props} />
	</>
);

export default TimeoutForm;
