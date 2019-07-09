import React, { Component } from "react";

import { GivingFormContext } from "../../Contexts/GivingFormProvider";
import MonthlyRadioBlock from "../Blocks/MonthlyRadioBlock";
import MonthlyTabBlock from "../Blocks/MonthlyTabBlock";
import CCInfoBlock from "../Blocks/CCInfoBlock";
import Divider from "../StyledComponents/Divider";
import FieldSet from "../StyledComponents/FieldSet";
import AskArray from "../StyledComponents/AskArray";
import FormHeader from "../StyledComponents/FormHeader";
import AskArrayBtn from "../StyledComponents/AskArrayBtn";
import OtherGiftAmountGroup from "../StyledComponents/OtherGiftAmountGroup";
import AmountError from "../StyledComponents/AmountError";

function getIndex(arr, amount) {
	return arr.findIndex(amt => +amt == +amount);
}

class GivingLayout extends Component {
	constructor(props) {
		super(props);
		this.otherAmountField = React.createRef();
		this.state = {
			prevIndex: null,
			selectedIndex: null,
			otherAmount: 0,
			otherAmountError: "",
		};
		this.renderArray = this.renderArray.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.handleOtherAmt = this.handleOtherAmt.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
	}

	componentDidMount() {
		let amt = 0,
			arr = [];
		const {
			defaultAmount,
			defaultOption,
			givingOptions: { monthlyAmounts, singleAmounts, monthlyOption },
		} = this.props;
		const { initialized, cart } = this.context;
		if (!initialized) {
			if (defaultOption !== "") {
				arr = defaultOption == "monthly" ? monthlyAmounts : singleAmounts;
			} else {
				arr = monthlyOption ? monthlyAmounts : singleAmounts;
			}
			amt = defaultAmount;
		} else {
			const items = [...cart.items];
			const pledgeFound = items.findIndex(el => el && el.type == "donation");
			const monthly = pledgeFound > -1 ? items[pledgeFound].monthly : false;
			amt = items[pledgeFound].PledgeAmount;
			arr = monthly ? monthlyAmounts : singleAmounts;
		}
		if (amt > 0 && arr.length) {
			const index = getIndex(arr, amt);
			const selectedIndex = index >= 0 ? index : 99;
			if (selectedIndex >= 0) {
				// console.log({amt, index})
				this.addToCart(amt, selectedIndex);
			}
		}
	}

	renderArray(amounts, selectedIndex, type) {
		return amounts.map((amount, i) => (
			<AskArrayBtn
				key={`array${i}`}
				className={`askbutton${type == "tabs" ? "__tabs" : ""} ${
					selectedIndex == i ? "selected" : ""
				}`}
				onClick={() => this.addToCart(amount, i)}
			>
				<div className={`askbutton__amt${type == "tabs" ? "--tabs" : ""}`}>
					${amount}
				</div>
			</AskArrayBtn>
		));
	}

	/**
	 * Changes state on the arry to visibly display selected amount and adds donation amount to the cart
	 * @param {Number} amt - amount to be added to cart
	 * @param {Number} index - index of selected item or custom amount
	 */
	addToCart(amt, index) {
		const { otherAmountError, selectedIndex } = this.state;
		this.setState(
			{
				otherAmount: index == 99 ? amt : 0,
				selectedIndex: index,
				otherAmountError: index !== 99 ? "" : otherAmountError,
				prevIndex: selectedIndex,
			},
			() => {
				if (amt) {
					const {
						monthlyChecked,
						givingOptions: { monthlyPledgeData, singlePledgeData },
					} = this.props;
					this.context.addToCart({
						type: "ADD_TO_CART",
						item: {
							type: "donation",
							PledgeAmount: amt,
							DetailCprojMail: monthlyChecked
								? monthlyPledgeData.DetailCprojMail
								: singlePledgeData.DetailCprojMail,
							DetailCprojCredit: monthlyChecked
								? monthlyPledgeData.DetailCprojCredit
								: singlePledgeData.DetailCprojCredit,
							DetailDescription: monthlyChecked
								? monthlyPledgeData.DetailDescription
								: singlePledgeData.DetailDescription,
							DetailName: monthlyChecked
								? monthlyPledgeData.DetailName
								: singlePledgeData.DetailName,
							monthly: monthlyChecked,
						},
					});
				} else {
					this.context.removeFromCart({
						type: "REMOVE_FROM_CART",
						itemType: "donation",
					});
				}
			}
		);
	}

	handleFocus(e) {
		this.setState(
			(state, props) => {
				if (state.selectedIndex !== 99) {
					return { selectedIndex: 99, prevIndex: state.selectedIndex };
				}
			},
			() => {
				if (
					this.state.otherAmount == 0 &&
					(this.props.givingInfo && !this.props.givingInfo.amount)
				) {
					this.context.removeFromCart("donation");
				}
				this.otherAmountField.current.focus();
			}
		);
	}

	handleOtherAmt(e) {
		const { selectedIndex } = this.state;
		const value = e.target.value.trim();
		const isValid = /^[0-9]{1,}$/.test(value);
		if (isValid && value > 0) {
			this.setState(
				{ otherAmountError: "", otherAmount: value, prevIndex: selectedIndex },
				() => this.addToCart(+value, 99)
			);
		} else if (isValid) {
			this.setState(
				{
					otherAmount: 0,
					selectedIndex: null,
					otherAmountError: "",
					prevIndex: selectedIndex,
				},
				() =>
					this.context.removeFromCart({
						type: "REMOVE_FROM_CART",
						itemType: "donation",
					})
			);
		} else {
			this.setState({
				otherAmount: 0,
				otherAmountError: value !== "" ? "Number greater than Zero Only" : "",
				prevIndex: selectedIndex,
			});
		}
	}

