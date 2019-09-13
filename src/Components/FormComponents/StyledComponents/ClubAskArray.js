import React from "react";
import styled from "@emotion/styled";

const ClubAskArray = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	&.askarray--club {
		position: relative;
		box-sizing: border-box;
		height: auto;
		width: calc(100% + 5px);
		border-bottom: 5px solid transparent;
		flex-wrap: nowrap;
		margin: 30px 0;
		flex-wrap: nowrap;
		justify-content: space-between;
		outline: none;
		@media screen and (max-width: 716px) {
			flex-wrap: wrap;
			margin: 20px auto;
			margin-bottom: 10px;
		}
	}
`;

export default ClubAskArray;
