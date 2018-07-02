import React, {Component} from 'react'
import axios from 'axios'

import main from './styles/main.css'
import flex from './styles/flex.css'
import form from './styles/form.css'

import GivingArray from './GivingArray'
import ProductDisplay from './ProductDisplay'

const usStates = [["Alaska", "AK"],["Alabama", "AL"],["Arkansas", "AR"],["Arizona", "AZ"],["California", "CA"],["Colorado", "CO"],["Connecticut", "CT"],["District Of Columbia", "DC"],["Delaware", "DE"],["Florida", "FL"],["Georgia", "GA"],["Hawaii", "HI"],["Iowa", "IA"],["Idaho", "ID"],["Illinois", "IL"],["Indiana", "IN"],["Kansas", "KS"],["Kentucky", "KY"],["Louisiana", "LA"],["Massachusetts", "MA"],["Maryland", "MD"],["Maine", "ME"],["Michigan", "MI"],["Minnesota", "MN"],["Missouri", "MO"],["Mississippi", "MS"],["Montana", "MT"],["North Carolina", "NC"],["North Dakota", "ND"],["Nebraska", "NE"],["New Hampshire", "NH"],["New Jersey", "NJ"],["New Mexico", "NM"],["Nevada", "NV"],["New York", "NY"],["Ohio", "OH"],["Oklahoma", "OK"],["Oregon", "OR"],["Pennsylvania", "PA"],["Rhode Island", "RI"],["South Carolina", "SC"],["South Dakota", "SD"],["Tennessee", "TN"],["Texas", "TX"],["Utah", "UT"],["Virginia", "VA"],["Vermont", "VT"],["Washington", "WA"],["Wisconsin", "WI"],["West Virginia", "WV"],["Wyoming", "WY"]],          
usMilitary = [["APO/FPO ZIP 340", "AA"],["APO/FPO ZIP\'S 090-098", "AE"],["APO/FPO ZIP\'S 962-966", "AP"]],
canadianProvinces = [["Alberta", "AB"],["British Columbia", "BC"],["Manitoba", "MB"],["New Brunswick", "NB"],["Newfoundland and Labrador", "NL"],["Nova Scotia", "NS"],["Northwest Territories", "NT"],["Nunavut", "NU"],["Ontario", "ON"],["Prince Edward Island", "PE"],["Quebec", "QC"],["Saskatchewan", "SK"],["Yukon Territory", "YT"]],
usTerritories = [["American Samoa", "AS"],["Federated States Of Micronesia", "FM"],["Guam", "GU"],["Marshall Islands", "MH"],["Palau", "PW"],["Northern Mariana Islands", "MP"],["Puerto Rico", "PR"],["Virgin Islands", "VI"]],
countries = ["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Channel Islands","Chile","China","Hong Kong Spcl. Admin. Region of China","Macao Spcl. Admin. Region of China","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Côte d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Democratic People's Rep. of Korea","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Faeroe Islands","Falkland Islands (Malvinas)","Fiji","Finland","France","French Guiana","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Occupied Palestinian Territory","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Korea","Republic of Moldova","Réunion","Romania","Russian Federation","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Thailand","The former Yugoslav Rep. of Macedonia","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United Republic of Tanzania","United States","United States Virgin Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Wallis and Futuna Islands","Western Sahara","Yemen","Zambia","Zimbabwe"],
other = [["Other", "00"]];

