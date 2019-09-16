
const formDisplayValue = (name, value) => {
    const displayName = name + "Display";
    let strippedValue = value.replace(/[ \-\(\)]/g, "");
    let displayValue = strippedValue;
    const digits = displayValue ? displayValue.split("") : [];
    let firstDivision, secondDivision, thirdDivision, fourthDivision;
    if (name === "ccNumber") {
        if (displayValue.length > 4) {
             switch (digits[0]) {
                case "3":
                    firstDivision = [...digits.slice(0,4),]
                    secondDivision = [" ", ...digits.slice(4, 10)]
                    thirdDivision = digits.length > 10 ? [" ", ...digits.slice(10, 15)] : []
                    displayValue = [...firstDivision, ...secondDivision, ...thirdDivision].join("");
                    value = value.split("").slice(0, 15).join("");
                    break;
                case "4":
                case "5":
                case "6":
                    firstDivision= [...digits.slice( 0, 4)]
                    secondDivision = [" ", ...digits.slice(4, 8)]
                    thirdDivision = digits.length > 8 ? [" ", ...digits.slice(8, 12)] : []
                    fourthDivision = digits.length > 12 ? [" ", ...digits.slice(12, 16)] : []
                    displayValue = [...firstDivision, ...secondDivision, ...thirdDivision, ...fourthDivision].join("");
                    strippedValue = strippedValue.split("").slice(0, 16).join("");
                    break;
                default:
                    strippedValue = strippedValue.split("").slice(0, 16).join("");
                    break;
            }
        }
    } else if (name === "phone") {
        if (displayValue.length > 0) {
            firstDivision = ["( ", ...digits.slice(0,3), " ) "]
            secondDivision = [...digits.slice(3,6), " - "]
            thirdDivision = [...digits.slice(6, 10)]
            displayValue = [...firstDivision, ...secondDivision, ...thirdDivision].join("");
            strippedValue = strippedValue.split("").slice(0,10).join("");
        }
    }
        
    let action = {
        type: "UPDATE_FIELDS",
        fields: [{
            name,
            value: strippedValue,
            error: "",
        }, {
            name: displayName,
            value: displayValue,
            error: ""
        }]
    }
    // console.log({name, strippedValue, digits, displayName, displayValue, action})
    return action
}

export default formDisplayValue