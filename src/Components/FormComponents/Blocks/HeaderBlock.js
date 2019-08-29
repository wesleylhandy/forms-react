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
	div.header-container {
		max-width: ${props => props.formMaxWidth};
		margin: 0 auto;
		padding: 30px 10px;
		width: 100%;
		h2.header-title {
			font-size: 40px;
			font-weight: bold;
			color: #ffffff;
			text-align: center;
			line-height: 1.5;
		}
		p.header-description {
			font-size: 26px;
			font-weight: 600;
			line-height: 32px;
			color: #fff;
			text-align: center;
		}
	}
`;

const Nav = styled.nav`
	height: 100px;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
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
		}
		span {
			color: #ffffff;
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
		}
	}
`;

const HeaderBlock = () => {
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
				<h2 className="header-title">{title}</h2>
				<p className="header-description">{description}</p>
			</div>
		</Header>
	);
};

export default memo(HeaderBlock);
