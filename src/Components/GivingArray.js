import React, { Component } from 'react'

import flex from './styles/flex.module.css'
import styles from './styles/giving.module.css'

function getIndex(arr,amount) {
    return arr.findIndex(amt=> +amt == +amount)
}

class GivingArray extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hydrated: false,
            initialUpdate: false,
            selectedIndex: null,
            otherAmount: 0,
            otherAmountError: ''
        }
        this.renderArray = this.renderArray.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.handleOtherAmt = this.handleOtherAmt.bind(this)
    }

    componentDidMount() {
        const { defaultAmount, defaultOption, arrayOptions: { monthlyAmounts, singleAmounts, monthlyOption } } = this.props;
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

    componentWillReceiveProps(nextProps) {
        const {initialUpdate} = nextProps;
        if (initialUpdate && !this.state.initialUpdate) {
            return this.setState({initialUpdate})
        }
        const {givingInfo, monthlyChecked} = nextProps;
        if (givingInfo && givingInfo.length && !nextProps.hydrated && !this.state.hydrated) {
            return this.hydrateGiving(givingInfo);
        } 
        if (monthlyChecked !== this.props.monthlyChecked) {
             return this.setState({monthlyChecked, selectedIndex: null}, ()=>this.props.removeFromCart('donation'))
        }
    }

    hydrateGiving(givingInfo) {
        const {arrayOptions: { monthlyAmounts, singleAmounts } } = this.props;
        let { otherAmount, selectedIndex } = this.state
        const {isMonthly, amount} = givingInfo[0]
        const arr = isMonthly ? monthlyAmounts : singleAmounts
        const index = getIndex(arr, amount);
        selectedIndex = index > -1 ? index : 99;
        otherAmount = selectedIndex == 99 ? amount : 0;
        this.setState({selectedIndex, otherAmount, hydrated: true}, ()=> {
            if (selectedIndex >= 0) {
                this.addToCart(amount, index);
            } 
        })
    }

    renderArray(amounts, selectedIndex) {
        return amounts.map((amount, i)=>(
            <div key={`array${i}`} styleName={`styles.askbutton flex.flex flex.flex-center flex.flex-axes-center ${selectedIndex == i ? "styles.selected" : ""}`} onClick={()=>this.addToCart(amount, i)}>
                <div styleName="styles.askbutton__amt flex.flex flex.flex-center flex.flex-axes-center flex.flex-no-grow">{amount}</div>
            </div>
        ))
    }
    
    /**
     * Changes state on the arry to visibly display selected amount and adds donation amount to the cart
     * @param {Number} amt - amount to be added to cart
     * @param {Number} index - index of selected item or custom amount
     */
    addToCart(amt, index) {
        this.setState({otherAmount: index == 99 ? amt : 0, selectedIndex: index}, () => {
            if (amt) {
                const { monthlyChecked, arrayOptions: {monthlyPledgeData, singlePledgeData} } = this.props;
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

    handleOtherAmt(e) {
        const value = e.target.value.trim();
        const isValid = (/^[0-9]{1,}$/).test(value)
        if (isValid && value > 0) {
            this.setState({otherAmountError: ''}, ()=> this.addToCart(+value, 99))
        } else if (isValid) {
            this.setState({otherAmount: 0, selectedIndex: null, otherAmountError: ''}, ()=> this.props.removeFromCart('donation'))
        } else {
            this.setState({otherAmount: '', otherAmountError: "Number > 0"})
        }
    }
    
    render() {
        const { 
            monthlyChecked,
            arrayOptions: {
                givingFormat,
                singleOption,
                monthlyOption,
                monthlyAmounts, 
                singleAmounts
            } 
        } = this.props;
        const {
            otherAmount,
            otherAmountError,
            selectedIndex
        } = this.state

        return (
            <React.Fragment>
                <h3 styleName="styles.askarray__header">Select A {monthlyChecked ? "Monthly" : "Single"} Donation Amount</h3>
                <div id="AskArray" styleName="styles.askarray flex.flex flex.flex-row flex.flex-center flex.flex-wrap">
                    { monthlyOption && monthlyChecked ? this.renderArray(monthlyAmounts, selectedIndex) : null }
                    { singleOption && !monthlyChecked ?  this.renderArray(singleAmounts, selectedIndex) : null }
                    
                </div>
                <div id="OtherGiftAmount" styleName="styles.askarray--other flex.flex flex.flex-row flex.flex-center">
                    <div id="OtherAmout" styleName={`styles.askarray__form-group--other flex.flex flex.flex-center flex.flex-axes-center${selectedIndex == 99 ? " styles.selected": ""}`}>
                        <label styleName="styles.form-group__other-input--label" htmlFor="other-amt-input">Other Amount</label>
                        <input styleName="styles.form-group__other-input" name="other-amt-input" onChange={this.handleOtherAmt} value={otherAmount == 0 ? '' : otherAmount}/>
                        <div styleName="styles.error styles.other-amt-error">{otherAmountError}</div>
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}

export default GivingArray