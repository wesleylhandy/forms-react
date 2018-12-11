import React, {Component} from 'react'

import GivingArray from './GivingArray'
import ProductDisplay from './ProductDisplay'
import FundDisplay from './FundDisplay'
import MonthlyRadioGroup from './MonthlyRadioGroup'
import NameBlock from './NameBlock'
import ShippingAddressBlock from './ShippingAddressBlock';
import AddressBlock from './AddressBlock';
import FormOptionsBlock from './FormOptionsBlock';
import SubmitButton from './SubmitButton';

import flex from './styles/flex.module.css'
import styles from './styles/name-address-form.module.css'

import { getErrorType } from './helpers/error-types';
import { callApi } from './helpers/fetch-helpers';
import { crypt } from './helpers/crypt';


const email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, 
    phone_regex = /1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})/,
    zip_regex = /^\d{5}$/,
    firstname_regex= /^([a-zA-Z0-9\-\.' ]+)$/i,
    lastname_regex=/^([a-zA-Z0-9\-\.' ]+)(?:(,|\s|,\s)(jr|sr|ii|iii|iv|esq)\.*)?$/i;

const getDay = () => {
    let date = new Date().getDate()
    return date >= 2 && date <=28 ? date : 2
}

class NameAddressForm extends Component {
    constructor(props){
        super(props)
        // console.log({hydratedData: props.hydratedData})
        const fields = {
            Zip: props.hydratedData ? props.hydratedData.Zip : "",
            Monthlypledgeday: props.hydratedData && props.hydratedData.Monthlypledgeday ? props.hydratedData.Monthlypledgeday : getDay(),
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
        }
        const errors = {}
        for (let field in fields) {
            errors[field] = ""
        }
        errors.amount = ""
        this.state = {
            monthlyChecked: props.hydratedData && props.hydratedData.TransactionType == "Monthly" ? true : props.defaultOption == "monthly",
            totalGift: 0,
            submitted: false,
            submitting: false,
            fundSelected: false,
            fundInfo: {},
            productsOrdered: false,
            productInfo: [],
            cart: {
                items: []
            },
            fields,
            errors,
            hydratedAmount: 0,
            hydratedMonthly: false,
            hydratedProducts: false,
            initialUpdate: false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.validateInput = this.validateInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRadioClick = this.handleRadioClick.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.updateDonation = this.updateDonation.bind(this)
        this.updateProducts = this.updateProducts.bind(this)
        this.callZipCityStateService = this.callZipCityStateService.bind(this)
        this.callAddressVerification = this.callAddressVerification.bind(this)
    }

    componentDidMount(){
        // check to see if this is a postback from confirmation page
        if (this.props.hydratedData && this.props.hydratedData.MultipleDonations) {
            // initialize variables in such a way as to not mutate state
            let amount = 0, isMonthly = false;
            const items = [...this.state.cart.items];
            const { products } = this.props
            let productInfo = [...this.state.productInfo], { productsOrdered } = this.state
            const MultipleDonations = [...this.props.hydratedData.MultipleDonations];

            // loop through multiple donations and reconstruct virual cart
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
        // if user has selected to save personal info,  
        const {savePersonalInfo} = this.state.fields
        if (savePersonalInfo) {
            // get all user information from form
            const {Address1, Address2, City, Country, Emailaddress, Firstname, Middlename, Lastname, Spousename, Suffix, State, Title, Zip, phone} = this.state.fields
            const Phoneareacode = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[1] : "",
            Phoneexchange = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[2] : "",
            Phonenumber =  phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[3] : "";

            const formData = { Address1, Address2, City, Country, Emailaddress, Firstname, Middlename, Lastname, Phoneareacode, Phoneexchange, Phonenumber, Spousename, Suffix, State, Title, Zip }
            // lifetime of stored data on this form
            const days = 30
            //convert days into milliseconds
            const lifetime = days * 24 * 60 * 60 * 1000 // n days = x days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
            // encrypt and add to local storage,
            const info = crypt({formData, lifetime});
            localStorage.setItem("info", info);
        } else {
            // otherwise remove any stored data from local storage
            localStorage.removeItem("info");
        }

    }

    /**
     * Updates cart to remove any selected donations and toggles between monthly and single giving
     * @param {Event} e 
     */
    handleRadioClick(e) {
        const items = [...this.state.cart.items];
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

    async handleInputChange(e) {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const fields = {...this.state.fields},  errors = {...this.state.errors};
        let error;
        const isZip = name.includes("Zip") && value.length >= 5;
        if (isZip) {
            if (!zip_regex.test(value)) {
                error = "Invalid Postal Code"
            } else {
                error = await this.callZipCityStateService(name, value)
            }
        } else {
            error = this.validateInput(false, name, value);
        }
        errors[name] = error;     
        if (isZip) {
            this.setState({errors})
        } else {
            fields[name] = value;
            this.setState({ fields, errors });
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (this.state.submitting) return // ie. disallow multiple submissions

        this.setState({submitting: true})
              
        //THINK THROUGH THIS LOGIC A LITTLE MORE
        const items = [...this.state.cart.items];
        const found = items.findIndex(el=>el && el.type == "donation")
        if (items.length == 0 || (items.length == 1 && found > -1 && items[found].PledgeAmount == 0)) {
            const errors = this.state.errors
            errors.amount = "Please make a valid donation"
            return this.setState({submitting: false, errors})
        }

        const errors = {...this.state.errors};
        let isValidForm = true;
        if (this.state.fields.Country == "United States") {
            try {
                const zipError = await this.callZipCityStateService("Zip", this.state.fields["Zip"]);
                let addressError, shipZipError, shipAddressError;
                if (!zipError) {
                    addressError = await this.callAddressVerification(this.state.fields["Address1"], this.state.fields["City"], this.state.fields["State"], this.state.fields["Zip"])
                }
                if (this.state.fields["ShipToZip"] && this.state.fields.ShipToYes) {
                    shipZipError = await this.callZipCityStateService("ShipToZip", this.state.fields["ShipToZip"]);
                }
                if (!shipZipError && this.state.fields.ShipToYes) {
                    shipAddressError = await this.callAddressVerification(this.state.fields["ShipToAddress1"], this.state.fields["ShipToCity"], this.state.fields["ShipToState"], this.state.fields["ShipToZip"])
                }
                if (addressError || shipAddressError || zipError || shipZipError) {
                    isValidForm = false;
                    errors["Address1"] = addressError;
                    errors["ShipToAddress1"] = addressError;
                    errors["Zip"] = zipError;
                    errors["ShipToZip"] = shipZipError;
                }
            } catch(err) {
                console.error({err})
            }
        }
        const { fields } = this.state;
        const fieldNames = Object.keys(fields);
        for (let i= 0; i < fieldNames.length; i++) {
            let error;
            const name = fieldNames[i]
            if (!name.includes("Zip")) {
                error = this.validateInput(true, name, fields[name])
                if (error) {
                    isValidForm = false;
                    errors[name] = error;
                }
            }
        }

        if (!isValidForm) {
            return this.setState({submitting: false, errors})
        }
        //deconstruct necessary fields from state
        const {Address1, Address2, City, Country, Emailaddress, Firstname, Middlename, Lastname, Spousename, Suffix, State, Title, Zip, ShipToYes, ShipToAddress1, ShipToAddress2, ShipToCity, ShipToState, ShipToZip, ShipToCountry, ShipToName, phone} = fields
        const {mode, APIAccessID, MotivationText, subscriptions, AddContactYN, ActivityName, ContactSource, SectionName, proxy} = this.props
        const ClientBrowser = window && window.navigator ? window.navigator.userAgent : ''
        const UrlReferer = window.location.origin + window.location.pathname
         
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
            ContactSource,
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
            ShipToAddress1,
            ShipToAddress2,
            ShipToCity,
            ShipToState,
            ShipToZip,
            ShipToCountry,
            ShipToName,
            mode
        }
        //flatten subscription information
        subscriptions.forEach(sub=> data[sub.key]=sub.value);
        // console.log({proxy})
        try {
            const msg = await callApi(proxy, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(data)
            })

            this.props.submitForm({msg, data})
        } catch (err) {
            console.error(err.message);
            const {message} = err;
            const {breaking, name} = getErrorType(message);
            // console.log({breaking, name})
            if (breaking) {
                alert('There was an internal error submitting your form. Please check your information and try again or call us at 1-800-759-0700');
            } else {
                errors[name] = message;
            }
            this.setState({submitting: false, errors})
        }
    }
    /**
     * Sets the state with new product order information from the product display
     * @param {Object} productInfo - Selected Fund 
     * @param {Number} productInfo.index - index of product being added or removed from cart
     * @param {Number} productInfo.quantity - number of total items
     */
    updateProducts({idx, quantity}) {
        // productInfo and productsOrdered to be used by Product Display to calculate a total donation
        let productInfo = [...this.state.productInfo], { productsOrdered } = this.state;
        const found = productInfo.findIndex(prod=> prod.idx === idx)
        if (found > -1) {
            productInfo[found].quantity = quantity
        } else {
            productInfo.push({idx, quantity})
        }
        const totalProducts = productInfo.reduce((a, b)=> a + b.quantity, 0)
        productsOrdered = totalProducts ? true : false

        //update cart by removing all instances of this particular product and adding back new quantity if any
        const items = [...this.state.cart.items]
        const { products } = this.props
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
        const items = [...this.state.cart.items];
        const found = items.findIndex(el=>el && el.type == "donation")
        if(found > -1) {
            items[found] = item
            const errors = {...this.state.errors}
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
        }
        return error
    }

    /**
     * 
     * @param {string} name - either Zip or ShipToZip
     * @param {string} value - five digit zip code
     */
    async callZipCityStateService(name, value) {
        const base = this.state.mode == "development" ? "http://Services.cbn.local/AddressValidation/CityStatebyZip.aspx?PostalCode=" : "http://Services.cbn.com/AddressValidation/CityStatebyZip.aspx?PostalCode=";
        const url = `${base}${value}`;
        const fields = {...this.state.fields};
        try {
            const result = await callApi(url);
            const oldCity = fields[name == "ShipToZip" ? "ShipToCity" : "City"].toUpperCase();
            let { city, state, zip, returnCode, returnMessage } = JSON.parse(result);
            // console.log({ city, state, zip, returnCode, returnMessage })
            if (returnCode == 1) {
                // console.log(city)
                const error = oldCity && !city.toUpperCase().includes(oldCity);
                const newCity = error || !oldCity ? city.split(";")[0] : oldCity;
                fields[name == "ShipToZip" ? "ShipToCity" : "City"] = newCity;
                fields[name == "ShipToZip" ? "ShipToState" : "State"] = state;
                fields[name == "ShipToZip" ? "ShipToZip" : "Zip"] = zip;
                if (name == "Zip") {
                    fields["Country"] = "United States";
                }
                this.setState({fields});
                return error ? city : '' ;
            } else {
                return returnMessage;
            }
        } catch (err) {
            console.error(err);
            return '';
        }
    }

    /**
     * 
     * @param {string} addr1 - user entered address
     * @param {string} city - user entered city
     * @param {string} state - user entered state
     * @param {string} zip - user entered zip
     * @returns {string} either empty or with error
     */
    async callAddressVerification(addr1, city, state, zip) {
        const base = this.state.mode == "development" ? "http://Services.cbn.local/AddressValidation/AddressVerification.aspx?" : "http://Services.cbn.com/AddressValidation/AddressVerification.aspx?";
        const url = encodeURI(`${base}addr1=${addr1}&city=${city}&state=${state}&zip=${zip}`)
        try {
            const result = await callApi(url);
            // console.log({result})
            const {returnCode, returnMessage} = JSON.parse(result);
            return returnCode == 1 ? '' : returnMessage;
        } catch(err) {
            console.error({err})
            return '';
        }
    }
    
    render() {
        const {
            showGivingArray, 
            defaultAmount, 
            defaultOption, 
            givingFormat, 
            monthlyOption, 
            singleOption, 
            monthlyAmounts, 
            singleAmounts, 
            funds, 
            monthlyPledgeData, 
            singlePledgeData, 
            products, 
            additionalGift, 
            additionalGiftMessage,
            shipping,
            international,
            getPhone,
            getSuffix,
            getMiddleName,
            getSpouseInfo
        } = this.props;
  
        const arrayOptions = {
                defaultAmount,
                defaultOption,
                givingFormat,
                monthlyOption,
                singleOption,
                monthlyAmounts,
                singleAmounts,
                funds,
                monthlyPledgeData,
                singlePledgeData
            },
            productOptions = {
                products,
                numProducts: products.length,
                additionalGift,
                additionalGiftMessage,
                singlePledgeData
            },
            fundOptions = {
                funds,
                numFunds: funds.length
            }
        const { 
            errors, 
            fields,
            productInfo, 
            submitting, 
            initialUpdate, 
            monthlyChecked, 
            hydratedAmount, 
            hydratedMonthly,
            hydratedProducts 
        } = this.state;
        const hasErrors = Object.values(errors).filter(val => val && val.length > 0).length > 0;
        return (
            <form id="react-form" autoComplete="off" onSubmit={this.handleSubmit}>
                <div styleName={showGivingArray ? "styles.form-panel" : "styles.form-panel styles.hidden"}>
                    <div styleName="styles.gift-choice">
                        <GivingArray 
                            arrayOptions={arrayOptions} 
                            initialUpdate={initialUpdate}
                            monthlyChecked={monthlyChecked} 
                            addToCart={this.addToCart}
                            hydratedAmount={hydratedAmount}
                            hydratedMonthly={hydratedMonthly}
                        />
                        <div styleName="styles.error styles.amount-error">{errors.amount}</div>
                    </div>
                    { 
                        monthlyOption && singleOption && (
                            <MonthlyRadioGroup 
                                monthlyChecked={monthlyChecked} 
                                Monthlypledgeday={fields.Monthlypledgeday} 
                                handleInputChange={this.handleInputChange} 
                                handleRadioClick={this.handleRadioClick}
                            />
                        ) 
                    }
                </div>
                <div styleName={fundOptions.numFunds ? "styles.form-panel" : "styles.form-panel main.hidden"}>
                    <FundDisplay 
                        fundOptions={fundOptions} 
                        initialUpdate={initialUpdate}
                        updateDonation={this.updateDonation}
                    />
                </div>
                <div styleName={productOptions.numProducts ? "styles.form-panel" : "styles.form-panel styles.hidden"}>
                    <ProductDisplay 
                        productInfo={productInfo}
                        productOptions={productOptions} 
                        updateProducts={this.updateProducts}
                        addToCart={this.addToCart}
                        initialUpdate={initialUpdate}
                        hydratedProducts={hydratedProducts}
                        hydratedAmount={hydratedAmount}
                        hydratedMonthly={hydratedMonthly}
                    />
                </div>
                <div styleName="styles.form-panel">
                    <fieldset styleName="styles.fieldset">
                        <div styleName="styles.name-address__info">
                            <h3 styleName="styles.form-header">Please Enter Your Billing Information</h3>
                            <NameBlock
                                fields={fields} 
                                errors={errors} 
                                getMiddleName={getMiddleName}
                                getSuffix={getSuffix}
                                getSpouseInfo={getSpouseInfo}
                                handleInputChange={this.handleInputChange} 
                            />
                            <AddressBlock 
                                fields={fields} 
                                errors={errors} 
                                handleInputChange={this.handleInputChange} 
                                getPhone={getPhone}
                                international={international}
                            />
                        </div>               
                    </fieldset>
                    { 
                        shipping && (
                            <fieldset styleName="styles.fieldset">
                                <div styleName="styles.shipping-address__container">
                                    <FormOptionsBlock 
                                        id="ShipToYes"
                                        checked={fields.ShipToYes}
                                        handleInputChange={this.handleInputChange}
                                        label="&nbsp;My shipping address is different than my billing address."
                                    />
                                    {
                                        fields.ShipToYes && (
                                            <ShippingAddressBlock 
                                                fields={fields} 
                                                errors={errors} 
                                                handleInputChange={this.handleInputChange} 
                                                international={international}
                                            />
                                        )
                                    }
                                </div>
                            </fieldset>
                        ) 
                    } 
                    <fieldset styleName="styles.fieldset">
                        <FormOptionsBlock
                            id="savePersonalInfo" 
                            checked={fields.savePersonalInfo} 
                            handleInputChange={this.handleInputChange} 
                            label="&nbsp;Remember my name and address next time"
                        />
                    </fieldset>
                    <fieldset styleName="styles.fieldset">
                        <SubmitButton 
                            hasErrors={hasErrors}
                            error={errors.amount}
                            handleSubmit={this.handleSubmit}
                            submitting={submitting}
                        />
                    </fieldset>
                    <div id="seals"></div>
                </div>
            </form>

        )
    }
}

export default NameAddressForm