import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Media from "react-media";

import { GivingFormContext } from "../Contexts/GivingFormProvider";
import FormWrapper from "../StyledComponents/FormWrapper";
import ClubLayout from "../FormComponents/Layouts/ClubLayout";
import PremiumBlock from "../FormComponents/Blocks/PremiumBlock";
import DesignationBlock from "../FormComponents/Blocks/DesignationBlock";
import FormPanel from "../FormComponents/StyledComponents/FormPanel";
import FieldSet from "../FormComponents/StyledComponents/FieldSet";
import FormHeader from "../FormComponents/StyledComponents/FormHeader";
import Seals from "../FormComponents/FunctionalComponents/Seals";
import SubmitButton from "../FormComponents/FunctionalComponents/SubmitButton";
import "../FormComponents/Animations/designations.css";
import OtherGivingBlock from "../FormComponents/Blocks/OtherGivingBlock";
import HeaderBlock from "../FormComponents/Blocks/HeaderBlock";
import FooterBlock from "../FormComponents/Blocks/FooterBlock";
import { scrollToPoint, offsetTop } from "../../helpers/scrollToPoint";

class AskForm extends Component {
	state = {
		monthlyChecked: this.props.defaultOption == "monthly",
		scrolled: false,
		initialUpdate: true,
	};

	getSnapshotBeforeUpdate() {
		const { selected } = this.context;
		const { scrolled, initialUpdate } = this.state;
		if (selected && initialUpdate) {
			console.log("Selection Snapshot on Ask");
			return true;
		}
		if (!selected && !scrolled && !initialUpdate) {
			console.log("Scrolling Snapshot on Ask");
			return true;
		}

		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot && this.context.selected && this.state.initialUpdate) {
			this.setState({ initialUpdate: false });
		} else if (snapshot && !this.state.scrolled && !this.context.selected) {
			this.setState({ scrolled: true }, () => {
				const target = document.getElementById("react-club-ask-form");
				const top = offsetTop(target);
				scrollToPoint(top);
			});
		}
	}

	handleRadioClick = e => {
		const { id } = e.target;
		// console.log(id)
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
		const name = target.name;
		this.context.validateAndUpdateField({ type: "UPDATE_FIELD", name });
	};

	handleSubmit = async e => {
		e.preventDefault();
		const isValidSubmission = await this.context.submitAskForm({
			type: "SUBMIT_ASK_FORM",
		});
		if (isValidSubmission) {
			this.setState({ scrolled: false });
		}
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
			preset,
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
			expired,
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
		const hasErrors = errors.amount !== "";
		return !selected || expired ? (
			<>
				<HeaderBlock />
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
					inProp={!selected || expired}
				>
					<form
						id="react-club-ask-form"
						autoComplete="off"
						onSubmit={this.handleSubmit}
						style={{ backgroundColor: "white" }}
					>
						<Media query="(max-width: 649px)">
							{matches =>
								matches ? null : (
									<FormHeader
										className="form-title form-header"
										style={{
											fontSize: "19px",
											marginTop: "0",
											color: "#181818",
										}}
									>
										{formTitle}
									</FormHeader>
								)
							}
						</Media>
						<PremiumBlock
							premiumData={premiumData}
							monthlyChecked={monthlyChecked}
						></PremiumBlock>
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
						<FormPanel className="form-panel designaton-panel">
							<CSSTransition
								in={designations && designations.length && !monthlyChecked}
								timeout={400}
								classNames="designation-container"
								unmountOnExit
								appear
							>
								<DesignationBlock designations={designations} preset={preset} />
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
				<FooterBlock showDisclaimer={true} />
			</>
		) : null;
	}
}

AskForm.contextType = GivingFormContext;

export default AskForm;
