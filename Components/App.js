import React, { Component } from 'react';
import axios from 'axios'

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
            international: config.hasOwnProperty('international') && typeof config.international == "boolean" ? config.international : false,
            getPhone: config.hasOwnProperty('getPhone') ? config.getPhone : true,
            products: config.hasOwnProperty('products') ? [...config.products] : [],
            numProducts: config.hasOwnProperty('numProducts') ? config.numProducts : 0,
            additionalGift: config.hasOwnProperty('additionalGift') && typeof config.additionalGift == "boolean" ? config.additionalGift : false,
            additionalGiftMessage: config.hasOwnProperty('additionalGiftMessage') ? config.additionalGiftMessage : "Please consider giving an additional gift to support the ministries of CBN",
            funds: config.hasOwnProperty('funds') ? [...config.funds] : [],
            subscriptions: config.hasOwnProperty('subscriptions') ? [...config.subscriptions] : [],
            monthlyAmounts: config.hasOwnProperty('monthlyAmounts') ? [...config.monthlyAmounts] : [7, 15, 30],
            singleAmounts: config.hasOwnProperty('singleAmounts') ? [...config.singleAmounts] : [25, 50, 100, 250, 300],
            MotivationText: config.hasOwnProperty('MotivationText') ? config.MotivationText : "041181",
            monthlyPledgeData: config.hasOwnProperty('monthlyPledgeData') && config.monthlyPledgeData.hasOwnProperty('DetailCprojCredit') && config.monthlyPledgeData.hasOwnProperty('DetailCprojMail') ? {
                DetailCprojCredit: config.monthlyPledgeData.DetailCprojCredit,
                DetailCprojMail: config.monthlyPledgeData.DetailCprojMail
            } : {
                "DetailCprojCredit": "043250",
                "DetailCprojMail": "043251"
            },
            singlePledgeData: config.hasOwnProperty('singlePledgeData') && config.singlePledgeData.hasOwnProperty('DetailCprojCredit') && config.singlePledgeData.hasOwnProperty('DetailCprojMail') ? {
                DetailCprojCredit: config.singlePledgeData.DetailCprojCredit,
                DetailCprojMail: config.singlePledgeData.DetailCprojMail
            } : {
                "DetailCprojCredit": "043250",
                "DetailCprojMail": "043251"
            },
            submitted: false,
            confirmed: false,
            iframeSrc: null,
            formData: {},
            donorID: null,
        }
        this.submitForm = this.submitForm.bind(this)
        this.updateSrc = this.updateSrc.bind(this)

    }

    componentDidMount() {
        cssVars.forEach(variable => document.documentElement.style.setProperty(Object.keys(variable)[0], Object.values(variable)[0]))
    }

    submitForm({msg, data}) {
        const donorID = msg.split(";")[0].split(" - ")[1]
        const confirmURI = msg.split(" is ")[1]
        // make api call to confirmuri to get iframesrc code
        this.setState({submitted: true, formData: data, donorID, iframeSrc});
    }

    updateSrc(src) {
        this.setState((prevState, props) => { iframeSrc: src });
    }

    render() {
        return ( 
            <div styleName='form.form-wrapper'> 
                { 
                    this.state.submitted ? ( <ConfirmationIframe {...this.state }/> ) : ( <NameAddressForm {...this.state } submitForm={ this.submitForm }/> )
                } 
             </div>
        )
    }
}