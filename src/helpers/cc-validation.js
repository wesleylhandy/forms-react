/**
 * Validates that the Credit Card expiration date has not passed
 * @param {String} expYear - 4 digit expiration year
 * @param {String} expMonth - 2 digit expiration month
 * @returns {Boolean} - true if unexpired, false if past expiration
 */
const checkExpDate = (expYear, expMonth) => {
	const curdate = new Date();
	const curyear = curdate.getFullYear();
	const curmonth = curdate.getMonth() + 1;
	const monthVal = parseInt(expMonth, 10);
	const yearVal = parseInt(expYear, 10);

	if (isNaN(monthVal) || isNaN(yearVal)) {
		return false;
	}

	if (yearVal < curyear) {
		return false;
	} else if (yearVal == curyear) {
		if (monthVal < curmonth) {
			return false;
		}
	}

	return true;
};

/**
 * Validates that the credit card number fits the Luhn Algorithm
 * @param {string} cardNumber - credit card number
 * @returns {Boolean} - true if valid, false if invalid
 */
const checkDigits = cardNumber => {
	// validate number
	const j = cardNumber.length / 2;
	if (j < 6.5 || j > 8 || j == 7) return false;
	const k = Math.floor(j);
	const m = Math.ceil(j) - k;
	let c = 0;
	for (let i = 0; i < k; i++) {
		const a = cardNumber.charAt(i * 2 + m) * 2;
		c += a > 9 ? Math.floor(a / 10 + (a % 10)) : a;
	}
	for (let i = 0; i < k + m; i++) c += cardNumber.charAt(i * 2 + 1 - m) * 1;
	const returnvalue = c % 10;
	return returnvalue == 0;
};

export const validateInput = (name, value) => {
	let error = "";
	switch (name) {
		case "ccNumber":
			if (value.length > 16) {
				error = "Maximum digits allowed is reached";
			} else if (!/^[0-9]*$/.test(value)) {
				error = "Card Number must contain only numerical digits";
			} else if (value.length > 15 && !checkDigits(value)) {
				error = "Please enter a valid Credit Card number";
			}
			if (!error && value.length) {
				let num = "";
				switch (parseInt(value.slice(0, 1))) {
					case 4:
						num = "001";
						break;
					case 5:
						num = "002";
						break;
					case 3:
						num = "003";
						break;
					case 6:
						num = "004";
						break;
				}
				return { ccChecked: num, error: null };
			}
			break;
		case "ExpiresMonth":
			if (!checkExpDate(this.state.fields.ExpiresYear, value)) {
				error = "Please select a valid expiration date.";
			}
			break;
		case "ExpiresYear":
			if (!checkExpDate(value, this.state.fields.ExpiresMonth)) {
				error = "Please select a valid expiration date.";
			}
			break;
		case "cvnCode":
			if (/(\D)/.test(value)) {
				error = "Invalid Entry."
			}
			break;
	}
	return { ccChecked: null, error };
};

/**
 *
 * @param {String} cardNum - String of Digits representing the number to be validated
 * @param {String} cardType - 001, 002, 003, or 004 for Visa, MC, Amex, & Disc, respectively
 * @returns {Boolean} - True if Valid, False if invalid
 */
const IsValidCreditCardType = (cardNum, cardType) => {
	let prefix = 0;
	switch (cardType) {
		case "001":
			if (cardNum.length != 13 && cardNum.length != 16) {
				return false;
			}
			if (cardNum.charAt(0) != "4") {
				return false;
			}
			break;
		case "002":
			if (cardNum.length != 16) {
				return false;
			}
			prefix = parseInt(cardNum.substring(0, 2));
			if (prefix < 51) {
				var prefix6 = parseInt(cardNum.substring(0, 6));

				if (prefix6 < 222100 || prefix6 > 272099) {
					return false;
				}
			} else {
				if (prefix > 55) {
					return false;
				}
			}
			break;
		case "003":
			if (cardNum.length != 15) {
				return false;
			}
			prefix = parseInt(cardNum.substring(0, 2));
			if (prefix != 34 && prefix != 37) {
				return false;
			}
			break;

		case "004":
			if (cardNum.length != 16) {
				return false;
			}
			prefix = parseInt(cardNum.substring(0, 8));
			if (
				(prefix < 60110000 || prefix > 60119999) &&
				(prefix < 65000000 || prefix > 65999999) &&
				(prefix < 62212600 || prefix > 62292599)
			) {
				return false;
			}
			break;
		default:
			break;
	}
	return true;
};

