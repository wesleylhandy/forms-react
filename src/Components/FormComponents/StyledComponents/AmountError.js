import React from "react";
import styled from "@emotion/styled";

export const AmountError = styled.div`
	box-sizing: border-box;
	position: absolute;
	color: crimson;
	width: auto;
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
	font-weight: 800;
	font-size: calc(19px * 0.5);
	opacity: 1;
	overflow: hidden;
	max-width: 100%;
	white-space: nowrap;
`;

export default AmountError;
