import React from "react";
import styled from "@emotion/styled";

const AskArrayBtn = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	&.askbutton {
		box-sizing: border-box;
		height: 65px;
		width: calc(100% / 3);
	}
	&.askbutton__tabs {
		height: 80px;
		box-sizing: border-box;
		flex: 1;
		flex-basis: calc((100% / 3) - 10px);
		margin: 2.5px;
	}
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	div.askbutton__amt {
		flex: 0 0 auto;
		background-color: #fff;
		border-radius: 4px;
		border: 2px solid #333;
		box-sizing: border-box;
		color: #333;
		cursor: pointer;
		-webkit-flex-basis: calc(19px * 4.55);
		-ms-flex-preferred-size: calc(19px * 4.55);
		flex-basis: calc(19px * 4.55);
		font-weight: 600;
		font-size: calc(19px * 1.4);
		height: calc(19px * 2.5);
		text-align: center;
		-webkit-transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
			background-color 200ms ease-in-out;
		transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
			background-color 200ms ease-in-out;
	}
	div.askbutton__amt--tabs {
		background-color: #fff;
		border: 1px solid #333;
		border-radius: 4px;
		box-sizing: border-box;
		color: #333;
		cursor: pointer;
		width: 100%;
		font-weight: 600;
		font-size: calc(19px * 1.4);
		height: 80px;
		text-align: center;
		transition: border-color 200ms ease-in-out, color 200ms ease-in-out,
			background-color 200ms ease-in-out;
	}
	&:focus div,
	&:hover div,
	&:active div,
	div:hover,
	div:focus,
	div:active,
	&.selected div {
		background-color: #333;
		color: #fff;
		border-color: #999;
	}
`;

export default AskArrayBtn;
