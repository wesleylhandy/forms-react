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
usTerritories = [["American Samoa", "AS"],["Federated States Of Micronesia", "FM"],["Guam", "GU"],["Marshall Islands", "MH"],["Palau", "PW"],["Northern Mariana Islands", "MP"],["Puerto Rico", "PR"],["Virgin Islands", "VI"],["Other", "00"]],
countries = [["Afghanistan", "AF"],["Aland Islands", ""],["Albania", "AL"],["Algeria", "DZ"],["American Samoa", "AS"],["Andorra", "AD"],["Angola", "AO"],["Anguilla", "AI"],["Antigua and Barbuda", "AG"],["Argentina", "AR"],["Armenia", "AM"],["Aruba", "AW"],["Australia", "AU"],["Austria", "AT"],["Azerbaijan", "AZ"],["Bahamas", "BS"],["Bahrain", "BH"],["Bangladesh", "BD"],["Barbados", "BB"],["Belarus", "BY"],["Belgium", "BE"],["Belize", "BZ"],["Benin", "BJ"],["Bermuda", "BM"],["Bhutan", "BT"],["Bolivia", "BO"],["Bosnia and Herzegovina", "BA"],["Botswana", "BW"],["Brazil", "BR"],["British Virgin Islands", "VG"],["Brunei Darussalam", "BN"],["Bulgaria", "BG"],["Burkina Faso", "BF"],["Burundi", "BI"],["Cambodia", "KH"],["Cameroon", "CM"],["Canada", "CA"],["Cape Verde", "CV"],["Cayman Islands", "KY"],["Central African Republic", "CF"],["Chad", "TD"],["Channel Islands", ""],["Chile", "CL"],["China", "CN"],["Hong Kong Spcl. Admin. Region of China", "CN"],["Macao Spcl. Admin. Region of China", "MO"],["Colombia", "CO"],["Comoros", "KM"],["Congo", "CG"],["Cook Islands", "CK"],["Costa Rica", "CR"],["C�te d\'Ivoire", ""],["Croatia", "HR"],["Cuba", "CU"],["Cyprus", "CY"],["Czech Republic", "CZ"],["Democratic People\'s Rep. of Korea", "KR"],["Democratic Republic of the Congo", "CG"],["Denmark", "DK"],["Djibouti", "DJ"],["Dominica", "DM"],["Dominican Republic", "DO"],["Ecuador", "EC"],["Egypt", "EG"],["El Salvador", "SV"],["Equatorial Guinea", "GQ"],["Eritrea", "ER"],["Estonia", "EE"],["Ethiopia", "ET"],["Faeroe Islands", "FO"],["Falkland Islands (Malvinas)", "FK"],["Fiji", "FJ"],["Finland", "FI"],["France", "FR"],["French Guiana", "GF"],["French Polynesia", "PF"],["Gabon", "GA"],["Gambia", "GM"],["Georgia", "GE"],["Germany", "DE"],["Ghana", "GH"],["Gibraltar", "GI"],["Greece", "GR"],["Greenland", "GL"],["Grenada", "GD"],["Guadeloupe", "GP"],["Guam", "GU"],["Guatemala", "GT"],["Guinea", "GN"],["Guinea-Bissau", "GW"],["Guyana", "GY"],["Haiti", "HT"],["Holy See", ""],["Honduras", "HN"],["Hungary", "HU"],["Iceland", "IS"],["India", "IN"],["Indonesia", "ID"],["Iran (Islamic Republic of)", "IR"],["Iraq", "IQ"],["Ireland", "IE"],["Isle of Man", ""],["Israel", "IL"],["Italy", "IT"],["Jamaica", "JM"],["Japan", "JP"],["Jordan", "JO"],["Kazakhstan", "KZ"],["Kenya", "KE"],["Kiribati", "KI"],["Kuwait", "KW"],["Kyrgyzstan", "KG"],["Lao People\'s Democratic Republic", "LA"],["Latvia", "LV"],["Lebanon", "LB"],["Lesotho", "LS"],["Liberia", "LR"],["Libyan Arab Jamahiriya", "LY"],["Liechtenstein", "LI"],["Lithuania", "LT"],["Luxembourg", "LU"],["Madagascar", "MG"],["Malawi", "MW"],["Malaysia", "MY"],["Maldives", "MV"],["Mali", "ML"],["Malta", "MT"],["Marshall Islands", "MH"],["Martinique", "MQ"],["Mauritania", "MR"],["Mauritius", "MU"],["Mayotte", ""],["Mexico", "MX"],["Micronesia (Federated States of)", "FM"],["Monaco", "MC"],["Mongolia", "MN"],["Montserrat", "MS"],["Morocco", "MA"],["Mozambique", "MZ"],["Myanmar", "MM"],["Namibia", "NA"],["Nauru", "NR"],["Nepal", "NP"],["Netherlands", "NL"],["Netherlands Antilles", "AN"],["New Caledonia", "NC"],["New Zealand", "NZ"],["Nicaragua", "NI"],["Niger", "NE"],["Nigeria", "NG"],["Niue", "NU"],["Norfolk Island", "NF"],["Northern Mariana Islands", "MP"],["Norway", "NO"],["Occupied Palestinian Territory", ""],["Oman", "OM"],["Pakistan", "PK"],["Palau", "PW"],["Panama", "PA"],["Papua New Guinea", "PG"],["Paraguay", "PY"],["Peru", "PE"],["Philippines", "PH"],["Pitcairn", "PN"],["Poland", "PL"],["Portugal", "PT"],["Puerto Rico", "PR"],["Qatar", "QA"],["Republic of Korea", "KR"],["Republic of Moldova", "MD"],["R�union", "RE"],["Romania", "RO"],["Russian Federation", "RU"],["Rwanda", "RW"],["Saint Helena", "SH"],["Saint Kitts and Nevis", "KN"],["Saint Lucia", "LC"],["Saint Pierre and Miquelon", "PM"],["Saint Vincent and the Grenadines", "VC"],["Samoa", "WS"],["San Marino", "SM"],["Sao Tome and Principe", "ST"],["Saudi Arabia", "SA"],["Senegal", "SN"],["Serbia and Montenegro", "RS"],["Seychelles", "SC"],["Sierra Leone", "SL"],["Singapore", "SG"],["Slovakia", "SK"],["Slovenia", "SI"],["Solomon Islands", "SB"],["Somalia", "SO"],["South Africa", "ZA"],["Spain", "ES"],["Sri Lanka", "LK"],["Sudan", "SD"],["Suriname", "SR"],["Svalbard and Jan Mayen Islands", "SJ"],["Swaziland", "SZ"],["Sweden", "SE"],["Switzerland", "CH"],["Syrian Arab Republic", "SY"],["Taiwan", "TW"],["Tajikistan", "TJ"],["Thailand", "TH"],["The former Yugoslav Rep. of Macedonia", "MK"],["Timor-Leste", "TL"],["Togo", "TG"],["Tokelau", "TK"],["Tonga", "TO"],["Trinidad and Tobago", "TT"],["Tunisia", "TN"],["Turkey", "TR"],["Turkmenistan", "TM"],["Turks and Caicos Islands", "TC"],["Tuvalu", "TV"],["Uganda", "UG"],["Ukraine", "UA"],["United Arab Emirates", "AE"],["United Kingdom", "GB"],["United Republic of Tanzania", "TZ"],["United States", "US"],["United States Virgin Islands", "VI"],["Uruguay", "UY"],["Uzbekistan", "UZ"],["Vanuatu", "VU"],["Venezuela", "VE"],["Viet Nam", "VN"],["Wallis and Futuna Islands", "WF"],["Western Sahara", "EH"],["Yemen", "YE"],["Zambia", "ZM"],["Zimbabwe", "ZW"]]

