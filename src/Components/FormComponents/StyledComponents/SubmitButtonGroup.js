import React from "react";
import styled from "@emotion/styled";

const SubmitButtonGroup = styled.div`
	box-sizing: border-box;
	position: relative;
	width: 100%;
	input[type="submit"] {
		appearance: none;
		background: ${props => props.backgroundColor};
		box-sizing: border-box;
		color: ${props => props.color};
		cursor: pointer;
		display: block;
		border: 2px solid transparent;
		border-radius: ${props => props.borderRadius};
		display: block;
		font-weight: 600;
		font-size: calc(19px * 1.1);
		padding: 0 20px;
		margin: 19px auto;
		width: 300px;
		height: calc(19px * 2.3);
		transition: background-color 200ms ease-in-out, color 200ms ease-in-out,
			border-color 200ms ease-in-out;
	}
	input[type="submit"]:hover,
	input[type="submit"]:active,
	input[type="submit"]:focus {
		background-color: ${props => props.hoverBackgroundColor};
		color: ${props => props.hoverColor};
		border-color: ${props => props.hoverBorderColor};
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
