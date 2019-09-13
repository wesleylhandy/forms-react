import React, { useContext, memo, useMemo } from "react";
import styled from "@emotion/styled";

import { FormConfigContext } from "../../Contexts/FormConfigProvider";

import CBNLogo from "../SVG/CBNLogo";

const Header = styled.header`
	box-sizing: border-box;
	width: 100%;
	height: auto;
	padding: 10px;
	margin: 0;
	margin-bottom: 35px;
	background: #747474;
	background: ${props => props.background};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	@media screen and (max-width: ${props => props.formMaxWidth}) {
		margin-bottom: 0;
	}
	div.header-container {
		max-width: ${props => props.formMaxWidth};
		margin: 0 auto;
		padding: 30px 10px;
		width: 100%;
		box-sizing: border-box;
		h2.header-title {
			font-size: 40px;
			font-weight: bold;
			color: #ffffff;
			text-align: center;
			line-height: 49px;
			margin: 0;
			margin-block-start: 0;
			margin-block-end: 0;
			padding: 0;
		}
		p.header-description {
			font-size: 26px;
			font-weight: 600;
			line-height: 32px;
			color: #ffffff;
			text-align: center;
			margin: 0;
			margin-block-start: 0;
			margin-block-end: 0;
			padding: 0;
			@media screen and (max-width: 649px) {
				font-size: 20px;
				line-height: 23px;
			}
		}
		@media screen and (max-width: 649px) {
			padding: 20px 10px;
		}
	}
`;

const Nav = styled.nav`
	height: 100px;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	@media screen and (max-width: 649px) {
		height: 45px;
	}
	div.nav-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		svg {
			height: 60px;
			.logo-1,
			.logo-2 {
				fill: #fff;
			}
			.logo-2 {
				fill-rule: evenodd;
			}
			@media screen and (max-width: 649px) {
				height: 45px;
			}
			@media screen and (max-width: 530px) {
				margin-top: 10px;
				.logo-1:not(.cbn-letter):not(.cbn-fire),
				.logo-2:not(.cbn-letter):not(.cbn-fire){
					display: none;
				}
			}
		}
		span {
			color: #ffffff;
			flex: 1 1 135px;
			text-align: right;
			a {
				font-size: 17px;
				font-weight: 500;
				color: white;
				text-decoration: none;
				transition: color 200ms ease-in-out;
			}
			a:hover,
			a:active,
			a:focus {
				text-decoration: underline;
				color: #ddd;
			}
			@media screen and (max-width: 460px) {
				flex-grow: 0;
			}
		}
	}
`;

const HeaderBlock = ({ successTitle, successDescription }) => {
	const { getCssConfig, getFormConfig } = useContext(FormConfigContext);
	const { formMaxWidth } = useMemo(() => getCssConfig("form"), []);
	const { background, title, description } = useMemo(
		() => getFormConfig("formHeader"),
		[]
	);
	return (
		<Header
			className="header"
			formMaxWidth={formMaxWidth}
			background={background}
		>
			<Nav className="nav">
				<div className="nav-container">
					<CBNLogo />
					<span>
						Give By Phone <a href="tel:18007007000">1-800-700-7000</a>
					</span>
				</div>
			</Nav>
			<div className="header-container">
				<h2 className="header-title">{successTitle ? successTitle : title}</h2>
				<p className="header-description">
					{successDescription ? successDescription : description}
				</p>
			</div>
		</Header>
	);
};

export default memo(HeaderBlock);
