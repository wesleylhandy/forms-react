import React, { Component } from 'react'

export default class GivingArray extends Component {
    constructor(props) {
        super(props)
        this.state = {
            givingFormat: props.arrayOptions.givingFormat,
            monthlyOption: props.arrayOptions.monthlyOption,
            monthlyAmounts: [...props.arrayOptions.monthlyAmounts],
            singleAmounts: [...props.arrayOptions.singleAmounts],
            monthlyChecked: props.monthlyChecked,
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
            <div key={`array${i}`} className={`askbutton flex flex-center flex-axes-center ${selectedIndex == i ? " selected" : ""}`} onClick={()=>this.addToCart(amount, i)}>
                <div className="askbutton__amt flex flex-center flex-axes-center flex-no-grow">{amount}</div>
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
            amount: amt,
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
            <div id="AskArray" className="askarray flex flex-row flex-center flex-wrap">
                { this.state.monthlyOption && this.state.monthlyChecked ? this.renderArray(this.state.monthlyAmounts, this.state.selectedIndex) : this.renderArray(this.state.singleAmounts, this.state.selectedIndex) }
                <div id="OtherAmout" className={`ask-form-group flex flex-center flex-axes-center${this.state.selectedIndex == 99 ? " selected": ""}`}>
                    <label htmlFor="other-amt-input">Other Amount</label>
                    <input name="other-amt-input" onChange={this.handleOtherAmt} value={this.state.otherAmount == 0 ? '' : this.state.otherAmount}/>
                    <div className="error">{this.state.otherAmountError}</div>
                </div> 
            </div>
        )
    }
}