import React from "react";
import styled from "@emotion/styled";

export const CardSection = styled.section`
	background: white;
	margin: 0 auto;
	padding: 30px 0;
	width: 100%;
	h3 {
		font-weight: bold;
		font-size: 22px;
		margin: 0;
		padding: 0 0 20px 0;
		text-align: center;
	}
	@media screen and (max-width: 623px) {
		background: #eceff1;
	}
`;

export const CardContainer = styled.div`
	width: calc(100% - 20px);
	max-width: ${props => (props.maxWidth ? props.maxWidth : "1200px")};
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	aligh-items: center;
	@media screen and (max-width: 623px) {
		flex-wrap: wrap;
	}
`;

export const Card = styled.div`
	&.card {
		height: 250px;
		flex: 0 1 380px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
		color: #3b3b3b;
	}
	&.card + div.card {
		margin-left: 10px;
	}
	h4.card__title {
		font-weight: bold;
		font-size: 22px;
		margin: 0;
		padding: 10px 0;
		text-align: center;
		flex: 0 0 auto;
		background-color: #e1e5e8;
	}
	div.card__body {
		padding: 10px;
		flex: 1 1 auto;
		background-color: #eceff1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		@media screen and (max-width: 623px) {
			background: #f1f4f6;
		}
		.mail-in-form,
		.cbn-address,
		.giving-links,
		.phone--info,
		.gift-info {
			font-size: 17px;
			line-height: 22px;
			text-align: center;
			em {
				font-style: italic;
			}
			@media screen and (max-width: 739px) {
				font-size: 16px;
				a,
				.cbn-address--street,
				.cbn-address--city-state-zip {
					font-size: 16px;
				}
			}
			@media screen and (max-width: 623px) {
				font-size: 17px;
				a,
				.cbn-address--street,
				.cbn-address--city-state-zip {
					font-size: 17px;
				}
			}
		}
		.phone {
			text-align: center;
			a {
				cursor: pointer;
				font-size: 28px;
				color: #3b3b3b;
				text-decoration: none;
			}
		}
	}
	a {
		color: ${props => props.linkColor};
		text-decoration: ${props => props.linkTextDecoration};
		text-align: center;
		transition: color 200ms ease-in-out;
		&:hover,
		&:active,
		&:focus {
			text-decoration: ${props => props.linkHoverTextDecoration};
			color: ${props => props.linkHoverColor};
		}
	}
	@media screen and (max-width: 623px) {
		&.card {
			margin: 0 auto;
		}
		&.card + div.card {
			margin: 0 auto;
			margin-top: 20px;
		}
	}
`;
