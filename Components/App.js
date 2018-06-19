import React, { Component } from 'react';

import NameAddressForm from "./NameAddressForm"
import ConfirmationIframe from "./ConfirmationIframe"

import config from '../config/form-config.json'
import cssVars from '../config/css-config.json'

import './styles/main.css'
import form from './styles/form.css'

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
            singleAmounts: config.hasOwnProperty('singleAmounts') ? [...config.singleAmounts] : [25, 50, 100, 250, 300],
            submitted: false,
            confirmed: false,
            iframeSrc: null,
            formdata: {}
        }
        this.submitForm = this.submitForm.bind(this)
        this.updateSrc = this.updateSrc.bind(this)
        this.renderForm = this.renderForm.bind(this)
    }

    componentDidMount() {
        cssVars.forEach(variable=>document.documentElement.style.setProperty(Object.keys(variable)[0], Object.values(variable)[0]))
    }

    submitForm(formData) {
        this.setState((prevState, props)=> {submitted: !prevState.submitted});
    }

    updateSrc(src) {
        this.setState((prevState, props)=> {iframeSrc: src});
    }

    renderForm(submitted) {
        if (submitted) return <ConfirmationIframe {...this.state}/>
        else return <NameAddressForm {...this.state} submitForm={this.submitForm} updateSrc={this.updateSrc}/>
    }                     

    render() {
        const isSubmitted = this.state.submitted;
        return (
            <div styleName='form.form-wrapper'>
                { this.renderForm(isSubmitted)}             
            </div>
        )
    }
}