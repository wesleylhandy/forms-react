import React from "react";
import styled from "@emotion/styled";

const FormGroup = styled.div`
	position: relative;
	margin-bottom: calc(19px * 0.7);
	margin-top: calc(19px * 0.7);
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
		margin-right: 10px;
	}
	&.form-group--cvnCode + div.cvn-code-info {
		display: block;
		align-self: center;
	}
	&.form-group--cvnCode + div.cvn-code-info>a {
		color: #444;
		transition: color 200ms ease-in-out;
	}
	&.form-group--cvnCode + div.cvn-code-info>a:hover,
	&.form-group--cvnCode + div.cvn-code-info>a:active,
	&.form-group--cvnCode + div.cvn-code-info>a:focus {
		color: #747474;
	}
	label {
		box-sizing: border-box;
		color: #333;
		font-size: calc(19px * 0.7);
		font-weight: 600;
		margin-bottom: 0;
		position: absolute;
		opacity: 0;
		bottom: calc(100% - 2px);
		left: 10px;
		transition: opacity 150ms ease-in-out;
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
		color: #333;
		font-size: 19px;
		font-weight: 600;
		height: 44px;
		display: block;
		width: 100%;
		margin-top: 5px;
		padding: 0 10px;
		line-height: 44px !important;
		background: none;
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		border-radius: 0;
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
		color: #747474;
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
		border: 1px solid #777777;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #747474;
		background-color: #fff;
		outline: none;
	}
	select:invalid {
		color: #747474;
	}
	input:disabled,
	select:disabled,
	textarea:disabled {
		background: #919191;
		cursor: not-allowed;
	}
	input.error,
	select.error,
	textarea.error {
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px crimson;
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
