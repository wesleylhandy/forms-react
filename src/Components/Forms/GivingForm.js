import React, {Component} from 'react'

import { DataContext } from '../Context/DataContext'

import FormPanel from "../FormComponents/StyledComponents/FormPanel" 
import FieldSet from "../FormComponents/StyledComponents/FieldSet"
import FormHeader from "../FormComponents/StyledComponents/FormHeader"
import GivingLayout from '../FormComponents/Layouts/GivingLayout'
import ProductLayout from '../FormComponents/Layouts/ProductLayout'
import FundDisplay from '../FormComponents/Blocks/DesignationBlock'
import NameBlock from '../FormComponents/Blocks/NameBlock'
import ShippingAddressBlock from '../FormComponents/Blocks/ShippingAddressBlock';
import AddressBlock from '../FormComponents/Blocks/AddressBlock';
import FormOptionsBlock from '../FormComponents/Blocks/FormOptionsBlock';
import SubmitButton from '../FormComponents/SubmitButton';
import Spinner from "../StyledComponents/Spinner"

import { getErrorType } from '../../helpers/error-types';
import { callApi } from '../../helpers/fetch-helpers';


const email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, 
    phone_regex = /1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})/,
    zip_regex = /^\d{5}$/,
    firstname_regex= /^([a-zA-Z0-9\-\.' ]+)$/i,
    lastname_regex=/^([a-zA-Z0-9\-\.' ]+)(?:(,|\s|,\s)(jr|sr|ii|iii|iv|esq)\.*)?$/i;

const getDay = () => {
    let date = new Date().getDate()
    return date >= 2 && date <=28 ? date : 2
}

class GivingForm extends Component {
    constructor(props){
        super(props)
        // console.log({props})
        const hasMonthlyAmounts = props.monthlyAmounts && props.monthlyAmounts.length;
        const hasSingleAmounts = props.singleAmounts && props.singleAmounts.length;
        this.state = {
            monthlyChecked: props.defaultOption == "monthly" || ( hasMonthlyAmounts && !hasSingleAmounts ),
            totalGift: 0,
            submitted: false,
            submitting: false,
            fundSelected: false,
            fundInfo: {},
            hydratedFund: false,
            productsOrdered: false,
            productInfo: [],
            givingInfo: {},
            cart: {
                items: []
            },
            defaultAmount: props.defaultAmount,
            defaultOption: props.defaultOption,
            hydratedAdditionalGift: 0,
            initialUpdate: false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.validateInput = this.validateInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRadioClick = this.handleRadioClick.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.removeFromCart = this.removeFromCart.bind(this)
        this.updateDonation = this.updateDonation.bind(this)
        this.updateProducts = this.updateProducts.bind(this)
        this.callZipCityStateService = this.callZipCityStateService.bind(this)
        this.callAddressVerification = this.callAddressVerification.bind(this)
    }

    componentDidMount(){
        const fields = {
            Zip: "",
            Monthlypledgeday: getDay(),
            Title: "",
            Firstname: "",
            Middlename: "",
            Lastname:  "",
            Suffix:  "",
            Spousename:  "",
            Address1: "",
            Address2: "",
            City: "",
            State: "",
            Country: this.props.international ? "" : "United States",
            Emailaddress:  "",
            phone:  "",
            savePersonalInfo: true,
            ShipToYes: false,
            ShipToName:  "",
            ShipToAddress1:  "",
            ShipToAddress2:  "",
            ShipToCity:  "",
            ShipToCountry:  "",
            ShipToZip:  "",
            ShipToState:  ""
        }
        const errors = {}
        for (let field in fields) {
            errors[field] = ""
        }
        errors.amount = ""
        this.context.initFields({type: "INIT_FORM_STATE", fields, errors, international: this.props.international, formType: this.props.type})

        this.context.loadLS({type: "LOAD"})

        const { hydratedData } = this.props
        // check to see if this is a postback from confirmation page
        if (hydratedData && hydratedData.MultipleDonations) {
            // initialize variables in such a way as to not mutate state
            let amount = 0, 
                isMonthly = false, 
                additionalGift = 0, 
                fundSelected = false;
            const items = [];
            const { products } = this.props
            let productInfo = [...this.state.productInfo], 
                { productsOrdered } = this.state, 
                givingInfo = {...this.state.givingInfo}, 
                fundInfo = {...this.state.fundInfo}
            const MultipleDonations = [...hydratedData.MultipleDonations];
            const {monthlyPledgeData, singlePledgeData, funds} = this.props
            const detailNames = [], fundNames = []
            if (monthlyPledgeData) {
                detailNames.push(monthlyPledgeData.DetailName)
            }
            if (singlePledgeData) {
                detailNames.push(singlePledgeData.DetailName)
            }
            if (funds && funds.length) {
                funds.forEach(fund=> {
                    const monthlyDetailName = `MP${fund.DetailName}`;
                    const singleDetailName = `SP${fund.DetailName}`;
                    detailNames.push(monthlyDetailName)
                    detailNames.push(singleDetailName)
                    fundNames.push(monthlyDetailName)
                    fundNames.push(singleDetailName)
                })
            }
            // loop through multiple donations and reconstruct virual cart
            for (let i = 0; i < MultipleDonations.length; i++) {
                const { DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail, PledgeAmount } = MultipleDonations[i];
                let type = detailNames.includes(DetailName) ? "donation" : "product";
                if (type == "donation") {
                    amount = +PledgeAmount
                    isMonthly = DetailName.includes("MP") ? true : false;
                    givingInfo = { amount, isMonthly, source: "hydratingForm" }
                    if (fundNames.includes(DetailName)) {
                        const index = funds.findIndex(fund=>fund.DetailDescription == DetailDescription)
                        fundInfo = funds[index]
                        fundSelected = true
                    }
                }
                if (type == "product") {
                    const idx = products ? products.findIndex(el=> el.DetailDescription === DetailDescription) : -1
                    if (idx > -1) {
                        const quantity = parseInt(DetailName.split('|')[1])
                        productInfo.push({idx, quantity})
                        productsOrdered = true;
                    } else {
                        type = "additionalGift"
                        additionalGift = +PledgeAmount
                    }
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
            // console.log({items, amount, additionalGift})
            const monthlyChecked = isMonthly
            this.setState({
                cart: {items}, 
                fundInfo,
                givingInfo, 
                productInfo, 
                productsOrdered, 
                fundSelected,
                hydratedFund: fundSelected,
                hydratedAdditionalGift: additionalGift,  
                monthlyChecked
            })
        } 
    }

    async componentWillUnmount() {
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
           
            this.context.saveLS({type: "SAVE"}, formData)
            
        } else {
            // otherwise remove any stored data from local storage
            this.context.removeOneLS('info');
        }
    }

    /**
     * Updates cart to remove any selected donations and toggles between monthly and single giving
     * @param {Event} e 
     */
    handleRadioClick(e) {
        const fundInfo = {...this.state.fundInfo}
        const givingInfo = {...this.state.givingInfo}
        const items = [...this.state.cart.items];
        const found = items.findIndex(el=>el && el.type == "donation")
        const id = e.target.id;
        console.log(id)
        if (found > -1) {
            items[found] = {
                type: 'donation',
                PledgeAmount: items[found].PledgeAmount,
                DetailCprojMail: id == "singlegift"  ? this.props.singlePledgeData.DetailCprojMail : this.props.monthlyPledgeData.DetailCprojMail,
                DetailCprojCredit: id == "singlegift"  ? this.props.singlePledgeData.DetailCprojCredit : this.props.monthlyPledgeData.DetailCprojCredit,
                DetailDescription: id == "singlegift" ? this.props.singlePledgeData.DetailDescription : this.props.monthlyPledgeData.DetailDescription,
                DetailName: id == "singlegift" ? this.props.singlePledgeData.DetailName : this.props.monthlyPledgeData.DetailName,
                monthly: id == "singlegift" ? false : true
            }
            givingInfo.amount = items[found].PledgeAmount
            givingInfo.isMonthly = id !== 'singlegift'
            givingInfo.source = "radioClick"
        }
        if (fundInfo && fundInfo.DetailName) {
            const detailName = fundInfo.DetailName;
            const prefix = detailName.slice(0,2);
            if (prefix == "MP" || prefix == "SG") {
                const originalDetailName = detailName.slice(2)
                fundInfo.DetailName = id == "singlegift" ? `SG${originalDetailName}` : `MP${originalDetailName}`
            } else {
                fundInfo.DetailName = id == "singlegift" ? `SG${detailName}` : `MP${detailName}`
            }
            // console.log({fundInfo})
        }
        // console.log({items})
        if(id == "singlegift") {
             this.setState({monthlyChecked: false, cart: {items}, fundInfo, givingInfo})
        } else {
            this.setState({monthlyChecked: true, cart: {items}, fundInfo, givingInfo})
        }
    }

    handleInputChange(e) {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.context.validateAndUpdateField({type: "UPDATE_FIELD", name, value})

    }

    async handleSubmit(e) {
        e.preventDefault();
        // console.log(this.state.submitting)
        if (this.state.submitting) return // ie. disallow multiple submissions

        this.setState({submitting: true})
              
        //THINK THROUGH THIS LOGIC A LITTLE MORE
        const items = [...this.state.cart.items];
        const pledgeFound = items.findIndex(el=>el && el.type == "donation")
        const addGiftFound = items.findIndex(el=>el && el.type == "additionalGift")
        const productFound = items.findIndex(el=> el && el.type == "product")
        if (items.length == 0 || 
            (pledgeFound > -1 && items[pledgeFound].PledgeAmount == 0 && addGiftFound < 0) || 
            (pledgeFound < 0 && addGiftFound < 0 && productFound < 0)
            ) {
            return this.setState({submitting: false}, ()=>{
                this.context.updateField({type: "UPDATE_FIELD", name: "amount", value: "", error: "Please make a valid donation"})
            })
        }

        let isValidForm = true;
        if (this.state.fields.Country == "United States") {
            try {
                const zipError = await this.callZipCityStateService("Zip", this.state.fields["Zip"]);
                let addressError, shipZipError, shipAddressError;
                if (!zipError) {
                    try {
                        addressError = await this.callAddressVerification(this.state.fields["Address1"], this.state.fields["Address2"], this.state.fields["City"], this.state.fields["State"], this.state.fields["Zip"])
                    } catch(err) {
                        console.log("AddressVerificationError")
                        console.error({err})
                    }
                }
                if (this.state.fields["ShipToZip"] && this.state.fields.ShipToYes) {
                    try {
                        shipZipError = await this.callZipCityStateService("ShipToZip", this.state.fields["ShipToZip"]);
                    } catch(err) {
                        console.log("CSZValidationError__SHIPPING")
                        console.error({err})
                    }
                }
                if (!shipZipError && this.state.fields.ShipToYes) {
                    try {
                        shipAddressError = await this.callAddressVerification(this.state.fields["ShipToAddress1"], this.state.fields["ShipToAddress2"], this.state.fields["ShipToCity"], this.state.fields["ShipToState"], this.state.fields["ShipToZip"])
                    } catch(err) {
                        console.log("AddressVerificationError__SHIPPING")
                        console.error({err})
                    }
                }
                if (addressError || shipAddressError || zipError || shipZipError) {
                    isValidForm = false;
                    errors["Address1"] = addressError;
                    errors["ShipToAddress1"] = addressError;
                    errors["Zip"] = zipError;
                    errors["ShipToZip"] = shipZipError;
                }
            } catch(err) {
                console.log("CSZValidationError")
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
        let {mode, EmailSubjectLine = "Thank You for Your Contribution", APIAccessID, subscriptions, AddContactYN, ActivityName, ContactSource, SectionName, proxy} = this.props
        const ClientBrowser = window && window.navigator ? window.navigator.userAgent : ''
        const UrlReferer = window.location.origin + window.location.pathname
         
        //construct phone fields from regex
        const Phoneareacode = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[1] : "",
        Phoneexchange = phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[2] : "",
        Phonenumber =  phone.trim().match(phone_regex) ? phone.trim().match(phone_regex)[3] : "";
        
        //process cart
        let TransactionType = "Product"
        const isMonthly = pledgeFound > -1 ? items[pledgeFound].monthly : false
        const DonationType =  isMonthly ? "CR" : "CC";
        const IsRecurringCreditCardDonation = isMonthly
        const Monthlypledgeday = isMonthly ? this.state.fields.Monthlypledgeday : null
        const Monthlypledgeamount = isMonthly && pledgeFound > -1 ? items[pledgeFound].PledgeAmount : 0
        const Singledonationamount = !isMonthly && pledgeFound > -1 ? items[pledgeFound].PledgeAmount : 0
        if (Monthlypledgeamount > 0) {
            TransactionType = "Monthly"
        }
        if (Singledonationamount > 0) {
            TransactionType = "Single"
        }
        const ShipTo = ShipToYes === true ? "Yes" : "No"
        const multipleDonations = () => items.map(({DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail, PledgeAmount}, index)=> {
            if (index === pledgeFound && this.state.fundSelected) {
                DetailName = this.state.fundInfo.DetailName
                DetailDescription = this.state.fundInfo.DetailDescription
                DetailCprojCredit = this.state.fundInfo.DetailCprojCredit
                DetailCprojMail = this.state.fundInfo.DetailCprojMail
            }
            // console.log({DetailName});
            return {DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail, PledgeAmount}
        })
        const MultipleDonations = multipleDonations();

        const MotivationText = window.cbn_obj && window.cbn_obj.motivation ? window.cbn_obj.motivation : '041181';

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
            EmailSubjectLine,
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
        if (subscriptions && subscriptions.length) {
            subscriptions.forEach(sub=> data[sub.key]=sub.value);
        }
        // console.log({proxy})
        // console.log({data})
        try {
            const msg = await callApi(proxy, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(data)
            })
            // console.log({msg, data})
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
        const found = items.findIndex( el => el && el.type == item.type )
        if(found > -1) {
            items[found] = item
            const errors = {...this.state.errors}
            errors.amount = ""
            this.setState({errors})
        } else {
            items.push(item)
        }
        // console.log({items})
        this.setState({cart: {items}, givingInfo: {}})
    }

    removeFromCart(type) {
        const items = [...this.state.cart.items];
        const found = items.findIndex(el => el && el.type == type )
        // console.log({type, found, items})
        if (found > -1) {
            items.splice(found, 1)
            // console.log({items})
            this.setState({cart: {items}, givingInfo: {}})
        }
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
        const {monthlyChecked} = this.state;
        const detailName = fundInfo.DetailName;
        fundInfo.DetailName = monthlyChecked ? `MP${detailName}` : `SP${detailName}`;
        // console.log({fundInfo})
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
        const { ShipToYes } = this.state.fields;
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
        if (value) {
            const base = this.state.mode == "local" ? "http://services.cbn.local/AddressValidation/CityStatebyZip.aspx?PostalCode=" : "https://services.cbn.com/AddressValidation/CityStatebyZip.aspx?PostalCode=";
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
                    // fields[name == "ShipToZip" ? "ShipToZip" : "Zip"] = zip;
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
        } else {
            return '';
        }
    }

    /**
     * 
     * @param {string} addr1 - user entered address1
     * @param {string} addr2 - user entered address2
     * @param {string} city - user entered city
     * @param {string} state - user entered state
     * @param {string} zip - user entered zip
     * @returns {string} either empty or with error
     */
    async callAddressVerification(addr1, addr2 = "", city, state, zip) {
        const base = this.state.mode == "local" ? "http://services.cbn.local/AddressValidation/AddressVerification.aspx" : "https://services.cbn.com/AddressValidation/AddressVerification.aspx";
        const url = encodeURI(`${base}?addr1=${encodeURIComponent(addr1)}&addr2=${encodeURIComponent(addr2)}&city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&zip=${encodeURIComponent(zip)}`)
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
            givingFormat, 
            productFormat,
            monthlyOption, 
            singleOption, 
            monthlyAmounts, 
            singleAmounts, 
            funds, 
            monthlyPledgeData, 
            singlePledgeData, 
            products, 
            additionalGift, 
            shipping,
            international,
            getPhone,
            getSuffix,
            getMiddleName,
            getSpouseInfo,
            showSeals
        } = this.props;
  
        const givingOptions = {
                monthlyOption,
                singleOption,
                monthlyAmounts: monthlyAmounts ? monthlyAmounts : [],
                singleAmounts: singleAmounts ? singleAmounts : [],
                funds: funds ? funds : [],
                monthlyPledgeData,
                singlePledgeData
            },
            productOptions = {
                products: products ? products : [],
                numProducts: products && products.length ? products.length : 0,
                additionalGift
            },
            fundOptions = {
                funds: funds ? funds : [],
                numFunds: funds && funds.length ? funds.length : 0
            }
        const { 
            defaultAmount,
            defaultOption,
            fundInfo,
            givingInfo,
            productInfo, 
            submitting, 
            initialUpdate, 
            monthlyChecked,
            hydratedAdditionalGift,
            hydratedFund
        } = this.state;
        const {
            errors, 
            fields,
            initialized
        } = this.context;
        console.log({fields, errors})
        const hasErrors = Object.values(errors).filter(val => val && val.length > 0).length > 0;
        return (
            <form id="react-form" autoComplete="off" onSubmit={this.handleSubmit}>
                { 
                    showGivingArray && (
                        <FormPanel className="form-panel">
                            <GivingLayout
                                givingFormat={givingFormat}
                                defaultAmount={defaultAmount}
                                defaultOption={defaultOption}
                                givingOptions={givingOptions} 
                                initialUpdate={initialUpdate}
                                monthlyChecked={monthlyChecked} 
                                addToCart={this.addToCart}
                                removeFromCart={this.removeFromCart}
                                givingInfo={givingInfo}
                                amountError={errors.amount}
                                monthlyChecked={monthlyChecked} 
                                Monthlypledgeday={fields.Monthlypledgeday} 
                                handleInputChange={this.handleInputChange} 
                                handleRadioClick={this.handleRadioClick}
                                monthlyOption={monthlyOption}
                                singleOption={singleOption}
                            />
                        </FormPanel>
                    )
                }
                {
                    fundOptions.numFunds > 0 && (
                        <FormPanel className="form-panel">
                            <FundDisplay
                                fundOptions={fundOptions} 
                                initialUpdate={initialUpdate}
                                updateDonation={this.updateDonation}
                                fundInfo={fundInfo}
                                hydratedFund={hydratedFund}
                            />
                        </FormPanel>
                    )
                }
                {
                    productOptions.numProducts > 0 && (
                        <FormPanel className="form-panel">
                            <ProductLayout 
                                productFormat={productFormat}
                                productInfo={productInfo}
                                productOptions={productOptions} 
                                updateProducts={this.updateProducts}
                                addToCart={this.addToCart}
                                removeFromCart={this.removeFromCart}
                                initialUpdate={initialUpdate}
                                hydratedAdditionalGift={hydratedAdditionalGift}
                            />
                        </FormPanel>
                    )
                }
                { 
                    initialized ? (               
                        <FormPanel className="form-panel">
                            <FieldSet>
                                <legend>Name and Billing Address Block</legend>
                                <FormPanel className="name-address__info">
                                    <FormHeader className="form-header">Please Enter Your Billing Information</FormHeader>
                                    <NameBlock
                                        fields={fields} 
                                        errors={errors} 
                                        getMiddleName={getMiddleName}
                                        getSuffix={getSuffix}
                                        getSpouseInfo={getSpouseInfo}
                                        handleInputChange={this.handleInputChange}
                                        type="Name" 
                                    />
                                    <AddressBlock 
                                        fields={fields} 
                                        errors={errors} 
                                        handleInputChange={this.handleInputChange} 
                                        getPhone={getPhone}
                                        international={international}
                                        type="Billing"
                                    />
                                </FormPanel>               
                            </FieldSet>
                            { 
                                shipping && (
                                    <FieldSet>
                                        <legend>Shipping Address Block</legend>
                                        <FormPanel className="shipping-address__container">
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
                                        </FormPanel>
                                    </FieldSet>
                                ) 
                            } 
                            <FieldSet>
                                <legend>Save Personal Info Block</legend>
                                <FormOptionsBlock
                                    id="savePersonalInfo" 
                                    checked={fields.savePersonalInfo} 
                                    handleInputChange={this.handleInputChange} 
                                    label="&nbsp;Remember my name and address next time"
                                />
                            </FieldSet>
                            <FieldSet>
                                <legend>Form Submit Block</legend>
                                <SubmitButton 
                                    hasErrors={hasErrors}
                                    error={errors.amount}
                                    handleSubmit={this.handleSubmit}
                                    submitting={submitting}
                                />
                            </FieldSet>
                        </FormPanel>
                    ) : ( 
                        <FormPanel className="form-panel">
                            <Spinner />
                        </FormPanel>
                    )
                }
            </form>

        )
    }
}

GivingForm.contextType = DataContext

export default GivingForm