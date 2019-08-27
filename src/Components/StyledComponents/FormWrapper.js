import React from "react";
import styled from "@emotion/styled";

const FormWrapper = styled.main`
	background: ${props => props.formBackgroundColor};
	box-sizing: border-box;
	border: ${props => props.formBorderWidth} solid ${props => props.formBorderColor};
	border-radius: ${props => props.formBorderRadius};
	color: ${props => props.formColor};
	max-width: ${props => props.formMaxWidth};
	padding: ${props => props.formPadding};
	margin: ${props => props.formMargin};
	width: 100%;
	@media screen and (max-width: 493px) {
		padding: 20px 10px;
	}
`;

export default FormWrapper;
