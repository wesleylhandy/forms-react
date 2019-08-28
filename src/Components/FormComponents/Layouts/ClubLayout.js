import React, { Component, useContext, memo } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../Animations/askarray.css";

import { GivingFormContext } from "../../Contexts/GivingFormProvider";

import MonthlyClubTabBlock from "../Blocks/MonthlyClubTabBlock";
import FieldSet from "../StyledComponents/FieldSet";
import ClubAskArray from "../StyledComponents/ClubAskArray";
import GivingArray from "../Blocks/GivingArrayBlock.js";
import ClubOtherGiftAmountGroup from "../StyledComponents/ClubOtherGiftAmountGroup";
import AmountError from "../StyledComponents/AmountError";

function getIndex(arr, amount) {
	return arr.findIndex(amt => +amt == +amount);
}

class ClubLayout extends Component {
	otherAmountField = React.createRef();
	state = {
		prevIndex: null,
		selectedIndex: null,
		otherAmount: 0,
		otherAmountError: "",
	};

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
			amt = pledgeFound > -1 ? items[pledgeFound].PledgeAmount : 0;
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

	/**
	 * Changes state on the arry to visibly display selected amount and adds donation amount to the cart
	 * @param {Number} amt - amount to be added to cart
	 * @param {Number} index - index of selected item or custom amount
	 */
	addToCart = (amt, index) => {
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
	};

	handleFocus = e => {
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
	};

	handleOtherAmt = e => {
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
				otherAmountError: value !== "" ? "Numbers Only" : "",
				prevIndex: selectedIndex,
			});
		}
	};

	render() {
		let {
			amountError,
			monthlyChecked,
			handleRadioClick,
			givingOptions: { monthlyAmounts, singleAmounts },
		} = this.props;
		let { otherAmount, otherAmountError, selectedIndex } = this.state;
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
		const amounts = monthlyChecked ? monthlyAmounts : singleAmounts;
		return (
			<FieldSet>
				<legend>Giving Amounts and Giving Options</legend>
				<MonthlyClubTabBlock
					monthlyChecked={monthlyChecked}
					handleTabClick={handleRadioClick}
				/>
				<ClubAskArray
					id="AskArray"
					className="askarray--club"
					role="tabpanel"
					tabIndex="0"
					aria-labelledby={monthlyChecked ? "monthlygift" : "singlegift"}
				>
					<TransitionGroup
						className="askarray--club-list"
						component={null}
						enter={true}
						exit={false}
					>
						<GivingArray
							amounts={amounts}
							selectedIndex={selectedIndex}
							format="buttons"
							addToCart={this.addToCart}
							monthlyChecked={monthlyChecked}
						/>
						<ClubOtherGiftAmountGroup key="othergiftamount">
							<div
								id="OtherAmount"
								className={`askarray__form-group--other ${
									selectedIndex == 99 ? "selected" : ""
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
						</ClubOtherGiftAmountGroup>
					</TransitionGroup>
				</ClubAskArray>
				<AmountError className="amount-error">{amountError}</AmountError>
			</FieldSet>
		);
	}
}

ClubLayout.contextType = GivingFormContext;

export default ClubLayout;
