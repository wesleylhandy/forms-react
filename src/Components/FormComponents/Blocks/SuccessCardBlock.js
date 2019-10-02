import React from "react";
import { Card, CardSection, CardContainer } from "../StyledComponents/Card";

const SuccessCardBlock = ({
	sectionTitle,
	premiumTitle,
	maxWidth = "818px",
	linkColor,
	linkHoverColor,
	linkTextDecoration,
	linkHoverTextDecoration,
}) => (
	<CardSection>
		{sectionTitle && <h3>{sectionTitle}</h3>}
		<CardContainer maxWidth={maxWidth}>
			<Card className="card">
				<h4 className="card__title">Exclusive Online Access</h4>
				<div className="card__body">
					<div
						className="gift-info"
						style={{ marginBottom: 60, padding: "0 10px" }}
					>
						When you join The 700 Club, you will receive an email to video
						stream <em>{premiumTitle}</em> by Pat Robertson.
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
				<h4 className="card__title">Email Updates</h4>
				<div className="card__body">
					<div
						className="gift-info"
						style={{ marginBottom: 60, padding: "0 10px" }}
					>
						Get the latest reports about how your donations are making an impact
						throughout the world and stay up-to-date with CBN.com{" "}
						<a href="https://www.cbn.com/community/af/emailpreferences.aspx" target="_blank">View Email Updates</a>
					</div>
				</div>
			</Card>
		</CardContainer>
	</CardSection>
);

export default SuccessCardBlock;
