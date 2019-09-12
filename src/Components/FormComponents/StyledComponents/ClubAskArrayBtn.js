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
			flex-basis: 85px;
		}
		@media screen and (max-width: 470px) {
			flex-basis: 80px;
		}
		@media screen and (max-width: 445px) {
			flex-basis: 75px;
		}
		@media screen and (max-width: 420px) {
			flex-basis: 70px;
		}
		@media screen and (max-width: 395px) {
			flex-basis: 65px;
		}
		@media screen and (max-width: 370px) {
			flex-basis: 60px;
		}
		@media screen and (max-width: 345px) {
			flex-basis: 55px;
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
		-webkit-flex-basis: calc(19px * 4.55);
		-ms-flex-preferred-size: calc(19px * 4.55);
		font-weight: 600;
		font-size: 30px;
		height: 50px;
		text-align: center;
		-webkit-transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
			background-color 200ms ease-in-out;
		transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
			background-color 200ms ease-in-out;
		@media screen and (max-width: 559px) {
			font-size: 24px;
		}
		@media screen and (max-width: 395px) {
			font-size: 19px;
		}
		.dollar-sign {
			font-size: 21px;
			margin-right: 1px;
			font-weight: bold;
			@media screen and (max-width: 559px) {
				font-size: 18px;
			}
			@media screen and (max-width: 395px) {
				font-size: 15px;
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
		line-height: 1.33;
		@media screen and (max-width: 395px) {
			width: 100%;
			font-size: 12px;
		}
	}
`;

export default ClubAskArrayBtn;
