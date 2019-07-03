import React, { Component } from "react";

import { GivingFormContext } from "../Contexts/GivingFormProvider";

import FormPanel from "../FormComponents/StyledComponents/FormPanel";
import FieldSet from "../FormComponents/StyledComponents/FieldSet";
import FormHeader from "../FormComponents/StyledComponents/FormHeader";
import GivingLayout from "../FormComponents/Layouts/GivingLayout";
import ProductLayout from "../FormComponents/Layouts/ProductLayout";
import DesignationBlock from "../FormComponents/Blocks/DesignationBlock";
import NameBlock from "../FormComponents/Blocks/NameBlock";
import ShippingAddressBlock from "../FormComponents/Blocks/ShippingAddressBlock";
import AddressBlock from "../FormComponents/Blocks/AddressBlock";
import FormOptionsBlock from "../FormComponents/Blocks/FormOptionsBlock";
import SubmitButton from "../FormComponents/SubmitButton";
import Spinner from "../StyledComponents/Spinner";

class GivingForm extends Component {
	constructor(props) {
		super(props);
		// console.log({props})
		const hasMonthlyAmounts =
			props.monthlyAmounts && props.monthlyAmounts.length;
		const hasSingleAmounts = props.singleAmounts && props.singleAmounts.length;
		this.state = {
			monthlyChecked:
				props.defaultOption == "monthly" ||
				(hasMonthlyAmounts && !hasSingleAmounts),
			totalGift: 0,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRadioClick = this.handleRadioClick.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
		this.updateDonation = this.updateDonation.bind(this);
		this.updateProducts = this.updateProducts.bind(this);
	}

	componentDidMount() {
		const getDay = () => {
			let date = new Date().getDate();
			return date >= 2 && date <= 28 ? date : 2;
		};
		const fields = {
			Zip: "",
			Monthlypledgeday: getDay(),
			Title: "",
			Firstname: "",
			Middlename: "",
			Lastname: "",
			Suffix: "",
			Spousename: "",
			Address1: "",
			Address2: "",
			City: "",
			State: "",
			Country: this.props.international ? "" : "United States",
			Emailaddress: "",
			phone: "",
			savePersonalInfo: true,
			ShipToYes: false,
			ShipToName: "",
			ShipToAddress1: "",
			ShipToAddress2: "",
			ShipToCity: "",
			ShipToCountry: "",
			ShipToZip: "",
			ShipToState: "",
		};
		const errors = {};
		for (let field in fields) {
			errors[field] = "";
		}
		errors.amount = "";
		this.context.initFields({
			type: "INIT_FORM_STATE",
			fields,
			errors
		});
		this.context.loadLS({ type: "LOAD" });
	}

	async componentWillUnmount() {
		// if user has selected to save personal info,
		const { savePersonalInfo } = this.context.fields;
		if (savePersonalInfo) {
			this.context.saveLS();
		} else {
			// otherwise remove any stored data from local storage
			this.context.removeOneLS("info");
		}
	}

	handleRadioClick(e) {
		const id = e.target.id;
		const { singlePledgeData, monthlyPledgeData } = this.props;
		this.setState({ monthlyChecked: id !== "singlegift" }, () =>
			this.context.updateGivingType({
				type: "UPDATE_GIVING_TYPE",
				typeId: id,
				singlePledgeData,
				monthlyPledgeData,
				source: "radioClick",
			})
		);
	}

	handleInputChange(e) {
		const target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.context.validateAndUpdateField({ type: "UPDATE_FIELD", name, value });
	}

	async handleSubmit(e) {
		e.preventDefault();
		this.context.submitGivingForm();
	}
	/**
	 * Sets the state with new product order information from the product display
	 * @param {Object} productInfo - Selected designation
	 * @param {Number} productInfo.index - index of product being added or removed from cart
	 * @param {Number} productInfo.quantity - number of total items
	 */
	updateProducts({ idx, quantity }) {
		// productInfo and productsOrdered to be used by Product Display to calculate a total donation
		let productInfo = [...this.state.productInfo],
			{ productsOrdered } = this.state;
		const found = productInfo.findIndex(prod => prod.idx === idx);
		if (found > -1) {
			productInfo[found].quantity = quantity;
		} else {
			productInfo.push({ idx, quantity });
		}
		const totalProducts = productInfo.reduce((a, b) => a + b.quantity, 0);
		productsOrdered = totalProducts ? true : false;

		//update cart by removing all instances of this particular product and adding back new quantity if any
		const items = [...this.state.cart.items];
		const { products } = this.props;
		const {
			DetailName,
			DetailCprojCredit,
			DetailCprojMail,
			DetailDescription,
			PledgeAmount,
		} = products[idx];
		const newItems = items.filter(
			el => el.DetailDescription !== DetailDescription
		);
		if (quantity) {
			newItems.push({
				type: "product",
				PledgeAmount: +PledgeAmount * quantity,
				DetailCprojMail: DetailCprojMail,
				DetailCprojCredit: DetailCprojCredit,
				DetailDescription: DetailDescription,
				DetailName: DetailName + "|" + quantity,
			});
		}
		// console.log({productInfo, productsOrdered, totalProducts, newItems})
		this.setState({ productInfo, productsOrdered, cart: { items: newItems } });
	}

	addToCart(item) {
		this.context.addToCart({ type: "ADD_TO_CART", item });
	}

	removeFromCart(itemType) {
		this.context.removeFromCart({ type: "REMOVE_TO_CART", itemType });
	}

	/**
	 * Sets the state with new designation information from the designation select dropdown
	 * @param {Object} designationInfo - Selected designation
	 * @param {String} designationInfo.DetailName
	 * @param {String} designationInfo.DetailDescription
	 * @param {String} designationInfo.DetailCprojCredit
	 * @param {String} designationInfo.DetailCprojMail
	 */
	updateDonation(designationInfo) {
		const { monthlyChecked } = this.state;
		const detailName = designationInfo.DetailName;
		designationInfo.DetailName = monthlyChecked
			? `MP${detailName}`
			: `SG${detailName}`;
		// console.log({designationInfo})
		this.setState({ designationSelected: true, designationInfo });
	}

	render() {
		const {
			showGivingArray,
			givingFormat,
			productFormat,
			monthlyOption,
			singleOption,
			monthlyAmounts,
			singleAmounts,
			designations,
			monthlyPledgeData,
			singlePledgeData,
			products,
			additionalGift,
			shipping,
			international,
			getPhone,
			getSuffix,
			getMiddleName,
			getSpouseInfo,
			defaultAmount,
			defaultOption,
		} = this.props;

		const givingOptions = {
				monthlyOption,
				singleOption,
				monthlyAmounts: monthlyAmounts ? monthlyAmounts : [],
				singleAmounts: singleAmounts ? singleAmounts : [],
				designations: designations ? designations : [],
				monthlyPledgeData,
				singlePledgeData,
			},
			productOptions = {
				products: products ? products : [],
				numProducts: products && products.length ? products.length : 0,
				additionalGift,
			},
			designationOptions = {
				designations: designations ? designations : [],
				numDesignations:
					designations && designations.length ? designations.length : 0,
			};
		const { monthlyChecked } = this.state;
		const { errors, fields, initialized, submitting } = this.context;
		// console.log({fields, errors})
		const hasErrors =
			Object.values(errors).filter(val => val && val.length > 0).length > 0;
		return (
			<form id="react-form" autoComplete="off" onSubmit={this.handleSubmit}>
				{showGivingArray && (
					<FormPanel className="form-panel">
						<GivingLayout
							givingFormat={givingFormat}
							defaultAmount={defaultAmount}
							defaultOption={defaultOption}
							givingOptions={givingOptions}
							handleRadioClick={this.handleRadioClick}
							amountError={errors.amount}
							monthlyChecked={monthlyChecked}
							Monthlypledgeday={fields.Monthlypledgeday}
							monthlyOption={monthlyOption}
							singleOption={singleOption}
						/>
					</FormPanel>
				)}
				{designationOptions.numDesignations > 0 && (
					<FormPanel className="form-panel">
						<DesignationBlock
							designationOptions={DesignationOptions}
							updateDonation={this.updateDonation}
							designationInfo={designationInfo}
						/>
					</FormPanel>
				)}
				{productOptions.numProducts > 0 && (
					<FormPanel className="form-panel">
						<ProductLayout
							productFormat={productFormat}
							productOptions={productOptions}
							updateProducts={this.updateProducts}
						/>
					</FormPanel>
				)}
				{initialized ? (
					<FormPanel className="form-panel">
						<FieldSet>
							<legend>Name and Billing Address Block</legend>
							<FormPanel className="name-address__info">
								<FormHeader className="form-header">
									Please Enter Your Billing Information
								</FormHeader>
								<NameBlock
									fields={fields}
									errors={errors}
									getMiddleName={getMiddleName}
									getSuffix={getSuffix}
									getSpouseInfo={getSpouseInfo}
									handleInputChange={this.handleInputChange}
									type="Name"
								/>
								<AddressBlock
									fields={fields}
									errors={errors}
									handleInputChange={this.handleInputChange}
									getPhone={getPhone}
									international={international}
									type="Billing"
								/>
							</FormPanel>
						</FieldSet>
						{shipping && (
							<FieldSet>
								<legend>Shipping Address Block</legend>
								<FormPanel className="shipping-address__container">
									<FormOptionsBlock
										id="ShipToYes"
										checked={fields.ShipToYes}
										handleInputChange={this.handleInputChange}
										label="&nbsp;My shipping address is different than my billing address."
									/>
									{fields.ShipToYes && (
										<ShippingAddressBlock
											fields={fields}
											errors={errors}
											handleInputChange={this.handleInputChange}
											international={international}
										/>
									)}
								</FormPanel>
							</FieldSet>
						)}
						<FieldSet>
							<legend>Save Personal Info Block</legend>
							<FormOptionsBlock
								id="savePersonalInfo"
								checked={fields.savePersonalInfo}
								handleInputChange={this.handleInputChange}
								label="&nbsp;Remember my name and address next time"
							/>
						</FieldSet>
						<FieldSet>
							<legend>Form Submit Block</legend>
							<SubmitButton
								hasErrors={hasErrors}
								error={errors.amount}
								handleSubmit={this.handleSubmit}
								submitting={submitting}
								value="Continue to Payment"
							/>
						</FieldSet>
					</FormPanel>
				) : (
					<FormPanel className="form-panel">
						<Spinner />
					</FormPanel>
				)}
			</form>
		);
	}
}

GivingForm.contextType = GivingFormContext;

export default GivingForm;
