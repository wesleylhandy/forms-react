import React, { Component } from "react";
import styled from "@emotion/styled"
import { LiveMessage } from 'react-aria-live'

import { GivingFormContext } from "../Contexts/GivingFormProvider";

import FormWrapper from '../StyledComponents/FormWrapper';
import FormPanel from "../FormComponents/StyledComponents/FormPanel";
import FieldSet from "../FormComponents/StyledComponents/FieldSet";
import FormHeader from "../FormComponents/StyledComponents/FormHeader";
import NameBlock from "../FormComponents/Blocks/NameBlock";
import AddressBlock from "../FormComponents/Blocks/AddressBlock";
import SummaryBlock from "../FormComponents/Blocks/SummaryBlock";
import PaymentBlock from "../FormComponents/Blocks/PaymentBlock";
import { checkValues } from "../../helpers/cc-validation";
import SubmitButton from "../FormComponents/SubmitButton";
import HiddenForm from "../FormComponents/StyledComponents/HiddenForm";
import Seals from "../FormComponents/Seals"

const Disclaimer = styled.div`
    color: #444444;
    font-size: 16px;
    text-align: center;
    a {
        cursor: pointer;
        font-size: 16px;
        color: #444444;
        text-decoration: none;
        transition: color 200ms ease-in-out;
        &:hover {
            text-decoration: underline;
            color: #333333;
        }
    }
`

const getDay = date => {
    let day = date.getDate() + 2;
    return day >= 2 && day <= 28 ? day : 2;
};
const d = new Date();
const curMonth = "0" + (d.getMonth() + 1);
const curYear = d.getFullYear();

class ConfirmationForm extends Component {
	formRef = React.createRef()
	state = {
		a11yMessage: ''
	}

