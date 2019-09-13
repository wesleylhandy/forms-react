import React from "react";
import styled from "@emotion/styled";

import { Transition } from "react-transition-group";

const duration = {
	appear: 500,
	enter: 500,
	exit: 500,
};

const defaultStyle = {
	transition: `opacity ${duration.appear}ms ease-in-out`,
	opacity: 0,
};

const transitionStyles = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
};

const Wrapper = styled.main`
	background: ${props => props.formBackgroundColor};
	box-sizing: border-box;
	border: ${props => props.formBorderWidth} solid
		${props => props.formBorderColor};
	border-radius: ${props => props.formBorderRadius};
	color: ${props => props.formColor};
	max-width: ${props => props.formMaxWidth};
	padding: ${props => props.formPadding};
	margin: ${props => props.formMargin};
	width: 100%;
	box-shadow: 0 0 7px 0 rgba(0,0,0,0.07);
	@media screen and (max-width: ${props=> props.formMaxWidth}) {
		margin: 0 auto;
	}
	@media screen and (max-width: 493px) {
		padding: 20px 10px;
	}
	@media screen and (max-width: 411px) {
		padding: 20px 5px;
	}
`;

const FormWrapper = ({
	style = {},
	formBackgroundColor,
	formBorderWidth,
	formBorderColor,
	formBorderRadius,
	formColor,
	formMaxWidth,
	formPadding,
	formMargin,
	formBoxShadow,
	children,
	inProp,
}) => (
	<Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit appear>
		{state => (
			<Wrapper
				style={{ ...style, ...defaultStyle, ...transitionStyles[state] }}
				formBackgroundColor={formBackgroundColor}
				formBorderColor={formBorderColor}
				formBorderRadius={formBorderRadius}
				formBorderWidth={formBorderWidth}
				formBoxShadow={formBoxShadow}
				formMaxWidth={formMaxWidth}
				formPadding={formPadding}
				formMargin={formMargin}
				formColor={formColor}
			>
				{children}
			</Wrapper>
		)}
	</Transition>
);

export default FormWrapper;
