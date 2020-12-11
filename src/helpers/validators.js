import { callApi } from "./fetch-helpers";
import { validateCCInput } from "./cc-validation";

export const email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
export const phone_regex = /1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})/;
export const zip_regex = /^\d{5}$/;
export const firstname_regex = /^([a-zA-Z0-9\-\.' ]+)$/i;
export const lastname_regex = /^([a-zA-Z0-9\-\.' ]+)(?:(,|\s|,\s)(jr|sr|ii|iii|iv|esq)\.*)?$/i;

/**
 *
 * @param {string} name - either Zip or ShipToZip
 * @param {string} value - five digit zip code
 * @param {string} oldCity - current value of the City Field
 * @returns {Promise} - action, error
 */
export const callZipCityStateService = async (name, value, oldCity) => {
	if (value) {
		const base =
			"";
		const url = `${base}${value}`;
		try {
			const result = await callApi(url);
			let { city, state, zip, returnCode, returnMessage } = JSON.parse(result);

			if (returnCode === 1) {
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
				console.error({ oldCity, newCity });
				return { action, error: "" };
			} else {
				console.error({ city, state, zip, returnCode, returnMessage });
				return {
					action: { type: "UPDATE_FIELD", name, value, error: returnMessage },
				};
			}
		} catch (err) {
			console.error(err);
			throw new Error(err);
		}
	} else {
		console.error({ err: "No Value Passed to Validator" });
		return {
			action: "UPDATE_FIELD",
			name,
			value,
			error: "Required",
		};
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
export const callAddressVerification = async (
	addr1,
	addr2 = "",
	city,
	state,
	zip
) => {
	const base =
		"";
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
 * @param {Boolean} [getName] - Boolean to determine if a field is required
 * @param {Boolean} [getAddress] - Boolean to determine if a field is required
 * @param {Boolean} [getHonorific] - Boolean to determine if a field is required
 * @param {Boolean} [getMessage] - Boolean to determine if a field is required
 * @param {Boolean} [allowInternational] - Boolean only necessary for Country Validation
 * @param {Boolean} [ShipToYes] - Boolean for validating Shipping Address
 * @param {String} [ccNumber]
 * @param {String} [ccMonth]
 * @param {String} [ccYear]
 * @returns {String} - an empty String if no errors, else a string with a single error message
 */
export const validateInput = (
	submitting,
	name,
	value,
	getName,
	getAddress,
	getHonorific,
	getMessage,
	allowInternational,
	ShipToYes,
	ccNumber,
	ccMonth,
	ccYear
) => {
	let error = "";
	switch (name) {
		case "ccNumber":
		case "ExpiresMonth":
		case "ExpiresYear":
		case "cvnCode":
			let res = validateCCInput(name, value, ccNumber, ccMonth, ccYear);
			error = res.error;
			break;
		case "Title":
			if (!value && getHonorific) {
				error = "Required";
			}
			break;
		case "State":
		case "Address1":
		case "City":
			if (!value && getAddress) {
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
			if (!value && getName) {
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
			if (!value && getName) {
				error = "Required";
			}
			break;
		case "ShipToName":
			if (value && !lastname_regex.test(value)) {
				error =
					"No special characters allowed. Please call if you need assistance.";
			}
			if (!value && ShipToYes) {
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
			if (!value && allowInternational) {
				error = "Required";
			}
			break;
		case "Emailaddress":
			if (value && !email_regex.test(value)) {
				error = "Please enter a valid email: ie. you@example.com";
			}
			if (!value) {
				error = "Required";
			}
			break;
		case "phone":
			if (value && !phone_regex.test(value)) {
				error = "Numbers only: ie. 7575551212";
			}
			break;
		case "message":
			if (!value && getMessage) {
				error = "Required";
			}
			break;
	}
	return error;
};
