import React, { Component } from 'react'

import flex from './styles/flex.css'
import form from './styles/form.css'

export default class GivingArray extends Component {
    constructor(props) {
        super(props)
        this.state = {
            givingFormat: props.arrayOptions.givingFormat,
            monthlyOption: props.arrayOptions.monthlyOption,
            monthlyAmounts: [...props.arrayOptions.monthlyAmounts],
            singleAmounts: [...props.arrayOptions.singleAmounts],
            monthlyChecked: props.monthlyChecked,
            monthlyPledgeData: {
                DetailCprojCredit: props.arrayOptions.monthlyPledgeData.DetailCprojCredit,
                DetailCprojCMail: props.arrayOptions.monthlyPledgeData.DetailCprojMail
            },
            singlePledgeData: {
                DetailCprojCredit: props.arrayOptions.singlePledgeData.DetailCprojCredit,
                DetailCprojCMail: props.arrayOptions.singlePledgeData.DetailCprojMail
            },
            selectedIndex: null,
            otherAmount: 0,
            otherAmountError: ''
        }

        this.renderArray = this.renderArray.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.handleOtherAmt = this.handleOtherAmt.bind(this)
    }

    registerAmount(amt) {
        this.props.registerAmount(amt)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.monthlyChecked != this.state.monthlyChecked) {
            this.setState({monthlyChecked: nextProps.monthlyChecked, selectedIndex: null, otherAmount: 0})
        }
    }

    renderArray(amounts, selectedIndex) {

        return amounts.map((amount, i)=>(
            <div key={`array${i}`} styleName={`form.askbutton flex.flex flex.flex-center flex.flex-axes-center ${selectedIndex == i ? "form.selected" : ""}`} onClick={()=>this.addToCart(amount, i)}>
                <div styleName="form.askbutton__amt flex.flex flex.flex-center flex.flex-axes-center flex.flex-no-grow">{amount}</div>
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
            monthly: monthlyChecked,
            fund: null
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
            <div id="AskArray" styleName="form.askarray flex.flex flex.flex-row flex.flex-center flex.flex-wrap">
                { this.state.monthlyOption && this.state.monthlyChecked ? this.renderArray(this.state.monthlyAmounts, this.state.selectedIndex) : this.renderArray(this.state.singleAmounts, this.state.selectedIndex) }
                <div id="OtherAmout" styleName={`form.ask-formGroup flex.flex flex.flex-center flex.flex-axes-center${this.state.selectedIndex == 99 ? " form.selected": ""}`}>
                    <label styleName="form.otherInputLabel" htmlFor="other-amt-input">Other Amount</label>
                    <input styleName="form.otherInput" name="other-amt-input" onChange={this.handleOtherAmt} value={this.state.otherAmount == 0 ? '' : this.state.otherAmount}/>
                    <div styleName="form.error">{this.state.otherAmountError}</div>
                </div> 
            </div>
        )
    }
}