import React, { Component } from 'react';
import axios from 'axios'

import NameAddressForm from "./NameAddressForm"
import ConfirmationPage from "./ConfirmationPage"

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
            confirmationData: null,
            formAction: null,
            formData: null,
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
        const bodyFormData = new FormData();
        bodyFormData.set('DonorID', donorID);
        bodyFormData.set('ApiKey', data.APIaccessID);
        bodyFormData.set('BackColor', '#ED7014');
        bodyFormData.set('HeaderFile', 'http://pre.vb.cbn.local/giving/api/TestFormHeader.htm');
        bodyFormData.set('FooterFile', 'http://pre.vb.cbn.local/giving/api/TestFormFooter.htm')
        axios({
            method: 'POST',
            url: confirmURI,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data:  bodyFormData
        }).then(response=> {
            const parser = new DOMParser();
            const doc = parser.parseFromString(response.data, "text/html");
            const formAction = doc.querySelector('form').action
            const inputs = doc.querySelectorAll('input[type="hidden"]')
            const confirmationData = []
            inputs.forEach(input=> confirmationData.push({name: input.name, value: input.value}))
            // console.log(confirmationData)
            // console.log({formAction})
            this.setState({submitted: true, formData: data, donorID, confirmationData, formAction});
        }).catch(error=>{
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error(error.response.data);
                console.error(error.response.status);
                console.error(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.error(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error', error.message);
            }
            console.error({error})
            console.error(error.config);

            //parse errors and set errors
            this.setState({submitting: false})
        })

    }

    updateSrc(src) {
        this.setState((prevState, props) => { iframeSrc: src });
    }

    render() {
        return ( 
            <div styleName='form.form-wrapper'> 
                { 
                    this.state.submitted ? ( 
                        <ConfirmationPage 
                            confirmationData={this.state.confirmationData} 
                            formData={this.state.formData} 
                            formAction={this.state.formAction}
                        /> 
                    ) : ( 
                        <NameAddressForm {...this.state } submitForm={ this.submitForm }/> 
                    )
                } 
             </div>
        )
    }
}