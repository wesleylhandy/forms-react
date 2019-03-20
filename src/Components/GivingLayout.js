import React, { Component, Fragment } from 'react'

import flex from './styles/flex.module.css'
import styles from './styles/giving-array.module.css'

import MonthlyRadioGroup from './MonthlyRadioGroup'
import MonthlyTabGroup from './MonthlyTabGroup'
import CCInfo from './CCInfo'
import Divider from './Divider'

function getIndex(arr,amount) {
    return arr.findIndex(amt=> +amt == +amount)
}

class GivingLayout extends Component {
    constructor(props) {
        super(props)
        this.otherAmountField = React.createRef();
        this.state = {
            initialUpdate: false,
            prevIndex: null,
            selectedIndex: null,
            otherAmount: 0,
            otherAmountError: ''
        }
        this.renderArray = this.renderArray.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.handleOtherAmt = this.handleOtherAmt.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
    }

    componentDidMount() {
        const { defaultAmount, defaultOption, givingOptions: { monthlyAmounts, singleAmounts, monthlyOption } } = this.props;
        let arr = []
        if (defaultOption !== "") {
            arr = defaultOption == 'monthly' ? monthlyAmounts : singleAmounts;
        } else {
            arr = monthlyOption ? monthlyAmounts : singleAmounts
        }
        const amt = defaultAmount
        if (amt > 0 && arr.length) {
            const index = getIndex(arr, amt);
            const selectedIndex = index >=0 ? index : 99;
            if (selectedIndex >= 0) {
                this.addToCart(amt, index);
            }
        }
    }

    renderArray(amounts, selectedIndex, type) {
        return amounts.map((amount, i)=>(
            <div key={`array${i}`} styleName={`styles.askbutton${type == "tabs" ? "__tabs" : ""} flex.flex flex.flex-center flex.flex-axes-center ${selectedIndex == i ? "styles.selected" : ""}`} onClick={()=>this.addToCart(amount, i)}>
                <div styleName={`styles.askbutton__amt${type == "tabs" ? "--tabs" : " flex.flex-no-grow"} flex.flex flex.flex-center flex.flex-axes-center`}>${amount}</div>
            </div>
        ))
    }
    
    /**
     * Changes state on the arry to visibly display selected amount and adds donation amount to the cart
     * @param {Number} amt - amount to be added to cart
     * @param {Number} index - index of selected item or custom amount
     */
    addToCart(amt, index) {
        const { otherAmountError, selectedIndex } = this.state;
        this.setState({otherAmount: index == 99 ? amt : 0, selectedIndex: index, otherAmountError: index !== 99 ? "" : otherAmountError, prevIndex: selectedIndex}, () => {
            if (amt) {
                const { monthlyChecked, givingOptions: {monthlyPledgeData, singlePledgeData} } = this.props;
                this.props.addToCart({
                    type: 'donation',
                    PledgeAmount: amt,
                    DetailCprojMail: monthlyChecked ? monthlyPledgeData.DetailCprojMail : singlePledgeData.DetailCprojMail,
                    DetailCprojCredit: monthlyChecked ? monthlyPledgeData.DetailCprojCredit : singlePledgeData.DetailCprojCredit,
                    DetailDescription: monthlyChecked ? monthlyPledgeData.DetailDescription : singlePledgeData.DetailDescription,
                    DetailName: monthlyChecked ? monthlyPledgeData.DetailName : singlePledgeData.DetailName,
                    monthly: monthlyChecked
                })
            } else {
                this.props.removeFromCart('donation')
            }
        });
    }

    handleFocus(e) {
        this.setState((state, props)=>{
            if (state.selectedIndex !== 99) {
                return { selectedIndex: 99, prevIndex: state.selectedIndex}
            }
        }, ()=> {
            if (this.state.otherAmount == 0 && (this.props.givingInfo && !this.props.givingInfo.amount) ){
                this.props.removeFromCart('donation');
            }
            this.otherAmountField.current.focus();
        });
    }

    handleOtherAmt(e) {
        const {selectedIndex} = this.state
        const value = e.target.value.trim();
        const isValid = (/^[0-9]{1,}$/).test(value)
        if (isValid && value > 0) {
            this.setState({otherAmountError: '', otherAmount: value, prevIndex: selectedIndex}, ()=> this.addToCart(+value, 99))
        } else if (isValid) {
            this.setState({otherAmount: 0, selectedIndex: null, otherAmountError: '', prevIndex: selectedIndex}, ()=> this.props.removeFromCart('donation'))
        } else {
            this.setState({otherAmount: 0, otherAmountError: value !== "" ? "Number greater than Zero Only" : "", prevIndex: selectedIndex})
        }
    }
    
