import React from "react";
import styled from "@emotion/styled";

const FormRow = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	&.submit-row {
		position: relative;
	}
	&.wrap {
		flex-wrap: wrap;
	}
	&.ship-to-yes-row {
		line-height: 19px !important;
		margin-bottom: 10px;
		align-items: center;
	}
	div + div {
		box-sizing: border-box;
		margin-left: calc(19px * 0.5);
	}
	&.monthly-radio {
		box-sizing: border-box;
		margin: 19px auto;
		max-width: calc(19px * 15);
	}
	&.monthly-tab {
		box-sizing: border-box;
		margin: 0 auto;
		width: 100%;
		border-bottom: 5px solid transparent;
		div + div {
			margin-left: 0;
		}
	}
	&.monthly-giving-day {
		position: relative;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		font-size: calc(19px * 0.8);
		height: calc(19px * 2);
		h5.cc-day-of-month {
			font-size: calc(19px * 0.7);
			box-sizing: border-box;
			opacity: 1;
			text-align: center;
			-webkit-margin-before: 0;
			-webkit-margin-after: 0;
			-webkit-padding-before: 0;
			-webkit-padding-start: 0;
			-webkit-padding-after: 0;
			letter-spacing: unset;
			text-transform: none;
			color: #333;
		}
		select.cc-date {
			display: inline-block;
			width: auto;
			appearance: unset;
			background: unset;
			border: 1px solid #ccc;
			border-radius: 4px;
			box-sizing: border-box;
			color: #333;
			font-size: calc(19px * 0.7);
			font-weight: 600;
			text-align: center;
			height: unset;
			padding: calc(19px * 0.2) calc(19px * 0.3);
			margin-bottom: 0;
		}
		label {
			position: absolute;
			left: -10000px;
			top: auto;
			width: 1px;
			height: 1px;
			overflow: hidden;
		}
	}
	&.cc-type-container {
		padding-top: 15px;
	}
	&.go-back-row {
		justify-content: center;
		margin: 30px auto;
		span + span {
			margin-left: 4px;
		}
		span > a {
			color: #999;
			cursor: pointer;
			transition: color 200ms ease-in-out;
		}
		span > a:hover,
		a:active,
		a:focus {
			color: #333;
		}
	}
	@media screen and (max-width: 613px) {
		&.name-row {
			flex-wrap: wrap;
		}
	}
	@media screen and (max-width: 500px) {
		&.email-phone-row {
			flex-wrap: wrap;
		}
		&.email-phone-row > div + div {
			margin-left: 0;
		}
	}
	@media screen and (max-width: 414px) {
		&.city-state-row {
			flex-wrap: wrap;
		}
		&.city-state-row > div + div {
			margin-left: 0;
		}
		&.name-row > div + div {
			margin-left: 0;
		}
	}
	@media screen and (max-width: 365px) {
		&.zip-country-row {
			flex-wrap: wrap;
		}
		&.zip-country-row > div + div {
			margin-left: 0;
		}
	}
`;

export default FormRow;