	render() {
		let {
			givingFormat,
			amountError,
			monthlyChecked,
			Monthlypledgeday,
			handleInputChange,
			handleRadioClick,
			givingOptions: {
				singleOption,
				monthlyOption,
				monthlyAmounts,
				singleAmounts,
			},
		} = this.props;
		let {
			otherAmount,
			otherAmountError,
			selectedIndex,
			prevIndex,
		} = this.state;
		let {
			givingInfo: { amount, isMonthly },
		} = this.context;
		let key = "controlled";
		// console.log({amount, selectedIndex})
		if (amount) {
			const index = isMonthly
				? monthlyAmounts.indexOf(amount)
				: singleAmounts.indexOf(amount);
			selectedIndex = index > -1 ? index : 99;
			otherAmount = amount;
			monthlyChecked = isMonthly;
		} else {
			otherAmount =
				selectedIndex == 99
					? otherAmount
					: monthlyChecked
					? monthlyAmounts[selectedIndex]
					: singleAmounts[selectedIndex];
			key =
				selectedIndex == 99 || selectedIndex === null
					? key
					: (monthlyChecked
							? monthlyAmounts[selectedIndex]
							: singleAmounts[selectedIndex]) + "-key";
		}
		// console.log({amount, otherAmount, selectedIndex, key})
		return givingFormat === "buttons" ? (
			<FieldSet>
				<legend>Giving Amounts and Giving Options</legend>
				<FormHeader className="askarray__header">
					Select A {monthlyChecked ? "Monthly" : "Single"} Donation Amount
				</FormHeader>
				<AskArray id="AskArray" className="askarray">
					{monthlyOption && monthlyChecked
						? this.renderArray(monthlyAmounts, selectedIndex, givingFormat)
						: null}
					{singleOption && !monthlyChecked
						? this.renderArray(singleAmounts, selectedIndex, givingFormat)
						: null}
				</AskArray>
				<OtherGiftAmountGroup id="OtherGiftAmount" className="askarray--other">
					<div
						id="OtherAmount"
						className={`askarray__form-group--other ${
							selectedIndex == 99 ? "styles.selected" : ""
						}`}
					>
						<label
							className="form-group__other-input--label"
							htmlFor="other-amt-input"
						>
							Other Amount
						</label>
						<input
							key={key}
							ref={this.otherAmountField}
							className="form-group__other-input"
							name="other-amt-input"
							onChange={this.handleOtherAmt}
							value={otherAmount == 0 ? "" : otherAmount}
							onFocus={this.handleFocus}
						/>
						<div className="other-amt-error">{otherAmountError}</div>
					</div>
				</OtherGiftAmountGroup>
				<AmountError className="amount-error">{amountError}</AmountError>

				{monthlyOption && singleOption && (
					<MonthlyRadioBlock
						Monthlypledgeday={Monthlypledgeday}
						monthlyChecked={monthlyChecked}
						handleInputChange={handleInputChange}
						handleRadioClick={handleRadioClick}
					/>
				)}
			</FieldSet>
		) : (
			<FieldSet>
				<legend>Giving Amounts and Giving Options</legend>
				<FormHeader className="askarray__header">
					Select A {monthlyChecked ? "Monthly" : "Single"} Donation Amount
				</FormHeader>
				{monthlyOption && singleOption && (
					<MonthlyTabBlock
						monthlyChecked={monthlyChecked}
						handleTabClick={handleRadioClick}
					/>
				)}
				<AskArray id="AskArray" className="askarray__tabs">
					{monthlyOption && monthlyChecked
						? this.renderArray(monthlyAmounts, selectedIndex, givingFormat)
						: null}
					{singleOption && !monthlyChecked
						? this.renderArray(singleAmounts, selectedIndex, givingFormat)
						: null}
				</AskArray>
				<OtherGiftAmountGroup
					id="OtherGiftAmount"
					className="askarray__tabs--other"
				>
					<div
						id="OtherAmount"
						className={`askarray__form-group--tabs ${
							selectedIndex == 99 ? " styles.selected" : ""
						}`}
					>
						<label
							className="form-group-tabs__other-input--label"
							htmlFor="other-amt-input"
						>
							Or specify amount
						</label>
						<div className="askarray__form-group-tabs-flex-container">
							<div className="form-group-tabs--dollar">$</div>
							<input
								key={key}
								ref={this.otherAmountField}
								className="form-group-tabs__other-input"
								name="other-amt-input"
								onChange={this.handleOtherAmt}
								value={otherAmount == 0 ? "" : otherAmount}
								onFocus={this.handleFocus}
							/>
							<div className="other-amt-error">{otherAmountError}</div>
						</div>
					</div>
				</OtherGiftAmountGroup>
				{monthlyChecked && <CCInfoBlock Monthlypledgeday={Monthlypledgeday} />}
				<AmountError className="amount-error">{amountError}</AmountError>
			</FieldSet>
		);
	}
}

GivingLayout.contextType = GivingFormContext;

export default GivingLayout;
