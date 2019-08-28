import React, { Component } from "react";
import styled from "@emotion/styled";
import { LiveMessage } from "react-aria-live";

import { GivingFormContext } from "../Contexts/GivingFormProvider";

import FormWrapper from "../StyledComponents/FormWrapper";
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
import Seals from "../FormComponents/Seals";
import HeaderBlock from "../FormComponents/Blocks/HeaderBlock";
import FooterBlock from "../FormComponents/Blocks/FooterBlock";

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
`;

const getDay = date => {
	let day = date.getDate() + 2;
	return day >= 2 && day <= 28 ? day : 2;
};
const d = new Date();
const curMonth = "0" + (d.getMonth() + 1);
const curYear = d.getFullYear();

let timeout;

class ConfirmationForm extends Component {
	formRef = React.createRef();
	state = {
		a11yMessage: "",
		hiddenFormSubmitted: false,
		hiddenFormAccepted: false,
	};

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
				cvnCode: "",
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
				allowMonthlyDesignations: this.props.allowMonthlyDesignations,
			});
			this.setState({
				a11yMessage:
					"Your donation amount has been recorded. A new form to add your Credit Card and Contact Information Just Loaded",
			});
		}
	}
	async componentWillUnmount() {
		window.removeEventListener("message", this.handleMessage);
		// if user has selected to save personal info,
	}
	getSnapshotBeforeUpdate() {
		const { submitted, confirmed, fields } = this.context;
		const { hiddenFormSubmitted } = this.state;
		// console.log({confirmationData, formAction})
		const hasErrors =
			fields.errors && fields.errors.length
				? Object.values(fields.errors).filter(val => val && val.length > 0)
						.length > 0
				: false;
		if (submitted && !hasErrors && !confirmed && !hiddenFormSubmitted) {
			console.log("Snapshot");
			return true;
		}
		return null;
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot) {
			const getMainURL = () => {
				var retnURL = "";
				var mainurlStr = document.querySelector("input[name='mainURL']").value;
				if (mainurlStr != "" && mainurlStr != "undefined") {
					if (mainurlStr.indexOf("?") > 0) {
						retnURL = mainurlStr + "&error=gen";
					} else {
						retnURL = mainurlStr + "?error=gen";
					}
				}
				return retnURL;
			};

			let redirURL = getMainURL();

			if (redirURL == "" || redirURL == "undefined") {
				redirURL = "https://www.cbn.com";
			}
			//set timeout if url does not respond in timely manner
			timeout = setTimeout(function() {
				window.location.href = redirURL;
				return false;
			}, 15000);

			const {
				ccNumber,
				ExpiresYear,
				ExpiresMonth,
				cvnCode,
			} = this.context.fields;
			let ccChecked;
			if (ccNumber) {
				switch (parseInt(ccNumber.slice(0, 1))) {
					case 4:
						ccChecked = "001";
						break;
					case 5:
						ccChecked = "002";
						break;
					case 3:
						ccChecked = "003";
						break;
					case 6:
						ccChecked = "004";
						break;
				}
			}
			const isValid = checkValues(
				ccChecked,
				ccNumber,
				ExpiresMonth,
				ExpiresYear,
				cvnCode
			);
			if (isValid.passes) {
				const {
					ccCardType,
					ccNum,
					ccExpDate,
					transactionType,
					ccCvn,
				} = isValid;
				document.querySelector('input[name="card_type"]').value = ccCardType;
				document.querySelector('input[name="card_number"]').value = ccNum;
				document.querySelector(
					'input[name="card_expiry_date"]'
				).value = ccExpDate;
				document.querySelector('input[name="card_cvn"]').value = ccCvn;
				if (isValid.transactionType) {
					document.querySelector(
						'input[name="transaction_type"]'
					).value = transactionType;
					document.querySelector(
						'input[name="signature"]'
					).value = document.querySelector('input[name="signatureDis"]').value;
				}
				//cancel redirect
				clearTimeout(timeout);

				// bubble formaction
				document.forms.hiddenform.submit.type = "submit";
				document.forms.hiddenform.submit.click();
				this.setState(state => ({ hiddenFormSubmitted: true }));
			} else {
				// handle validation errors
				const { errors } = isValid;
				this.setState(
					state => ({ hiddenFormSubmitted: true }),
					() => {
						this.context.handleCCErrors({ type: "UPDATE_CC_ERRORS", errors });
						// cancel redirect
						clearTimeout(timeout);
					}
				);
			}
		}
	}
	handleMessage = e => {
		// console.log({e})
		const { type, tracking_vars } =
			e.data && typeof e.data == "string" ? JSON.parse(e.data) : {};
		const types = ["form error", "render receipt"];
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
				this.context.setConfirmed({
					type: "CONFIRMED",
					trackingVars: tracking_vars,
				});
				break;
			case "form error":
				const errors = [
					{ ccNumber: "Please verify your Payment Information and Try Again" },
				];
				this.setState({ hiddenFormSubmitted: false }, () => {
					this.context.handleCCErrors({ type: "UPDATE_CC_ERRORS", errors });
					clearTimeout(timeout);
				});
				break;
		}
		return;
	};
	handleInputChange = e => {
		const target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.context.updateField({ type: "UPDATE_FIELD", name, value });
	};
	handleBlur = e => {
		const target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.context.validateAndUpdateField({ type: "UPDATE_FIELD", name, value });
	};

	handleSubmit = async e => {
		e.preventDefault();
		this.context.submitGivingForm({ type: "confirmation" });
	};
	render() {
		const {
			errors,
			fields,
			initialized,
			submitting,
			selected,
			submitted,
			confirmationData,
			formAction,
			confirmed,
		} = this.context;
		const {
			allowInternational,
			getPhone,
			getHonorific,
			getSuffix,
			getMiddleName,
			getSpouseInfo,
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
		const formInputs = [],
			dataInputs = [];
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
		});
		const hasErrors =
			Object.values(errors).filter(val => val && val.length > 0).length > 0;
		return (
			selected &&
			!confirmed && (
				<>
					<HeaderBlock/>
					<LiveMessage message={this.state.a11yMessage} aria-live="polite" />
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
							id="react-club-payment-form"
							autoComplete="off"
							onSubmit={this.handleSubmit}
							style={{ backgroundColor: "white" }}
						>
							{initialized ? (
								<FormPanel className="form-panel">
									<SummaryBlock withContainer={true} />
									<PaymentBlock
										fields={fields}
										errors={errors}
										curMonth={curMonth}
										curYear={curYear}
										handleInputChange={this.handleInputChange}
										handleBlur={this.handleBlur}
									/>
									<FieldSet
										style={{
											minWidth: "unset",
											width: "calc(100% - 20px)",
											maxWidth: "640px",
											margin: "0 auto",
										}}
									>
										<legend>Name and Billing Address Block</legend>
										<FormPanel className="name-address__info">
											<FormHeader
												className="form-header"
												style={{
													fontSize: "28px",
													fontWeight: "bold",
													letterSpacing: "0.53px",
													color: "#1c1c1c",
													marginBottom: "20px",
												}}
											>
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
												handleBlur={this.handleBlur}
												type="Name"
											/>
											<AddressBlock
												fields={fields}
												errors={errors}
												handleInputChange={this.handleInputChange}
												handleBlur={this.handleBlur}
												getAddress={true}
												getPhone={getPhone}
												allowInternational={allowInternational}
												type="Billing"
												hideAddressTwo={true}
											/>
										</FormPanel>
									</FieldSet>
									<SummaryBlock withContainer={false} />
									<FieldSet>
										<legend>Form Submit Block</legend>
										<SubmitButton
											hasErrors={hasErrors}
											error=""
											handleSubmit={this.handleSubmit}
											submitting={submitting || submitted}
											value="Send Payment"
										/>
										<Disclaimer style={{ color: "#54585D" }}>
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
					</FormWrapper>
					<div
						style={{ background: "white", margin: "30px 0", padding: "30px 0" }}
					>
						<Seals style={{ marginTop: "0" }} />
						<Disclaimer>
							If you experience a problem with this transaction, send a message
							to <a href="mailto:partners@cbn.org">partners@cbn.org</a> or call{" "}
							<a href="tel:18002891777">1-800-289-1777</a>.
						</Disclaimer>
					</div>
					<FooterBlock/>
				</>
			)
		);
	}
}

ConfirmationForm.contextType = GivingFormContext;

export default ConfirmationForm;
