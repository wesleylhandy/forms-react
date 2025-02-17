import React, { Component, Fragment } from "react";

import { GivingFormContext } from "../Contexts/GivingFormProvider";

import FieldSet from "../FormComponents/StyledComponents/FieldSet";
import FormRow from "../FormComponents/StyledComponents/FormRow";
import FormPanel from "../FormComponents/StyledComponents/FormPanel";
import FormLine from "../FormComponents/StyledComponents/FormLine";
import FormHeader from "../FormComponents/StyledComponents/FormHeader";
import ProductSummary from "../FormComponents/StyledComponents/ProductSummary";
import CCButton from "../FormComponents/StyledComponents/CCButton";
import HiddenForm from "../FormComponents/StyledComponents/HiddenForm";
import InputGroup from "../FormComponents/FunctionalComponents/InputGroup";
import SelectGroup from "../FormComponents/FunctionalComponents/SelectGroup";
import SubmitButton from "../FormComponents/FunctionalComponents/SubmitButton";
import FormWrapper from "../StyledComponents/FormWrapper";
import {
	FaCcAmex,
	FaCcDiscover,
	FaCcMastercard,
	FaCcVisa,
} from "react-icons/fa";

import { scrollToPoint, offsetTop } from "../../helpers/scrollToPoint";
import { validateInput, checkValues } from "../../helpers/cc-validation";

const d = new Date();
const curMonth = "0" + (d.getMonth() + 1);
const curYear = d.getFullYear();

