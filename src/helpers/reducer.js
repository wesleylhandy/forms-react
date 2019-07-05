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
		type,
	} = action;
	let found, fields, errors, items, givingInfo, productInfo, designationInfo;
	switch (type) {
		case "INIT_FORM_STATE":
			return {
				...state,
				initialized: true,
				fields: action.fields,
				errors: action.errors
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
		case "SUBMIT_FORM":
			return {
				...state,
				submitted: true,
				submitting: false,
			};
		default:
			return { ...state };
			break;
	}
};

export default reducer