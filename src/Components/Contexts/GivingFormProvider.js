import React, { Component } from "react";

import { FormConfigContext } from "./FormConfigProvider";
import { cryptLS, readLS, removeOneLS, emptyLS } from "../../helpers/ls";
import { getErrorType } from "../../helpers/error-types";
import { callApi } from "../../helpers/fetch-helpers";

export const GivingFormContext = React.createContext();

const reducer = (state, action) => {
	const {
		formData,
		name,
		value,
		error,
		item,
		typeId,
		singlePledgeData,
		monthlyPledgeData,
		source,
	} = action;
	let found, fields, errors, items, givingInfo, productInfo, designationInfo;
	switch (action.type) {
		case "INIT_FORM_STATE":
			return {
				...state,
				initialized: true,
				fields: action.fields,
				errors: action.errors,
				international: action.international,
				type: action.formType,
			};
			break;
		case "LOAD":
			fields = { ...state.fields };
			for (let datum in formData) {
				fields[datum] = formData[datum];
			}
			return { ...state, fields };
			break;
		case "UPDATE_FIELD":
			fields = { ...state.fields };
			errors = { ...state.errors };
			fields[name] = value;
			errors[name] = error;
			return { ...state, fields, errors };
			break;
		case "UPDATE_FIELDS":
			fields = { ...state.fields };
			errors = { ...state.errors };
			action.fields.forEach(({ name, value, error }) => {
				fields[name] = value;
				errors[name] = error;
			});
			return { ...state, fields, errors };
			break;
		case "TOGGLE_SUBMITTING":
			return { ...state, submitting: !state.submitting };
			break;
		case "ADD_TO_CART":
			items = [...state.cart.items];
			errors = { ...state.errors };
			found = items.findIndex(el => el && el.type == item.type);
			if (found > -1) {
				items[found] = item;
				errors.amount = "";
			} else {
				items.push(item);
			}
			return { ...state, cart: { items }, errors, givingInfo: {} };
			break;
		case "REMOVE_FROM_CART":
			items = [...state.cart.items];
			found = items.findIndex(el => el && el.type == action.itemType);
			if (found > -1) {
				items.splice(found, 1);
			}
			return { ...state, cart: { items }, givingInfo: {} };
			break;
		case "UPDATE_GIVING_TYPE":
			items = [...state.cart.items];
			found = items.findIndex(el => el && el.type == "donation");
			givingInfo = { ...state.givingInfo };
			if (found > -1) {
				items[found] = {
					type: "donation",
					PledgeAmount: items[found].PledgeAmount,
					DetailCprojMail:
						typeId == "singlegift"
							? singlePledgeData.DetailCprojMail
							: monthlyPledgeData.DetailCprojMail,
					DetailCprojCredit:
						typeId == "singlegift"
							? singlePledgeData.DetailCprojCredit
							: monthlyPledgeData.DetailCprojCredit,
					DetailDescription:
						typeId == "singlegift"
							? singlePledgeData.DetailDescription
							: monthlyPledgeData.DetailDescription,
					DetailName:
						typeId == "singlegift"
							? singlePledgeData.DetailName
							: monthlyPledgeData.DetailName,
					monthly: typeId == "singlegift" ? false : true,
				};
				givingInfo.amount = items[found].PledgeAmount;
				givingInfo.isMonthly = typeId !== "singlegift";
				givingInfo.source = "radioClick";
			}
			designationInfo = { ...state.designationInfo };
			if (designationInfo && designationInfo.DetailName) {
				const detailName = designationInfo.DetailName;
				const prefix = detailName.slice(0, 2);
				if (prefix == "MP" || prefix == "SG") {
					const originalDetailName = detailName.slice(2);
					designationInfo.DetailName =
						id == "singlegift"
							? `SG${originalDetailName}`
							: `MP${originalDetailName}`;
				} else {
					designationInfo.DetailName =
						id == "singlegift" ? `SG${detailName}` : `MP${detailName}`;
				}
			}
			return { ...state, cart: { items }, givingInfo, designationInfo };
		case "SUBMIT_GIVING_FORM":
			return {
				...state,
				submitted: true,
				submitting: false,
				DonorID: action.DonorID,
				formAction: action.formAction,
			};
		default:
			return { ...state };
			break;
	}
};

