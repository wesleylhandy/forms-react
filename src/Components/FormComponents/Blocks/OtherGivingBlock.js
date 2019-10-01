import React, { useContext, useMemo, memo } from "react";
import { FormConfigContext } from "../../Contexts/FormConfigProvider";
import { Card, CardSection, CardContainer } from "../StyledComponents/Card";

const OtherGivingBlock = () => {
	const { getCssConfig } = useContext(FormConfigContext);
	const {
		linkColor = "#009BDf",
		linkHoverColor = "#0069ad",
		linkTextDecoration = "none",
		linkHoverTextDecoration = "underline",
	} = useMemo(() => getCssConfig("link"), []);
	return (
		<CardSection>
			<CardContainer>
				<Card className="card">
					<h4 className="card__title">Give By Phone</h4>
					<div className="card__body">
						<div className="phone">
							<a
								className="disabled"
								tabIndex="-1"
								role="button"
								aria-disabled="true"
							>
								1-800-700-7000
							</a>
						</div>
						<div className="phone--info">
							Donate by phone or get assistance with your donation.
						</div>
					</div>
				</Card>
				<Card
					className="card"
					linkColor={linkColor}
					linkHoverColor={linkHoverColor}
					linkTextDecoration={linkTextDecoration}
					linkHoverTextDecoration={linkHoverTextDecoration}
				>
					<h4 className="card__title">Mail-In Giving Form</h4>
					<div className="card__body">
						<div className="mail-in-form">
							To donate by check or to a specific cause, please complete this{" "}
							<a
								className="disabled"
								tabIndex="-1"
								role="button"
								aria-disabled="true"
							>
								donation form
							</a>{" "}
							by printing and mailing to:
						</div>
						<div className="cbn-address">
							<div className="cbn-address--street">
								977 Centerville Turnpike,
							</div>
							<div className="cbn-address--city-state-zip">
								Virginia Beach, VA 23463
							</div>
						</div>
					</div>
				</Card>
				<Card
					className="card"
					linkColor={linkColor}
					linkHoverColor={linkHoverColor}
					linkTextDecoration={linkTextDecoration}
					linkHoverTextDecoration={linkHoverTextDecoration}
				>
					<h4 className="card__title">More Ways To Give</h4>
					<div className="card__body">
						<a
							className="giving-links disabled"
							tabIndex="-1"
							role="button"
							aria-disabled="true"
						>
							Pledge Giving
						</a>
						<a
							className="giving-links disabled"
							tabIndex="-1"
							role="button"
							aria-disabled="true"
						>
							Planned Giving & Your Legacy
						</a>
						<a
							className="giving-links disabled"
							tabIndex="-1"
							role="button"
							aria-disabled="true"
						>
							Memorial & Tribute Gifts
						</a>
						<a
							className="giving-links disabled"
							tabIndex="-1"
							role="button"
							aria-disabled="true"
						>
							Employer Matching
						</a>
						<a
							className="giving-links disabled"
							tabIndex="-1"
							role="button"
							aria-disabled="true"
						>
							Stock Gifts
						</a>
						<a
							className="giving-links disabled"
							tabIndex="-1"
							role="button"
							aria-disabled="true"
						>
							Workplace Giving
						</a>
					</div>
				</Card>
			</CardContainer>
		</CardSection>
	);
};

export default memo(OtherGivingBlock);
