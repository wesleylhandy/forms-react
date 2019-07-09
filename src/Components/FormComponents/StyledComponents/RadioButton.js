import React from "react";
import styled from "@emotion/styled";

const RadioButton = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	padding: 0 5px;
	height: calc(19px * 2);
	line-height: calc(19px * 2);
	input[type="radio"] {
		box-sizing: border-box;
		position: absolute;
		opacity: 0;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	}
	input[type="radio"] + label {
		box-sizing: border-box;
		font-size: calc(19px * 0.7);
		font-weight: 600;
	}
	input[type="radio"] + label.Visa,
	input[type="radio"] + label.MasterCard,
	input[type="radio"] + label.AmericanExpress,
	input[type="radio"] + label.Discover {
		box-sizing: border-box;
		font-size: 40px;
		font-weight: 600;
		display: flex;
		align-items: center;
	}
	input[type="radio"] + label.Visa {
		color: #172274;
	}
	input[type="radio"] + label.MasterCard {
		color: #ea001b;
	}
	input[type="radio"] + label.AmericanExpress {
		color: #2e78bf;
	}
	input[type="radio"] + label.Discover {
		color: #f58220;
	}
	input[type="radio"] + label:before {
		content: "";
		background: #ffffff;
		box-sizing: border-box;
		border-radius: 100%;
		border: 1px solid #d8dde6;
		display: inline-block;
		width: calc(19px * 1.1);
		height: calc(19px * 1.1);
		position: relative;
		margin-right: calc(19px * 0.8);
		vertical-align: middle;
		cursor: pointer;
		text-align: center;
		transition: all 200ms ease;
	}
	input[type="radio"]:checked + label:before {
		background-color: #333;
		box-sizing: border-box;
		box-shadow: inset 0 0 0 4px #ffffff;
	}
	input[type="radio"]:focus + label:before,
	input[type="radio"]:hover + label:before {
		outline: none;
		border-color: #333;
		box-sizing: border-box;
	}
	input[type="radio"]:disabled + label:before {
		box-shadow: inset 0 0 0 4px #ffffff;
		border-color: #bfbfbf;
		background: #bfbfbf;
		box-sizing: border-box;
	}
	input[type="radio"] + label:empty:before {
		margin-right: 0;
		box-sizing: border-box;
	}
`;

export default RadioButton;
