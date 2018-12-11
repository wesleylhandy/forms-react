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
            defaultAmount: props.arrayOptions.defaultAmount,
            defaultOption: props.arrayOptions.defaultOption,
            givingFormat: props.arrayOptions.givingFormat,
            monthlyOption: props.arrayOptions.monthlyOption,
            singleOption: props.arrayOptions.singleOption,
            monthlyAmounts: [...props.arrayOptions.monthlyAmounts],
            singleAmounts: [...props.arrayOptions.singleAmounts],
            monthlyChecked: props.arrayOptions.defaultOption == 'monthly',
            monthlyPledgeData: {
                DetailCprojCredit: props.arrayOptions.monthlyPledgeData.DetailCprojCredit,
                DetailCprojMail: props.arrayOptions.monthlyPledgeData.DetailCprojMail
            },
            singlePledgeData: {
                DetailCprojCredit: props.arrayOptions.singlePledgeData.DetailCprojCredit,
                DetailCprojMail: props.arrayOptions.singlePledgeData.DetailCprojMail
            },
            selectedIndex: null,
            otherAmount: 0,
            otherAmountError: '',
            hydrated: false,
            initialUpdate: false
        }

        this.renderArray = this.renderArray.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.handleOtherAmt = this.handleOtherAmt.bind(this)
    }

    componentDidMount() {
        // console.log({hydratedAmount: this.props.hydratedAmount})
        if (this.props.hydratedAmount) {
            const arr = this.props.hydratedMonthly ? this.state.monthlyAmounts : this.state.singleAmounts;
            const amt = this.props.hydratedAmount
            const index = getIndex(arr, amt);
            this.setState({selectedIndex: index >=0 ? index : null, hydrated: true})
        } else {
            const arr = this.props.arrayOptions.defaultOption == 'monthly' ? this.state.monthlyAmounts : this.state.singleAmounts;
            const amt = this.props.arrayOptions.defaultAmount
            const index = getIndex(arr, amt);
            if (index >= 0) {
                this.addToCart(amt, index);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        const {initialUpdate} = nextProps;
        if (initialUpdate && !this.state.initialUpdate) {
            const {givingFormat, monthlyOption, singleOption, monthlyAmounts, singleAmounts, monthlyPledgeData, singlePledgeData} = nextProps.arrayOptions;
            return this.setState({givingFormat, monthlyOption, singleOption, monthlyAmounts: [...monthlyAmounts], singleAmounts: [...singleAmounts], monthlyChecked: nextProps.monthlyChecked ? true : false, monthlyPledgeData, singlePledgeData, initialUpdate})
        }
        if (nextProps.monthlyChecked != this.state.monthlyChecked) {
            this.setState({monthlyChecked: nextProps.monthlyChecked, selectedIndex: null, otherAmount: 0})
        }
        if (nextProps.hydratedAmount && !this.state.hydrated) {
            const index = nextProps.hydratedMonthly ? getIndex(this.state.monthlyAmounts, nextProps.hydratedAmount) : getIndex(this.state.singleAmounts, nextProps.hydratedAmount)
            this.setState({selectedIndex: index >=0 ? index : null, hydrated: true})
        }
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
        this.setState({otherAmount: index == 99 ? amt : '', selectedIndex: index})
        const monthlyChecked = this.state.monthlyChecked;
        this.props.addToCart({
            type: 'donation',
            PledgeAmount: amt,
            DetailCprojMail: monthlyChecked ? this.state.monthlyPledgeData.DetailCprojMail : this.state.singlePledgeData.DetailCprojMail,
            DetailCprojCredit: monthlyChecked ? this.state.monthlyPledgeData.DetailCprojCredit : this.state.singlePledgeData.DetailCprojCredit,
            DetailDescription: monthlyChecked ? "Monthly Pledge" : "Single Pledge",
            DetailName: monthlyChecked ? "MP" : "SPGF",
            monthly: monthlyChecked
        })
    }

    handleOtherAmt(e) {
        const value = e.target.value.trim();
        const isValid = (/^[0-9]{1,}$/).test(value)
        if (isValid && value > 0) {
            this.addToCart(+value, 99)
        } else if (isValid) {
            this.setState({otherAmount: 0, selectedIndex: null})
        } else {
            this.setState({otherAmount: '', otherAmountError: "Number > 0"})
        }
        
    }
    
    render() {
        return (
            <React.Fragment>
                <h3 styleName="styles.askarray__header">Select A {this.state.monthlyChecked ? "Monthly" : "Single"} Donation Amount</h3>
                <div id="AskArray" styleName="styles.askarray flex.flex flex.flex-row flex.flex-center flex.flex-wrap">
                    { this.state.monthlyOption && this.state.monthlyChecked ? this.renderArray(this.state.monthlyAmounts, this.state.selectedIndex) : null }
                    { this.state.singleOption && !this.state.monthlyChecked ?  this.renderArray(this.state.singleAmounts, this.state.selectedIndex) : null }
                    <div id="OtherAmout" styleName={`styles.askarray__form-group flex.flex flex.flex-center flex.flex-axes-center${this.state.selectedIndex == 99 ? " styles.selected": ""}`}>
                        <label styleName="styles.form-group__other-input--label" htmlFor="other-amt-input">Other Amount</label>
                        <input styleName="styles.form-group__other-input" name="other-amt-input" onChange={this.handleOtherAmt} value={this.state.otherAmount == 0 ? '' : this.state.otherAmount}/>
                        <div styleName="styles.error">{this.state.otherAmountError}</div>
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}

export default GivingArray