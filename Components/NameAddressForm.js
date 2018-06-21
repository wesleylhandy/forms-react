import React, {Component} from 'react'
import axios from 'axios'

import main from './styles/main.css'
import flex from './styles/flex.css'
import form from './styles/form.css'

import GivingArray from './GivingArray'
import ProductDisplay from './ProductDisplay'

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
                                <option value="VA">VA</option>
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
                                    <option value="US">USA</option>
                                </select>
                                <div styleName="form.error">{this.state.errors.ShipToCountry}</div>

                            </div> 
                        ): null }

                    </div>
                </div>
            </div>
        )
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
                MultipleDonations: multipleDonations(),
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
            console.log({msg})
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
        console.log({items})
        this.setState({cart: {items}})
        
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
                                <option value="VA">VA</option>
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
                                    <option value="US">USA</option>
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
                    <button styleName="form.submitButton" id="submit" onClick={this.handleSubmit} disabled={this.state.submitting}>Continue to Payment &#10142;</button>
                </div>
                <div id="seals"></div>
            </form>

        )
    }
}