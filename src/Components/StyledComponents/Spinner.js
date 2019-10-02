import React from "react";
import styled from "@emotion/styled";

const SpinnerContainer = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

const LoadingSpinner = styled.div`
	&.loading_spinner {
		box-sizing: border-box;
		height: 150px;
		margin: 150px auto;
		position: relative;
		width: 150px;
		z-index: 100;
	}

	.loading_spinner__flames {
		box-sizing: border-box;
		height: 150px;
		left: 0;
		position: absolute;
		top: 0;
		width: 150px;
		z-index: 100;
	}

	.loading_spinner__back {
		box-sizing: border-box;
		height: 150px;
		left: 0;
		position: absolute;
		top: 0;
		width: 150px;
		z-index: 95;
		-webkit-animation: flamerotate 0.75s linear infinite;
		-moz-animation: flamerotate 0.75s linear infinite;
		animation: flamerotate 0.75s linear infinite;
	}

	@keyframes flamerotate {
		from {
			-webkit-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
			-moz-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;

function Spinner() {
	return (
		<SpinnerContainer>
			<LoadingSpinner className="loading_spinner">
				<img
					className="loading_spinner__flames"
					src="//www1.cbn.com/sites/all/themes/cbn_default/images/spinner/cbn-flame-circle.png"
				/>
				<img
					className="loading_spinner__back"
					src="//www1.cbn.com/sites/all/themes/cbn_default/images/spinner/loader-spinner@3x.png"
				/>
			</LoadingSpinner>
		</SpinnerContainer>
	);
}

export default Spinner;