    componentDidMount() {
        window.addEventListener("message", this.handleMessage, false);
		try {
			this.context.getGlobals();
		} catch (err) {
			console.error({ err });
		}
		if (!this.context.initialized) {

			const fields = {
				Zip: "",
				Monthlypledgeday: getDay(d),
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
                ExpiresMonth: curMonth.slice(-2),
                ExpiresYear: curYear,
                ccNumber: "",
                cvnCode: ""
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
			this.setState({a11yMessage: "Your donation amount has been recorded. A new form to add your Credit Card and Contact Information Just Loaded"})
		}
	}
    async componentWillUnmount() {
        window.removeEventListener("message", this.handleMessage);
		// if user has selected to save personal info,
	}
	getSnapshotBeforeUpdate() {
		const { submitted, confirmationData, formAction } = this.context
		console.log({confirmationData, formAction})
		if (submitted) {
			return true
		}
		return null
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log({snapshot})
	}
    handleMessage = e => {
		// console.log({e})
		const { type, tracking_vars } =
			e.data && typeof e.data == "string" ? JSON.parse(e.data) : {};
		const types = [ "form error", "render receipt" ]
		if (!types.includes(type)) {
            return;
        } 
		const { origin } = e;
		const isOrigin = this.context.msgUris.includes(origin);
		if (!isOrigin) {
			return;
		}
		switch (type) {
			case "render receipt":
				this.setState({ submitting: false });
				this.context.setConfirmed({
					type: "CONFIRMED",
					trackingVars: tracking_vars,
				});
				break;
			case "form error" :
				const errors = [...this.state.errors]
				errors["ccNumber"] = "Please verify your Payment Information and Try Again"
				this.setState({ submitting: false, errors });
				break;
		}
		return;
    };
    handleInputChange = e => {
		const target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.context.validateAndUpdateField({ type: "UPDATE_FIELD", name, value });
	};

	handleSubmit = async e => {
		e.preventDefault();
		this.context.submitGivingForm({type: "confirmation"});
	};
    render() {
        const { errors, fields, initialized, submitting, selected, submitted, confirmationData, formAction } = this.context;
        const { 
            allowInternational,
            getPhone,
            getHonorific,
            getSuffix,
            getMiddleName,
            getSpouseInfo,  
		} = this.props
		const formInputs = [], dataInputs = [];
		confirmationData.forEach((datum, i) => {
			if (datum.name.includes("ucConfirmBody")) {
				name = datum.name.split("$")[1];
				dataInputs.push(
					<input
						key={`datum${i}`}
						id={name}
						name={name}
						defaultValue={datum.value ? datum.value : ""}
						type="hidden"
					/>
				);
			} else {
				formInputs.push(
					<input
						key={`datum${i}`}
						id={datum.name}
						name={datum.name}
						defaultValue={datum.value ? datum.value : ""}
						type="hidden"
					/>
				);
			}
		})
        const hasErrors =
			Object.values(errors).filter(val => val && val.length > 0).length > 0;
        return selected && (
            <>
			<LiveMessage message={this.state.a11yMessage} aria-live="polite" />
            <FormWrapper style={{maxWidth: "818px", margin: "0 auto"}}>
                <form
                    id="react-club-payment-form"
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                    style={{backgroundColor: "white"}}
                >
                {
                    initialized ? (
						<FormPanel className="form-panel">
                            <SummaryBlock withContainer={true}/>
                            <PaymentBlock 
                                fields={fields} 
                                errors={errors} 
                                curMonth={curMonth} 
                                curYear={curYear}
                                handleInputChange={this.handleInputChange}
                            />
							<FieldSet style={{minWidth: "unset", width: "calc(100% - 20px)", maxWidth: "640px", margin: "0 auto"}}>
								<legend>Name and Billing Address Block</legend>
								<FormPanel className="name-address__info">
									<FormHeader className="form-header" style={{fontSize: "28px", fontWeight: "bold", letterSpacing:"0.53px",color:"#1c1c1c", marginBottom: "20px"}}>
										Contact Information
									</FormHeader>
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
									<AddressBlock
										fields={fields}
										errors={errors}
										handleInputChange={this.handleInputChange}
										getAddress={true}
										getPhone={getPhone}
										allowInternational={allowInternational}
										type="Billing"
										hideAddressTwo={true}
									/>
								</FormPanel>
							</FieldSet>
                            <SummaryBlock withContainer={false}/>
                            <FieldSet>
								<legend>Form Submit Block</legend>
								<SubmitButton
									hasErrors={hasErrors}
									error=""
									handleSubmit={this.handleSubmit}
									submitting={submitting || submitted}
                                    value="Send Payment"
                                    color="#fff"
									backgroundColor="#009BDF"
									hoverBackgroundColor="#fff"
									hoverColor="#009bdf"
									hoverBorderColor="#009bdf"
									borderRadius="3px"
									styles={{input: {boxShadow: "0 2px 0 0 #0081BA"}}}
								/>
                                <Disclaimer style={{color: "#54585D"}}>CBN values and protects your personal information.</Disclaimer>
							</FieldSet>
							<HiddenForm
								id="hiddenform"
								className="hidden-form"
								action={formAction}
								method="POST"
								target="paymentprocess"
								ref={this.formRef}
							>
								{formInputs}
							</HiddenForm>
							{dataInputs}
							<iframe
								className="hidden"
								name="paymentprocess"
								width="0"
								height="0"
								style={{ visibility: "none", border: "none" }}
							></iframe>
						</FormPanel>
					) : (
						<FormPanel className="form-panel">
							<Spinner />
						</FormPanel>
                    )}
                </form>
            </FormWrapper>
            <div style={{background: "white", margin: "30px 0", padding: "30px 0"}}>
                <Seals style={{marginTop:"0"}}/>
                <Disclaimer>If you experience a problem with this transaction, send a message to <a href="mailto:partners@cbn.org">partners@cbn.org</a> or call <a href="tel:18002891777">1-800-289-1777</a>.</Disclaimer>
            </div>
            </>
        )
    }
}

ConfirmationForm.contextType = GivingFormContext;

export default ConfirmationForm;