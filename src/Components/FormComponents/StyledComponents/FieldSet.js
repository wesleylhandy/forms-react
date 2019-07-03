import React from "react";
import styled from "@emotion/styled";

const FieldSet = styled.fieldset`
	-webkit-margin-start: 0;
	-webkit-margin-end: 0;
	-webkit-padding-before: 0;
	-webkit-padding-start: 0;
	-webkit-padding-after: 0;
	margin: 0;
	padding: 0;
	min-width: 100%;
	border: none;
	border-image: none;
	box-sizing: border-box;
	width: 100%;
	position: relative;
	&.bordered {
		padding: 10px;
		border: 1px solid #444;
	}
	&.bordered + .bordered {
		margin-top: 20px;
	}
	legend {
		position: absolute;
		left: -9999px;
	}
`;

export default FieldSet;
