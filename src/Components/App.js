import React, { Component } from 'react'
import axios from 'axios'

import NameAddressForm from "./NameAddressForm"
import ConfirmationPage from "./ConfirmationPage"

import config from '../config/form-config.json'
import cssVars from '../config/css-config.json'

import './styles/form.css'
import logError from './helpers/xhr-errors';
import {readCookie} from "./helpers/crypt"


const { givingFormat, getMiddleName, getSuffix, 
    getSpouseInfo, monthlyOption, shipping,
    international, getPhone, products,
    numProducts, additionalGift, additionalGiftMessage,
    funds, numFunds, subscriptions, monthlyAmounts,
    singleAmounts, MotivationText, monthlyPledgeData, singlePledgeData, showGivingArray, AddContactYN, PageName, SectionName } = config;

export default class App extends Component {
    constructor(props) {
        super(props)
        let formData = null;
        const cookie = localStorage.getItem("cookie")
        const info = localStorage.getItem("info")

        if (cookie) {
            formData = readCookie(cookie)
        }
        
        if (formData === null) {
            localStorage.removeItem('cookie')
            if (info) {
                formData = readCookie(info)
            }
        }

        if (formData === null) {
            localStorage.clear()
        }

        this.state = {
            givingFormat: givingFormat || "buttons",
            getMiddleName: getMiddleName || false,
            getSuffix: getSuffix || false,
            getSpouseInfo: getSpouseInfo || false,
            monthlyOption: monthlyOption,
            shipping: shipping || false,
            international: international || false,
            getPhone: getPhone,
            products: products ? [...products] : [],
            numProducts: numProducts || 0,
            additionalGift: additionalGift || false,
            additionalGiftMessage: additionalGiftMessage || "Please consider giving an additional gift to support the ministries of CBN",
            numFunds: numFunds || 0,
            funds: funds ? [...funds] : [],
            subscriptions: subscriptions ? [...subscriptions] : [],
            monthlyAmounts: monthlyAmounts ? [...monthlyAmounts] : [7, 15, 30],
            singleAmounts: singleAmounts ? [...singleAmounts] : [25, 50, 100, 250, 300],
            showGivingArray: showGivingArray,
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
            formData: formData,
            donorID: null,
            hydratedData: formData
        }
        this.submitForm = this.submitForm.bind(this)
        this.hydrateForm = this.hydrateForm.bind(this)
    }

    componentDidMount() {
        cssVars.forEach(variable => document.documentElement.style.setProperty(Object.keys(variable)[0], Object.values(variable)[0]))
    }

    submitForm({msg, data}) {
        const DonorID = msg.split(";")[0].split(" - ")[1]
        const formAction = msg.split(" is ")[1]
        data.DonorID = DonorID;
        this.setState({submitted: true, formData: data, formAction});
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