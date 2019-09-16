import React from "react";
import styled from "@emotion/styled";

export const DesignationOverlay = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	background: rgba(0, 0, 0, 0.19);
`;

export const DesignationContainer = styled.div`
	position: relative;
	z-index: 1;
	@media screen and (max-width: 716px) {
		margin-top: 10px;
	}
`;

export const Designation = styled.li`
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #f5f7f8;
	margin: 0 auto;
	max-width: 483px;
	padding: 18px;
	width: 100%;
	&.selected {
		background: #ffffff;
	}
	.designation__image {
		width: 84px;
		flex: 0 0 84px;
		border-radius: 50%;
		justify-self: flex-start;
		overflow: hidden;
		margin-right: 10px;
		img.img-responsive {
			display: block;
			max-width: 100%;
		}
		@media screen and (max-width: 440px) {
			display: none;
		}
	}
	.designation__body {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: left;
		flex-basis: 1 0 274px;
		h4.designation__title {
			margin: 0;
			color: #181818;
			font-size: 17px;
			font-weight: bold;
			line-height: 1.235;
		}
		.designation__description {
			font-size: 14px;
			line-height: 1.214;
		}
	}
	.designation--arrow {
		display: flex;
		justify-self: flex-end;
		width: 26px;
		flex: 0 0 26px;
		margin-left: 10px;
	}
	&.display {
		background-color: #f5f7f8;
		border: 1px solid #b4b2b2;
		border-radius: 3px;
		max-width: 407px;
		padding: 8px 15px;
		.designation__image {
			width: 60px;
			flex: 0 0 60px;
		}
		.designation__body {
			h4.designation__title {
				font-size: 15px;
			}
			.designation__description {
				line-height: 15px;
			}
		}
	}
	& + .designation {
		border-top: 1px solid #979797;
	}
	@media screen and (max-width: 585px) {
		max-width: 100%;
	}
`;

export const DesignationCheck = styled.div`
	display: flex;
	opacity: ${props => (props.selected || props.hover ? "1" : "0")};
	color: ${props => (!props.selected ? "#ededed" : "#fff")};
	justify-self: flex-end;
	padding: 2px;
	margin-left: 10px;
	font-size: 24px;
	border-radius: 50%;
	transition: opacity 200ms ease-in-out;
`;

export const DesignationListContainer = styled.div`
	position: absolute;
	z-index: 10;
	width: 483px;
	left: 50%;
	margin-top: 20px;
	transform: translateX(-50%);
	height: 480px;
	border: 1px solid #979797;
	background-color: #f5f7f8;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.17);
	-webkit-overflow-scrolling: touch;
	.designation-list--close {
		box-sizing: border-box;
		height: 37px;
		display: flex;
		align-items: center;
		font-size: 24px;
		border-bottom: 1px solid #979797;
		padding-left: 18px;
		svg {
			cursor: pointer;
		}
	}
	&::after {
		content: "";
		display: block;
		position: absolute;
		top: -8px;
		left: 50%;
		transform: translateX(-50%) rotate(45deg);
		height: 18px;
		width: 18px;
		box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.17);
		border: 1px solid #979797;
		z-index: -2;
	}
	&::before {
		content: "";
		display: block;
		position: absolute;
		top: -8px;
		left: 50%;
		transform: translateX(-50%) rotate(45deg);
		height: 15px;
		width: 15px;
		background-color: #f5f7f8;
		z-index: -1;
	}
	@media screen and (max-width: 585px) {
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		min-height: 100%;
		height: 100vh;
		max-width: 100%;
		width: 100vw;
		border: none;
		box-shadow: none;
		transform: none;
		position: fixed;
		margin-top: 0;
		background-color: #f5f7f8;
		&::after,
		&::before {
			display: none;
		}
	}
`;

export const DesignationList = styled.ul`
	display: block;
	overflow-x: hidden;
	overflow-y: scroll;
	background-color: #f5f7f8;
	position: absolute;
	top: 0px;
	left: 0;
	bottom: 0;
	right: 0;
	list-style: none;
	-webkit-margin-before: 0 !important;
	-webkit-margin-after: 0 !important;
	-webkit-margin-start: 0 !important;
	-webkit-margin-end: 0 !important;
	-webkit-padding-before: 0 !important;
	-webkit-padding-after: 0 !important;
	-webkit-padding-start: 0 !important;
	-webkit-padding-end: 0 !important;
	margin-block-start: 0 !important;
	margin-block-end: 0 !important;
	margin-inline-start: 0 !important;
	margin-inline-end: 0 !important;
	padding-inline-start: 0 !important;
	padding-inline-end: 0 !important;
	@media screen and (max-width: 585px) {
		top: 37px;
	}
`;
