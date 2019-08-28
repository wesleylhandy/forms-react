import React from "react";
import styled from "@emotion/styled";

const FormGroup = styled.div`
	position: relative;
	margin-bottom: 20px;
	margin-top: 20px;
	flex: 1 1 auto;
	&.form-group--Title,
	&.form-group--Suffix {
		width: 120px;
		flex: 0 0 120px;
		box-sizing: border-box;
	}
	&.form-group--Firstname,
	&.form-group--Lastname {
		box-sizing: border-box;
	}
	&.form-group--State,
	&.form-group--Country {
		max-width: 50%;
	}
	&.form-group--Phone,
	&.form-group--Email {
		width: 50%;
	}
	&.form-group--cvnCode {
		width: 80px;
		flex: 0 0 80px;
		box-sizing: border-box;
	}
	&.form-group--cvnCode + div.cvn-code-info {
		display: block;
		align-self: center;
	}
	&.form-group--cvnCode + div.cvn-code-info > a {
		color: #444;
		transition: color 200ms ease-in-out;
	}
	&.form-group--cvnCode + div.cvn-code-info > a:hover,
	&.form-group--cvnCode + div.cvn-code-info > a:active,
	&.form-group--cvnCode + div.cvn-code-info > a:focus {
		color: #747474;
	}
	label {
		box-sizing: border-box;
		color: ${props => props.labelColor};
		font-size: calc(19px * 0.7);
		font-weight: ${props => props.labelFontWeight};
		margin-bottom: 0;
		position: absolute;
		opacity: ${props => props.labelOpacity};
		bottom: calc(
			100% - ${props => (props.inputHoverBoxShadow == "none" ? "6px" : "2px")}
		);
		left: 10px;
		transition: opacity 150ms ease-in-out;
		text-transform: ${props => props.labelTextTransform};
	}
	label span {
		color: crimson;
	}
	&:hover label,
	&:active label,
	&:focus label {
		opacity: 1;
	}
	input,
	select,
	textarea {
		box-sizing: border-box;
		color: ${props => props.inputColor};
		font-size: 19px;
		font-weight: 600;
		height: 44px;
		display: block;
		width: 100%;
		margin-top: 5px;
		padding: 0 10px;
		line-height: 44px !important;
		background: none;
		background-color: ${props => props.inputBackgroundColor};
		border: ${props => props.inputBorderWidth} solid
			${props => props.inputBorderColor};
		border-radius: ${props => props.inputBorderRadius};
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
		position: relative;
		margin-bottom: 0;
	}
	textarea {
		height: auto;
		${props => ({
			minHeight: props.minHeight,
		})}
	}
	input::placeholder,
	select::placeholder,
	textarea::placeholder {
		font-weight: 600;
		color: ${props => props.inputPlaceholderColor};
	}
	input:active,
	input:hover,
	input:focus,
	select:active,
	select:hover,
	select:focus,
	textarea:active,
	textarea:hover,
	textarea:focus {
		border: ${props => props.inputBorderWidth} solid
			${props => props.inputHoverBorderColor};
		box-shadow: ${props => props.inputHoverBoxShadow};
		background-color: ${props => props.inputHoverBackgroundColor};
		outline: none;
	}
	select:invalid {
		color: #747474;
		appearance: none;
	}
	input:disabled,
	select:disabled,
	textarea:disabled {
		background: #919191;
		cursor: not-allowed;
		appearance: none;
	}
	input.error,
	select.error,
	textarea.error {
		border: ${props => props.inputBorderWidth} solid
			${props => props.inputErrorColor};
	}
	@media screen and (max-width: 613px) {
		&.form-group--Lastname {
			flex-basis: calc(100% - 130px);
			margin-left: 0;
		}
		&.form-group--Middlename {
			width: 100%;
			margin-left: 0;
		}
		&.form-group--Firstname {
			flex-basis: calc(100% - 130px);
		}
	}
	@media screen and (max-width: 500px) {
		&.form-group--Phone,
		&.form-group--Email {
			width: 100%;
		}
	}
	@media screen and (max-width: 414px) {
		&.form-group--State,
		&.form-group--City {
			max-width: 100%;
			width: 100%;
		}
		&.form-group--Firstname,
		&.form-group--Lastname {
			width: 100%;
			flex-basis: auto;
		}
	}
	@media screen and (max-width: 365px) {
		&.form-group--Zip,
		&.form-group--Country {
			max-width: 100%;
			width: 100%;
		}
	}
`;

export default FormGroup;
