import React, { Component } from "react";

import { FormConfigContext } from "./FormConfigProvider";
import { cryptLS, readLS, removeOneLS, emptyLS } from "../../helpers/ls";
import { getErrorType } from "../../helpers/error-types";
import { callApi } from "../../helpers/fetch-helpers";
import {
	zip_regex,
	phone_regex,
	callZipCityStateService,
	validateInput,
	callAddressVerification,
} from "../../helpers/validators";
import reducer from "../../helpers/reducer";

const d = new Date();
const curMonth = "0" + (d.getMonth() + 1);
const curYear = d.getFullYear();

export const GivingFormContext = React.createContext();

class GivingFormProvider extends Component {
	state = {
		cart: {
			items: [],
		},
		givingInfo: {},
		productInfo: [],
		designationInfo: {},
		designatedIndex: 0,
		allowMonthlyDesignations: false,
		initialized: false,
		submitting: false,
		fields: {},
		errors: {},
		submitted: false,
		selected: false,
		DonorID: "",
		formAction: "",
		confirmationData: [],
		confirmed: false,
		trackingVars: [],
		initFields: action => this.setState(state => reducer(state, action)),
		loadLS: action => {
			const store = readLS("store");
			const info = readLS("info");
			const data = store ? store : info;
			if (data) {
				const { items, ...formData } = data;

				if (!formData) {
					emptyLS();
				}
				if (!store) {
					removeOneLS("store");
				}
				action.formData = formData;
				action.items = items;
				this.setState(state => reducer(state, action));
			}
			return;
		},
		saveLS: async (lifetime, type) => {
			const {
				Address1,
				Address2,
				City,
				Country,
				Emailaddress,
				Firstname,
				Middlename,
				Lastname,
				Spousename,
				Suffix,
				State,
				Title,
				Zip,
				phone,
			} = this.state.fields;
			const Phoneareacode =
					phone && phone.trim().match(phone_regex)
						? phone.trim().match(phone_regex)[1]
						: "",
				Phoneexchange =
					phone && phone.trim().match(phone_regex)
						? phone.trim().match(phone_regex)[2]
						: "",
				Phonenumber =
					phone && phone.trim().match(phone_regex)
						? phone.trim().match(phone_regex)[3]
						: "";
			const formData = {
				Address1,
				Address2,
				City,
				Country,
				Emailaddress,
				Firstname,
				Middlename,
				Lastname,
				Phoneareacode,
				Phoneexchange,
				Phonenumber,
				Spousename,
				Suffix,
				State,
				Title,
				Zip,
			};
			let monthlychecked = false;
			if (type === "store") {
				const items = [...this.state.cart.items];
				formData.items = items;
				const pledgeFound = items.findIndex(el => el && el.type == "donation");
				monthlychecked = pledgeFound > -1 ? items[pledgeFound].monthly : false;
			}
			cryptLS({ formData }, lifetime, type);
			return monthlychecked;
		},
		removeOneLS: type => {
			removeOneLS(type);
		},
		updateField: action => this.setState(state => reducer(state, action)),
		validateAndUpdateField: async action => {
			const { name, value } = action;
			const isZip = name.includes("Zip");
			if (isZip) {
				this.setState(
					state => reducer(state, { type: "TOGGLE_SUBMITTING" }),
					async () => {
						if (!zip_regex.test(value)) {
							action.error = "Invalid Postal Code";
						} else {
							try {
								const oldCity = this.state.fields[
									name == "ShipToZip" ? "ShipToCity" : "City"
								].toUpperCase();
								const response = await callZipCityStateService(
									name,
									value,
									oldCity
								);
								if (response.action) {
									// console.log({action: response.action})
									this.setState(
										state => reducer(state, response.action),
										() => {
											this.setState(state =>
												reducer(state, { type: "TOGGLE_SUBMITTING" })
											);
										}
									);
								}
								action.error = response.error;
							} catch (err) {
								console.error("CallZipCityStateServiceError");
								console.error({ err });
								this.setState(state =>
									reducer(state, { type: "TOGGLE_SUBMITTING" })
								);
							}
						}
					}
				);
			} else {
				const { getHonorific, allowInternational } = this.context;
				action.error = await validateInput(
					false,
					name,
					value,
					true,
					getHonorific,
					allowInternational,
					this.state.fields.ShipToYes,
					this.state.fields.ccNumber,
					this.state.fields.ExpiresMonth,
					this.state.fields.ExpiresYear
				);
			}
			this.setState(state => reducer(state, action));
		},
		submitGivingForm: async type => {
			this.setState(
				state => reducer(state, { type: "TOGGLE_SUBMITTING" }),
				async () => {
					if (type !== "confirmation") {
						const isValidGift = this.validateGift();
						if (!isValidGift) {
							return this.setState(
								state => reducer(state, { type: "TOGGLE_SUBMITTING" }),
								() => {
									this.setState(state =>
										reducer(state, {
											type: "UPDATE_FIELD",
											name: "amount",
											value: "",
											error: "Please make a valid donation",
										})
									);
								}
							);
						}
					}
					let isValidForm = true,
						action = {};
					if (this.state.fields.Country == "United States") {
						let oldCity, response;
						try {
							oldCity = this.state.fields.City.toUpperCase();
							response = await callZipCityStateService(
								"Zip",
								this.state.fields.Zip,
								oldCity
							);

							if (response.action) {
								this.setState(state => reducer(state, response.action));
							}
							const zipError = response.error;
							let addressError, shipZipError, shipAddressError;
							if (!zipError) {
								try {
									addressError = await callAddressVerification(
										this.state.fields["Address1"],
										this.state.fields["Address2"],
										this.state.fields["City"],
										this.state.fields["State"],
										this.state.fields["Zip"]
									);
								} catch (err) {
									console.log("AddressVerificationError");
									console.error({ err });
								}
							}
							if (
								this.state.fields["ShipToZip"] &&
								this.state.fields.ShipToYes
							) {
								try {
									oldCity = this.state.fields.ShipToCity.toUpperCase();
									response = await callZipCityStateService(
										"ShipToZip",
										this.state.fields.ShipToZip,
										oldCity
									);
									if (response.action) {
										this.setState(state => reducer(state, response.action));
									}
									shipZipError = response.error;
								} catch (err) {
									console.log("CSZValidationError__SHIPPING");
									console.error({ err });
								}
							}
							if (!shipZipError && this.state.fields.ShipToYes) {
								try {
									shipAddressError = await callAddressVerification(
										this.state.fields["ShipToAddress1"],
										this.state.fields["ShipToAddress2"],
										this.state.fields["ShipToCity"],
										this.state.fields["ShipToState"],
										this.state.fields["ShipToZip"]
									);
								} catch (err) {
									console.log("AddressVerificationError__SHIPPING");
									console.error({ err });
								}
							}
							if (
								addressError ||
								shipAddressError ||
								zipError ||
								shipZipError
							) {
								isValidForm = false;
								action = {
									type: "UPDATE_FIELDS",
									fields: [],
								};
								if (addressError) {
									action.fields.push({
										name: "Address1",
										value: this.state.fields.Address1,
										error: addressError,
									});
								}
								if (shipAddressError) {
									action.fields.push({
										name: "ShipToAddress1",
										value: this.state.fields.ShipToAddress1,
										error: shipAddressError,
									});
								}
								if (zipError) {
									action.fields.push({
										name: "Zip",
										value: this.state.fields.Zip,
										error: zipError,
									});
								}
								if (shipZipError) {
									action.fields.push({
										name: "ShipToZip",
										value: this.state.fields.ShipToZip,
										error: shipZipError,
									});
								}
								this.setState(state => reducer(state, action));
							}
						} catch (err) {
							console.log("CSZValidationError");
							console.error({ err });
						}
					} else {
						action = {
							type: "UPDATE_FIELDS",
							action: {
								fields: [
									{
										name: "Zip",
										value: "NA",
										error: "",
									},
									{
										name: "State",
										value: "00",
										error: "",
									},
								],
							},
						};
						this.setState(state => reducer(state, action));
					}
					const { fields } = this.state;
					const fieldNames = Object.keys(fields);
					action = {
						type: "UPDATE_FIELDS",
						fields: [],
					};
					for (let i = 0; i < fieldNames.length; i++) {
						let error;
						const name = fieldNames[i];
						if (!name.includes("Zip")) {
							const { getHonorific, allowInternational } = this.context;
							error = validateInput(
								true,
								name,
								fields[name],
								true,
								getHonorific,
								allowInternational,
								this.state.fields.ShipToYes,
								this.state.ccNumber,
								this.state.fields.ExpiresMonth,
								this.state.fields.ExpiresYear
							);
							if (error) {
								isValidForm = false;
								action.fields.push({ name, value: fields[name], error });
							}
						}
					}
					if (!isValidForm) {
						return this.setState(
							state => reducer(state, { type: "TOGGLE_SUBMITTING" }),
							() => {
								this.setState(state => reducer(state, action));
							}
						);
					}
					const {
						Address1,
						Address2,
						City,
						Country,
						Emailaddress,
						Firstname,
						Middlename,
						Lastname,
						Spousename,
						Suffix,
						State,
						Title,
						Zip,
						ShipToYes,
						ShipToAddress1,
						ShipToAddress2,
						ShipToCity,
						ShipToState,
						ShipToZip,
						ShipToCountry,
						ShipToName,
						phone,
					} = fields;
					let {
						mode,
						EmailSubjectLine = "Thank You for Your Contribution",
						subscriptions,
						AddContactYN,
						ActivityName,
						ContactSource,
						SectionName,
						proxy,
					} = this.context.formConfig;
					const ClientBrowser =
						window && window.navigator ? window.navigator.userAgent : "";
					const UrlReferer = window.location.origin + window.location.pathname;

					//construct phone fields from regex
					const Phoneareacode = phone.trim().match(phone_regex)
							? phone.trim().match(phone_regex)[1]
							: "",
						Phoneexchange = phone.trim().match(phone_regex)
							? phone.trim().match(phone_regex)[2]
							: "",
						Phonenumber = phone.trim().match(phone_regex)
							? phone.trim().match(phone_regex)[3]
							: "";

					//process cart
					let TransactionType = "Product";
					const items = [...this.state.cart.items];
					const pledgeFound = items.findIndex(
						el => el && el.type == "donation"
					);
					const isMonthly =
						pledgeFound > -1 ? items[pledgeFound].monthly : false;
					const DonationType = isMonthly ? "CR" : "CC";
					const IsRecurringCreditCardDonation = isMonthly;
					const Monthlypledgeday = isMonthly
						? this.state.fields.Monthlypledgeday
						: null;
					const Monthlypledgeamount =
						isMonthly && pledgeFound > -1 ? items[pledgeFound].PledgeAmount : 0;
					const Singledonationamount =
						!isMonthly && pledgeFound > -1
							? items[pledgeFound].PledgeAmount
							: 0;
					if (Monthlypledgeamount > 0) {
						TransactionType = "Monthly";
					}
					if (Singledonationamount > 0) {
						TransactionType = "Single";
					}
					const ShipTo = ShipToYes === true ? "Yes" : "No";
					const multipleDonations = () =>
						items.map(
							(
								{
									DetailName,
									DetailDescription,
									DetailCprojCredit,
									DetailCprojMail,
									PledgeAmount,
								},
								index
							) => {
								if (
									index === pledgeFound &&
									Object.keys(this.state.designationInfo).length &&
									!(isMonthly && !this.state.allowMonthlyDesignations)
								) {
									DetailName =
										(isMonthly ? "MP" : "SG") +
										this.state.designationInfo.DetailName;
									DetailDescription = this.state.designationInfo
										.DetailDescription;
									DetailCprojCredit = this.state.designationInfo
										.DetailCprojCredit;
									DetailCprojMail = this.state.designationInfo.DetailCprojMail;
								}
								// console.log({DetailName});
								return {
									DetailName,
									DetailDescription,
									DetailCprojCredit,
									DetailCprojMail,
									PledgeAmount,
								};
							}
						);
					const MultipleDonations = multipleDonations();

					const MotivationText =
						window.cbn_obj && window.cbn_obj.motivation
							? window.cbn_obj.motivation
							: "041181";

					let data = {
						ActivityName,
						AddContactYN,
						Address1,
						Address2,
						City,
						ContactSource,
						Country,
						DonationType,
						Emailaddress,
						EmailSubjectLine,
						Firstname,
						IsRecurringCreditCardDonation,
						Lastname,
						Middlename,
						Monthlypledgeamount,
						Monthlypledgeday,
						MotivationText,
						MultipleDonations,
						Phoneareacode,
						Phoneexchange,
						Phonenumber,
						SectionName,
						ShipTo,
						Singledonationamount,
						Spousename,
						State,
						Suffix,
						Title,
						TransactionType,
						UrlReferer,
						Zip,
						ClientBrowser,
						ShipToAddress1,
						ShipToAddress2,
						ShipToCity,
						ShipToState,
						ShipToZip,
						ShipToCountry,
						ShipToName,
						mode,
					};
					//flatten subscription information
					if (subscriptions && subscriptions.length) {
						subscriptions.forEach(sub => (data[sub.key] = sub.value));
					}
					try {
						const msg = await callApi(proxy, {
							method: "POST",
							mode: "cors",
							headers: {
								"Content-Type": "application/json; charset=utf-8",
							},
							body: JSON.stringify(data),
						});
						const DonorID = msg.split(";")[0].split(" - ")[1];
						const confirmUrl = msg.split(" is ")[1];
						data.DonorID = DonorID
						const confirmationData = { confirmUrl, data};
						// let formAction;
						// try {
						// 	const html = await callApi(confirmUrl, {
						// 		method: "POST",
						// 		body: new URLSearchParams(bodyFormData),
						// 	});
						// 	const parser = new DOMParser();
						// 	const doc = parser.parseFromString(html, "text/html");
						// 	const form = doc.querySelector("form");
						// 	formAction = form ? form.action : "";
						// 	const inputs = doc.querySelectorAll('input[type="hidden"]');
						// 	inputs.forEach(input =>
						// 		confirmationData.push({ name: input.name, value: input.value })
						// 	);
						// } catch (err) {
						// 	console.error("GetConfirmationPageError");
						// 	console.error({ err });
						// }
						return this.setState(state =>
							reducer(
								state,
								{
									type: "SUBMIT_FORM",
									DonorID,
									confirmationData
								},
								() => {
									if (type !== "confirmation") {
										try {
											const url =
												window.location.origin + window.location.pathname;
											const sDynamicPageUrl =
												url +
												(url.charAt(url.length - 1) == "/"
													? "payment"
													: "/payment");
											const sDynamicPageTitle = document.title + " > Payment";
											window.omTrackDynamicCBNPage(
												sDynamicPageUrl,
												sDynamicPageTitle
											);
										} catch (err) {
											console.error("Call Submission Tracking Error");
											console.error(err);
										}
										this.context.submitForm({
											type: "SUBMIT_FORM",
										});
									}
								}
							)
						);
					} catch (err) {
						console.error(err.message);
						const { message } = err;
						const { breaking, name } = getErrorType(message);
						// console.log({breaking, name})
						if (breaking) {
							alert(
								"There was an internal error submitting your form. Please check your information and try again or call us at 1-800-759-0700"
							);
						} else {
							this.setState(state =>
								reducer(state, {
									type: "UPDATE_FIELD",
									name,
									value: fields[name],
									error: message,
								})
							);
						}
						return this.setState(state =>
							reducer(state, { type: "TOGGLE_SUBMITTING" })
						);
					}
				}
			);
		},
		submitAskForm: action => {
			this.setState(
				state => reducer(state, { type: "TOGGLE_SUBMITTING" }),
				() => {
					const isValidGift = this.validateGift();
					action.isValid = isValidGift;
					this.setState(
						state => reducer(state, action),
						() => {
							if (!isValidGift) {
								this.setState(state =>
									reducer(state, {
										type: "UPDATE_FIELD",
										name: "amount",
										value: "",
										error: "Please make a valid donation",
									})
								);
							} else {
								try {
									const url = window.location.origin + window.location.pathname;
									const sDynamicPageUrl =
										url +
										(url.charAt(url.length - 1) == "/"
											? "payment"
											: "/payment");
									const sDynamicPageTitle =
										document.title + " > Choose Donation";
									window.omTrackDynamicCBNPage(
										sDynamicPageUrl,
										sDynamicPageTitle
									);
								} catch (err) {
									console.error("Call Submission Tracking Error");
									console.error(err);
								}
							}
							this.setState(state =>
								reducer(state, { type: "TOGGLE_SUBMITTING" })
							);
						}
					);
				}
			);
		},
		addToCart: action => this.setState(state => reducer(state, action)),
		removeFromCart: action => this.setState(state => reducer(state, action)),
		updateGivingType: action => this.setState(state => reducer(state, action)),
		updateDesignation: action => this.setState(state => reducer(state, action)),
		getGlobals: async () => {
			const isSecure = window.location.protocol == "https:";
			const url = !isSecure
				? "http://securegiving.cbn.local/UI/globals/form-config.json"
				: "https://securegiving.cbn.com/UI/globals/form-config.json";
			try {
				const {
					devServicesUri,
					preProdServicesUri,
					prodServicesUri,
					devReceiptUri,
					preProdReceiptUri,
					prodReceiptUri,
				} = await callApi(url);
				const action = {
					type: "GLOBAL_URIS",
					msgUris: [
						devServicesUri,
						preProdServicesUri,
						prodServicesUri,
						devReceiptUri,
						preProdReceiptUri,
						prodReceiptUri,
					],
				};
				this.setState(state => reducer(state, action));
				return true;
			} catch (err) {
				console.error({ err });
				throw new Error(err);
			}
		},
		setConfirmed: action =>
			this.setState(
				state => reducer(state, action),
				() => {
					try {
						const url = window.location.origin + window.location.pathname;
						const sDynamicPageUrl =
							url +
							(url.charAt(url.length - 1) == "/" ? "thankyou" : "/thankyou");
						const sDynamicPageTitle = document.title + " > Confirm Credit Card";
						window.omTrackDynamicCBNPage(sDynamicPageUrl, sDynamicPageTitle);
					} catch (err) {
						console.error("Call Submission Tracking Error");
						console.error(err);
					}
					this.context.setConfirmed(action);
				}
			),
		getSelection: action => this.setState(state => reducer(state, action)),
		goBack: action =>
			this.setState(
				state => reducer(state, action),
				() => {
					this.context.goBack(action);
				}
			),
		getSummary: () => {
			const items = [...this.state.cart.items];
			const pledgeFound = items.findIndex(el => el && el.type == "donation");
			const isMonthly = pledgeFound > -1 ? items[pledgeFound].monthly : false;
			const amount = pledgeFound > -1 ? items[pledgeFound].PledgeAmount : 0;
			const designation =
				Object.keys(this.state.designationInfo).length &&
				!(isMonthly && !this.state.allowMonthlyDesignations)
					? this.state.designationInfo.title
					: "Where Most Needed";
			return { amount, isMonthly, designation };
		},
		handleCCErrors: action => this.setState(state => reducer(state, action)),
	};
	validateGift = () => {
		const items = [...this.state.cart.items];
		const pledgeFound = items.findIndex(el => el && el.type == "donation");
		const addGiftFound = items.findIndex(
			el => el && el.type == "additionalGift"
		);
		const productFound = items.findIndex(el => el && el.type == "product");
		if (
			items.length == 0 ||
			(pledgeFound > -1 &&
				items[pledgeFound].PledgeAmount == 0 &&
				addGiftFound < 0) ||
			(pledgeFound < 0 && addGiftFound < 0 && productFound < 0)
		) {
			return false;
		}
		return true;
	};

	render() {
		const {
			state,
			props: { children },
		} = this;
		return (
			<GivingFormContext.Provider value={state}>
				{children}
			</GivingFormContext.Provider>
		);
	}
}

GivingFormProvider.contextType = FormConfigContext;

export default GivingFormProvider;
