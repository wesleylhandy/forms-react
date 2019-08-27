import React, {useContext} from "react";
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
			margin-top: 40px;
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
		input {
			position: relative;
			appearance: none;
			background: none;
			background-color: ${props => props.arrayBackgroundColor};
			height: calc(19px * 2.5);
			width: 100%;
			-webkit-transition: border-color 200ms ease-in-out,
				color 200ms ease-in-out, background-color 200ms ease-in-out;
			transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
				background-color 200ms ease-in-out;
			border: 2px solid ${props => props.arrayBorderColor};
			border-radius: ${props => props.arrayBorderRadius};
			box-sizing: border-box;
			color: ${props => props.arrayColor};
			font-size: calc(19px * 1.4);
			text-align: center;
			font-weight: 600;
			max-width: 220px;
			white-space: nowrap;
		}
		input:hover,
		input:active,
		input:focus {
			border: 2px solid ${props => props.arrayHoverBorderColor};
			background-color: ${props => props.arrayHoverBackgroundColor};
			color: ${props => props.arrayHoverColor};
			box-sizing: border-box;
			outline: none;
        }
        &.selected input {
			border: 2px solid ${props => props.arrayHoverBorderColor};
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
			bottom: -36px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	
	div.selected {
	}
`;

const ClubOtherGiftAmountGroup = ({ children, style = {} }) => {
	const { getCssConfig} = useContext(FormConfigContext)
	const { 
		arrayColor = "#fff",
		arrayBackgroundColor = "#1775BC",
		arrayBorderColor = "transparent",
		arrayBorderRadius = "5px",
		arrayHoverColor = "#1775BC",
		arrayHoverBackgroundColor = "#fff",
		arrayHoverBorderColor = "#1775BC",
		arrayDescriptorColor = "#DDB007",
	} = getCssConfig("array")
	const {
		errorColor = "crimson"
	} = getCssConfig("error")
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
	)
};

export default ClubOtherGiftAmountGroup;
