import { validateCCInput } from "./cc-validation"

/**
 * Takes in name/value pair from controlled input onChange event.
 * Converts value into two different strings, one formatted for display, one with formatting stripped
 * Returns an Action to be called on the Components reducer to update both the validated value and the display value
 * @param {String} name - name of the field being updated
 * @param {String} value - value of the field being updated
 * @returns {Object} action.type, action.fields[], action.fields.name, action.fields.value, action.fields.error
 */
const formDisplayValue = (name, value) => {
	const displayName = name + "Display";
	let strippedValue = value.replace(/[ \-\(\)]/g, ""); // remove any formatting marks (spaces, dashes, parentheses)
	let displayValue = strippedValue;
	const digits = displayValue ? displayValue.split("") : []; // get just the individual characters without formatting as an array
	let firstDivision, secondDivision, thirdDivision, fourthDivision; // initialize dividing variable stores
	let res, error = ""; // init error message for cc validation
	if (name === "ccNumber") {
		if (displayValue.length > 4) {
			switch (digits[0]) {
				case "3":
					firstDivision = [...digits.slice(0, 4)];
					secondDivision = [" ", ...digits.slice(4, 10)];
					thirdDivision =
						digits.length > 10 ? [" ", ...digits.slice(10, 15)] : [];
					displayValue = [
						...firstDivision,
						...secondDivision,
						...thirdDivision,
					].join("");
					strippedValue = strippedValue
						.split("")
						.slice(0, 15)
						.join("");
					// value will be in format of #### ###### ##### for Amex
					if (strippedValue.length == 15) {
						res = validateCCInput("ccNumber", strippedValue, strippedValue);
						error = res.error;
					} 
					break;
				case "4":
				case "5":
				case "6":
				default:
					firstDivision = [...digits.slice(0, 4)];
					secondDivision = [" ", ...digits.slice(4, 8)];
					thirdDivision =
						digits.length > 8 ? [" ", ...digits.slice(8, 12)] : [];
					fourthDivision =
						digits.length > 12 ? [" ", ...digits.slice(12, 16)] : [];
					displayValue = [
						...firstDivision,
						...secondDivision,
						...thirdDivision,
						...fourthDivision,
					].join("");
					strippedValue = strippedValue
						.split("")
						.slice(0, 16)
						.join("");
					// value will be in format of #### #### #### #### for VI, MC, DS
					if (strippedValue.length == 16) {
						res = validateCCInput("ccNumber", strippedValue, strippedValue);
						error = res.error;
					} 
					break;
			}
			
		}
	} else if (name === "phone") {
		if (displayValue.length > 0) {
			firstDivision = ["( ", ...digits.slice(0, 3), " ) "];
			secondDivision = [...digits.slice(3, 6), " - "];
			thirdDivision = [...digits.slice(6, 10)];
			displayValue = [
				...firstDivision,
				...secondDivision,
				...thirdDivision,
			].join("");
			strippedValue = strippedValue
				.split("")
				.slice(0, 10)
				.join("");
			// value will be in format of ( ### ) ### - ####
		}
	}

	let action = {
		type: "UPDATE_FIELDS",
		fields: [
			{
				name,
				value: strippedValue,
				error,
			},
			{
				name: displayName,
				value: displayValue,
				error: "",
			},
		],
	};
	// console.log({name, strippedValue, digits, displayName, displayValue, action})
	return action;
};

export default formDisplayValue;
