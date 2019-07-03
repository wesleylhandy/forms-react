import React from "react";
import styled from "@emotion/styled";

export const InputError = styled.div`
	box-sizing: border-box;
	position: absolute;
	color: crimson;
	width: auto;
	line-height: unset;
	left: 7px;
	bottom: auto;
	top: 52px;
	font-weight: 700;
	font-size: calc(19px * 0.5);
	opacity: 1;
	overflow: hidden;
	max-width: 100%;
	white-space: nowrap;
`;

export default InputError;
