import React from "react";
import styled from "@emotion/styled";

const FormWrapper = styled.main`
	background: #fff;
	box-sizing: border-box;
	border: 0 solid #333;
	border-radius: 10px;
	color: #333;
	max-width: 768px;
	padding: 20px;
	width: 100%;
	@media screen and (max-width: 493px) {
		padding: 20px 10px;
	}
`;

export default FormWrapper;
