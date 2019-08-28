import React, { useContext, memo, useMemo } from "react";
import styled from "@emotion/styled";

import { MdCopyright } from "react-icons/md";

import { FormConfigContext } from "../../Contexts/FormConfigProvider";

const Footer = styled.footer`
	box-sizing: border-box;
	background: #fff;
	div.container {
		box-sizing: border-box;
		color: #3b3b3b;
		font-size: 15px;
		line-height: 18px;
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
		}
		.cbn-info {
			padding: 10px 0;
			text-align: center;
			.year {
				margin: 0 5px;
			}
		}
		.footer-links {
			& > * {
				margin: 5px;
			}
			a {
				color: #181818;
				text-decoration: none;
				transition: color 200ms ease-in-out;
			}
			a:hover,
			a:focus,
			a:active {
				text-decoration: underline;
				color: #484848;
			}
		}
	}
`;

const FooterBlock = () => {
	const { getCssConfig } = useContext(FormConfigContext);
	const { formMaxWidth } = useMemo(() => getCssConfig("form"), []);
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Footer>
			<div className="container">
				<div className="cbn-info">
					<MdCopyright />
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