class PaymentForm extends Component {
	formRef = React.createRef();
	state = {
		fields: {
			ExpiresMonth: curMonth.slice(-2),
			ExpiresYear: curYear,
			ccNumber: "",
			cvnCode: "",
		},
		errors: {
			ExpiresMonth: null,
			ExpiresYear: null,
			ccNumber: null,
			cvnCode: null,
		},
		ccChecked: null,
		submitting: false,
	};
	componentDidMount() {
		const lifetime = 60 * 1000; // 60 seconds * 1000 milliseconds
		this.context.saveLS(lifetime, "store");

		window.addEventListener("message", this.handleMessage, false);
		try {
			this.context.getGlobals();
		} catch (err) {
			console.error({ err });
		}
	}
	getSnapshotBeforeUpdate() {
		const form = this.formRef.current;
		const { submitted, confirmed } = this.context;
		if (!form && submitted && !confirmed) {
			return true;
		}
		return null;
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (!!snapshot) {
			const target = this.formRef.current;
			const top = offsetTop(target);
			scrollToPoint(top);
		}
	}
	componentWillUnmount() {
		window.removeEventListener("message", this.handleMessage);
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
				this.setState({ submitting: false });
				this.context.setConfirmed({
					type: "CONFIRMED",
					trackingVars: tracking_vars,
				});
				break;
			case "form error":
				const errors = [...this.state.errors];
				errors["ccNumber"] =
					"Please verify your Payment Information and Try Again";
				this.setState({ submitting: false, errors });
				break;
		}
		return;
	};
	/**
	 *
	 * @param {string} num - 3 digits representing cc ['001', '002', '003', or '004']
	 * @returns {Object} cardType, visible, src
	 */
	getCardType = num => {
		let cardType, visible, Icon;
		switch (num) {
			case "001":
				cardType = "Visa";
				visible = cardType;
				Icon = () => <FaCcVisa />;
				break;
			case "002":
				cardType = "MasterCard";
				visible = cardType;
				Icon = () => <FaCcMastercard />;
				break;
			case "003":
				cardType = "AmericanExpress";
				visible = "American Express";
				Icon = () => <FaCcAmex />;
				break;
			case "004":
				cardType = "Discover";
				visible = cardType;
				Icon = () => <FaCcDiscover />;
				break;
		}

		return { cardType, visible, Icon };
	};
	getMainURL = () => {
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

	renderCCInput = (num, checked) => {
		num = "00" + num;
		const { cardType, visible, Icon } = this.getCardType(num);
		return (
			<CCButton
				key={`cc-btn-${num}`}
				id={`${cardType}-group`}
				className="radio-group"
			>
				<input
					name="creditcardoption"
					id={num}
					type="radio"
					checked={num == checked ? true : false}
					onChange={this.handleRadioClick}
					hidden={true}
				/>
				<label htmlFor={num} aria-label={visible} className={cardType}>
					<Icon />
				</label>
			</CCButton>
		);
	};
	renderCardInputs = checked => {
		const cardInputs = [1, 2, 3, 4].map(num =>
			this.renderCCInput(num, checked)
		);
		return <FormRow className="cc-type-container">{cardInputs}</FormRow>;
	};

	renderProductSummary = () => {
		const items = [...this.context.cart.items];
		const pledgeFound = items.findIndex(el => el && el.type == "donation");
		const isMonthly = pledgeFound > -1 ? items[pledgeFound].monthly : false;
		const Monthlypledgeday = isMonthly
			? this.context.fields.Monthlypledgeday
			: 2;
		let ordinalDay;
		switch (Monthlypledgeday) {
			case 2:
				ordinalDay = "2nd";
				break;
			case 3:
				ordinalDay = "3rd";
				break;
			case 21:
				ordinalDay = "21st";
				break;
			default:
				ordinalDay = Monthlypledgeday + "th";
				break;
		}
		const PrimaryPledge = {};
		const donations = items.reduce(
			(arr, { DetailName, DetailDescription, PledgeAmount }, index) => {
				if (index === pledgeFound) {
					PrimaryPledge.Description = DetailDescription;
					PrimaryPledge.PledgeAmount = PledgeAmount;
				} else {
					let quantity = 1;
					const parts = DetailName.split("|");
					if (parts.length > 1) {
						quantity = parts[1];
					}
					arr.push({
						quantity,
						DetailDescription,
						PledgeAmount,
					});
					return arr;
				}
			},
			[]
		);
		return (
			<ProductSummary>
				{PrimaryPledge && (
					<Fragment>
						<div className="flex-row">
							<div>{PrimaryPledge.Description}</div>
							<div>${PrimaryPledge.PledgeAmount}</div>
						</div>
						{isMonthly && (
							<div className="flex-row">
								Your card will be charged automatically every month on the{" "}
								{ordinalDay} of each month.
							</div>
						)}
					</Fragment>
				)}
				{donations &&
					donations.map((donation, idx) => {
						<div className="flex-row" key={`summary-item-${idx}`}>
							<div>
								{donation.Description} ({donation.quantity})
							</div>
							<div>${donationa.PledgeAmount}</div>
						</div>;
					})}
			</ProductSummary>
		);
	};

	assignValues = e => {
		e.preventDefault();
		if (this.state.submitting) return; // ie. disallow multiple submissions
		this.setState({ submitting: true }, () => {
			let redirURL = this.getMainURL();

			if (redirURL == "" || redirURL == "undefined") {
				redirURL = "https://www.cbn.com";
			}
			//set timeout if url does not respond in timely manner
			const timeout = setTimeout(function() {
				window.location.href = redirURL;
				return false;
			}, 15000);

			const {
				ccNumber,
				ExpiresYear,
				ExpiresMonth,
				cvnCode,
			} = this.state.fields;
			const ccChecked = this.state.ccChecked;
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

				//store submission data in cookie
				const lifetime = 2 * 60 * 1000; // n minutes * 60 seconds * 1000 milliseconds
				this.context.saveLS(lifetime, "store");

				// bubble formaction
				document.forms.hiddenform.submit.type = "submit";
				return document.forms.hiddenform.submit.click();
			} else {
				// handle validation errors
				const validationErrors = isValid.errors;
				const errors = this.state.errors;
				validationErrors.forEach(vErr => (errors[vErr.type] = vErr.error));
				this.setState({ errors, submitting: false });
				// cancel redirect
				return clearTimeout(timeout);
			}
		});
	};

	handleRadioClick = e => {
		this.setState({ ccChecked: e.target.id });
	};

	handleInputChange = e => {
		const target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		const errors = { ...this.state.errors };

		const response = validateInput(name, value);
		errors[name] = response.error;

		const fields = { ...this.state.fields };
		fields[name] = value;

		let { ccChecked } = this.state;
		if (response.ccChecked) {
			ccChecked = response.ccChecked;
		}
		this.setState({ fields, errors, ccChecked });
	};

	handleGoBackClick = e => {
		e.preventDefault();
		this.context.goBack({ type: "GO_BACK" });
	};

	render() {
		const { submitted, confirmationData, formAction, confirmed } = this.context;
		const { fields, errors, submitting, ccChecked } = this.state;
		const formInputs = [],
			dataInputs = [],
			years = [],
			months = [];
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
		years.push(
			<option key="exp-year-base-0" value="" disabled="disabled">
				Year* &#9663;
			</option>
		);
		for (let y = curYear; y < curYear + 25; y++) {
			years.push(
				<option key={"year-option-" + y} value={y}>
					{y}
				</option>
			);
		}
		months.push(
			<option key="exp-month-base-0" value="" disabled="disabled">
				Month* &#9663;
			</option>
		);
		for (let m = 1; m < 13; m++) {
			const val = ("0" + m).slice(-2);
			months.push(
				<option key={"month-option-" + val} value={val}>
					{val}
				</option>
			);
		}
		const hasErrors =
			Object.values(errors).filter(val => val && val.length > 0).length > 0;
		return submitted && !confirmed ? (
			<FormWrapper style={{ maxWidth: "818px", margin: "0 auto" }}>
				<FormPanel ref={this.formRef}>
					<form id="react-cc-form" onSubmit={this.assignValues}>
						<div className="mboxDefault">
							<FormHeader className="form-header__payment">
								Almost Done!
							</FormHeader>
							<FormLine />
							<FormHeader className="form-header--small">
								Enter Payment Information and click <br />"
								<strong>Finish Donation</strong>" below.
							</FormHeader>
						</div>
						<FormRow>
							<FormLine />
						</FormRow>
						<FieldSet>
							<legend>Credit Card Information</legend>
							<div className="form-subheader">Card Type*</div>
							<FieldSet>
								<legend>Select Credit Card Type</legend>
								{this.renderCardInputs(ccChecked)}
							</FieldSet>
							<FormRow>
								<FormLine />
							</FormRow>
							<div className="form-subheader">Card Info*</div>

							<FormRow className="cc-num-row">
								<InputGroup
									specialStyle="form-group--ccNumber"
									type="text"
									id="ccNumber"
									label="Number"
									required={true}
									maxLength={16}
									placeholder="#### #### #### #### ####"
									value={fields.ccNumber}
									handleInputChange={this.handleInputChange}
									error={errors.ccNumber}
									validation="\d*"
								/>
							</FormRow>
							<FormRow className="cc-exp-row">
								<SelectGroup
									id="ExpiresMonth"
									specialStyle="form-group--expMonth"
									label="Month"
									required={true}
									value={fields.ExpiresMonth}
									error={errors.ExpiresMonth}
									options={months}
									handleInputChange={this.handleInputChange}
								/>
								<SelectGroup
									id="ExpiresYear"
									specialStyle="form-group--expYear"
									label="Year"
									required={true}
									value={fields.ExpiresYear}
									error={errors.ExpiresYear}
									options={years}
									handleInputChange={this.handleInputChange}
								/>
							</FormRow>
							<FormRow className="cc-cvn-row">
								<InputGroup
									specialStyle="form-group--cvnCode"
									type="text"
									id="cvnCode"
									label="CVV Code"
									required={true}
									maxLength={4}
									placeholder="cvv"
									value={fields.cvnCode}
									handleInputChange={this.handleInputChange}
									error={errors.cvnCode}
									validation="\d*"
								/>
								<div className="cvn-code-info">
									<a
										href="https://www.cbn.com/CVVNumber/CVV.html"
										target="_blank"
									>
										What is my <span style={{ letterSpacing: "1px" }}>CVV</span>{" "}
										Code?
									</a>
								</div>
							</FormRow>
						</FieldSet>
						<FormRow>
							<FormLine />
						</FormRow>
						{this.renderProductSummary()}
						<FormRow>
							<FormLine />
						</FormRow>
						<FieldSet>
							<legend>Form Submit Block</legend>
							<SubmitButton
								hasErrors={hasErrors}
								handleSubmit={this.assignValues}
								submitting={submitting}
								value="Finish Donation"
							/>
						</FieldSet>
						<FormRow className="go-back-row">
							<span>
								Click the &ldquo;Finish Donation&rdquo; button above or
							</span>
							<span>
								<a onClick={this.handleGoBackClick}>go back</a> to the previous
								page to make changes.
							</span>
						</FormRow>
					</form>
					<HiddenForm
						id="hiddenform"
						className="hidden-form"
						action={formAction}
						method="POST"
						target="paymentprocess"
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
			</FormWrapper>
		) : null;
	}
}

PaymentForm.contextType = GivingFormContext;

export default PaymentForm;
