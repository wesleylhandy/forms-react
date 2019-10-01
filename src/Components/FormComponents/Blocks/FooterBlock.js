import React, { useContext, memo, useMemo } from "react";
import styled from "@emotion/styled";

import { FormConfigContext } from "../../Contexts/FormConfigProvider";

const Footer = styled.footer`
	box-sizing: border-box;
	background: #fff;
	div.container {
		box-sizing: border-box;
		color: #3b3b3b;

		max-width: ${props => props.formMaxWidth};
		width: 100%;
		padding: 30px 10px;
		margin: 0 auto;
		.cbn-info,
		.footer-links {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			color: #181818;
			font-size: 15px;
			line-height: 18px;
		}
		.cbn-info {
			padding: 10px 0;
			text-align: center;
			.year {
				font-size: 15px;
				line-height: 18px;
				margin: 0 5px;
			}
		}
		.footer-links {
			& > * {
				margin: 2.5px;
			}
			.pipe {
				font-size: 15px;
				line-height: 18px;
			}
			a {
				color: #181818;
				text-decoration: none;
				transition: color 200ms ease-in-out;
				font-size: 15px;
				line-height: 18px;
			}
			a:hover,
			a:focus,
			a:active {
				text-decoration: underline;
				color: #484848;
			}
		}
		@media screen and (max-width: 623px) {
			background: #eceff1;
		}
	}
`;

const FooterBlock = () => {
	const { getCssConfig } = useContext(FormConfigContext);
	const { formMaxWidth } = useMemo(() => getCssConfig("form"), []);
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Footer className="footer">
			<div className="container">
				<div className="cbn-info">
					&copy;
					<span className="year">{year}</span>The Christian Broadcasting
					Network, Inc., A Non-profit 501 (c)(3) Charitable Organization
				</div>
				<div className="footer-links">
					<a
						className="footer-links--link disabled"
						tabIndex="-1"
						role="button"
						aria-disabled="true"
					>
						Home
					</a>
					<span className="pipe">|</span>
					<a
						className="footer-links--link disabled"
						tabIndex="-1"
						role="button"
						aria-disabled="true"
					>
						About CBN
					</a>
					<span className="pipe">|</span>
					<a
						className="footer-links--link disabled"
						tabIndex="-1"
						role="button"
						aria-disabled="true"
					>
						Donor Privacy Notice
					</a>
					<span className="pipe">|</span>
					<a
						className="footer-links--link disabled"
						tabIndex="-1"
						role="button"
						aria-disabled="true"
					>
						CBN.com Privacy Notice
					</a>
					<span className="pipe">|</span>
					<a
						className="footer-links--link disabled"
						tabIndex="-1"
						role="button"
						aria-disabled="true"
					>
						Terms of Use
					</a>
					<span className="pipe">|</span>
					<a
						className="footer-links--link disabled"
						tabIndex="-1"
						role="button"
						aria-disabled="true"
					>
						Contact
					</a>
				</div>
			</div>
		</Footer>
	);
};

export default memo(FooterBlock);
