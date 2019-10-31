import React, {
	useContext,
	useState,
	useLayoutEffect,
	useMemo,
	memo,
} from "react";
import styled from "@emotion/styled";
import { GivingFormContext } from "../Contexts/GivingFormProvider";
import { FormConfigContext } from "../Contexts/FormConfigProvider";
import { LiveMessage } from "react-aria-live";

import FormWrapper from "../StyledComponents/FormWrapper";
import FormPanel from "../FormComponents/StyledComponents/FormPanel";
import HeaderBlock from "../FormComponents/Blocks/HeaderBlock";
import FooterBlock from "../FormComponents/Blocks/FooterBlock";
import SuccessCardBlock from "../FormComponents/Blocks/SuccessCardBlock";
import { scrollToPoint, offsetTop } from "../../helpers/scrollToPoint";

const ThankYouMessage = styled.div`
	div {
		font-size: 19px;
		line-height: 23px;
	}
	div + div {
		margin-top: 20px;
	}
`;

const SignatureBlock = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	margin: 10px 0;
	div.signature-img {
		width: 125px;
		height: 125px;
		overflow: hidden;
		border-radius: 50%;
		margin-right: 20px;
		.img-responsive {
			display: block;
			height: 100%;
		}
	}
	div.signature-block {
		margin: 20px 0;
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: left;
		div {
			font-size: 19px;
			line-height: 23px;
			& > em {
				font-style: italic;
			}
			.img-responsive {
				display: block;
				height: 60px;
			}
		}
	}
`;

const PostScript = styled.div`
	div {
		font-size: 19px;
		line-height: 23px;
		a {
			font-weight: bold;
			color: ${props => props.linkColor};
			textdecoration: ${props => props.linkTextDecoration};
			transition: color 200ms ease-in-out;
			&:hover,
			&:active,
			&:focus {
				color: ${props => props.linkHoverColor};
				text-decoration: ${props => props.linkHoverTextDecoration};
			}
		}
	}
	div + div {
		margin-top: 20px;
	}
`;

const ClubSuccessMessage = ({
	confirmed,
	successMessage: { monthly, single, image, signature, postScript },
}) => {
	const [scrolled, setScrolled] = useState(false);
	const {
		trackingVars = [],
		fields: { Firstname },
		designationInfo: { title },
	} = useContext(GivingFormContext);
	const { getCssConfig, getFormConfig, clearTimeouts } = useContext(FormConfigContext);
	const trackingObj = trackingVars.reduce((obj, variable) => {
		for (let key in variable) {
			obj[key] = variable[key];
		}
		return obj;
	}, {});
	const isMonthly = trackingObj["om_sMonthlyPledge"] === "Y";
	let message = isMonthly ? monthly : single;
	message = message
		.replace("#FirstName#", Firstname)
		.replace("#Designation#", title);
	const sectionTitle = isMonthly ? "Free Gifts To You" : "";
	const {
		linkColor = "#009BDf",
		linkHoverColor = "#0069ad",
		linkTextDecoration = "none",
		linkHoverTextDecoration = "underline",
	} = useMemo(() => getCssConfig("link"), []);
	const {
		formBackgroundColor,
		formBorderColor,
		formBorderRadius,
		formBorderWidth,
		formBoxShadow,
		formColor,
		formMargin,
		formMaxWidth,
		formPadding,
	} = useMemo(() => getCssConfig("form"), []);
	const { premiumTitle } = useMemo(() => getFormConfig("premiumData"), []);
	useLayoutEffect(() => {
		if (confirmed & !scrolled) {
			console.log("Scrolling Snapshot on Success");
			setScrolled(true);
			const target = document.getElementById("react-club-form-success");
			const top = offsetTop(target);
			scrollToPoint(top);
		}
	}, [confirmed, scrolled]);
	if ( confirmed ) {
		clearTimeouts();
	}
	return (
		confirmed && (
			<>
				<HeaderBlock
					successTitle="All Done"
					successDescription="Thank You For Your Contribution."
				/>
				<LiveMessage
					message={
						"Your payment has being processed. A new page with a thank you message just loaded."
					}
					aria-live="polite"
				/>
				<FormWrapper
					formBackgroundColor={formBackgroundColor}
					formBorderColor={formBorderColor}
					formBorderRadius={formBorderRadius}
					formBorderWidth={formBorderWidth}
					formBoxShadow={formBoxShadow}
					formMaxWidth={formMaxWidth}
					formPadding={formPadding}
					formMargin={formMargin}
					formColor={formColor}
					style={{ marginBottom: "30px" }}
					inProp={confirmed}
				>
					<FormPanel className="success-message" id="react-club-form-success">
						<ThankYouMessage
							className="thank-you"
							dangerouslySetInnerHTML={{ __html: message }}
						/>
						<SignatureBlock>
							<div className="signature-img">
								<img
									className="img-responsive"
									src={image}
									alt="Pat Robertson"
								/>
							</div>
							<div className="signature-block">
								<div>Yours in Christ,</div>
								<div>
									<em>Pat Robertson</em>
								</div>
								<div>
									<img className="img-responsive" src={signature} alt="Pat" />
								</div>
							</div>
						</SignatureBlock>
						<PostScript
							className="thank-you"
							dangerouslySetInnerHTML={{ __html: postScript }}
							linkColor={linkColor}
							linkHoverColor={linkHoverColor}
							linkTextDecoration={linkTextDecoration}
							linkHoverTextDecoration={linkHoverTextDecoration}
						/>
					</FormPanel>
				</FormWrapper>
				<SuccessCardBlock
					maxWidth={formMaxWidth}
					premiumTitle={premiumTitle}
					sectionTitle={sectionTitle}
					linkColor={linkColor}
					linkHoverColor={linkHoverColor}
					linkTextDecoration={linkTextDecoration}
					linkHoverTextDecoration={linkHoverTextDecoration}
				/>
				<FooterBlock />
			</>
		)
	);
};

export default memo(ClubSuccessMessage);
