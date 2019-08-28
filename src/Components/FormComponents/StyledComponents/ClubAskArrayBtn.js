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
		@media screen and (max-width: 535px) {
			flex-basis: 70px;
		}
		@media screen and (max-width: 395px) {
			flex-basis: 60px;
		}
		@media screen and (max-width: 360px) {
			flex-basis: 55px;
		}
		@media screen and (max-width: 336px) {
			flex-basis: 52px;
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
		border: 2px solid ${props => props.arrayBorderColor};
		box-sizing: border-box;
		color: ${props => props.arrayColor};
		cursor: pointer;
		-webkit-flex-basis: calc(19px * 4.55);
		-ms-flex-preferred-size: calc(19px * 4.55);
		font-weight: 600;
		font-size: calc(19px * 1.4);
		height: calc(19px * 2.5);
		text-align: center;
		-webkit-transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
			background-color 200ms ease-in-out;
		transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
			background-color 200ms ease-in-out;
		@media screen and (max-width: 395px) {
			font-size: 19px;
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
		top: 100%;
		transform: translateX(-50%);
		@media screen and (max-width: 395px) {
			width: 100%;
			font-size: 12px;
		}
	}
`;

export default ClubAskArrayBtn;