const email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
	phone_regex = /1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})/,
	zip_regex = /^\d{5}$/,
	firstname_regex = /^([a-zA-Z0-9\-\.' ]+)$/i,
	lastname_regex = /^([a-zA-Z0-9\-\.' ]+)(?:(,|\s|,\s)(jr|sr|ii|iii|iv|esq)\.*)?$/i;

class GivingFormProvider extends Component {
	state = {
		cart: {
			items: [],
		},
		givingInfo: {},
		productInfo: [],
		designationInfo: {},
		formAction: "",
		DonorID: "",
		initialized: false,
		submitted: false,
		submitting: false,
		confirmed: false,
		finalized: false,
		confirmationData: null,
		finalizedData: null,
		formAction: null,
		international: false,
		fields: {},
		errors: {},
		donorID: null,
		type: "",
		initFields: action => this.setState(state => reducer(state, action)),
		loadLS: action => {
			const store = readLS("store");
			const info = readLS("info");
			const formData = store ? store : info;
			// console.log({store, info, formData})
			if (!formData) {
				emptyLS();
			}
			if (!store) {
				removeOneLS("store");
			}
			action.formData = formData;
			this.setState(state => reducer(state, action));
		},
		saveLS: () => {
			const days = 30;
			const lifetime = days * 24 * 60 * 60 * 1000;
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
			const Phoneareacode = phone.trim().match(phone_regex)
					? phone.trim().match(phone_regex)[1]
					: "",
				Phoneexchange = phone.trim().match(phone_regex)
					? phone.trim().match(phone_regex)[2]
					: "",
				Phonenumber = phone.trim().match(phone_regex)
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
			cryptLS({ formData }, lifetime, "info");
		},
		removeOneLS: type => {
			removeOneLS("info");
		},
		updateField: action => this.setState(state => reducer(state, action)),
		validateAndUpdateField: async action => {
			const { name, value } = action;
			const isZip = name.includes("Zip") && value.length >= 5;
			if (isZip) {
				if (!zip_regex.test(value)) {
					action.error = "Invalid Postal Code";
				} else {
					try {
						action.error = await this.callZipCityStateService(name, value);
					} catch (err) {
						console.error("CallZipCityStateServiceError");
						console.error({ err });
					}
				}
			} else {
				action.error = await this.validateInput(false, name, value);
			}
			this.setState(state => reducer(state, action));
		},
		submitGivingForm: async action => {
			this.setState(
				state => reducer(state, { type: "TOGGLE_SUBMITTING" }),
				async () => {
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
					let isValidForm = true;
					if (this.state.fields.Country == "United States") {
						try {
							const zipError = await this.callZipCityStateService(
								"Zip",
								this.state.fields["Zip"]
							);
							let addressError, shipZipError, shipAddressError;
							if (!zipError) {
								try {
									addressError = await this.callAddressVerification(
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
									shipZipError = await this.callZipCityStateService(
										"ShipToZip",
										this.state.fields["ShipToZip"]
									);
								} catch (err) {
									console.log("CSZValidationError__SHIPPING");
									console.error({ err });
								}
							}
							if (!shipZipError && this.state.fields.ShipToYes) {
								try {
									shipAddressError = await this.callAddressVerification(
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
								let action = {
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
							error = this.validateInput(true, name, fields[name]);
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
						APIAccessID,
						subscriptions,
						AddContactYN,
						ActivityName,
						ContactSource,
						SectionName,
						proxy,
					} = this.context;
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
								if (index === pledgeFound && this.state.designationSelected) {
									DetailName = this.state.designationInfo.DetailName;
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
						APIAccessID,
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
						const formAction = msg.split(" is ")[1];
						return this.setState(state =>
							reducer(state, {
								type: "SUBMIT_GIVING_FORM",
								DonorID,
								formAction,
							})
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
		addToCart: action => this.setState(state => reducer(state, action)),
		removeFromCart: action => this.setState(state => reducer(state, action)),
		updateGivingType: action => this.setState(state => reducer(state, action)),
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

	/**
	 *
	 * @param {string} name - either Zip or ShipToZip
	 * @param {string} value - five digit zip code
	 */
	callZipCityStateService = async (name, value) => {
		if (value) {
			const base =
				"https://services.cbn.com/AddressValidation/CityStatebyZip.aspx?PostalCode=";
			const url = `${base}${value}`;
			try {
				const result = await callApi(url);
				const oldCity = this.state.fields[
					name == "ShipToZip" ? "ShipToCity" : "City"
				].toUpperCase();
				let { city, state, zip, returnCode, returnMessage } = JSON.parse(
					result
				);
				// console.log({ city, state, zip, returnCode, returnMessage })
				if (returnCode == 1) {
					// console.log(city)
					const error = oldCity && !city.toUpperCase().includes(oldCity);
					const newCity = error || !oldCity ? city.split(";")[0] : oldCity;

					const action = {
						type: "UPDATE_FIELDS",
						fields: [
							{
								name: name == "ShipToZip" ? "ShipToCity" : "City",
								value: newCity,
								error: "",
							},
							{
								name: name == "ShipToZip" ? "ShipToState" : "State",
								value: state,
								error: "",
							},
						],
					};
					if (name == "Zip") {
						action.fields.push({
							name: "Country",
							value: "United States",
							error: "",
						});
					}
					this.setState(state => reducer(state, action));
					return error ? city : "";
				} else {
					return returnMessage;
				}
			} catch (err) {
				console.error(err);
				return "";
			}
		} else {
			return "";
		}
	};

	/**
	 *
	 * @param {string} addr1 - user entered address1
	 * @param {string} addr2 - user entered address2
	 * @param {string} city - user entered city
	 * @param {string} state - user entered state
	 * @param {string} zip - user entered zip
	 * @returns {string} either empty or with error
	 */
	callAddressVerification = async (addr1, addr2 = "", city, state, zip) => {
		const base =
			"https://services.cbn.com/AddressValidation/AddressVerification.aspx";
		const url = encodeURI(
			`${base}?addr1=${encodeURIComponent(addr1)}&addr2=${encodeURIComponent(
				addr2
			)}&city=${encodeURIComponent(city)}&state=${encodeURIComponent(
				state
			)}&zip=${encodeURIComponent(zip)}`
		);
		try {
			const result = await callApi(url);
			// console.log({result})
			const { returnCode, returnMessage } = JSON.parse(result);
			return returnCode == 1 ? "" : returnMessage;
		} catch (err) {
			console.error({ err });
			return "";
		}
	};

	/**
	 * Function to validate the input fields of the form
	 * @param {Boolean} submitting - current state of the form, true if being submitted
	 * @param {String} name - name of the input being validated
	 * @param {*} value - String, Number or Boolean of value from the input
	 * @returns {String} - an empty String if no errors, else a string with a single error message
	 */
	validateInput = (submitting, name, value) => {
		let error = "";
		const { international } = this.state;
		const { ShipToYes } = this.state.fields;
		switch (name) {
			case "Title":
			case "State":
			case "Address1":
			case "City":
				if (!value && submitting) {
					error = "Required";
				}
				break;
			case "ShipToState":
			case "ShipToAddress1":
			case "ShipToCity":
				if (!value && submitting && ShipToYes) {
					error = "Required";
				}
				break;
			case "Firstname":
				if (value && !firstname_regex.test(value)) {
					error =
						"No special characters allowed. Please call if you need assistance.";
				}
				if (!value && submitting) {
					error = "Required";
				}
				break;
			case "Middlename":
				if (value && !firstname_regex.test(value)) {
					error =
						"No special characters allowed. Please call if you need assistance.";
				}
				break;
			case "Lastname":
				if (value && !lastname_regex.test(value)) {
					error =
						"No special characters allowed. Please call if you need assistance.";
				}
				if (!value && submitting) {
					error = "Required";
				}
				break;
			case "ShipToName":
				if (value && !lastname_regex.test(value)) {
					error =
						"No special characters allowed. Please call if you need assistance.";
				}
				if (!value && ShipToYes && submitting) {
					error = "Required";
				}
				break;
			case "Spousename":
				if (value && !lastname_regex.test(value)) {
					error =
						"No special characters allowed. Please call if you need assistance.";
				}
				break;
			case "Country":
				if (!value && submitting && international) {
					error = "Required";
				}
				break;
			case "Emailaddress":
				if (value && !email_regex.test(value)) {
					error = "Please enter a valid email: ie. you@example.com";
				}
				if (!value && submitting) {
					error = "Required";
				}
				break;
			case "phone":
				if (value && !phone_regex.test(value)) {
					error =
						"Please enter a valid phone number, numbers only: ie. 7575551212";
				}
				break;
		}
		return error;
	};

	render() {
		const {
			state,
			props: { children },
		} = this;
		return (
			<DataContext.Provider value={state}>{children}</DataContext.Provider>
		);
	}
}

GivingFormProvider.contextType = FormConfigContext;

export default GivingFormProvider;
