import React from "react";
import styled from "@emotion/styled";

const ClubAskArrayBtn = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
	&.askbutton--club {
		box-sizing: border-box;
		flex: 0 0 95px;
		margin: 0 2.5px;
		@media screen and (max-width: 559px) {
			flex: 0 0 calc((100% - 77px) / 5);
		}
	}
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	div.askbutton__amt {
		background-color: ${props => props.arrayBackgroundColor};
		border-radius: ${props => props.arrayBorderRadius};
		border: 1px solid ${props => props.arrayBorderColor};
		box-sizing: border-box;
		color: ${props => props.arrayColor};
		cursor: pointer;
		width: 100%;
		font-weight: 600;
		font-size: 30px;
		height: 50px;
		text-align: center;
		-webkit-transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
			background-color 200ms ease-in-out;
		transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
			background-color 200ms ease-in-out;
		@media screen and (max-width: 559px) {
			font-size: 18px;
		}
		.dollar-sign {
			font-size: 21px;
			margin-right: 1px;
			font-weight: bold;
			@media screen and (max-width: 559px) {
				font-size: 16px;
			}
		}
	}
	&:focus div:not(.club-level),
	&:hover div:not(.club-level),
	&:active div:not(.club-level),
	div:not(.club-level):hover,
	div:not(.club-level):focus,
	div:not(.club-level):active,
	&.selected div:not(.club-level) {
		background-color: ${props => props.arrayHoverBackgroundColor};
		color: ${props => props.arrayHoverColor};
		border-color: ${props => props.arrayHoverBorderColor};
	}
	div.club-level {
		position: absolute;
		font-weight: bold;
		font-size: 14px;
		color: ${props => props.arrayDescriptorColor};
		text-align: center;
		width: 110%;
		left: 50%;
		top: calc(100% + 7px);
		transform: translateX(-50%);
		line-height: 15px;
		@media screen and (max-width: 395px) {
			width: 100%;
			font-size: 12px;
			line-height: 13px;
		}
	}
`;

export default ClubAskArrayBtn;
