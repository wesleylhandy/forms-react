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
		.footer-links,
		.disclaimer {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			color: #181818;
			font-size: 15px;
			line-height: 18px;
		}
		.disclaimer {
			font-size: 15px;
			color: #333;
			max-width: 980px;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 30px;
			text-align: center;
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

const FooterBlock = (showDisclaimer = false) => {
	const { getCssConfig, getFormConfig } = useContext(FormConfigContext);
	const { formMaxWidth } = useMemo(() => getCssConfig("form"), []);
	const year = useMemo(() => new Date().getFullYear(), []);
	const disclaimer = useMemo(() => getFormConfig("disclaimer"), []);
	return (
		<Footer className="footer">
			<div className="container">
				{showDisclaimer && disclaimer && (
					<div
						className="disclaimer"
						dangerouslySetInnerHTML={{ __html: disclaimer }}
					></div>
				)}
				<div className="cbn-info">
					&copy;
					<span className="year">{year}</span>The Christian Broadcasting
					Network, Inc., A Non-profit 501 (c)(3) Charitable Organization
				</div>
				<div className="footer-links">
					<a className="footer-links--link" href="https://www.cbn.com/">
						Home
					</a>
					<span className="pipe">|</span>
					<a className="footer-links--link" href="http://www1.cbn.com/about">
						About CBN
					</a>
					<span className="pipe">|</span>
					<a
						className="footer-links--link"
						href="http://www1.cbn.com/cbn-donor-privacy-policy"
					>
						Donor Privacy Notice
					</a>
					<span className="pipe">|</span>
					<a
						className="footer-links--link"
						href="http://www1.cbn.com/about/cbn.com-privacy-notice"
					>
						CBN.com Privacy Notice
					</a>
					<span className="pipe">|</span>
					<a
						className="footer-links--link"
						href="http://www1.cbn.com/terms-of-use"
					>
						Terms of Use
					</a>
					<span className="pipe">|</span>
					<a className="footer-links--link" href="http://www1.cbn.com/contact">
						Contact
					</a>
				</div>
			</div>
		</Footer>
	);
};

export default memo(FooterBlock);
