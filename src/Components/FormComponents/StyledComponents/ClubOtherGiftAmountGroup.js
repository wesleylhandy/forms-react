import React, { useContext } from "react";
import styled from "@emotion/styled";

import { FormConfigContext } from "../../Contexts/FormConfigProvider";

const ClubOtherGiftAmountStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	line-height: unset;
	&.askarray--other {
		position: relative;
		box-sizing: border-box;
		flex: 0 0 150px;
		margin: 0 2.5px;
		@media screen and (max-width: 716px) {
			margin: 0 auto;
			margin-top: 50px;
			flex-basis: 160px;
			justify-self: center;
		}
	}
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
		line-height: unset;
		margin-bottom: 0;
		position: relative;
		white-space: nowrap;
		width: 100%;
		label {
			font-size: calc(19px * 0.7);
			font-weight: 600;
			color: ${props => props.arrayColor};
			box-sizing: border-box;
			position: absolute;
			left: 50%;
			top: 100%;
			transform: translateX(-50%);
		}
	}
	div.askarray__form-group--other {
		justify-content: center;
		max-width: 400px;
		position: relative;
		z-index: 1;
		&:before {
			color: ${props => props.arrayColor};
			display: block;
			position: absolute;
			${props => props.otherAmount ? "content: '$'" : "content: '$ Other'"};
			cursor:text;
			font-size: 21px;
			font-weight: 600;
			z-index: 5;
			left: 10px;
			top: 13px;
			width: 10px;
			height: 30px;
			@media screen and (max-width: 559px) {
				top: 14px;
				font-size: 18px;
			}
			@media screen and (max-width: 395px) {
				top: 15.5px;
				font-size: 15px;
			}
		}
		&:hover:before {
			content: "$";
			cursor: default;
		}
		&.selected:before, &:focus-within:before, &:focus:before {
			color: ${props => props.arrayHoverColor};
			content: "$";
		}
		label.form-group__other-input--label {
			width: 1px;
			height: 1px;
			position: absolute;
			top: -10000px;
		}
		input {
			position: relative;
			appearance: none;
			background: none;
			background-color: ${props => props.arrayBackgroundColor};
			height: 50px;
			width: 100%;
			-webkit-transition: border-color 200ms ease-in-out,
				color 200ms ease-in-out, background-color 200ms ease-in-out;
			transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
				background-color 200ms ease-in-out;
			border: 1px solid ${props => props.arrayBorderColor};
			border-radius: ${props => props.arrayBorderRadius};
			box-sizing: border-box;
			color: ${props => props.arrayColor};
			font-size: 30px;
			text-align: left;
			padding-left: 25px;
			font-weight: 600;
			max-width: 220px;
			white-space: nowrap;
			@media screen and (max-width: 559px) {
				font-size: 24px;
				padding-left: 21px;
			}
			@media screen and (max-width: 395px) {
				font-size: 19px;
				padding-left: 19px;
			}
		}
		input:active,
		input:focus {
			border-color: ${props => props.arrayHoverBorderColor};
			background-color: ${props => props.arrayHoverBackgroundColor};
			color: ${props => props.arrayHoverColor};
			box-sizing: border-box;
		}
		&.selected input {
			border-color: ${props => props.arrayHoverBorderColor};
			background-color: ${props => props.arrayHoverBackgroundColor};
			color: ${props => props.arrayHoverColor};
		}
		div.other-amt-error {
			box-sizing: border-box;
			position: absolute;
			color: ${props => props.errorColor};
			width: auto;
			font-weight: 600;
			font-size: 16px;
			opacity: 1;
			overflow: hidden;
			max-width: 100%;
			white-space: nowrap;
			bottom: -25px;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	div.selected {
	}
`;

const ClubOtherGiftAmountGroup = ({ children, style = {} }) => {
	const { getCssConfig } = useContext(FormConfigContext);
	const {
		arrayColor = "#fff",
		arrayBackgroundColor = "#1775BC",
		arrayBorderColor = "transparent",
		arrayBorderRadius = "5px",
		arrayHoverColor = "#1775BC",
		arrayHoverBackgroundColor = "#fff",
		arrayHoverBorderColor = "#1775BC",
		arrayDescriptorColor = "#DDB007",
	} = getCssConfig("array");
	const { errorColor = "crimson" } = getCssConfig("error");
	return (
		<ClubOtherGiftAmountStyle
			id="OtherGiftAmount"
			className="askarray--other"
			style={style}
			arrayColor={arrayColor}
			arrayBackgroundColor={arrayBackgroundColor}
			arrayBorderColor={arrayBorderColor}
			arrayBorderRadius={arrayBorderRadius}
			arrayHoverColor={arrayHoverColor}
			arrayHoverBackgroundColor={arrayHoverBackgroundColor}
			arrayHoverBorderColor={arrayHoverBorderColor}
			arrayDescriptorColor={arrayDescriptorColor}
			errorColor={errorColor}
		>
			{children}
		</ClubOtherGiftAmountStyle>
	);
};

export default ClubOtherGiftAmountGroup;
