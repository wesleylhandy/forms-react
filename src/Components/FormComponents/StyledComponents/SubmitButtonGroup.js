import React from "react";
import styled from "@emotion/styled";

const SubmitButtonGroup = styled.div`
	box-sizing: border-box;
	position: relative;
	width: 100%;
	input[type="submit"] {
		appearance: none;
		background: ${props => props.submitBtnBackgroundColor};
		color: ${props => props.submitBtnColor};
		cursor: pointer;
		display: block;
		border: 1px solid ${props => props.submitBtnBorderColor};
		border-radius: ${props => props.submitBtnBorderRadius};
		display: block;
		font-weight: 600;
		font-size: 19px;
		height: 50px;
		line-height: 50px;
		margin: 20px auto;
		margin-bottom: 10px;
		width: 300px;
		box-shadow: ${props => props.submitBtnBoxShadow};
		transition: background-color 200ms ease-in-out, color 200ms ease-in-out,
			border-color 200ms ease-in-out;
	}
	input[type="submit"]:hover,
	input[type="submit"]:active,
	input[type="submit"]:focus {
		background-color: ${props => props.submitBtnHoverBackgroundColor};
		color: ${props => props.submitBtnHoverColor};
		border-color: ${props => props.submitBtnHoverBorderColor};
		cursor: pointer;
	}
	input[type="submit"]:disabled {
		cursor: wait;
		background: #747474;
		color: #f0f0f0;
	}
	@media screen and (max-width: 365px) {
		input[type="submit"] {
			max-width: 270px;
			text-align: center;
		}
	}
`;

export default SubmitButtonGroup;
