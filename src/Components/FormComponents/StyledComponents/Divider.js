import React from "react";
import styled from "@emotion/styled";

const Divider = styled.div`
	background: color;
	${props => ({
		color: props.color,
	})}
	flex: 0 0 18px;
`;

export default Divider;
