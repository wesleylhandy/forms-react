import React from "react";

const DropArrow = ({ open }) => (
	<svg
		width="13px"
		height="8px"
		viewBox="0 0 13 8"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>baseline-arrow_drop_down-24px copy</title>
		<g
			id="Welcome"
			stroke="none"
			strokeWidth="1"
			fill="none"
			fillRule="evenodd"
			transform={open ? "rotate(180, 6.5, 4)" : "rotate(0, 6.5, 4)"}
		>
			<g
				id="Payment-Page-(2-Step)-Form-Field-Inputs"
				transform="translate(-755.000000, -768.000000)"
				fill="#8A9099"
				fillRule="nonzero"
			>
				<g id="Payment-Info" transform="translate(478.000000, 490.000000)">
					<g id="Expiration" transform="translate(65.000000, 237.000000)">
						<g
							id="baseline-arrow_drop_down-24px-copy"
							transform="translate(211.000000, 41.000000)"
						>
							<path
								d="M1.57869481,1.68394113 L6.7704628,7.22182698 C7.14819305,7.62473925 7.78102886,7.64515331 8.18394113,7.26742306 C8.19962602,7.25271847 8.21483262,7.23751188 8.2295372,7.22182698 L13.4213052,1.68394113 C13.7990354,1.28102886 13.7786214,0.648193051 13.3757091,0.270462796 C13.190363,0.0967007927 12.9458279,-4.66700434e-17 12.691768,0 L2.30823201,0 C1.75594726,5.45542273e-16 1.30823201,0.44771525 1.30823201,1 C1.30823201,1.25405988 1.40493281,1.49859499 1.57869481,1.68394113 Z"
								id="Path"
							></path>
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
);

export default DropArrow;
