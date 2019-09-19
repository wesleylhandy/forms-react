import React, { Component } from "react";

import { SignUpFormContext } from "../Contexts/SignUpFormProvider";

import FormPanel from "../FormComponents/StyledComponents/FormPanel";
import FieldSet from "../FormComponents/StyledComponents/FieldSet";
import FormHeader from "../FormComponents/StyledComponents/FormHeader";
import NameBlock from "../FormComponents/Blocks/NameBlock";
import AddressBlock from "../FormComponents/Blocks/AddressBlock";
import SubmitButton from "../FormComponents/FunctionalComponents/SubmitButton";
import Spinner from "../StyledComponents/Spinner";
import FormWrapper from "../StyledComponents/FormWrapper";
class SignUpForm extends Component {
	componentDidMount() {
		const fields = {
			Title: "",
			Firstname: "",
			Middlename: "",
			Lastname: "",
			Suffix: "",
			Spousename: "",
			Emailaddress: "",
			phone: "",
			savePersonalInfo: true,
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
	handleInputChange = e => {
		const target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.context.validateAndUpdateField({ type: "UPDATE_FIELD", name, value });
	};
	handleSubmit = async e => {
		e.preventDefault();
		this.context.submitSignUpForm();
	};
	render() {
		const {
			formTitle,
			submitButtonText,
			allowInternational,
			getAddress,
			getName,
			getPhone,
			getHonorific,
			getSuffix,
			getMiddleName,
			getSpouseInfo,
		} = this.props;
		const { errors, fields, initialized, submitting, submitted } = this.context;
		const hasErrors =
			Object.values(errors).filter(val => val && val.length > 0).length > 0;
		return !submitted ? (
			<FormWrapper>
				<form
					id="react-signup-form"
					autoComplete="off"
					onSubmit={this.handleSubmit}
				>
					<FormHeader className="form-title form-header">
						{formTitle}
					</FormHeader>
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
											type="Name"
										/>
									)}
									<AddressBlock
										fields={fields}
										errors={errors}
										handleInputChange={this.handleInputChange}
										getPhone={getPhone}
										getAddress={getAddress}
										allowInternational={allowInternational}
										type="Billing"
									/>
								</FormPanel>
							</FieldSet>
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
