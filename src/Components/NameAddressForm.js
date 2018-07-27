import React, {Component} from 'react'
import 'whatwg-fetch'

import main from './styles/main.css'
import flex from './styles/flex.css'
import form from './styles/form.css'

import GivingArray from './GivingArray'
import ProductDisplay from './ProductDisplay'
import FundDisplay from './FundDisplay'

import { canadianProvinces, countries, other, usMilitary, usStates, usTerritories } from '../config/dropdowns.json';
import logError, {checkStatus, parseJSON} from './helpers/xhr-errors';
import {cryptCookie} from './helpers/crypt';

const email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, 
phone_regex = /1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})/,
zip_regex = /^\d{5}$/,
firstname_regex= /^([a-zA-Z0-9\-\.' ]+)$/i,
lastname_regex=/^([a-zA-Z0-9\-\.' ]+)(?:(,|\s|,\s)(jr|sr|ii|iii|iv|esq)\.*)?$/i;

export default class NameAddressForm extends Component {
    constructor(props){
        super(props)
        let date = new Date().getDate();
        if (date < 2 || date > 28) {
            date = 2;
        }
        // console.log({hydratedData: props.hydratedData})
        this.state = {
            APIAccessID: "", //obtain this from server somehow
            ClientBrowser: "", //obtain this from server somehow
            ClientIP: "", //obtain this from server somehow
            MotivationText: props.MotivationText,
            showGivingArray: props.showGivingArray,
            arrayOptions: {
                givingFormat: props.givingFormat,
                monthlyOption: props.monthlyOption,
                monthlyAmounts: [...props.monthlyAmounts],
                singleAmounts: [...props.singleAmounts],
                funds: [...props.funds],
                monthlyPledgeData: props.monthlyPledgeData,
                singlePledgeData: props.singlePledgeData
            },
            productOptions: {
                products: [...props.products],
                numProducts: props.numProducts,
                additionalGift: props.additionalGift,
                additionalGiftMessage: props.additionalGiftMessage,
                singlePledgeData: props.singlePledgeData
            },
            fundOptions: {
                funds: [...props.funds],
                numFunds: props.numFunds
            },
            monthlyOption: props.monthlyOption,
            shipping: props.shipping,
            international: props.international,
            getPhone: props.getPhone,
            monthlyChecked: props.hydratedData && props.hydratedData.TransactionType == "Monthly" ? true : props.monthlyOption,
            getSuffix: props.getSuffix,
            getMiddleName: props.getMiddleName,
            getSpouseInfo: props.getSpouseInfo,
            totalGift: 0,
            Clublevel: props.hydratedData ? props.hydratedData.Clublevel : '',
            submitted: false,
            submitting: false,
            subscriptions: [...props.subscriptions],
            AddContactYN: props.AddContactYN,
            Contact_Source: props.Contact_Source,
            ActivityName: props.ActivityName,
            SectionName: props.SectionName,
            fundSelected: false,
            fundInfo: {},
            productsOrdered: false,
            productInfo: [],
            cart: {
                items: []
            },
            fields: {
                Monthlypledgeday: props.hydratedData && props.hydratedData.Monthlypledgeday ? props.hydratedData.Monthlypledgeday : date,
                Title: props.hydratedData ? props.hydratedData.Title : "",
                Firstname: props.hydratedData ? props.hydratedData.Firstname : "",
                Middlename: props.hydratedData ? props.hydratedData.Middlename : "",
                Lastname: props.hydratedData ? props.hydratedData.Lastname : "",
                Suffix: props.hydratedData ? props.hydratedData.Suffix : "",
                Spousename: props.hydratedData ? props.hydratedData.Spousename : "",
                Address1: props.hydratedData ? props.hydratedData.Address1 : "",
                Address2: props.hydratedData ? props.hydratedData.Address2 : "",
                City: props.hydratedData ? props.hydratedData.City  : "",
                State: props.hydratedData ? props.hydratedData.State : "",
                Zip: props.hydratedData ? props.hydratedData.Zip : "",
                Country: props.hydratedData ? props.hydratedData.Country : props.international ? "" : "United States",
                Emailaddress: props.hydratedData ? props.hydratedData.Emailaddress : "",
                phone: props.hydratedData ? props.hydratedData.Phoneareacode + props.hydratedData.Phoneexchange + props.hydratedData.Phonenumber : "",
                savePersonalInfo: true,
                ShipToYes: props.hydratedData && props.hydratedData.ShipTo === "Yes" ? true : false,
                ShipToName: props.hydratedData ? props.hydratedData.ShipToName : "",
                ShipToAddress1: props.hydratedData ? props.hydratedData.ShipToAddress1 : "",
                ShipToAddress2: props.hydratedData ? props.hydratedData.ShipToAddress2 : "",
                ShipToCity: props.hydratedData ? props.hydratedData.ShipToCity : "",
                ShipToZip: props.hydratedData ? props.hydratedData.ShipToZip : "",
                ShipToState: props.hydratedData ? props.hydratedData.ShipToState : ""
            },
            errors: {
                Title: "",
                Firstname: "",
                Middlename: "",
                Lastname: "",
                Suffix: "",
                Spousename: "",
                Address1: "",
                Address2: "",
                City: "",
                State: "",
                Zip: "",
                Country: "",
                Emailaddress: "",
                phone: "",
                ShipToName: "",
                ShipToAddress1: "",
                ShipToCity: "",
                ShipToZip: "",
                ShipToState: "",
                amount: ""
            },
            hydratedAmount: 0,
            hydratedMonthly: false,
            hydratedProducts: false,
            initialUpdate: false,
            proxy: props.proxy
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.validateInput = this.validateInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRadioClick = this.handleRadioClick.bind(this)
        this.renderMonthlyRadio = this.renderMonthlyRadio.bind(this)
        this.renderShippingAddress = this.renderShippingAddress.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.updateDonation = this.updateDonation.bind(this)
        this.updateProducts = this.updateProducts.bind(this)
    }

    componentDidMount(){
        this.setState({ClientBrowser: window.navigator.userAgent, UrlReferer: window.location.href})

        if (this.props.hydratedData && this.props.hydratedData.MultipleDonations) {
            let amount = 0, isMonthly = false;
            
            const { items } = this.state.cart;
            const { products } = this.state.productOptions
            let { productInfo, productsOrdered } = this.state
            const { MultipleDonations } = this.props.hydratedData;

            for (let i = 0; i < MultipleDonations.length; i++) {
                const { DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail, PledgeAmount} = MultipleDonations[i];
                const type = DetailName === "MP" || DetailName === "SPGF" ? "donation" : "product";
                if (type == "donation") {
                    amount = PledgeAmount
                    isMonthly = DetailName === "MP" ? true : false;
                                    }
                if (type == "product") {
                    const idx = products.findIndex(el=> el.DetailDescription === DetailDescription)
                    const quantity = parseInt(DetailName.split('|')[1])
                    productInfo.push({idx, quantity})
                    productsOrdered = true;
                }
                items.push({
                    type,
                    PledgeAmount,
                    DetailCprojMail,
                    DetailCprojCredit,
                    DetailDescription,
                    DetailName,
                    monthly: isMonthly
                })
            }
            this.setState({cart: {items}, hydratedAmount: amount, hydratedMonthly: isMonthly, productInfo, productsOrdered, hydratedProducts: true})
            
        }
    }

    componentWillUnmount() {
        const {savePersonalInfo} = this.state.fields
        if (savePersonalInfo) {
            const {Address1, Address2, City, Country, Emailaddress, Firstname, Middlename, Lastname, Spousename, Suffix, State, Title, Zip, phone} = this.state.fields
            const Phoneareacode = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[1] : "",
            Phoneexchange = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[2] : "",
            Phonenumber =  phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[3] : "";

            const formData = {Address1, Address2, City, Country, Emailaddress, Firstname, Middlename, Lastname, Phoneareacode, Phoneexchange, Phonenumber, Spousename, Suffix, State, Title, Zip}
            const lifetime = 30 * 24 * 60 * 60 * 1000 // n days = 60 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
            const cookie = cryptCookie({formData, lifetime});
            localStorage.setItem("info", cookie);
        } else {
            localStorage.removeItem("info");
        }

    }

    /**
     * Updates cart to remove any selected donations and toggles between monthly and single giving
     * @param {Event} e 
     */
    handleRadioClick(e) {
        const items = this.state.cart.items;
        const found = items.findIndex(el=>el && el.type == "donation")
        const id = e.target.id;
        if (found > -1) {
            items[found] = {
                    type: 'donation',
                    PledgeAmount: 0,
                    DetailCprojMail: id == "singlegift"  ? this.props.singlePledgeData.DetailCprojMail : this.props.monthlyPledgeData.DetailCprojMail,
                    DetailCprojCredit: id == "singlegift"  ? this.props.singlePledgeData.DetailCprojCredit : this.props.monthlyPledgeData.DetailCprojCredit,
                    DetailDescription: id == "singlegift" ? "Single Pledge" : "Monthly Pledge",
                    DetailName: id == "singlegift" ? "SPGF" : "MP",
                    monthly: id == "singlegift" ? false : true
                }
        }
        // console.log({items})
        if(id == "singlegift") {
             this.setState({monthlyChecked: false, cart: {items}})
        } else {
            this.setState({monthlyChecked: true, cart: {items}})
        }
    }

    handleInputChange(e) {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const {fields, errors } = this.state;
        const error = this.validateInput(false, name, value);
        errors[name] = error;     
        fields[name] = value;

        this.setState({ fields, errors });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.submitting) return // ie. disallow multiple submissions

        this.setState({submitting: true})
              
        //THINK THROUGH THIS LOGIC A LITTLE MORE
        const {items} = this.state.cart;
        const found = items.findIndex(el=>el && el.type == "donation")
        if (items.length == 0 || (items.length == 1 && found > -1 && items[found].PledgeAmount == 0)) {
            const errors = this.state.errors
            errors.amount = "Please make a valid donation"
            return this.setState({submitting: false, errors})
        }

        const {fields, errors} = this.state;
        let isValidForm = true;
        const fieldNames = Object.keys(fields);
        // console.log({fieldNames})

        let self = this;
        fieldNames.forEach(name=>{
            let error = self.validateInput(true, name, fields[name])
            // console.log({error, name, value: fields[name]})
            if (error) {
                isValidForm = false;
                errors[name] = error;
            }
        });

        if (!isValidForm) {
            return this.setState({submitting: false, errors})
        }
        //deconstruct necessary fields from state
        const {Address1, Address2, City, Country, Emailaddress, Firstname, Middlename, Lastname, Spousename, Suffix, State, Title, Zip, ShipToYes, ShipToAddress1, ShipToAddress2, ShipToCity, ShipToState, ShipToZip, ShipToCountry, ShipToName, phone} = fields
        const {APIAccessID, Clublevel, MotivationText, ClientBrowser, ClientIP, UrlReferer, subscriptions, AddContactYN, ActivityName, Contact_Source, SectionName, proxy} = this.state
        
        //construct phone fields from regex
        const Phoneareacode = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[1] : "",
        Phoneexchange = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[2] : "",
        Phonenumber =  phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[3] : "";
        
        //process cart
        let TransactionType = "Product"
        const isMonthly = found > -1 ? items[found].monthly : false
        const DonationType =  isMonthly ? "CR" : "CC";
        const IsRecurringCreditCardDonation = isMonthly
        const Monthlypledgeday = isMonthly ? this.state.fields.Monthlypledgeday : null
        const Monthlypledgeamount = isMonthly && found > -1 ? items[found].PledgeAmount : 0
        const Singledonationamount = !isMonthly && found > -1 ? items[found].PledgeAmount : 0
        if (Monthlypledgeamount > 0) {
            TransactionType = "Monthly"
        }
        if (Singledonationamount > 0) {
            TransactionType = "Single"
        }
        const ShipTo = ShipToYes === true ? "Yes" : "No"
        const multipleDonations = () => items.map(({DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail, PledgeAmount}, index)=> {
            if (index === found && this.state.fundSelected) {
                DetailName = this.state.fundInfo.DetailName
                DetailDescription = this.state.fundInfo.DetailDescription
                DetailCprojCredit = this.state.fundInfo.DetailCprojCredit
                DetailCprojMail = this.state.fundInfo.DetailCprojMail
            }
            return {DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail, PledgeAmount}
        })
        const MultipleDonations = multipleDonations();

        let data = {
                ActivityName,
                AddContactYN,
                Address1,
                Address2,
                APIAccessID,
                City,
                Clublevel,
                Contact_Source,
                Country,
                DonationType,
                Emailaddress,
                Firstname,
                IsRecurringCreditCardDonation,
                Lastname,
                Middlename,
                Monthlypledgeamount,
                Monthlypledgeday,
                MotivationText,
                MultipleDonations,
                Phoneareacode,
                Phoneexchange,
                Phonenumber,
                SectionName,
                ShipTo,
                Singledonationamount,
                Spousename,
                State,
                Suffix,
                Title,
                TransactionType,
                UrlReferer,
                Zip,
                ClientBrowser,
                ClientIP,
                ShipToAddress1,
                ShipToAddress2,
                ShipToCity,
                ShipToState,
                ShipToZip,
                ShipToCountry,
                ShipToName
            }
        //flatten subscription information
        subscriptions.forEach(sub=> data[sub.key]=sub.value);
        // console.log({data})
        fetch(proxy, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({data})
        })
        .then(checkStatus)
        .then(parseJSON)
        .then(json=>{
            const msg = json;
            self.props.submitForm({msg, data})
        }).catch(error=>{
            logError({error});
            this.setState({submitting: false})
        });
    }
    /**
     * Sets the state with new product order information from the product display
     * @param {Object} productInfo - Selected Fund 
     * @param {Number} productInfo.index - index of product being added or removed from cart
     * @param {Number} productInfo.quantity - number of total items
     */
    updateProducts({idx, quantity}) {
        // productInfo and productsOrdered to be used by Product Display to calculate a total donation
        let { productInfo, productsOrdered } = this.state;
        const found = productInfo.findIndex(prod=> prod.idx === idx)
        if (found > -1) {
            productInfo[found].quantity = quantity
        } else {
            productInfo.push({idx, quantity})
        }
        const totalProducts = productInfo.reduce((a, b)=> a + b.quantity, 0)
        productsOrdered = totalProducts ? true : false

        //update cart by removing all instances of this particular product and adding back new quantity if any
        const { items } = this.state.cart
        const { products } = this.state.productOptions
        const { DetailName, DetailCprojCredit, DetailCprojMail, DetailDescription, PledgeAmount} = products[idx];
        const newItems = items.filter(el=> el.DetailDescription !== DetailDescription)
        if (quantity) {

            newItems.push({
                    type: 'product',
                    PledgeAmount: +PledgeAmount * quantity,
                    DetailCprojMail: DetailCprojMail,
                    DetailCprojCredit: DetailCprojCredit,
                    DetailDescription: DetailDescription,
                    DetailName: DetailName + "|" + quantity
            })

        }
        // console.log({productInfo, productsOrdered, totalProducts, newItems})
        this.setState({productInfo, productsOrdered, cart: {items: newItems}})
    }

    addToCart(item) {
        const {items} = this.state.cart;
        const found = items.findIndex(el=>el && el.type == "donation")
        if(found > -1) {
            items[found] = item
            const errors = this.state.errors
            errors.amount = ""
            this.setState({errors})
        } else {
            items.push(item)
        }
        // console.log({items})
        this.setState({cart: {items}})
    }


    /**
     * Sets the state with new fund information from the fund select dropdown
     * @param {Object} fundInfo - Selected Fund 
     * @param {String} fundInfo.DetailName
     * @param {String} fundInfo.DetailDescription
     * @param {String} fundInfo.DetailCprojCredit
     * @param {String} fundInfo.DetailCprojMail
     */
    updateDonation(fundInfo){
        this.setState({fundSelected: true, fundInfo})
    }

    /**
     * Function to validate the input fields of the form
     * @param {Boolean} submitting - current state of the form, true if being submitted
     * @param {String} name - name of the input being validated
     * @param {*} value - String, Number or Boolean of value from the input
     * @returns {String} - an empty String if no errors, else a string with a single error message
     */
    validateInput(submitting, name, value) {
        let error = '';
        const { international } = this.state;
        const {ShipToYes} = this.state.fields;
        switch(name) {
            case "Title":
            case "State":
            case "Address1":
            case "City":
                if (!value && submitting) {
                    error = "Required"
                }
                break;
            case "ShipToState":
            case "ShipToAddress1":
            case "ShipToCity":
                if(!value && submitting && ShipToYes) {
                    error = "Required"
                }
                break;
            case "Firstname":
                if(value && !firstname_regex.test(value)) {
                    error = "No special characters allowed. Please call if you need assistance."
                }
                if (!value && submitting) {
                    error = "Required"
                }
                break;
            case "Middlename":
                if(value && !firstname_regex.test(value)) {
                    error = "No special characters allowed. Please call if you need assistance."
                }
                break;
            case "Lastname":
                if(value && !lastname_regex.test(value)) {
                    error = "No special characters allowed. Please call if you need assistance."
                }
                if (!value && submitting) {
                    error = "Required"
                }
                break;
            case "ShipToName":
                if(value && !lastname_regex.test(value)) {
                    error = "No special characters allowed. Please call if you need assistance."
                }
                if (!value && ShipToYes && submitting) {
                    error = "Required"
                }
                break;
            case "Spousename" :
                if(value && !lastname_regex.test(value)) {
                    error = "No special characters allowed. Please call if you need assistance."
                }
                break;
            case "Country":
                if (!value && submitting && international) {
                    error = "Required"
                }
                break;
            case "Emailaddress":
                if (value && !(email_regex.test(value))){
                    error = "Please enter a valid email: ie. you@example.com"
                }
                if (!value && submitting){
                    error = "Required"
                }
                break;
            case "phone":
                if (value && !(phone_regex.test(value))){
                    error = "Please enter a valid phone number, numbers only: ie. 7575551212"
                }
                break;
            case "Zip":
            case "ShipToZip":
                const country = name == "ShipToZip" ? "ShipToCountry" : "Country";
                if (value && this.state.fields[country] == "US" && !(zip_regex.test(value))) {
                    error = "Please enter a valid US Zip Code"
                } else if (value && zip_regex.test(value) && !submitting) {
                    const url = `http://Services.cbn.local/AddressValidation/CityStatebyZip.aspx?PostalCode=${value}`
                    fetch(url)
                    .then(checkStatus)
                    .then(parseJSON)
                    .then(json=>{
                        // console.log({json})
                        const {returnCode, returnMessage, city, state, zip} = json;
                        if (returnCode == 1) {
                            const {fields} = this.state;
                            const newCity = city.split(";")[0]
                            fields[name == "ShipToZip" ? "ShipToCity" : "City"] = newCity;
                            fields[name == "ShipToZip" ? "ShipToState" : "State"] = state;
                            fields[name == "ShipToZip" ? "ShipToZip" : "Zip"] = zip;
                            if (name == "Zip") fields["Country"] = "United States";
                            this.setState({fields})
                        } else {
                            error = returnMessage
                        }
                    })
                    .catch(error=>{
                        logError(error);
                    });
                } else if (!value && submitting && ShipToYes && name == "ShipToZip") {
                    error = "Required"
                } else if (!value && submitting && name == "Zip") {
                    error = "Required"
                }
                break;
        }
        return error
    }


    renderMonthlyRadio(monthlyChecked, Monthlypledgeday) {

        let monthly = monthlyChecked;
        let single = !monthlyChecked;
        let self = this;

        function renderCCInfo() {
            const options = []
            for(let i = 2; i <= 28; i++){
                options.push(<option key={"date-option-" + i} value={i}>{i}</option>)
            }
            return (
                <div styleName="form.monthlyGivingDay">
                    <h5 styleName="form.ccDayOfMonth">Charge automatically on day&nbsp;
                        <select styleName="form.ccdate" name="Monthlypledgeday" onChange={self.handleInputChange} value={Monthlypledgeday}>
                            {options}
                        </select>
                    &nbsp;each month.</h5>
                </div>   
            )
        }
        return (
            <div id="MonthlyGivingInfo">
                <h3 styleName="main.caps form.form-header">How Often Do You Want to Give This Amount?</h3>
                    <div styleName="flex.flex flex.flex-row flex.flex-between form.monthlyRadio">
                        <div id="monthly-group" styleName="flex.flex flex.flex-row flex.flex-axes-center form.radioGroup">
                            <input styleName="form.radioInput" name="monthly" id="monthlygift" type="radio" checked={monthly} onChange={this.handleRadioClick}/>
                            <label htmlFor="monthlygift">Monthly Gift</label>
                        </div>
                        <div id="single-group"styleName="flex.flex flex.flex-row flex.flex-axes-center form.radioGroup">
                            <input styleName="form.radioInput" name="monthly" id="singlegift" type="radio" onChange={this.handleRadioClick} checked={single}/>
                            <label htmlFor="singlegift">Single Gift</label>
                        </div>
                    </div>
                    {monthlyChecked ? renderCCInfo() : null}
            </div>
        )
    }

    renderShippingAddress(showShipping) {
        return (
            <fieldset styleName="form.fieldset">
                <div styleName="form.shipping-address__container">
                    <div styleName="form.formRow flex.flex flex.flex-row flex.flex-axes-center">
                        
                        <input type='checkbox' styleName="form.checkboxInput"
                            id="ShipToYes" 
                            name="ShipToYes" 
                            checked={this.state.fields.ShipToYes} 
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="ShipToYes">&nbsp;My shipping address is different than my billing address.</label>     

                    </div>
                    {
                        !showShipping ? null : (
                            <div id="ShippingAddressInfo" styleName='form.shipping-address__info'>
                                <div styleName="form.formRow">  
                                    <div styleName='flex.flex flex.flex-row flex.flex-center'>
                                        <hr styleName='form.line'/><div styleName='form.divider-title main.caps'>Shipping Address</div><hr styleName='form.line'/>
                                    </div>
                                </div>
                                <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                    <div id="form-field-ShipToName" styleName="form.formGroup flex.flex-grow">
                                        <label htmlFor="ShipToName">Name<span>*</span></label>
                                        <input styleName="form.formControl" 
                                            type='text' 
                                            id="ShipToName" 
                                            maxLength='100' 
                                            name="ShipToName" 
                                            placeholder="First and Last Name" 
                                            required={this.state.fields.ShipToYes}
                                            value={this.state.fields.ShipToName}
                                            onChange={this.handleInputChange}
                                            aria-invalid={this.state.errors.ShipToName ? true : false} 
                                        />
                                        <div styleName="form.error">{this.state.errors.ShipToName}</div>
                                    </div>
                                </div>
                                <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                    <div id="form-field-ShipToAddress1" styleName="form.formGroup flex.flex-grow">
                                        <label htmlFor="ShipToAddress1">Address<span>*</span></label>
                                        <input styleName="form.formControl" 
                                            id="ShipToAddress1" 
                                            type='text' 
                                            maxLength='64' 
                                            name="ShipToAddress1" 
                                            placeholder="Shipping Address*" 
                                            required={this.state.fields.ShipToYes}
                                            value={this.state.fields.ShipToAddress1}
                                            onChange={this.handleInputChange}
                                            aria-invalid={this.state.errors.ShipToAddress1 ? true : false} 
                                        />
                                        <div styleName="form.error">{this.state.errors.ShipToAddress1}</div>
                                    </div>
                                </div>
                                <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                    <div id="form-field-ShipToAddress2" styleName="form.formGroup flex.flex-grow">
                                        <label htmlFor="ShipToAddress2">Address2</label>
                                        <input styleName="form.formControl" 
                                            id="ShipToAddress2" 
                                            type='text' 
                                            maxLength='64' 
                                            name="ShipToAddress2" 
                                            placeholder="Shipping Address Line 2" 
                                            required={false}
                                            value={this.state.fields.ShipToAddress2}
                                            onChange={this.handleInputChange}
                                            aria-invalid={this.state.errors.ShipToAddress2 ? true : false} 
                                        />
                                        <div styleName="form.error">{this.state.errors.ShipToAddress2}</div>
                                    </div>
                                </div>
                                <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                    <div id="form-field-ShipToCity" styleName="form.formGroup flex.flex-grow">
                                        <label htmlFor="ShipToCity">City<span>*</span></label>
                                        <input styleName="form.formControl"
                                            id="ShipToCity" 
                                            type='text' 
                                            maxLength='64' 
                                            name="ShipToCity" 
                                            placeholder="City*" 
                                            required={this.state.fields.ShipToYes}
                                            value={this.state.fields.ShipToCity}
                                            onChange={this.handleInputChange}
                                            aria-invalid={this.state.errors.ShipToCity ? true : false} 
                                        />
                                        <div styleName="form.error">{this.state.errors.ShipToCity}</div>
                                    </div>
                                    <div id="form-field-ShipToState" styleName="form.formGroup flex.flex-grow">
                                        <label htmlFor="ShipToState">State<span>*</span></label>
                                        <select styleName="form.formControl" 
                                            id="ShipToState" 
                                            name="ShipToState" 
                                            required={this.state.fields.ShipToYes} 
                                            value={this.state.fields.ShipToState} 
                                            onChange={this.handleInputChange}
                                            aria-invalid={this.state.errors.ShipToState ? true : false}
                                        >
                                            <option value="">State* &#9663;</option>
                                            {this.renderStateOptions(this.state.international)}
                                        </select>
                                        <div styleName="form.error">{this.state.errors.ShipToState}</div>
                                    </div>
                                </div>
                                <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                    <div id="form-field-ShipToZip" styleName="form.formGroup flex.flex-grow">
                                        <label htmlFor="ShipToZip">Zip<span>*</span>{ this.state.international ? <small style={{fontSize: "10px"}}>(Outside U.S. use &ldquo;NA&rdquo;}</small> : null }</label>
                                        <input styleName="form.formControl" 
                                            id="ShipToZip" 
                                            type='text' 
                                            maxLength="5"
                                            name="ShipToZip" 
                                            placeholder="Zip*" 
                                            required={this.state.fields.ShipToYes}
                                            value={this.state.fields.ShipToZip}
                                            onChange={this.handleInputChange}
                                            aria-invalid={this.state.errors.ShipToZip ? true : false}
                                        />
                                        <div styleName="form.error">{this.state.errors.ShipToZip}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </fieldset>
        )
    }

    renderStateOptions(international) {
        function renderOptGroup(type, options) {
            return <optgroup key={type.replace(" ","")} label={type}>{options.map((opt, i)=><option key={`${type.replace(' ', '')}State-${i}`} value={opt[1]}>{opt[0]}</option>)}</optgroup>
        }
        let optGroups = []
        const states = renderOptGroup("U.S. States", usStates)
        const military = renderOptGroup("U.S. Military", usMilitary)
        const territories = renderOptGroup("U.S. Territories", usTerritories)
        const otherOpt = renderOptGroup("Other", other)
        let provinces = null;
        if (international) {
            provinces = renderOptGroup("Canadian Provinces", canadianProvinces)
        }
        optGroups.push(states, military, provinces, territories, otherOpt)
        return optGroups
    }

    /**
     * Alternately renders just Title, First and Last name or some combination including Middlename and Suffix
     * @param {Boolean} getMiddleName - from this.state.getMiddlename, set to true/false in configuration
     * @param {Boolean} getSuffix - from this.state.getSuffix, set to true/false in configuration
     * @returns {jsx} - JSX to be inserted in Name Address Block
     */
    renderNameAddressBlock(getMiddleName, getSuffix) {
        if (!getMiddleName && !getSuffix) {
            return (
                <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                    <div id="form-field-title" styleName="form.formGroup flex.flex-grow">
                        <label htmlFor="Title">Title<span>*</span></label>
                        <select styleName="form.formControl" 
                            id="Title" 
                            name='Title' 
                            required={true} 
                            placeholder="Title*"
                            value={this.state.fields.Title}
                            onChange={this.handleInputChange}
                            aria-invalid={this.state.errors.Title ? true : false} 
                        >
                            <option value="">Title* &#9663;</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                        </select>
                        <div styleName="form.error">{this.state.errors.Title}</div>
                    </div>
                    <div id="form-field-Firstname" styleName="form.formGroup flex.flex-grow">
                        <label htmlFor="Firstname">First Name<span>*</span></label>
                        <input styleName="form.formControl" 
                            type='text' 
                            id="Firstname"
                            maxLength='20' 
                            name="Firstname" 
                            placeholder="First Name*" 
                            required={true}
                            value={this.state.fields.Firstname}
                            onChange={this.handleInputChange}
                            aria-invalid={this.state.errors.Firstname ? true : false} 
                        />
                        <div styleName="form.error">{this.state.errors.Firstname}</div>
                    </div>                           
                    <div id="form-field-Lastname" styleName="form.formGroup flex.flex-grow">
                        <label htmlFor="Lastname">Last Name<span>*</span></label>
                        <input styleName="form.formControl" 
                            id="Lastname" 
                            type='text' 
                            maxLength='25' 
                            name="Lastname" 
                            placeholder="Last Name*" 
                            required={true}
                            value={this.state.fields.Lastname}
                            onChange={this.handleInputChange}
                            aria-invalid={this.state.errors.Lastname ? true : false} 
                        />
                        <div styleName="form.error">{this.state.errors.Lastname}</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                        <div id="form-field-title" styleName="form.formGroup flex.flex-grow">
                            <label htmlFor="Title">Title<span>*</span></label>
                            <select styleName="form.formControl" 
                                id="Title" 
                                name='Title' 
                                required={true} 
                                placeholder="Title*"
                                value={this.state.fields.Title}
                                onChange={this.handleInputChange}
                                aria-invalid={this.state.errors.Title ? true : false} 
                            >
                                <option value="">Title* &#9663;</option>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                            </select>
                            <div styleName="form.error">{this.state.errors.Title}</div>
                        </div>
                        <div id="form-field-Firstname" styleName="form.formGroup flex.flex-grow">
                            <label htmlFor="Firstname">First Name<span>*</span></label>
                            <input styleName="form.formControl" 
                                type='text' 
                                id="Firstname"
                                maxLength='20' 
                                name="Firstname" 
                                placeholder="First Name*" 
                                required={true}
                                value={this.state.fields.Firstname}
                                onChange={this.handleInputChange}
                                aria-invalid={this.state.errors.Firstname ? true : false} 
                            />
                            <div styleName="form.error">{this.state.errors.Firstname}</div>
                        </div>
                        {
                            getMiddleName ? (
                                <div id="form-field-Middlename" styleName="form.formGroup flex.flex-grow">
                                    <label htmlFor="Middlename">Middle Name</label>
                                    <input styleName="form.formControl" 
                                        type='text' 
                                        id="Middlename"
                                        maxLength='20' 
                                        name="Middlename" 
                                        placeholder="Middle Name or Initial" 
                                        required={false}
                                        value={this.state.fields.Middlename}
                                        onChange={this.handleInputChange}
                                        aria-invalid={this.state.errors.Middlename ? true : false} 
                                    />
                                    <div styleName="form.error">{this.state.errors.Middlename}</div>
                                </div>
                            ) : null
                        }
                    </div>
                    <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">                           
                        <div id="form-field-Lastname" styleName="form.formGroup flex.flex-grow">
                            <label htmlFor="Lastname">Last Name<span>*</span></label>
                            <input styleName="form.formControl" 
                                id="Lastname" 
                                type='text' 
                                maxLength='25' 
                                name="Lastname" 
                                placeholder="Last Name*" 
                                required={true}
                                value={this.state.fields.Lastname}
                                onChange={this.handleInputChange}
                                aria-invalid={this.state.errors.Lastname ? true : false} 
                            />
                            <div styleName="form.error">{this.state.errors.Lastname}</div>
                        </div>
                        {
                            getSuffix ? (
                                <div id="form-field-Suffix" styleName="form.formGroup flex.flex-grow">
                                    <label htmlFor="Suffix">Suffix</label>
                                    <select styleName="form.formControl" 
                                        id="Suffix" 
                                        name='Suffix' 
                                        required={false} 
                                        placeholder="Suffix"
                                        value={this.state.fields.Suffix}
                                        onChange={this.handleInputChange}
                                        aria-invalid={this.state.errors.Suffix ? true : false} 
                                    >
                                        <option value="">Suffix* &#9663;</option>
                                        <option value="Mr">Jr</option>
                                        <option value="Ms">Sr</option>
                                        <option value="Mrs">III</option>
                                        <option value="Miss">IV</option>
                                        <option value="Miss">Esq</option>
                                    </select>
                                    <div styleName="form.error">{this.state.errors.Suffix}</div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <form id="react-form" autoComplete="off" onSubmit={this.handleSubmit}>
                <div styleName={this.state.showGivingArray ? "form.form-panel" : "form.form-panel main.hidden"}>
                    <div styleName="form.gift-choice">
                        <GivingArray 
                            arrayOptions={this.state.arrayOptions} 
                            initialUpdate={this.state.initialUpdate}
                            monthlyChecked={this.state.monthlyChecked} 
                            addToCart={this.addToCart}
                            hydratedAmount={this.state.hydratedAmount}
                            hydratedMonthly={this.state.hydratedMonthly}
                        />
                        <div styleName="form.error form.amount-error">{this.state.errors.amount}</div>
                    </div>
                    { this.state.monthlyOption ? this.renderMonthlyRadio(this.state.monthlyChecked, this.state.fields.Monthlypledgeday) : null }
                </div>
                <div styleName={this.state.fundOptions.numFunds ? "form.form-panel" : "form.form-panel main.hidden"}>
                    <FundDisplay 
                        fundOptions={this.state.fundOptions} 
                        initialUpdate={this.state.initialUpdate}
                        updateDonation={this.updateDonation}
                    />
                </div>
                <div styleName={this.state.productOptions.numProducts ? "form.form-panel" : "form.form-panel main.hidden"}>
                    <ProductDisplay 
                        productInfo={this.state.productInfo}
                        productOptions={this.state.productOptions} 
                        updateProducts={this.updateProducts}
                        addToCart={this.addToCart}
                        initialUpdate={this.state.initialUpdate}
                        hydratedProducts={this.state.hydratedProducts}
                        hydratedAmount={this.state.hydratedAmount}
                        hydratedMonthly={this.state.hydratedMonthly}
                    />
                </div>
                <div styleName="form.form-panel">
                    <fieldset styleName="form.fieldset">
                        <div styleName="form.nameAddressInfo">
                            <h3 styleName="main.caps form.form-header">Please Enter Your Billing Information</h3>
                            { this.renderNameAddressBlock(this.state.getMiddleName, this.state.getSuffix) }
                            {
                                this.state.getSpouseInfo ? (
                                    <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                        <div id="form-field-Spousename" styleName="form.formGroup flex.flex-grow">
                                            <label htmlFor="Spousename">Spouse&rsquo;s Name</label>
                                            <input styleName="form.formControl" 
                                                type='text' 
                                                id="Spousename" 
                                                maxLength='100' 
                                                name="Spousename" 
                                                placeholder="Spouse&rsquo;s First and Last Name" 
                                                required={false}
                                                value={this.state.fields.Spousename}
                                                onChange={this.handleInputChange}
                                                aria-invalid={this.state.errors.Spousename ? true : false} 
                                            />
                                            <div styleName="form.error">{this.state.errors.Spousename}</div>
                                        </div>
                                    </div>
                                ) : null
                            }
                            <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                <div id="form-field-Address1" styleName="form.formGroup flex.flex-grow">
                                    <label htmlFor="Address1">Address<span>*</span></label>
                                    <input styleName="form.formControl" 
                                        id="Address1" 
                                        type='text' 
                                        maxLength='31' 
                                        name="Address1" 
                                        placeholder="Address*" 
                                        required={true}
                                        value={this.state.fields.Address1}
                                        onChange={this.handleInputChange}
                                        aria-invalid={this.state.errors.Address1 ? true : false} 
                                    />
                                    <div styleName="form.error">{this.state.errors.Address1}</div>
                                </div>
                            </div>
                            <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                <div id="form-field-Address2" styleName="form.formGroup flex.flex-grow">
                                    <label htmlFor="Address2">Address2</label>
                                    <input styleName="form.formControl" 
                                        id="Address2" 
                                        type='text' 
                                        maxLength='31' 
                                        name="Address2" 
                                        placeholder="Address Line 2" 
                                        required={true}
                                        value={this.state.fields.Address2}
                                        onChange={this.handleInputChange}
                                        aria-invalid={this.state.errors.Address2 ? true : false} 
                                    />
                                    <div styleName="form.error">{this.state.errors.Address2}</div>
                                </div>
                            </div>
                            <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                <div id="form-field-City" styleName="form.formGroup flex.flex-grow">
                                    <label htmlFor="City">City<span>*</span></label>
                                    <input styleName="form.formControl" 
                                        id="City" 
                                        type='text' 
                                        maxLength='28' 
                                        name="City" 
                                        placeholder="City*" 
                                        required={true}
                                        value={this.state.fields.City}
                                        onChange={this.handleInputChange}
                                        aria-invalid={this.state.errors.City ? true : false} 
                                    />
                                    <div styleName="form.error">{this.state.errors.City}</div>
                                </div>
                                <div id="form-field-State" styleName="form.formGroupState flex.flex-grow">
                                    <label htmlFor="State">State<span>*</span></label>
                                    <select styleName="form.formControl" 
                                        id="State" 
                                        name="State" 
                                        required={true}
                                        value={this.state.fields.State}
                                        onChange={this.handleInputChange}
                                        aria-invalid={this.state.errors.State ? true : false} 
                                    >
                                        <option value="">State* &#9663;</option>
                                        {this.renderStateOptions(this.state.international)}
                                    </select>
                                    <div styleName="form.error">{this.state.errors.State}</div>
                                </div>
                            </div>

                            <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                <div id="form-field-Zip" styleName="form.formGroup flex.flex-grow">
                                    <label htmlFor="Zip">Zip<span>*</span>{ this.state.international ? <small style={{fontSize: "10px"}}>(Outside U.S. use &ldquo;NA&rdquo;}</small> : null }</label>
                                    <input styleName="form.formControl" 
                                        id="Zip" 
                                        type='text' 
                                        maxLength={this.state.fields.Country != "US" ? 25 : 5}
                                        name="Zip" 
                                        placeholder="Zip*" 
                                        required={true}
                                        value={this.state.fields.Zip}
                                        onChange={this.handleInputChange}
                                        aria-invalid={this.state.errors.Zip ? true : false} 
                                    />
                                    <div styleName="form.error">{this.state.errors.Zip}</div>
                                </div>
                                { this.state.international ? (
                                    <div id="form-field-Country" styleName="form.formGroupCountry flex.flex-grow">
                                    
                                        <label htmlFor="Country">Country<span>*</span></label>
                                        <select styleName="form.formControl" 
                                            id="Country" 
                                            name="Country" 
                                            required={true}
                                            value={this.state.fields.Country}
                                            onChange={this.handleInputChange}
                                            aria-invalid={this.state.errors.Country ? true : false} 
                                        >
                                            <option value="">Country* &#9663;</option>
                                            {countries.map((country, i)=><option key={`country-${i}`} value={country}>{country}</option>)}
                                        </select>
                                        <div styleName="form.error">{this.state.errors.Country}</div>
                                    </div> 
                                ): null }
                            </div>
                            <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                                <div id="form-field-Emailaddress" styleName="form.formGroupEmail flex.flex-grow">
                                    <label htmlFor="Emailaddress">Email Address<span>*</span></label>
                                    <input styleName="form.formControl" 
                                        id="Emailaddress" 
                                        type='email' 
                                        maxLength='128' 
                                        name="Emailaddress" 
                                        placeholder="Email Address*" 
                                        required={true}
                                        value={this.state.fields.Emailaddress}
                                        onChange={this.handleInputChange}
                                        aria-invalid={this.state.errors.Emailaddress ? true : false}  
                                    />
                                    <div styleName="form.error">{this.state.errors.Emailaddress}</div>
                                </div>
                                {
                                    this.state.getPhone ? (
                                        <div id="form-field-phone" styleName="form.formGroupPhone flex.flex-grow">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input styleName="form.formControl"
                                                id="phone"  
                                                type='phonenumber' 
                                                name="phone" 
                                                placeholder="###-###-####"
                                                value={this.state.fields.phone}
                                                onChange={this.handleInputChange}
                                                aria-invalid={this.state.errors.phone ? true : false} 
                                            />
                                            <div styleName="form.error">{this.state.errors.phone}</div>
                                        </div>
                                    ) : null 
                                }
                            </div>
                        </div>               
                    </fieldset>
                    { this.state.shipping ? this.renderShippingAddress(this.state.fields.ShipToYes) : null } 
                    <fieldset styleName="form.fieldset">
                        <div styleName=" form.formRow flex.flex flex.flex-row flex.flex-axes-center">
                            <input type='checkbox' styleName="form.checkboxInput"
                                id="savePersonalInfo" 
                                name="savePersonalInfo"
                                checked={this.state.fields.savePersonalInfo} 
                                onChange={this.handleInputChange}
                            />
                            <label id="RememberMe" htmlFor="savePersonalInfo">&nbsp;Remember my name and address next time</label>
                        </div>
                    </fieldset>
                    <div styleName="flex.flex flex.flex-center flex.flex-wrap flex.flex-axes-center">
                        <input type="submit" styleName="form.submitButton" id="submit" onClick={this.handleSubmit} disabled={this.state.submitting} value="Continue to Payment &#10142;"/>
                    </div>
                    <div id="seals"></div>
                </div>
            </form>

        )
    }
}