const email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, 
phone_regex = /1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})/,
zip_regex = /^\d{5}$/,
firstname_regex= /^([a-zA-Z0-9\-\.' ]+)$/i,
lastname_regex=/^([a-zA-Z0-9\-\.' ]+)(?:(,|\s|,\s)(jr|sr|ii|iii|iv|esq)\.*)?$/i;

export default class NameAddressForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            env: [process.env.alpha, process.env.bravo],
            ClientBrowser: "",
            ClientIP: "10.100.43.50", //obtain this from server somehow
            MotivationText: props.hydratedData ? props.hydratedData.MotivationText : props.MotivationText,
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
                additionalGiftMessage: props.additionalGiftMessage
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
            cart: {
                items: [{
                    type: 'donation',
                    PledgeAmount: 0,
                    DetailCprojMail: props.monthlyOption ? props.monthlyPledgeData.DetailCprojMail : props.singlePledgeData.DetailCprojMail,
                    DetailCprojCredit: props.monthlyOption ? props.monthlyPledgeData.DetailCprojCredit : props.singlePledgeData.DetailCprojCredit,
                    DetailDescription: props.monthlyOption ? "Monthly Pledge" : "Single Pledge",
                    DetailName: props.monthlyOption ? "MP" : "SPGF",
                    monthly: props.monthlyOption,
                    fund: null
                }]
            },
            fields: {
                Monthlypledgeday: props.hydratedData ? props.hydratedData.Monthlypledgeday : new Date().getDate(),
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
                Zip: props.hydratedData ? props.hydratedData.State : "",
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
            hydratedMonthly: false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.validateInput = this.validateInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRadioClick = this.handleRadioClick.bind(this)
        this.renderMonthlyRadio = this.renderMonthlyRadio.bind(this)
        this.renderShippingAddress = this.renderShippingAddress.bind(this)
        this.calculateTotal = this.calculateTotal.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount(){
        this.setState({ClientBrowser: window.navigator.userAgent})
        // add this later to state when in production UrlReferer: window.location.href

        if (this.props.hydratedData) {
            let amount = 0, isMonthly = false;
            const { DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail, PledgeAmount} = this.props.hydratedData.MultipleDonations[0];
            const {items} = this.state.cart;

            items[0].DetailName = DetailName;
            items[0].DetailDescription = DetailDescription;
            items[0].DetailCprojCredit = DetailCprojCredit;
            items[0].DetailCprojMail = DetailCprojMail;
            items[0].PledgeAmount = PledgeAmount;
            amount = PledgeAmount
            items[0].monthly = DetailName === "MP" ? true : false;
            isMonthly = DetailName === "MP" ? true : false;
            for (let i = 1; i < this.props.hydratedData.MultipleDonations.length; i++) {
                const { DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail, PledgeAmount} = this.props.hydratedData.MultipleDonations[i];
                items.push({
                    type: 'other',
                    PledgeAmount,
                    DetailCprojMail,
                    DetailCprojCredit,
                    DetailDescription,
                    DetailName,
                    monthly: false,
                    fund: null
                })
            }
            // console.log({amount, isMonthly})
            this.setState({cart: {items}, hydratedAmount: amount, hydratedMonthly: isMonthly})

        }
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
                <div id="ShippingAddressInfo" styleName = {showShipping ? 'form.shipping-address__info' : 'main.hidden'}>
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
                                required={true}
                                value={this.state.fields.ShipToName}
                                onChange={this.handleInputChange}
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
                                placeholder="Address*" 
                                required={true}
                                value={this.state.fields.ShipToAddress1}
                                onChange={this.handleInputChange}
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
                                placeholder="Address*" 
                                required={true}
                                value={this.state.fields.ShipToAddress2}
                                onChange={this.handleInputChange}
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
                                required={true}
                                value={this.state.fields.ShipToCity}
                                onChange={this.handleInputChange}
                            />
                            <div styleName="form.error">{this.state.errors.ShipToCity}</div>

                        </div>
                        <div id="form-field-ShipToState" styleName="form.formGroup flex.flex-grow">

                            <label htmlFor="ShipToState">State<span>*</span></label>
                            <select styleName="form.formControl" 
                                id="ShipToState" 
                                name="ShipToState" 
                                required={true} 
                                value={this.state.fields.ShipToState} 
                                onChange={this.handleInputChange}
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
                                required={true}
                                value={this.state.fields.ShipToZip}
                                onChange={this.handleInputChange}
                            />
                            <div styleName="form.error">{this.state.errors.ShipToZip}</div>

                        </div>

                    </div>
                </div>
            </div>
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
                    monthly: id == "singlegift" ? false : true,
                    fund: null
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

        const errors = this.state.errors;

        const error = this.validateInput(false, name, value);
        errors[name] = error;
        
        const fields = this.state.fields;
        fields[name] = value;

        this.setState({ fields, errors });
    }

    handleShippingClick(e) {
        this.setState({showShipping: true})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.submitting) return // ie. disallow multiple submissions

        this.setState({submitting: true})
        //eventually to validate data, but for testing:
        
        if (this.state.cart.items.length == 0 || this.state.cart.items[0].PledgeAmount == 0) {
            const errors = this.state.errors
            errors.amount = "Please make a select a valid donation"
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

        const {Address1, Address2, City, Country, Emailaddress, Firstname, Lastname, State, Title, Zip, ShipToAddress1, ShipToAddress2, ShipToCity, ShipToState, ShipToZip, ShipToCountry, ShipToName} = fields
        const {Clublevel, MotivationText, ClientBrowser, ClientIP} = this.state

        const isMonthly = this.state.cart.items[0].monthly
        const DonationType =  isMonthly ? "CR" : "CC";
        const TransactionType = isMonthly ? "Monthly" : "Single"
        const IsRecurringCreditCardDonation = isMonthly
        const Monthlypledgeday = isMonthly ? this.state.fields.Monthlypledgeday : null
        const Monthlypledgeamount = isMonthly ? this.state.cart.items[0].PledgeAmount : 0
        const Singledonationamount = !isMonthly ? this.state.cart.items[0].PledgeAmount : 0
        const ShipTo = this.state.shipping ? "Yes" : "No"
        const multipleDonations = () => this.state.cart.items.map(({DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail, PledgeAmount})=> {return {DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail, PledgeAmount}})
        const MultipleDonations = multipleDonations();
        let data = {
                Address1,
                Address2,
                APIAccessID: this.state.env[0],
                City,
                Clublevel,
                Country,
                DonationType,
                Emailaddress,
                Firstname,
                IsRecurringCreditCardDonation,
                Lastname,
                Monthlypledgeamount,
                Monthlypledgeday,
                MotivationText,
                MultipleDonations,
                Phoneareacode: "555", //update later
                Phoneexchange: "555", //update later
                Phonenumber: "1212", //update later
                SectionName: '700Club', // what is this???
                ShipTo,
                Singledonationamount,
                State,
                Title,
                TransactionType,
                UrlReferer: this.state.env[1],
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
        // console.log({MultipleDonations: data.MultipleDonations})
        axios({
            method: 'POST',
            url: "http://SecureGiving.cbn.local/api/contribution",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            data
        }).then(response=>{
            const msg = response.data;
            // console.log({msg})
            self.props.submitForm({msg, data})
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
        });
    }

    calculateTotal() {

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
     * Function to validate the input fields of the form
     * @param {Boolean} submitting - current state of the form, true if being submitted
     * @param {String} name - name of the input being validated
     * @param {*} value - String, Number or Boolean of value from the input
     * @returns {String} - an empty String if no errors, else a string with a single error message
     */
    validateInput(submitting, name, value) {
        let error = '';
        const { international, shipping } = this.state;
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
                if(!value && submitting && shipping) {
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
                if (!value && shipping && submitting) {
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
                } else if (value && zip_regex.test(value)) {
                    const url = `http://Services.cbn.local/AddressValidation/CityStatebyZip.aspx?PostalCode=${value}`
                    axios.get(url)
                        .then(response=>{
                            // console.log(response.data)
                            const {returnCode, returnMessage, city, state, zip} = response.data;
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
                        });
                } else if (!value && submitting && shipping && name == "ShipToZip") {
                    error = "Required"
                } else if (!value && submitting && name == "Zip") {
                    error = "Required"
                }
                break;
        }
        return error
    }

    render() {
        return (
            <form id="react-form" autoComplete="off" onSubmit={this.handleSubmit}>
                <div styleName="form.form-panel">
                    <div styleName="form.gift-choice">
                        <GivingArray 
                            arrayOptions={this.state.arrayOptions} 
                            monthlyChecked={this.state.monthlyChecked} 
                            addToCart={this.addToCart}
                            hydratedAmount={this.state.hydratedAmount}
                            hydratedMonthly={this.state.hydratedMonthly}
                        />
                        <div styleName="form.error form.amount-error">{this.state.errors.amount}</div>
                    </div>

                    { this.state.monthlyOption ? this.renderMonthlyRadio(this.state.monthlyChecked, this.state.fields.Monthlypledgeday) : null }
                </div>
                <div styleName={this.state.productOptions.numProducts ? "form.form-panel" : "form.form-panel main.hidden"}>
                    <ProductDisplay 
                        productOptions={this.state.productOptions} 
                        addToCart={this.addToCart}
                    />
                </div>
                <div styleName="form.form-panel">
                    <div styleName="form.nameAddressInfo">

                        <h3 styleName="main.caps form.form-header">Please Enter Your Billing Information</h3>

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
                                />
                                <div styleName="form.error">{this.state.errors.Lastname}</div>

                            </div>
                        </div>

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
                                        />
                                        <div styleName="form.error">{this.state.errors.phone}</div>
                                    </div>
                                ) : null 
                            }
                        </div>
                        { this.state.shipping ? this.renderShippingAddress(this.state.fields.ShipToYes) : null }                    
                    </div>
                    <div styleName="form.formRow flex.flex flex.flex-row flex.flex-axes-center">

                        
                        <input type='checkbox' styleName="form.checkboxInput"
                            id="savePersonalInfo" 
                            name="savePersonalInfo"
                            checked={this.state.fields.saveInfo} 
                            onChange={this.handleInputChange}
                        />
                        <label id="RememberMe" htmlFor="savePersonalInfo">&nbsp;Remember my name and address next time</label>     

                    </div>
                    <div styleName="flex.flex flex.flex-center flex.flex-wrap flex.flex-axes-center">
                        <input type="submit" styleName="form.submitButton" id="submit" onClick={this.handleSubmit} disabled={this.state.submitting} value="Continue to Payment &#10142;"/>
                    </div>
                    <div id="seals"></div>
                </div>
            </form>

        )
    }
}