import React from "react";
import styled from "@emotion/styled";

export const InputError = styled.div`
	box-sizing: border-box;
	position: absolute;
	color: ${props => props.inputErrorColor || "crimson"};
	width: calc(100% - 6px);
	line-height: unset;
	left: 3px;
	bottom: auto;
	top: 50px;
	font-weight: 600;
	font-size: 15px;
	opacity: 1;
	overflow: hidden;
	white-space: nowrap;
`;

export default InputError;
