const formErrors = {
    "Address Line 1 is required and must not exceed required length or contain HTML Markup": "Address1",
    "Address Line 2 must not exceed required length or contain HTML Markup": "Address2",
    "Country is required": "Country",
    "City, State, Zip Validatation Failed": "Zip",
    "Invalid Title": "Title",
    "First name is required and must not exceed required length or contain HTML Markup": "Firstname",
    "Last name is required and must not exceed required length or contain HTML Markup": "Lastname",
    "Middle name must not exceed required length or contain HTML Markup": "Middlename",
    "Suffix must not exceed required length or contain HTML Markup": "Suffix",
    "Spouse name must not exceed required length or contain HTML Markup": "Spousename",
    "Invalid Phone Number": "phone",
    "Invalid Email Address": "Emailaddress",
    "Monthly amount required -- minimum is a dollar": "amount",
    "Single amount required -- minimum is a dollar": "amount"
}

const breakingErrors = [
    "Proxy Error",
    "Invalid API Access Key or Request URL",
    "Invalid Transaction Type -- Montlhy, Single, or Product Only",
    "Charge day required for Monthly Credit Card Gifts",
    "Valid Client IP is required",
    "Valid Client Browser name is required",
    "Missing Donation Details",
    "Motivation text is required and must not exceed required length or contain HTML Markup"
]

/**
 * Takes an Error message and returns type, either breaking for form
 * @param {string} message - text string returned from API
 * @returns {Object} - { breaking: Boolean, name: String}
 */
export function getErrorType(message) {
    if (breakingErrors.indexOf(message) > -1 || message[0] == "<") {
        return { breaking: true, name: ''}
    } else {
        let name = formErrors[message];
        // console.log({name, message})
        if (!name) {
            if (message.includes("Postal")) {
                name = "Zip"
            } else if (message.includes("State")) {
                name = "State"
            } else {
                name = "City"
            }
        }
        return { breaking: false, name }
    }
}