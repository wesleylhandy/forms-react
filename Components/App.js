import React, { Component } from 'react';

import Form from "./Form"

import config from '../config/form-config.json'
import cssVars from '../config/css-config.json'



export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            givingFormat: config.givingFormat,
            monthlyOption: config.monthlyOption,
            shipping: config.shipping,
            international: config.international,
            products: [...config.products],
            numProducts: config.numProducts,
            monthlyAmounts: [...config.monthlyAmounts],
            singleAmounts: [...config.singleAmounts]
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