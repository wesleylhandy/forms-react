import React, { memo, createRef, useEffect, useState } from "react";
import styled from "@emotion/styled";

const SealsBlock = styled.section`
	box-sizing: border-box;
	margin: 20px auto;
	padding: 0;
	width: 100%;
	max-width: 680px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	.seals__seal {
		box-sizing: border-box;
		display: block;
		padding: 0;
		margin: 0;
		width: 100%;
		text-align: center;
		a.seals__seal--link,
		img.seals__seal-img {
			box-shadow: none !important;
			text-decoration: none !important;
		}
	}
	@media screen and (max-width: 550px) {
		flex-wrap: wrap;
		.seals__seal {
			margin-top: 20px;
		}
	}
`;

const certs = {
	"https://www.cbn.com": {
		id: "DigiCertClickID_RXDQXROF",
		href: "https://www.digicert.com/ev-multi-domain-ssl.htm",
	},
	"https://impact.cbn.com": {
		id: "DigiCertClickID_6ddxBgyB",
		href: "https://www.digicert.com/ssl-certificate.htm",
	},
};

const DigiCert = memo(() => {
	const { origin } = window.location;
	const cert = certs[origin];
	const digicertSeal = createRef();
	return (
		cert && (
			<div
				id={cert.id}
				data-language="en"
				className="seals__seal"
				ref={digicertSeal}
			>
				<a
					className="seals__seal--link"
					href={cert.href}
					aria-label="Digicert Seal"
				>
					{/* DigiCert.com */}
				</a>
			</div>
		)
	);
});

const Seals = ({ style = {} }) => {
	const [loaded, setLoaded] = useState(false);
	const digicertScript = document.querySelector("script[src*='seal.min.js']");

	const onLoad = () => {
		if (!loaded) {
			setLoaded(true);
		}
	};

	useEffect(() => {
		// console.log("Seal Script Effect");
		if (digicertScript && !loaded) {
			const newScript = document.createElement("script");
			newScript.type = digicertScript.type;
			newScript.src = digicertScript.src;
			newScript.async = digicertScript.async;
			newScript.innerHTML = digicertScript.innerHTML;
			newScript.addEventListener("load", onLoad);
			digicertScript.remove();
			document.body.appendChild(newScript);
			return () => newScript.removeEventListener("load", onLoad);
		}
	}, [loaded, digicertScript]);

	return (
		<SealsBlock id="seals" style={style}>
			<DigiCert />
			<div id="ECFA_Logo" className="seals__seal">
				<a
					className="seals__seal--link"
					href="http://www.ecfa.org"
					target="_blank"
					aria-label="ECFA Seal"
				>
					<img
						className="seals__seal-img"
						src="https://www.cbn.com/source/giving/shared/ecfa-logo-blacktext_sm.png"
						alt="ECFA"
					/>
				</a>
			</div>
		</SealsBlock>
	);
};

export default memo(Seals);
