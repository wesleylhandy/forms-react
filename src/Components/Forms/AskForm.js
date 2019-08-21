import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

import { GivingFormContext } from "../Contexts/GivingFormProvider";

import ClubLayout from "../FormComponents/Layouts/ClubLayout"
import PartnershipBlock from "../FormComponents/Blocks/PartnershipBlock"
import DesignationBlock from "../FormComponents/Blocks/DesignationBlock"
import FormPanel from "../FormComponents/StyledComponents/FormPanel";
import FieldSet from "../FormComponents/StyledComponents/FieldSet";
import FormHeader from "../FormComponents/StyledComponents/FormHeader";
import SubmitButton from "../FormComponents/SubmitButton";
import "../FormComponents/Animations/designations.css"

class AskForm extends Component {
    state = {
        monthlyChecked: false
    }
    componentDidMount() {
		if (!this.context.initialized) {
			const getDay = () => {
				let date = new Date().getDate();
				return date >= 2 && date <= 28 ? date : 2;
			};
			const fields = {
				Zip: "",
				Monthlypledgeday: getDay(),
				Title: "",
				Firstname: "",
				Middlename: "",
				Lastname: "",
				Suffix: "",
				Spousename: "",
				Address1: "",
				Address2: "",
				City: "",
				State: "",
				Country: "United States",
				Emailaddress: "",
				phone: "",
				savePersonalInfo: true,
			};
			const errors = {};
			for (let field in fields) {
				errors[field] = "";
			}
			errors.amount = "";
			this.context.initFields({
				type: "INIT_FORM_STATE",
				fields,
				errors,
				allowMonthlyDesignations: this.props.allowMonthlyDesignations
			});
		}
		try {
			const monthlyChecked = this.context.loadLS({ type: "LOAD" });
			this.setState({ monthlyChecked });
		} catch (err) {
			console.error(err.message);
			console.error(err.stack);
        }
    }
    
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
		this.context.submitAskForm();
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
            premiumData
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
        }
        const { monthlyChecked } = this.state;
        const { errors, fields, submitting, submitted } = this.context;
        const hasErrors =
			Object.values(errors).filter(val => val && val.length > 0).length > 0;
        return !submitted ? (
			<form
				id="react-club-form"
				autoComplete="off"
				onSubmit={this.handleSubmit}
			>
				<FormHeader className="form-title form-header">{formTitle}</FormHeader>
                <PartnershipBlock premiumData={premiumData}></PartnershipBlock>
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
                <FormPanel className="form-panel" style={{marginBottom: "30px"}}>
                    <CSSTransition
                        in={designations && designations.length && !monthlyChecked}
                        timeout={400}
                        classNames="designation-container"
                        unmountOnExit
                        appear
                    >
                        <DesignationBlock
                            designations={designations}
                        />
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
                            color="#fff"
                            backgroundColor="#009BDF"
                        />
                    </FieldSet>
                </FormPanel>
            </form>
        ) : null;
    }
}

AskForm.contextType = GivingFormContext;

export default AskForm;