    render() {
        let { 
            givingFormat,
            givingInfo: { amount, isMonthly },
            amountError,
            monthlyChecked,
            Monthlypledgeday,
            handleInputChange,
            handleRadioClick,
            givingOptions: {
                singleOption,
                monthlyOption,
                monthlyAmounts, 
                singleAmounts
            }
        } = this.props;
        let {
            otherAmount,
            otherAmountError,
            selectedIndex,
            prevIndex
        } = this.state
        let key = "controlled"
        // console.log({amount, selectedIndex})
        if (amount) {
            const index = isMonthly ? monthlyAmounts.indexOf(amount) : singleAmounts.indexOf(amount);
            selectedIndex =  index > -1 ? index : 99;
            otherAmount = amount;
            monthlyChecked = isMonthly;
        } else {
            otherAmount = selectedIndex == 99 ? otherAmount : ( monthlyChecked ? monthlyAmounts[selectedIndex] : singleAmounts[selectedIndex] )
            key = selectedIndex == 99 || selectedIndex === null ? key : ( monthlyChecked ? monthlyAmounts[selectedIndex] : singleAmounts[selectedIndex] ) + "-key"
        }
        return givingFormat === "buttons" ? (
                <Fragment>
                    <div styleName="styles.gift-choice">
                        <h3 styleName="styles.askarray__header">Select A {monthlyChecked ? "Monthly" : "Single"} Donation Amount</h3>
                        <div id="AskArray" styleName="styles.askarray flex.flex flex.flex-row flex.flex-center flex.flex-wrap">
                            { monthlyOption && monthlyChecked ? this.renderArray(monthlyAmounts, selectedIndex, givingFormat) : null }
                            { singleOption && !monthlyChecked ?  this.renderArray(singleAmounts, selectedIndex, givingFormat) : null }
                            
                        </div>
                        <div id="OtherGiftAmount" styleName="styles.askarray--other flex.flex flex.flex-row flex.flex-center">
                            <div id="OtherAmount" styleName={`styles.askarray__form-group--other flex.flex flex.flex-center flex.flex-axes-center${selectedIndex == 99 ? " styles.selected": ""}`}>
                                <label styleName="styles.form-group__other-input--label" htmlFor="other-amt-input">Other Amount</label>
                                <input 
                                    key={key} 
                                    ref={this.otherAmountField} 
                                    styleName="styles.form-group__other-input" 
                                    name="other-amt-input" 
                                    onChange={this.handleOtherAmt} 
                                    value={otherAmount == 0 ? '' : otherAmount} 
                                    onFocus={this.handleFocus}
                                />
                                <div styleName="styles.error styles.other-amt-error">{otherAmountError}</div>
                            </div> 
                        </div>
                        <div styleName="styles.error styles.amount-error">{amountError}</div>
                    </div>
                    { 
                        monthlyOption && singleOption && (
                            <MonthlyRadioGroup 
                                Monthlypledgeday={Monthlypledgeday}
                                monthlyChecked={monthlyChecked}
                                handleInputChange={handleInputChange}
                                handleRadioClick={handleRadioClick}
                            />
                        ) 
                    }
                </Fragment>
            ) : (
                <Fragment>
                    { 
                        monthlyOption && singleOption && (
                            <MonthlyTabGroup 
                                monthlyChecked={monthlyChecked}
                                handleTabClick={handleRadioClick}
                            />
                        ) 
                    }
                    <div id="AskArray" styleName="styles.askarray__tabs flex.flex flex.flex-row flex.flex-center flex.flex-wrap">
                            { monthlyOption && monthlyChecked ? this.renderArray(monthlyAmounts, selectedIndex, givingFormat) : null }
                            { singleOption && !monthlyChecked ?  this.renderArray(singleAmounts, selectedIndex, givingFormat) : null }
                    </div>
                    <div id="OtherGiftAmount" styleName="styles.askarray__tabs--other flex.flex flex.flex-row flex.flex-center flex.flex-axes-center">
                        <div id="OtherAmount" styleName={`styles.askarray__form-group--tabs flex.flex flex.flex-between flex.flex-axes-center${selectedIndex == 99 ? " styles.selected": ""}`}>
                            <label styleName="styles.form-group-tabs__other-input--label" htmlFor="other-amt-input">Or specify amount</label>
                            <div styleName="flex.flex flex.flex-row flex.flex-left flex.flex-axes-center">
                                <div styleName="styles.form-group-tabs--dollar">$</div>
                                <input 
                                    key={key} 
                                    ref={this.otherAmountField} 
                                    styleName="styles.form-group-tabs__other-input" 
                                    name="other-amt-input" 
                                    onChange={this.handleOtherAmt} 
                                    value={otherAmount == 0 ? '' : otherAmount} 
                                    onFocus={this.handleFocus}
                                />
                                <div styleName="styles.error styles.other-amt-error">{otherAmountError}</div>
                            </div>
                        </div> 
                    </div>
                    { 
                        monthlyChecked && (
                            <CCInfo handleInputChange={handleInputChange} Monthlypledgeday={Monthlypledgeday}/> 
                        )
                    }
                    <div styleName="styles.error styles.amount-error">{amountError}</div>
                </Fragment>
            )
    }
}

export default GivingLayout