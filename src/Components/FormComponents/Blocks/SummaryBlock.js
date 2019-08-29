import React, { useContext, memo, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { LiveMessage } from "react-aria-live";
import { GivingFormContext } from "../../Contexts/GivingFormProvider";

const BlockContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	&.column {
		width: calc(100%-20px);
		height: 100px;
		max-width: 360px;
		margin: 0 auto;
		margin-bottom: 30px;
		border: 1px solid #dedede;
		border-radius: 3px;
		background-color: #f5f7f8;
		box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.11);
		flex-direction: column;
		.amount-block {
			font-size: 19px;
			line-height: 23px;
			text-align: center;
			margin-bottom: 10px;
		}
	}
	&.row {
		flex-direction: row;
		margin: 20px auto;
		text-align: center;
		.amount-block {
			margin-right: 10px;
		}
		.amount-block,
		.amount-block > span {
			font-weight: bold;
		}
	}
	a {
		color: #009bdf;
		cursor: pointer;
		text-decoration: none;
		text-align: center;
		&:hover,
		&:active,
		&:focus {
			text-decoration: underline;
			color: #0069ad;
		}
	}
`;

const SummaryBlock = ({ withContainer }) => {
	const { getSummary, getSelection } = useContext(GivingFormContext);
	const { amount, isMonthly, designation } = useMemo(() => getSummary(), []);
	const duration = isMonthly ? "/ Month Partnership" : designation;
	const [a11yMessage, setA11yMessage] = useState("");

	const handleGoBackClick = e => {
		e.preventDefault();
		setA11yMessage(
			"You Pressed the Edit Button and Now the Previous Page for Selecting Your Donation Amount has loaded in place of the Credit Card Form."
		);
		getSelection({ type: "GO_BACK" });
	};
	return (
		<BlockContainer className={withContainer ? "column" : "row"}>
			<LiveMessage message={a11yMessage} aria-live="polite" />
			<div className="amount-block">
				${amount} <span dangerouslySetInnerHTML={{ __html: duration }}></span>
			</div>
			<a className="go-back-btn" onClick={handleGoBackClick}>
				Edit
			</a>
		</BlockContainer>
	);
};

export default memo(SummaryBlock);