export default class NameAddressForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            env: [process.env.alpha, process.env.bravo],
            ClientBrowser: "",
            ClientIP: "10.100.43.50", //obtain this from server somehow
            MotivationText: props.MotivationText,
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
            monthlyChecked: props.monthlyOption,
            totalGift: 0,
            Clublevel: '',
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
                Monthlypledgeday: new Date().getDate(),
                Title: "",
                Firstname: "",
                Lastname: "",
                Address1: "",
                Address2: "",
                City: "",
                State: "",
                Zip: "",
                Country: props.international ? "" : "United States",
                Emailaddress: "",
                phone: "",
                savePersonalInfo: true,
                ShipToYes: false,
                ShipToName: "",
                ShipToAddress1: "",
                ShipToAddress2: "",
                ShipToCity: "",
                ShipToZip: "",
                ShipToState: "",
                ShipToCountry: ""
            },
            errors: {
                Title: "",
                Firstname: "",
                Lastname: "",
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
                ShipToCountry: "",
                amount: ""
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this)
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
    }

    renderMonthlyRadio(monthlyChecked, Monthlypledgeday) {

        let monthly = monthlyChecked;
        let single = !monthlyChecked;
        const self = this;

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

                            <label htmlFor="ShipToAddress2">Address<span>*</span></label>
                            <input styleName="form.formControl" 
                                id="ShipToAddress2" 
                                type='text' 
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

                            <label htmlFor="ShipToZip">Zip<span>*</span>{ this.state.international ? <small style={{fontSize: "10px"}}>(Outside U.S. use NA}</small> : null }</label>
                            <input styleName="form.formControl" 
                                id="ShipToZip" 
                                type='text' 
                                name="ShipToZip" 
                                placeholder="Zip*" 
                                required={true}
                                value={this.state.fields.ShipToZip}
                                onChange={this.handleInputChange}
                            />
                            <div styleName="form.error">{this.state.errors.ShipToZip}</div>

                        </div>

                        { this.state.international ? (
                            <div id="form-field-ShipToCountry" styleName="form.formGroup flex.flex-grow">
                            
                                <label htmlFor="ShipToCountry">Country<span>*</span></label>
                                <select styleName="form.formControl" 
                                    id="ShipToCountry" 
                                    name="ShipToCountry" 
                                    required={true}
                                    value={this.state.fields.ShipToCountry}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="">Country* &#9663;</option>
                                    {countries.map((country, i)=><option key={`country-${i}`} value={country[1]}>{country[0]}</option>)}
                                </select>
                                <div styleName="form.error">{this.state.errors.ShipToCountry}</div>

                            </div> 
                        ): null }

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
        let provinces = null;
        if (international) {
            provinces = renderOptGroup("Canadian Provinces", canadianProvinces)
        }

        optGroups.push(states, military, provinces, territories)

        return optGroups

    }

    /**
     * Updates cart to remove any selected donations and toggles between monthly and single giving
     * @param {Event} e 
     */
    handleRadioClick(e) {
        const items = this.state.cart.items;
        const found = items.findIndex(el=>el && el.type == "donation")
        if (found > -1) {
            items.splice(found, 1)
        }
        // console.log({items})
        if(e.target.id == "singlegift") {
             this.setState({monthlyChecked: false, cart: {items}})
        } else {
            this.setState({monthlyChecked: true, cart: {items}})
        }
    }

    handleInputChange(e) {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        const fields = this.state.fields;
        fields[name] = value;

        this.setState({ fields });
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

        const {Address1, Address2, City, Country, Emailaddress, Firstname, Lastname, State, Title, Zip, ShipToAddress1, ShipToAddress2, ShipToCity, ShipToState, ShipToZip, ShipToCountry, ShipToName} = this.state.fields
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
        const self = this;
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
        const items = this.state.cart.items;
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

    validateInput(name, value) {
        let error = '';
        switch(name) {

        }
        return error
    }

    render() {
        return (
            <form id="react-form" autoComplete="off" onSubmit={this.handleSubmit}>
                <div styleName="form.gift-choice">
                    <GivingArray 
                        arrayOptions={this.state.arrayOptions} 
                        monthlyChecked={this.state.monthlyChecked} 
                        addToCart={this.addToCart}
                    />
                    <div styleName="form.error form.amount-error">{this.state.errors.amount}</div>
                </div>

                { this.state.monthlyOption ? this.renderMonthlyRadio(this.state.monthlyChecked, this.state.fields.Monthlypledgeday) : null }

                <ProductDisplay 
                    productOptions={this.state.productOptions} 
                    addToCart={this.addToCart}
                />

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

                            <label htmlFor="Address2">Address<span>*</span></label>
                            <input styleName="form.formControl" 
                                id="Address2" 
                                type='text' 
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

                            <label htmlFor="Zip">Zip<span>*</span>{ this.state.international ? <small style={{fontSize: "10px"}}>(Outside U.S. use NA}</small> : null }</label>
                            <input styleName="form.formControl" 
                                id="Zip" 
                                type='text' 
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
                                    {countries.map((country, i)=><option key={`country-${i}`} value={country[1]}>{country[0]}</option>)}
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
                <div styleName="form.SubmitButton flex.flex flex.flex-center flex.flex-wrap flex.flex-axes-center">
                    <input type="submit" styleName="form.submitButton" id="submit" onClick={this.handleSubmit} disabled={this.state.submitting} value="Continue to Payment &#10142;"/>
                </div>
                <div id="seals"></div>
            </form>

        )
    }
}