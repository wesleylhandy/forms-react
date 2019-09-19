/**
 * Reducer function that returns a copy of (not a reference to) the original state, with mutations to the new copy, that replaces state
 * @param {Object} state - current state of Provider
 * @param {Object} action - action.type tells what to do with the current state
 * @param {String} action.type - the name of the action to call
 * @returns {Object} state - newly constructed state
 */
const reducer = (state, action) => {
	const {
		allowMonthlyDesignations,
		designatedIndex,
		formData,
		name,
		value,
		error,
		item,
		typeId,
		singlePledgeData,
		monthlyPledgeData,
		source,
		type,
		DonorID,
		formAction,
		confirmationData,
		msgUris,
		trackingVars,
	} = action;
	let found, fields, errors, items, givingInfo, productInfo, designationInfo;
	switch (type) {
		case "INIT_FORM_STATE":
			return {
				...state,
				initialized: true,
				fields: action.fields,
				errors: action.errors,
				allowMonthlyDesignations,
			};
			break;
		case "LOAD":
			fields = { ...state.fields };
			for (let datum in formData) {
				fields[datum] = formData[datum];
			}
			const cart = { items: action.items || [] };
			return { ...state, fields, cart };
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
		case "TOGGLE_ZIP_VALIDATION":
			return { ...state, validating: !state.validating };
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
				errors.amount =
					item.type == "donation" && item.PledgeAmount > 0
						? ""
						: "Please make a valid donation";
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

			return { ...state, cart: { items }, givingInfo };
		case "UPDATE_DESIGNATION":
			designationInfo = { ...state.designationInfo };
			const {
				DetailCprojCredit,
				DetailCprojMail,
				DetailDescription,
				DetailName,
				title,
			} = action.designationInfo;
			return {
				...state,
				designatedIndex,
				designationInfo: {
					DetailCprojCredit,
					DetailCprojMail,
					DetailDescription,
					DetailName,
					title,
				},
			};
		case "SUBMIT_FORM":
			return {
				...state,
				submitted: true,
				submitting: false,
				DonorID,
				formAction,
				confirmationData,
			};
		case "SUBMIT_ASK_FORM":
			return {
				...state,
				selected: action.isValid,
			};
		case "GLOBAL_URIS":
			return {
				...state,
				msgUris,
			};
		case "CONFIRMED":
			return {
				...state,
				confirmed: true,
				trackingVars,
			};
		case "GO_BACK":
			items = [...state.cart.items];
			found = items.findIndex(el => el && el.type == "donation");
			givingInfo = { ...state.givingInfo };
			if (found > -1) {
				givingInfo.amount = items[found].PledgeAmount;
				givingInfo.isMonthly = items[found].monthly;
				givingInfo.source = "goBackBtn";
			}
			return {
				...state,
				givingInfo,
				submitted: false,
				submitting: false,
				confirmed: false,
				selected: false,
			};
		case "UPDATE_CC_ERRORS":
			errors = { ...state.errors };
			for (let i = 0; i < action.errors.length; i++) {
				errors[action.errors[i].type] = action.errors[i].error;
			}
			return {
				...state,
				submitting: false,
				submitted: false,
				errors,
			};
		default:
			return { ...state };
			break;
	}
};

export default reducer;
