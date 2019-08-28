import React from "react";
import styled from "@emotion/styled";

const FormError = styled.div`
	box-sizing: border-box;
	position: absolute;
	color: ${props => props.color};
	width: auto;
	font-weight: 600;
	font-size: 16px;
	opacity: 1;
	overflow: hidden;
	max-width: 100%;
	white-space: nowrap;
	left: 50%;
	transform: translateX(-50%);
	bottom: calc(0% - 20px);
`;

export default FormError;
