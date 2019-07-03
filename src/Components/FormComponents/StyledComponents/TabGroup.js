import React from "react";
import styled from "@emotion/styled";

const TabGroup = styled.div`
	&.tab-group {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 80px;
		line-height: 80px;
		flex: 1 1 auto;
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
		height: 80px;
		line-height: 80px !important;
		cursor: pointer;
		width: 100%;
		text-align: center;
		background: #fff;
		border-radius: 4px;
		border: 2px solid #333;
		margin-bottom: 0;
		color: #333;
		transition: color 200ms ease-in-out, background-color 200ms ease-in-out,
			border-color 200ms ease-in-out;
	}
	input[type="checkbox"].tab-group__input:checked + label,
	input[type="checkbox"].tab-group__input + label:hover {
		color: #fff;
		background-color: #333;
		border-color: #999;
	}
`;

export default TabGroup;
