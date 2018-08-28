import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import 'whatwg-fetch'
import cssVars from 'css-vars-ponyfill';

import NameAddressForm from "./NameAddressForm"
import ConfirmationPage from "./ConfirmationPage"
import RedirectForm from './RedirectForm';
import Spinner from './Spinner'

import './styles/form.css'
import logError, {checkStatus, parseJSON} from './helpers/xhr-errors';
import {readCookie} from "./helpers/crypt"



class App extends Component {
    constructor(props) {
        super(props)
        let formData = null;
        const store = localStorage.getItem("store")
        const info = localStorage.getItem("info")

        if (store) {
            // console.log({store})
            formData = readCookie(store)
        }
        
        if (formData === null) {
            localStorage.removeItem('store')
            if (info) {
                formData = readCookie(info)
            }
        }

        if (formData === null) {
            localStorage.clear()
        }

        this.state = {
            mode: "development",
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
            finalized: false,
            confirmationData: null,
            finalizedData: null,
            formAction: null,
            formData: formData,
            donorID: null,
            hydratedData: formData,
            configured: false,
            proxy: null,
            cssConfig: [],
            cssLoaded: false,
            configLoaded: false
        }
        this.submitForm = this.submitForm.bind(this)
        this.hydrateForm = this.hydrateForm.bind(this)
        this.renderReceiptPage = this.renderReceiptPage.bind(this)
    }

    componentDidMount() {
        if (!this.state.configured) {
            // in production use relative path here. Resources must be in a config folder within the same directory as the page
            fetch('http://10.100.43.50:8080/config/css-config.json')
            .then(checkStatus)
            .then(parseJSON)
            .then(vars=>{

                const {cssConfig} = this.state;

                // create styleEL for IE
                const styleEl = document.createElement('style');
                styleEl.type = 'text/css';
                let innerStyle = '';

                vars.forEach(variable => {
                    for (let key in variable) {
                        if (key !== "externalFonts") {
                            const pair = key + ': ' + variable[key] + ';';
                            innerStyle += pair;
                            cssConfig.push({[key]: variable[key]})
                        } else {
                            variable[key].forEach(href => {
                                const link = document.createElement('link');
                                link.rel = "stylesheet";
                                link.type = "text/css";
                                link.href = href;
                                document.head.appendChild(link);
                            })
                        }
                    }
                })
                // only append to DOM if innerstyle is not an empty string

                styleEl.innerHTML = ":root{" + innerStyle + "}";
                document.head.appendChild(styleEl)
                let updated = false
                const self = this
                cssVars({
                    updateURLs: false,
                    watch: true,
                    onComplete(cssText, styleNode) {
                        updated = true;
                        self.setState({cssConfig: [...vars], cssLoaded: true, configured: self.state.configLoaded ? true : false})
                    }
                });
                if (!updated) {
                    this.setState({cssConfig: [...vars], cssLoaded: true, configured: this.state.configLoaded ? true : false})
                }
            }).catch(logError)

            // in production use relative path here. Resources must be in a config folder within the same directory as the page
            fetch('http://10.100.43.50:8080/config/form-config.json')
            .then(checkStatus)
            .then(parseJSON)
            .then(initialState=>{

                this.setState(initialState);
                this.setState({configLoaded: true, configured: this.state.cssLoaded ? true : false})

            }).catch(logError);
        }
    }

    submitForm({msg, data}) {
        const str = Object.values(msg).pop()
        const DonorID = str.split(";")[0].split(" - ")[1]
        const formAction = str.split(" is ")[1]
        data.DonorID = DonorID;
        this.setState({submitted: true, formData: data, formAction});
    }

    hydrateForm(data){
        // console.log({data})
        this.setState({submitted: false, hydratedData: data})
    }

    renderReceiptPage(varsArray) {
        this.setState({finalized: true, finalizedData: [...varsArray]})
    }

    render() {
        cssVars();
        return ( 
            <div styleName='form-wrapper'> 
                { 
                    this.state.finalized ? (
                        <RedirectForm thankYouUrl={this.state.thankYouUrl} receiptVars={this.state.finalizedData} />
                    ) : this.state.submitted ? ( 
                        <ConfirmationPage 
                            cssConfig={this.state.cssConfig}
                            formData={this.state.formData} 
                            formAction={this.state.formAction}
                            hydrateForm={this.hydrateForm}
                            renderReceiptPage={this.renderReceiptPage}
                        /> 
                    ) : this.state.configured ? (
                        <NameAddressForm {...this.state } submitForm={ this.submitForm }/> 
                    ) : (
                        <Spinner />        
                    )           
                } 
             </div>
        )
    }
}

export default hot(module)(App)