import React from "react";
import styled from "@emotion/styled";

const ClubTabGroup = styled.div`
	&.tab-group {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 1 1 50%;
		max-width: 360px;
	}
	input[type="checkbox"].tab-group__input {
		position: absolute !important;
		left: -10000px !important;
		top: auto !important;
		bottom: auto !important;
		width: 1px !important;
		height: 1px !important;
		overflow: hidden !important;
	}
	input[type="checkbox"].tab-group__input + label {
		display: block;
		height: 50px;
		line-height: 50px !important;
		cursor: pointer;
		width: 100%;
		text-align: center;
		background-color: ${props => props.toggleBackgroundColor};
		border-radius: ${props => props.toggleBorderRadius};
		border: 1px solid ${props => props.toggleBorderColor};
		margin-bottom: 0;
		color: ${props => props.toggleColor};
		transition: color 200ms ease-in-out, background-color 200ms ease-in-out,
			border-color 200ms ease-in-out;
		position: relative;
		font-weight: bold;
	}
	input[type="checkbox"].tab-group__input:checked + label,
	input[type="checkbox"].tab-group__input + label:hover {
		color: ${props => props.toggleHoverColor};
		background-color: ${props => props.toggleHoverBackgroundColor};
		border-color: ${props => props.toggleHoverBorderColor};
	}
	input[type="checkbox"].tab-group__input:checked + label::after {
		content: "";
		display: block;
		border-top: 10px solid ${props => props.toggleBorderColor};
		border-left: 15px solid transparent;
		border-right: 15px solid transparent;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		box-sizing: content-box;
	}
`;

export default ClubTabGroup;
