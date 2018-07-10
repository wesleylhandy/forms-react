/**
 * 
 * @param {string} ccCardType - 001, 002, 003, or 004
 * @param {string} ccNum 13 to 16 digit credit card number
 * @param {string} ccExpMonth - 2 digit month of expiration
 * @param {*} ccExpYear - 4 digit year of expiration
 * @returns {Object} - first key/value is a boolean expressing pass or failure of validation
 */
export default function checkValues(ccCardType, ccNum, ccExpMonth, ccExpYear) {

    const ccExpDate = ccExpMonth + "-" + ccExpYear;
    let transactionType = null,
        signatureDis = false,
        passes = false;
    let isValid = validateCCInfo(ccNum, ccCardType, ccExpYear, ccExpMonth)
    if (isValid.passes == true) {
        passes = true;

        if (ccCardType == "004") {
            transactionType = "create_payment_token";
            signatureDis = true;
        }

        return {
            passes,
            ccCardType,
            ccNum,
            ccExpDate,
            transactionType,
            signatureDis
        }
    } else {
        return isValid
    }
}

function validateCCInfo(curccnum, curccType, curccExpYear, curccExpMonth) {
    let passes = true,
        errors = []
    if (!checkExpDate(curccExpYear, curccExpMonth)) {
        passes = false;
        errors.push({ type: "ExpiresMonth", error: "The expiration date entered appears to be expired." })
    }
    if ((curccnum == "") || curccType == "" || !checkDigits(curccnum)) {
        passes = false;
        errors.push({ type: "ccNumber", error: "Please enter a valid credit card number." })
        return { passes, errors };
    }
    if (!IsValidCreditCardType(curccnum, curccType)) {
        passes = false;
        errors.push({ type: "ccNumber", error: "Check that the card type matches the number and that all digits are entered." })
    }

    return { passes, errors };
}

function IsValidCreditCardType(cardNum, cardType) {
    var prefix = 0;

    switch (cardType) {
        case "001":
            if (cardNum.length != 13 && cardNum.length != 16) {
                return false;
            }
            if (cardNum.charAt(0) != '4') {
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

            if (((prefix < 60110000) || (prefix > 60119999)) &&
                ((prefix < 65000000) || (prefix > 65999999)) &&
                ((prefix < 62212600) || (prefix > 62292599))) {
                return false;
            }

            break;

        default:
            break;
    }

    return true;
}

/**
 * Validates that the Credit Card expiration date has not passed
 * @param {String} expYear - 4 digit expiration year
 * @param {String} expMonth - 2 digit expiration month
 * @returns {Boolean} - true if unexpired, false if past expiration
 */
export function checkExpDate(expYear, expMonth) {
    var curdate = new Date();
    var curyear = curdate.getFullYear();
    var curmonth = curdate.getMonth() + 1;
    var monthVal = parseInt(expMonth, 10);
    var yearVal = parseInt(expYear, 10);

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
}

/**
 * Validates that the credit card number fits the Luhn Algorithm
 * @param {string} cardNumber - credit card number
 * @returns {Boolean} - true if valid, false if invalid
 */
export function checkDigits(cardNumber) {
    // validate number
    var j = cardNumber.length / 2;
    if (j < 6.5 || j > 8 || j == 7)
        return false;
    var k = Math.floor(j);
    var m = Math.ceil(j) - k;
    var c = 0;
    for (let i = 0; i < k; i++) {
        var a = cardNumber.charAt(i * 2 + m) * 2;
        c += a > 9 ? Math.floor(a / 10 + a % 10) : a;
    }
    for (let i = 0; i < (k + m); i++)
        c += cardNumber.charAt(i * 2 + 1 - m) * 1;
    var returnvalue = c % 10;
    return (returnvalue == 0);
}