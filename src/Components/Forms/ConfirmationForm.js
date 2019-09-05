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
import { scrollToPoint, offsetTop } from "../../helpers/scrollToPoint";

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
	hiddenSubmit = React.createRef();
	formRef = React.createRef();
	state = {
		scrolled: false,
		a11yMessage: "",
		hiddenFormLoaded: false,
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
		const { submitted, confirmed, fields, selected } = this.context;
		const { hiddenFormLoaded, hiddenFormSubmitted, scrolled } = this.state;
		// console.log({confirmationData, formAction})
		const hasErrors =
			fields.errors && fields.errors.length
				? Object.values(fields.errors).filter(val => val && val.length > 0)
						.length > 0
				: false;
		if (selected & !scrolled) {
			console.log("Scrolling Snapshot on Payment");
			return true;
		}
		if (submitted && !hasErrors && !confirmed && !hiddenFormLoaded) {
			console.log("Loading Snapshot");
			return true;
		}
		if (
			submitted &&
			!hasErrors &&
			!confirmed &&
			hiddenFormLoaded &&
			!hiddenFormSubmitted
		) {
			console.log("Submitting Snapshot");
			return true;
		}
		return null;
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot && !this.state.scrolled) {
			this.setState({ scrolled: true }, () => {
				const target = document.getElementById("react-club-payment-form");
				const top = offsetTop(target);
				scrollToPoint(top);
			});
		} else if (snapshot && !this.state.hiddenFormLoaded) {
			// bubble formaction
			document.forms.hiddenform.submit.type = "submit";
			document.forms.hiddenform.submit.click();
		} else if (snapshot && !this.state.hiddenFormSubmitted) {
			//set timeout if url does not respond in timely manner
			timeout = setTimeout(() => {
				this.context.goBack({ type: "GO_BACK" });
				console.error(
					"Timeout Error. Your submission took longer than 15 seconds."
				);
				try {
					window.omTrackDebug(
						window.location.href + " - React Giving Form",
						JSON.stringify({
							error: "Timeout Trying to Submit Credit Card Payment",
						})
					);
				} catch (err) {
					console.error("Error Tracking Error");
					console.error(err);
				}
				alert(
					"There was an internal error loading this form. Please check back later or call us at 1-800-759-0700"
				);
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
				const { ccCardType, ccNum, ccExpDate, ccCvn } = isValid;
				this.hiddenSubmit.current.contentWindow.postMessage(
					{
						type: "cc-values",
						ccCardType,
						ccNumber,
						ExpiresMonth,
						ExpiresYear,
						cvnCode,
					},
					this.context.confirmationData.confirmUrl
				);
				this.setState(state => ({ hiddenFormSubmitted: true }));
				//cancel redirect
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
	handleMessage = msg => {
		try {
			const { type, tracking_vars, errors = [] } =
				msg.data && typeof msg.data == "string" ? JSON.parse(msg.data) : {};
			const types = [
				"form validation error",
				"payment form loaded",
				"form error",
				"render receipt",
			];
			if (!types.includes(type)) {
				return;
			}
			const { origin } = msg;
			const isOrigin = this.context.msgUris.includes(origin);
			if (!isOrigin) {
				return;
			}
			switch (type) {
				case "render receipt":
					clearTimeout(timeout);
					this.context.setConfirmed({
						type: "CONFIRMED",
						trackingVars: tracking_vars,
					});
					break;
				case "form validation error":
					console.error({ errors });
					this.context.handleCCErrors({ type: "UPDATE_CC_ERRORS", errors });
					clearTimeout(timeout);
					break;
				case "form error":
					errors.push({
						ccNumber: "Please verify your Payment Information and Try Again",
					});
					this.context.handleCCErrors({ type: "UPDATE_CC_ERRORS", errors });
					clearTimeout(timeout);
					break;
				case "payment form loaded":
					this.setState(state => ({ hiddenFormLoaded: true }));
					break;
			}
			return;
		} catch (err) {
			console.error("PostMessage API Error");
			console.log({ msg });
			console.error(err);
		}
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
		const { data = {}, confirmUrl = "" } = confirmationData;
		const keys = Object.keys(data);
		const inputs = keys.map((k, i) => (
			<input
				key={i + "-" + k}
				name={k}
				value={data[k] ? data[k] : ""}
				type="hidden"
			/>
		));
		const hasErrors =
			Object.values(errors).filter(val => val && val.length > 0).length > 0;
		return (
			selected &&
			!confirmed && (
				<>
					<HeaderBlock />
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
						inProp={selected && !confirmed}
					>
						<form
							id="react-club-payment-form"
							autoComplete="off"
							onSubmit={this.handleSubmit}
							style={{ backgroundColor: "white" }}
						>
							{initialized ? (
								<FormPanel className="form-panel">
									<SummaryBlock
										withContainer={true}
										submitting={submitting || submitted}
									/>
									<PaymentBlock
										fields={fields}
										errors={errors}
										curMonth={curMonth}
										curYear={curYear}
										handleInputChange={this.handleInputChange}
										handleBlur={this.handleBlur}
										submitting={submitting || submitted}
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
												submitting={submitting || submitted}
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
												submitting={submitting || submitted}
											/>
										</FormPanel>
									</FieldSet>
									<SummaryBlock
										withContainer={false}
										submitting={submitting || submitted}
									/>
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
							action={confirmUrl}
							method="POST"
							target="paymentprocess"
							ref={this.formRef}
						>
							{inputs}
							<input type="hidden" name="cssVars" value={JSON.stringify({})} />
							<input id="submit" type="submit" hidden={true} />
						</HiddenForm>
						<iframe
							className="hidden"
							name="paymentprocess"
							width="0"
							height="0"
							style={{ visibility: "none", border: "none" }}
							ref={this.hiddenSubmit}
						></iframe>
					</FormWrapper>
					<section
						className="seals-section"
						style={{
							background: "white",
							margin: "30px 0 0 0",
							padding: "30px 0 60px 0",
						}}
					>
						<Seals style={{ marginTop: "0" }} />
						<Disclaimer>
							If you experience a problem with this transaction, send a message
							to <a href="mailto:partners@cbn.org">partners@cbn.org</a> or call{" "}
							<a href="tel:18002891777">1-800-289-1777</a>.
						</Disclaimer>
					</section>
					<FooterBlock />
				</>
			)
		);
	}
}

ConfirmationForm.contextType = GivingFormContext;

export default ConfirmationForm;
