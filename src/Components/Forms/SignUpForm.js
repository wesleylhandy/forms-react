import React, { Component } from "react";

import { SignUpFormContext } from "../Contexts/SignUpFormProvider";

import FormPanel from "../FormComponents/StyledComponents/FormPanel";
import FieldSet from "../FormComponents/StyledComponents/FieldSet";
import FormHeader from "../FormComponents/StyledComponents/FormHeader";
import FormInstructions from "../FormComponents/FunctionalComponents/FormInstructions";
import NameBlock from "../FormComponents/Blocks/NameBlock";
import AddressBlock from "../FormComponents/Blocks/AddressBlock";
import SubmitButton from "../FormComponents/FunctionalComponents/SubmitButton";
import Spinner from "../StyledComponents/Spinner";
import FormWrapper from "../StyledComponents/FormWrapper";
import formDisplayValue from "../../helpers/form-display-values";
import Disclaimer from "../FormComponents/StyledComponents/Disclaimer";
import MessageBlock from "../FormComponents/Blocks/MessageBlock";

class SignUpForm extends Component {
	componentDidMount() {
		if (!this.context.initialized) {
			const fields = {
				Title: "",
				Firstname: "",
				Middlename: "",
				Lastname: "",
				Suffix: "",
				Spousename: "",
				Emailaddress: "",
				message: "",
				phone: "",
			};
			if (this.context.getAddress) {
				fields.Address1 = "";
				fields.Address2 = "";
				fields.City = "";
				fields.State = "";
				fields.Country = this.props.allowInternational ? "" : "United States";
			}
			const errors = {};
			for (let field in fields) {
				errors[field] = "";
			}
			this.context.initFields({
				type: "INIT_FORM_STATE",
				fields,
				errors,
			});
		}
	}
	handleInputChange = e => {
		const target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		if (name === "ccNumber" || name === "phone") {
			const action = formDisplayValue(name, value);
			this.context.updateFields(action);
		} else {
			this.context.updateField({ type: "UPDATE_FIELD", name, value });
		}
	};
	handleBlur = e => {
		const target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		console.log({ name, value });
		this.context.validateAndUpdateField({ type: "UPDATE_FIELD", name, value });
	};
	handleSubmit = async e => {
		e.preventDefault();
		this.context.submitSignUpForm();
	};
	render() {
		const {
			formTitle,
			formInstructions,
			submitButtonText,
			allowInternational,
			getAddress,
			getName,
			getPhone,
			getHonorific,
			getSuffix,
			getMiddleName,
			getSpouseInfo,
			getMessage,
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
		const {
			errors,
			fields,
			initialized,
			submitting,
			submitted,
			validating,
		} = this.context;
		const hasErrors =
			Object.values(errors).filter(val => val && val.length > 0).length > 0;
		return !submitted ? (
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
				inProp={initialized}
			>
				<form
					id="react-signup-form"
					autoComplete="off"
					onSubmit={this.handleSubmit}
				>
					<FormHeader className="form-title form-header">
						{formTitle}
					</FormHeader>
					<FormInstructions
						className="form-instructions"
						formInstructions={formInstructions}
					/>
					{initialized ? (
						<FormPanel className="form-panel">
							<FieldSet>
								<legend>Name and Address Block</legend>
								<FormPanel className="name-address__info">
									<FormHeader className="form-header"></FormHeader>
									{getName && (
										<NameBlock
											fields={fields}
											errors={errors}
											getHonorific={getHonorific}
											getMiddleName={getMiddleName}
											getSuffix={getSuffix}
											getSpouseInfo={getSpouseInfo}
											handleInputChange={this.handleInputChange}
											handleBlur={this.handleBlur}
											type="Name"
											submitting={submitting || submitted}
										/>
									)}
									<AddressBlock
										fields={fields}
										errors={errors}
										handleInputChange={this.handleInputChange}
										handleBlur={this.handleBlur}
										getPhone={getPhone}
										getAddress={getAddress}
										allowInternational={allowInternational}
										type="Billing"
										submitting={submitting || submitted}
										validating={validating}
									/>
									{getMessage && (
										<MessageBlock
											id="message"
											label="Message"
											specialStyle="form-group--Message"
											required={true}
											value={fields.message}
											error={errors.message}
											handleInputChange={this.handleInputChange}
											handleBlur={this.handleBlur}
											disabled={submitting || submitted}
											minHeight={100}
										/>
									)}
								</FormPanel>
							</FieldSet>
							<FieldSet>
								<legend>Form Submit Block</legend>
								<SubmitButton
									hasErrors={hasErrors}
									error={errors.formError}
									handleSubmit={this.handleSubmit}
									submitting={submitting || submitted}
									value={submitButtonText}
								/>
								<Disclaimer style={{ color: "#54585D", marginTop: 40 }}>
									CBN values and protects your personal information.
								</Disclaimer>
							</FieldSet>
						</FormPanel>
					) : (
						<FormPanel className="form-panel">
							<Spinner />
						</FormPanel>
					)}
				</form>
			</FormWrapper>
		) : null;
	}
}

SignUpForm.contextType = SignUpFormContext;

export default SignUpForm;
