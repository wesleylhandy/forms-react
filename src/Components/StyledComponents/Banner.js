import React from "react";
import styled from "@emotion/styled";

const BannerContent = styled.div`
	width: 100%;
	max-width: 580px;
	padding: 30px;
	text-align: center;
	background: lightgoldenrodyellow;
	color: maroon;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
	font-style: normal;
	border: 1px dotted #000;
	margin: 30px auto;
	box-sizing: border-box;
	font-size: 20px;
	line-height: 1.25;
	&.banner--expired {
		cursor: pointer;
	}
	a {
		box-sizing: border-box;
		font-size: 20px;
		line-height: 1.25;
		color: indigo;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
		font-style: normal;
		cursor: pointer;
	}
`;

const TimeoutBanner = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 10;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Banner = ({ expired = false }) =>
	expired ? (
		<TimeoutBanner>
			<BannerContent
				className="banner banner--expired"
				onClick={() => window && window.location.reload(true)}
			>
				Your Session Has Expired
				<br />
				Please{" "}
				<a onClick={() => window && window.location.reload(true)}>
					Click Here to Refresh Your Browser
				</a>
			</BannerContent>
		</TimeoutBanner>
	) : (
		<BannerContent className="banner">Form Under Development</BannerContent>
	);

export default Banner;
