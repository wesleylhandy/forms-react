import React from "react";
import styled from "@emotion/styled";

const FormHeader = styled.h3`
	box-sizing: border-box;
	color: #333;
	text-align: center;
	font-size: 19px;
	font-weight: 600;
	line-height: calc(19px * 1.15);
	margin-bottom: 5px;
	-webkit-margin-before: 0;
	-webkit-margin-after: 0;
	-webkit-padding-before: 0;
	-webkit-padding-start: 0;
	-webkit-padding-after: 0;
	&.form-title {
		font-size: 36px;
		margin: 30px auto;
		line-height: 1.33;
	}
	&.askarray__header,
	&.form-header__payment {
		margin-bottom: 19px;
		text-transform: uppercase;
	}
	&.form-header--small {
		font-size: 24px;
	}
`;

export default FormHeader;
