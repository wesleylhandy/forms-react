import React, { Component } from 'react'

export default class GivingArray extends Component {
    constructor(props) {
        super(props)
        this.state = {
            givingFormat: props.arrayOptions.givingFormat,
            monthlyOption: props.arrayOptions.monthlyOption,
            numProducts: props.arrayOptions.numProducts,
            products: [...props.arrayOptions.products],
            monthlyAmounts: [...props.arrayOptions.monthlyAmounts],
            singleAmounts: [...props.arrayOptions.singleAmounts],
            monthlyChecked: props.monthlyChecked
        }

        this.renderArray = this.renderArray.bind(this)
        this.registerAmount = this.registerAmount.bind(this)
    }

    registerAmount(amt) {
        this.props.registerAmount(amt)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({monthlyChecked: nextProps.monthlyChecked})
    }

    renderArray(amounts) {

        return amounts.map((amount, i)=>(
            <div key={`array${i}`} className="askbutton flex flex-center flex-axes-center" onClick={()=>this.registerAmount(amount)}>
                <div className="askbutton__amt flex flex-center flex-axes-center flex-no-grow">{amount}</div>
            </div>
        ))

    }
    render() {
        return (
            <div id="AskArray" className="flex flex-row flex-center flex-wrap">
                { this.state.monthlyOption && this.state.monthlyChecked ? this.renderArray(this.state.monthlyAmounts) : this.renderArray(this.state.singleAmounts) }
            </div>
        )
    }
}