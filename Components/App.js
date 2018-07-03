import React, { Component } from 'react'
import axios from 'axios'

import NameAddressForm from "./NameAddressForm"
import ConfirmationPage from "./ConfirmationPage"

import config from '../config/form-config.json'
import cssVars from '../config/css-config.json'

import './styles/form.css'

const { givingFormat, getMiddleName, getSuffix, 
    getSpouseInfo, monthlyOption, shipping,
    international, getPhone, products,
    numProducts, additionalGift, additionalGiftMessage,
    funds, numFunds, subscriptions, monthlyAmounts,
    singleAmounts, MotivationText, monthlyPledgeData, singlePledgeData, AddContactYN, PageName, SectionName } = config;

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            givingFormat: givingFormat || "buttons",
            getMiddleName: getMiddleName || false,
            getSuffix: getSuffix || false,
            getSpouseInfo: getSpouseInfo || false,
            monthlyOption: monthlyOption || true,
            shipping: shipping || false,
            international: international || false,
            getPhone: getPhone || true,
            products: products ? [...products] : [],
            numProducts: numProducts || 0,
            additionalGift: additionalGift || false,
            additionalGiftMessage: additionalGiftMessage || "Please consider giving an additional gift to support the ministries of CBN",
            numFunds: numFunds || 0,
            funds: funds ? [...funds] : [],
            subscriptions: subscriptions ? [...subscriptions] : [],
            monthlyAmounts: monthlyAmounts ? [...monthlyAmounts] : [7, 15, 30],
            singleAmounts: singleAmounts ? [...singleAmounts] : [25, 50, 100, 250, 300],
            MotivationText: MotivationText || "041181",
            monthlyPledgeData: monthlyPledgeData.hasOwnProperty('DetailCprojCredit') && monthlyPledgeData.hasOwnProperty('DetailCprojMail') ? {
                DetailCprojCredit: monthlyPledgeData.DetailCprojCredit,
                DetailCprojMail: monthlyPledgeData.DetailCprojMail
            } : {
                "DetailCprojCredit": "043250",
                "DetailCprojMail": "043251"
            },
            singlePledgeData: singlePledgeData.hasOwnProperty('DetailCprojCredit') && singlePledgeData.hasOwnProperty('DetailCprojMail') ? {
                DetailCprojCredit: singlePledgeData.DetailCprojCredit,
                DetailCprojMail: singlePledgeData.DetailCprojMail
            } : {
                "DetailCprojCredit": "043250",
                "DetailCprojMail": "043251"
            },
            AddContactYN: AddContactYN || "Y",
            Contact_Source: PageName + " Donor",
            ActivityName: PageName + "_Donation_Activity", 
            SectionName: SectionName || "700Club",
            submitted: false,
            confirmed: false,
            confirmationData: null,
            formAction: null,
            formData: null,
            donorID: null,
            hydratedData: null
        }
        this.submitForm = this.submitForm.bind(this)
        this.hydrateForm = this.hydrateForm.bind(this)
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

    hydrateForm(data){
        // console.log({data})
        this.setState({submitted: false, hydratedData: data})
    }

    render() {
        return ( 
            <div styleName='form-wrapper'> 
                { 
                    this.state.submitted ? ( 
                        <ConfirmationPage 
                            confirmationData={this.state.confirmationData} 
                            formData={this.state.formData} 
                            formAction={this.state.formAction}
                            hydrateForm={this.hydrateForm}
                        /> 
                    ) : ( 
                        <NameAddressForm {...this.state } submitForm={ this.submitForm }/> 
                    )
                } 
             </div>
        )
    }
}