import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import axios from 'axios'

import NameAddressForm from "./NameAddressForm"
import ConfirmationPage from "./ConfirmationPage"

import './styles/form.css'
import logError from './helpers/xhr-errors';
import {readCookie} from "./helpers/crypt"


default class App extends Component {
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
            givingFormat: "buttons",
            getMiddleName:  false,
            getSuffix:  false,
            getSpouseInfo:  false,
            monthlyOption: true,
            shipping: false,
            international: false,
            getPhone: true,
            products:  [],
            numProducts: 0,
            additionalGift: false,
            additionalGiftMessage:  "Please consider giving an additional gift to support the ministries of CBN",
            numFunds:  0,
            funds: [],
            subscriptions: [],
            monthlyAmounts:  [7, 15, 30],
            singleAmounts: [25, 50, 100, 250, 300],
            showGivingArray: true,
            MotivationText: "041181",
            monthlyPledgeData:  {
                "DetailCprojCredit": "043250",
                "DetailCprojMail": "043251"
            },
            singlePledgeData:  {
                "DetailCprojCredit": "043250",
                "DetailCprojMail": "043251"
            },
            AddContactYN:  "Y",
            Contact_Source: "700Club Donor",
            ActivityName: "700Club_Donation_Activity", 
            SectionName: "700Club",
            submitted: false,
            confirmed: false,
            confirmationData: null,
            formAction: null,
            formData: formData,
            donorID: null,
            hydratedData: formData,
            configured: false
        }
        this.submitForm = this.submitForm.bind(this)
        this.hydrateForm = this.hydrateForm.bind(this)
    }

    componentDidMount() {
        if (!this.state.configured) {
            axios.get('http://localhost:8080/config/css-config.json').then(response=>{
                // console.log({cssconfig: response.data})
                const cssVars = response.data;
                cssVars.forEach(variable => document.documentElement.style.setProperty(Object.keys(variable)[0], Object.values(variable)[0]))
            }).catch(logError)

            axios.get('http://localhost:8080/config/form-config.json').then(response=>{
                
                const config = response.data
                const { givingFormat, getMiddleName, getSuffix, 
                    getSpouseInfo, monthlyOption, shipping,
                    international, getPhone, products,
                    numProducts, additionalGift, additionalGiftMessage,
                    funds, numFunds, subscriptions, monthlyAmounts,
                    singleAmounts, MotivationText, monthlyPledgeData, singlePledgeData, showGivingArray, AddContactYN, PageName, Contact_Source, ActivityName, SectionName } = config;

                this.setState({givingFormat, getMiddleName, getSuffix, 
                    getSpouseInfo, monthlyOption, shipping,
                    international, getPhone, products: [...products],
                    numProducts, additionalGift, additionalGiftMessage,
                    funds: [...funds], numFunds, subscriptions: [...subscriptions], monthlyAmounts:[...monthlyAmounts],
                    singleAmounts: [...singleAmounts], MotivationText, monthlyPledgeData, singlePledgeData, showGivingArray, AddContactYN, Contact_Source: Contact_Source ? Contact_Source : PageName + " Donor", ActivityName: ActivityName ? ActivityName : PageName + "_Donation_Activity", SectionName: SectionName, configured: true})

            }).catch(logError);
        }
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
                    ) : this.state.configured ? <NameAddressForm {...this.state } submitForm={ this.submitForm }/> : null                     
                } 
             </div>
        )
    }
}

export default hot(module)(App)