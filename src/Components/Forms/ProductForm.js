import React, { Component } from "react";

import { ProductFormContext } from "../Contexts/ProductFormProvider";

import FormPanel from "../FormComponents/StyledComponents/FormPanel";
import FieldSet from "../FormComponents/StyledComponents/FieldSet";
import FormHeader from "../FormComponents/StyledComponents/FormHeader";
import ProductLayout from "../FormComponents/Layouts/ProductLayout";
import NameBlock from "../FormComponents/Blocks/NameBlock";
import ShippingAddressBlock from "../FormComponents/Blocks/ShippingAddressBlock";
import AddressBlock from "../FormComponents/Blocks/AddressBlock";
import FormOptionsBlock from "../FormComponents/Blocks/FormOptionsBlock";
import SubmitButton from "../FormComponents/SubmitButton";
import Spinner from "../StyledComponents/Spinner";
import FormWrapper from "../StyledComponents/FormWrapper";

class ProductForm extends Component {
	state = {
		totalGift: 0,
	};
	componentDidMount() {
		const fields = {
			Zip: "",
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
			Country: this.props.allowInternational ? "" : "United States",
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
			errors,
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
	/**
	 * Sets the state with new product order information from the product display
	 * @param {Object} productInfo - Selected designation
	 * @param {Number} productInfo.index - index of product being added or removed from cart
	 * @param {Number} productInfo.quantity - number of total items
	 */
	updateProducts = ({ idx, quantity }) => {
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
	};
	handleInputChange = e => {
		const target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.context.validateAndUpdateField({ type: "UPDATE_FIELD", name, value });
	};
	handleSubmit = async e => {
		e.preventDefault();
		this.context.submitProductForm();
	};
	render() {
		const {
			formTitle,
			submitButtonText,
			allowInternational,
			productFormat,
			products,
			additionalGift,
			getAddress,
			getName,
			getPhone,
			getHonorific,
			getSuffix,
			getMiddleName,
			getSpouseInfo,
			getShippingAddress,
		} = this.props;
		const productOptions = {
			products: products ? products : [],
			numProducts: products && products.length ? products.length : 0,
			additionalGift,
		};
		const { errors, fields, initialized, submitting } = this.context;
		const hasErrors =
			Object.values(errors).filter(val => val && val.length > 0).length > 0;
		return (
			<FormWrapper>
				<form
					id="react-giving-form"
					autoComplete="off"
					onSubmit={this.handleSubmit}
				>
					<FormHeader className="form-title form-header">
						{formTitle}
					</FormHeader>
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
										getHonorific={getHonorific}
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
										getAddress={true}
										getPhone={getPhone}
										allowInternational={allowInternational}
										type="Billing"
									/>
								</FormPanel>
							</FieldSet>
							{getShippingAddress && (
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
												allowInternational={allowInternational}
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
									value={submitButtonText}
								/>
							</FieldSet>
						</FormPanel>
					) : (
						<FormPanel className="form-panel">
							<Spinner />
						</FormPanel>
					)}
				</form>
			</FormWrapper>
		);
	}
}

ProductForm.contextType = ProductFormContext;

export default ProductForm;
