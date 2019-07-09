import React, { Component } from "react";

import { FormConfigContext } from "./FormConfigProvider";
import { cryptLS, readLS, removeOneLS, emptyLS } from "../../helpers/ls";
import { getErrorType } from "../../helpers/error-types";
import { callApi } from "../../helpers/fetch-helpers";
import {
	zip_regex,
	callZipCityStateService,
	validateInput,
	callAddressVerification,
} from "../../helpers/validators";
import reducer from "../../helpers/reducer";

export const ProductFormContext = React.createContext();

class ProductFormProvider extends Component {
	state = {
		cart: {
			items: [],
		},
		givingInfo: {},
		productInfo: [],
		initialized: false,
		submitting: false,
		fields: {},
		errors: {},
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
				action.error = await validateInput(
					false,
					name,
					value,
					this.context.allowInternational,
					this.state.ShipToYes
				);
			}
			this.setState(state => reducer(state, action));
		},
		submitProductForm: async action => {
			this.setState(
				state => reducer(state, { type: "TOGGLE_SUBMITTING" }),
				async () => {}
			);
		},
	};
	render() {
		const {
			state,
			props: { children },
		} = this;
		return (
			<ProductFormContext.Provider value={state}>
				{children}
			</ProductFormContext.Provider>
		);
	}
}

ProductFormProvider.contextType = FormConfigContext;

export default ProductFormProvider;