/**
 * Function to validate CC Information and Return any errors, if found
 * @param {String} curccnum - String of Digits representing the number to be validated
 * @param {String} curccType - 001, 002, 003, or 004 for Visa, MC, Amex, & Disc, respectively
 * @param {String} curccExpYear - 4 digit expiration date
 * @param {String} curccExpMonth - 2 digit expiration month
 * @param {String} curcvnCode - 3 or 4 digit cvv code
 * @returns {Object} - {passes: Boolean, errors: Array[{type: String, error: String}]}
 */
const validateCCInfo = (curccnum, curccType, curccExpYear, curccExpMonth, curcvnCode) => {
	var passes = true,
		errors = [];
	if (!checkExpDate(curccExpYear, curccExpMonth)) {
		passes = false;
		errors.push({
			type: "ExpiresMonth",
			error: "The expiration date entered appears to be expired.",
		});
	}
	if (curccnum == "" || curccType == "" || !checkDigits(curccnum)) {
		passes = false;
		errors.push({
			type: "ccNumber",
			error: "Please enter a valid credit card number.",
		});
		return { passes: passes, errors: errors };
	}
	if (!IsValidCreditCardType(curccnum, curccType)) {
		passes = false;
		errors.push({
			type: "ccNumber",
			error:
				"Check that the card type matches the number and that all digits are entered.",
		});
	}
	if (!checkCVNCode(curccType, curcvnCode)) {
		passes = false;
		errors.push({
			type: "cvnCode",
			error:
				"Invalid Code.",
		});
	}

	return { passes: passes, errors: errors };
};

/**
 * Function called by the client to validate
 * @param {String} ccCardType - 001, 002, 003, or 004
 * @param {String} ccNum - 13 to 16 digit credit card number
 * @param {String} ccExpMonth - 2 digit month of expiration
 * @param {String} ccExpYear - 4 digit year of expiration
 * @param {String} cvnCode - 3 or 4 digit cvv code
 * @returns {Object} - {passes: Boolean, *errors: Array[{type: String, error: String}], *ccCardType: String, *ccNum: String, *ccExpDate: String, *transactionType: String, *signatureDis: Boolean}
 */
export const checkValues = (ccCardType, ccNum, ccExpMonth, ccExpYear, cvnCode) => {
	const ccExpDate = ccExpMonth + "-" + ccExpYear;
	// initialize variables
	let transactionType = null,
		signatureDis = false;

	const isValid = validateCCInfo(ccNum, ccCardType, ccExpYear, ccExpMonth, cvnCode);
	if (isValid.passes == true) {
		if (ccCardType == "004") {
			// The script calling this function will only update the signature if transactionType has a value. It is null by default
			transactionType = "create_payment_token";
			signatureDis = true;
		}
		return {
			passes: isValid.passes,
			ccCardType: ccCardType,
			ccNum: ccNum,
			ccExpDate: ccExpDate,
			ccCvn: cvnCode,
			transactionType: transactionType,
			signatureDis: signatureDis,
		};
	} else {
		return isValid;
	}
};

/**
 * Validates CVNCodeVal
 * @param {String} cardType - 001, 002, 003, or 004 for Visa, MC, Amex, & Disc, respectively
 * @param {String} cvnCode - 3 or 4 digit
 * @returns {Boolean}
 */
function checkCVNCode(cardType, cvnCode) {
    return /^\d{3,4}$/.test(cvnCode) && ( ( cardType === "003" && cvnCode.length == 4 ) || (cardType !== "003" && cvnCode.length == 3) );
}