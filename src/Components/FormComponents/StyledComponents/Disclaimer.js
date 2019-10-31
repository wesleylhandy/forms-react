import styled from "@emotion/styled";

const Disclaimer = styled.div`
	color: #444444;
	font-size: 16px;
	text-align: center;
	a {
		cursor: pointer;
		font-size: 16px;
		color: #444444;
		text-decoration: none;
		transition: color 200ms ease-in-out;
		&:hover {
			text-decoration: underline;
			color: #333333;
		}
	}
`;

export default Disclaimer;
