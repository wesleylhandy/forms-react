import React, { Component } from 'react';

import Form from "./Form"

import config from '../config/form-config.json'
import cssVars from '../config/css-config.json'



export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            givingFormat: config.hasOwnProperty('givingFormat') ? config.givingFormat : "buttons",
            monthlyOption: config.hasOwnProperty('monthlyOption') && typeof config.monthlyOption == "boolean" ? config.monthlyOption : true,
            shipping: config.hasOwnProperty('shipping') && typeof config.shipping == "boolean" ? config.shipping : false,
            international: config.hasOwnProperty('international') && typeof config.international == "boolean"? config.international : false,
            products: config.hasOwnProperty('products') ? [...config.products] : [],
            numProducts: config.hasOwnProperty('numProducts') ? config.numProducts : 0,
            additionalGift: config.hasOwnProperty('additionalGift') && typeof config.additionalGift == "boolean"? config.additionalGift : false,
            additionalGiftMessage: config.hasOwnProperty('additionalGiftMessage') ? config.additionalGiftMessage : "Please consider giving an additional gift to support the ministries of CBN",
            funds: config.hasOwnProperty('funds') ? [...config.funds] : [],
            monthlyAmounts: config.hasOwnProperty('monthlyAmounts') ? [...config.monthlyAmounts] : [7, 15, 30],
            singleAmounts: config.hasOwnProperty('singleAmounts') ? [...config.singleAmounts] : [25, 50, 100, 250, 300]
        }
    }

    componentDidMount() {
        cssVars.forEach(variable=>document.documentElement.style.setProperty(Object.keys(variable)[0], Object.values(variable)[0]))
    }

    render() {
        return (
            <div className='form-wrapper' >
                <Form {...this.state}/>
            </div>
        )
    }
}