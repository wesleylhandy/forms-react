import React from "react";
import styled from "@emotion/styled";

const RadioButton = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	padding: 5px;
	height: calc(19px * 2);
	line-height: calc(19px * 2);
	input[type="radio"] {
		box-sizing: border-box;
		position: absolute;
		opacity: 0;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	}
    input[type="radio"] + label.Visa, 
    input[type="radio"] + label.MasterCard, 
    input[type="radio"] + label.AmericanExpress, 
    input[type="radio"] + label.Discover {
		box-sizing: border-box;
		font-size: 40px;
		font-weight: 600;
		display: flex;
        align-items: center;
        padding: 5px;
	}
	input[type="radio"] + label.Visa {
		color: #172274;
	}
	input[type="radio"] + label.MasterCard {
		color: #EA001B;
	}
	input[type="radio"] + label.AmericanExpress {
		color: #2E78BF;
	}
	input[type="radio"] + label.Discover {
		color: #F58220;
    }
    input[type="radio"]:checked + label {
		background-color: #eee;
		box-sizing: border-box;
        box-shadow: 0 0 4px #000;
        border-radius: 4px;
	}
	input[type="radio"]:focus + label,
	input[type="radio"]:hover + label {
		background-color: #f4f4f4;
		box-sizing: border-box;
        box-shadow: 0 0 4px #777;
        border-radius: 4px;
	}
	input[type="radio"]:disabled + label {
        box-shadow: 0 0 4px #000;
        border-radius: 4px;
		border-color: #bfbfbf;
		background: #bfbfbf;
		box-sizing: border-box;
	}
`;

export default RadioButton;
