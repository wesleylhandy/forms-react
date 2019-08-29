import React from "react";

const CheckMark = ({ fillColor = "#009BDF" }) => (
	<svg
		width="26px"
		height="26px"
		viewBox="0 0 26 26"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>baseline-check_circle-24px</title>
		<g
			id="Welcome"
			stroke="none"
			strokeWidth="1"
			fill="none"
			fillRule="evenodd"
		>
			<g
				id="iPhone-XS---Single-Selection"
				transform="translate(-333.000000, -80.000000)"
			>
				<g
					id="baseline-check_circle-24px"
					transform="translate(330.000000, 78.000000)"
				>
					<polygon id="Path" points="0 0 31 0 31 31 0 31"></polygon>
					<path
						d="M16,2 C8.824,2 3,7.824 3,15 C3,22.176 8.824,28 16,28 C23.176,28 29,22.176 29,15 C29,7.824 23.176,2 16,2 Z M13.4,21.5 L6.9,15 L8.733,13.167 L13.4,17.821 L23.267,7.954 L25.1,9.8 L13.4,21.5 Z"
						id="Shape"
						fill={fillColor}
						fillRule="nonzero"
					></path>
				</g>
			</g>
		</g>
	</svg>
);

export default CheckMark;
