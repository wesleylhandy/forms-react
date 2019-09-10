import React from "react";
import styled from "@emotion/styled";

const FormPanel = styled.div`
	&.name-address__info {
		box-sizing: border-box;
		margin: 19px auto;
		max-width: 100%;
	}
	&.shipping-address__container {
		box-sizing: border-box;
		margin-top: 20px;
	}
	&.form-panel {
		background: #fff;
		border: none;
		border-radius: 0;
		box-sixing: border-box;
		padding: 0;
		width: 100%;
	}
	&.designation-panel {
		margin-bottom: 30px;
	}
	& + .form-panel {
		margin-top: 0;
	}
	&:empty {
		padding: 0;
		margin: 0;
	}
`;

export default FormPanel;
