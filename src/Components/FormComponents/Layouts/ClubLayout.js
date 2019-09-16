import React, { Component } from "react";

import { TransitionGroup } from "react-transition-group";

import "../Animations/askarray.css";

import { GivingFormContext } from "../../Contexts/GivingFormProvider";

import MonthlyClubTabBlock from "../Blocks/MonthlyClubTabBlock";
import FieldSet from "../StyledComponents/FieldSet";
import ClubAskArray from "../StyledComponents/ClubAskArray";
import GivingArrayBlock from "../Blocks/GivingArrayBlock.js";
import ClubOtherGiftAmountGroup from "../StyledComponents/ClubOtherGiftAmountGroup";

function getIndex(arr, amount) {
	return arr.findIndex(amt => +amt == +amount);
}

class ClubLayout extends Component {
	otherAmountField = React.createRef();
	state = {
		prevIndex: null,
		selectedIndex: null,
		otherAmount: 0,
		otherAmountDisplay: "",
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
				otherAmountDisplay:
					index == 99
						? amt.toLocaleString(undefined, {
								minimumFractionDigits: 0,
								maximiumFractionDigits: 0,
								style: "decimal",
						  })
						: "",
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
					this.otherAmountField.current.value == "" ||
					this.otherAmountField.current.value == 0
				) {
					this.context.removeFromCart({
						type: "REMOVE_FROM_CART",
						itemType: "donation",
					});
				}
				this.otherAmountField.current.focus();
			}
		);
	};

	handleBlur = e => {
		if (
			this.otherAmountField.current.value == "" ||
			this.otherAmountField.current.value == 0
		) {
			this.setState({ selectedIndex: null });
		}
	};

	handleOtherAmt = e => {
		const { selectedIndex } = this.state;
		let value = e.target.value.trim().replace(/[\$,]/g, "");
		const isValid = /^\d*(\.\d*)?$/.test(value);
		if (isValid && +value > 0) {
			value = Math.ceil(Number.parseFloat(value));
			this.setState(
				{
					otherAmountError: "",
					otherAmount: +value,
					otherAmountDisplay: value.toLocaleString(undefined, {
						minimumFractionDigits: 0,
						maximiumFractionDigits: 0,
						style: "decimal",
					}),
					prevIndex: selectedIndex,
				},
				() => this.addToCart(+value, 99)
			);
		} else if (isValid) {
			this.setState(
				{
					otherAmount: 0,
					otherAmountDisplay: "",
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
				otherAmountDisplay: "",
				otherAmountError: value !== "" ? "Numbers Only" : "",
				prevIndex: selectedIndex,
			});
		}
	};

	render() {
		let {
			monthlyChecked,
			handleRadioClick,
			givingOptions: { monthlyAmounts, singleAmounts },
		} = this.props;
		let {
			otherAmount,
			otherAmountDisplay,
			otherAmountError,
			selectedIndex,
		} = this.state;
		let key = "controlled";
		const amounts = monthlyChecked ? monthlyAmounts : singleAmounts;
		return (
			<FieldSet id="giving-tabs">
				<legend>Giving Amounts and Giving Options</legend>
				<MonthlyClubTabBlock
					monthlyChecked={monthlyChecked}
					handleTabClick={handleRadioClick}
				/>
				<ClubAskArray
					id={`AskArray-${monthlyChecked ? "monthly" : "single"}`}
					className="askarray--club"
					role="tabpanel"
					tabIndex="0"
					aria-labelledby={
						monthlyChecked ? "monthlygift-label" : "singlegift-label"
					}
					aria-expanded={true}
				>
					<TransitionGroup
						className="askarray--club-list"
						component={null}
						enter={true}
						exit={false}
					>
						<GivingArrayBlock
							amounts={amounts}
							selectedIndex={selectedIndex}
							format="buttons"
							addToCart={this.addToCart}
							monthlyChecked={monthlyChecked}
						/>
						<ClubOtherGiftAmountGroup
							key="othergiftamount"
							otherAmount={otherAmount > 0}
							isMonthly={monthlyChecked}
						>
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
									id="other-amt-input"
									onChange={this.handleOtherAmt}
									value={otherAmountDisplay}
									onFocus={this.handleFocus}
									onBlur={this.handleBlur}
									inputMode="numeric"
									pattern="[0-9]*"
									type="text"
								/>
								<div className="other-amt-error">{otherAmountError}</div>
							</div>
						</ClubOtherGiftAmountGroup>
					</TransitionGroup>
				</ClubAskArray>
			</FieldSet>
		);
	}
}

ClubLayout.contextType = GivingFormContext;

export default ClubLayout;
