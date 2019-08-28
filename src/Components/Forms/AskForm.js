import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import { GivingFormContext } from "../Contexts/GivingFormProvider";
import FormWrapper from "../StyledComponents/FormWrapper";
import ClubLayout from "../FormComponents/Layouts/ClubLayout";
import PartnershipBlock from "../FormComponents/Blocks/PartnershipBlock";
import DesignationBlock from "../FormComponents/Blocks/DesignationBlock";
import FormPanel from "../FormComponents/StyledComponents/FormPanel";
import FieldSet from "../FormComponents/StyledComponents/FieldSet";
import FormHeader from "../FormComponents/StyledComponents/FormHeader";
import Seals from "../FormComponents/Seals";
import SubmitButton from "../FormComponents/SubmitButton";
import "../FormComponents/Animations/designations.css";
import OtherGivingBlock from "../FormComponents/Blocks/OtherGivingBlock";
import HeaderBlock from "../FormComponents/Blocks/HeaderBlock";
import FooterBlock from "../FormComponents/Blocks/FooterBlock";

class AskForm extends Component {
	state = {
		monthlyChecked: this.props.defaultOption == "monthly",
	};

	handleRadioClick = e => {
		const id = e.target.id;
		const { singlePledgeData, monthlyPledgeData } = this.props;
		this.setState({ monthlyChecked: id !== "singlegift" }, () =>
			this.context.updateGivingType({
				type: "UPDATE_GIVING_TYPE",
				typeId: id,
				singlePledgeData,
				monthlyPledgeData,
				source: "radioClick",
			})
		);
	};

	handleInputChange = e => {
		const target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.context.validateAndUpdateField({ type: "UPDATE_FIELD", name, value });
	};

	handleSubmit = async e => {
		e.preventDefault();
		this.context.submitAskForm({ type: "SUBMIT_ASK_FORM" });
	};
	addToCart = item => {
		this.context.addToCart({ type: "ADD_TO_CART", item });
	};

	removeFromCart = itemType => {
		this.context.removeFromCart({ type: "REMOVE_TO_CART", itemType });
	};
	render() {
		const {
			formTitle,
			submitButtonText,
			showGivingArray,
			monthlyOption,
			singleOption,
			monthlyAmounts,
			monthlyDescriptions,
			singleAmounts,
			singleDescriptions,
			designations,
			monthlyPledgeData,
			singlePledgeData,
			defaultAmount,
			defaultOption,
			premiumData,
			formBackgroundColor,
			formBorderColor,
			formBorderRadius,
			formBorderWidth,
			formBoxShadow,
			formColor,
			formMargin,
			formMaxWidth,
			formPadding,
		} = this.props;
		const givingOptions = {
			monthlyOption,
			singleOption,
			monthlyAmounts: monthlyAmounts ? monthlyAmounts : [],
			monthlyDescriptions: monthlyDescriptions ? monthlyDescriptions : [],
			singleAmounts: singleAmounts ? singleAmounts : [],
			singleDescriptions: singleDescriptions ? singleDescriptions : [],
			designations: designations ? designations : [],
			monthlyPledgeData,
			singlePledgeData,
		};
		const { monthlyChecked } = this.state;
		const { errors, fields, submitting, selected } = this.context;
		const hasErrors =
			Object.values(errors).filter(val => val && val.length > 0).length > 0;
		return !selected ? (
			<>
				<HeaderBlock/>
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
				>
					<form
						id="react-club-ask-form"
						autoComplete="off"
						onSubmit={this.handleSubmit}
						style={{ backgroundColor: "white" }}
					>
						<FormHeader
							className="form-title form-header"
							style={{ fontSize: "19px", marginTop: "0" }}
						>
							{formTitle}
						</FormHeader>
						<PartnershipBlock
							premiumData={premiumData}
							monthlyChecked={monthlyChecked}
						></PartnershipBlock>
						{showGivingArray && (
							<FormPanel className="form-panel">
								<ClubLayout
									defaultAmount={defaultAmount}
									defaultOption={defaultOption}
									givingOptions={givingOptions}
									handleRadioClick={this.handleRadioClick}
									amountError={errors.amount}
									monthlyChecked={monthlyChecked}
									Monthlypledgeday={fields.Monthlypledgeday}
									monthlyOption={monthlyOption}
									singleOption={singleOption}
								/>
							</FormPanel>
						)}
						<FormPanel className="form-panel" style={{ marginBottom: "30px" }}>
							<CSSTransition
								in={designations && designations.length && !monthlyChecked}
								timeout={400}
								classNames="designation-container"
								unmountOnExit
								appear
							>
								<DesignationBlock designations={designations} />
							</CSSTransition>
						</FormPanel>
						<FormPanel className="form-panel">
							<FieldSet>
								<legend>Form Submit Block</legend>
								<SubmitButton
									hasErrors={hasErrors}
									error={errors.amount}
									handleSubmit={this.handleSubmit}
									submitting={submitting}
									value={submitButtonText}
								/>
							</FieldSet>
						</FormPanel>
					</form>
				</FormWrapper>
				<Seals />
				<OtherGivingBlock />
				<FooterBlock/>
			</>
		) : null;
	}
}

AskForm.contextType = GivingFormContext;

export default AskForm;
