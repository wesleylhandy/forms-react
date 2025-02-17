import React from "react";
import styled from "@emotion/styled";

const AskArray = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	&.askarray {
		position: relative;
		box-sizing: border-box;
		height: auto;
		width: 100%;
		max-width: 400px;
		margin: 20px auto;
		margin-bottom: 0;
	}
	&.askarray__tabs {
		position: relative;
		box-sizing: border-box;
		height: auto;
		width: calc(100% + 5px);
		margin: -2.5px;
		border-bottom: 5px solid transparent;
	}
`;

export default AskArray;
