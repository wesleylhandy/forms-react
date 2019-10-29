import React, { Component } from "react";

import { FormConfigContext } from "./FormConfigProvider";
import { callApi } from "../../helpers/fetch-helpers";
import {
	zip_regex,
	callZipCityStateService,
	validateInput,
	callAddressVerification,
} from "../../helpers/validators";
import reducer from "../../helpers/reducer";

export const SignUpFormContext = React.createContext();

class SignUpFormProvider extends Component {
	state = {
		fields: {},
		errors: {},
		initialized: false,
		submitting: false,
		submitted: false,
		initFields: action => this.setState(state => reducer(state, action)),
		updateField: action => this.setState(state => reducer(state, action)),
		validateAndUpdateField: async action => {
			const { name, value } = action;
			const isZip = name.includes("Zip") && value.length >= 5;
			if (isZip) {
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
							this.setState(state => reducer(state, response.action));
						}
						action.error = response.error;
					} catch (err) {
						console.error("CallZipCityStateServiceError");
						console.error({ err });
					}
				}
			} else {
				const { getName, getAddress, getHonorific, getMessage, allowInternational } = this.context.formConfig;
				// console.log({getMessage})
				action.error = await validateInput(
					false,
					name,
					value,
					getName,
					getAddress,
					getHonorific,
					getMessage,
					allowInternational,
					this.state.ShipToYes
				);
			}
			this.setState(state => reducer(state, action));
		},
		submitSignUpForm: async action => {
			this.setState(
				state => reducer(state, { type: "TOGGLE_SUBMITTING" }),
				async () => {
					let isValidForm = true;
					if (this.context.formConfig.getAddress) {
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
							let addressError;
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
							if (addressError || zipError) {
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
								if (zipError) {
									action.fields.push({
										name: "Zip",
										value: this.state.fields.Zip,
										error: zipError,
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
							const {
								getAddress,
								getHonorific,
								getMessage,
								getName,
								allowInternational,
							} = this.context.formConfig;
							error = validateInput(
								true,
								name,
								fields[name],
								getName,
								getAddress,
								getHonorific,
								getMessage,
								allowInternational,
								false
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
						Emailaddress,
						Firstname,
						Lastname,
						phone,
						message
					} = fields;

					const { mode, proxy } = this.context.formConfig;
					const contactAPI = {...this.context.formConfig.contactAPI};
					const motivation =
						window.cbn_obj && cbn_obj.motivation
							? cbn_obj.motivation
							: "041148";

					if (contactAPI.type = "feedback") {
						contactAPI.headers.EmailAddress = Emailaddress;
						contactAPI.headers.FirstName = Firstname;
						contactAPI.headers.LastName = Lastname;
						contactAPI.headers.FormUrl =
							window.location.origin +
							window.location.pathname +
							window.location.search;
						contactAPI.headers.Message = message ? message : "--Empty--";
					} else if (contactAPI.type = "activity") {
						contactAPI.headers.Location =
							window.location.origin + window.location.pathname;
						contactAPI.headers.Campaign =
							contactAPI.headers.Campaign || motivation;
						contactAPI.headers.EmailAddress = Emailaddress;
						contactAPI.headers.FirstName = Firstname;
						contactAPI.headers.LastName = Lastname;
						contactAPI.headers.PhoneNumber = phone;
					} else if (contactAPI.type = "newsletters") {
						contactAPI.headers.EmailAddress = Emailaddress;
						if ( Firstname ) contactAPI.headers.FirstName = Firstname;
						if ( Lastname ) contactAPI.headers.LastName = Lastname;
					}

					const data = {
						mode,
						contactAPI,
					};
					try {
						const msg = await callApi(proxy, {
							method: "POST",
							mode: "cors",
							headers: {
								"Content-Type": "application/json; charset=utf-8",
							},
							body: JSON.stringify(data),
						});
						console.log({ msg });
						return this.setState(
							state =>
								reducer(state, {
									type: "SUBMIT_FORM",
								}),
							() => {
								try {
									const url = window.location.origin + window.location.pathname;
									const sDynamicPageUrl =
										url +
										(url.charAt(url.length - 1) == "/"
											? "thankyou"
											: "/thankyou");
									const sDynamicPageTitle = document.title + " > Submit";
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
						);
					} catch (err) {
						console.log({ err });
						return this.setState(state =>
							reducer(state, { type: "TOGGLE_SUBMITTING" })
						);
					}
				}
			);
		},
	};
	render() {
		const {
			state,
			props: { children },
		} = this;
		return (
			<SignUpFormContext.Provider value={state}>
				{children}
			</SignUpFormContext.Provider>
		);
	}
}

SignUpFormProvider.contextType = FormConfigContext;

export default SignUpFormProvider;
