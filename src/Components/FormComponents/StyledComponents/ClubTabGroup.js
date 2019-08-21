import React from "react";
import styled from "@emotion/styled";

const ClubTabGroup = styled.div`
	&.tab-group {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 50px;
		line-height: 50px;
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
		background: #fff;
		border-radius: 4px;
		border: 2px solid #009bdf;
		margin-bottom: 0;
		color: #009bdf;
		transition: color 200ms ease-in-out, background-color 200ms ease-in-out,
            border-color 200ms ease-in-out;
        position: relative;
	}
	input[type="checkbox"].tab-group__input:checked + label,
	input[type="checkbox"].tab-group__input + label:hover {
		color: #fff;
		background-color: #009bdf;
		border-color: #009bdf;
    }
    input[type="checkbox"].tab-group__input:checked + label::after {
        content: "";
        display: block;
        border-top: 10px solid #009bdf;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export default ClubTabGroup;
