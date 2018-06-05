import React, {Component} from 'react'

import GivingArray from './GivingArray'
import ProductDisplay from './ProductDisplay'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrayOptions: {
                givingFormat: props.givingFormat,
                monthlyOption: props.monthlyOption,
                monthlyAmounts: [...props.monthlyAmounts],
                singleAmounts: [...props.singleAmounts]
            },
            productOptions: {
                products: [...props.products],
                numProducts: props.numProducts,
                additionalGift: props.additionalGift
            },
            monthlyOption: props.monthlyOption,
            shipping: props.shipping,
            international: props.international,
            showShipping: false,
            monthlyChecked: props.monthlyOption,
            totalGift: 0,
            cart: {
                items: []
            }
        }
        this.renderMonthlyRadio = this.renderMonthlyRadio.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRadioClick = this.handleRadioClick.bind(this)
        this.handleShippingClick = this.handleShippingClick.bind(this)
        this.renderCountry = this.renderCountry.bind(this)
        this.renderShippingAddress = this.renderShippingAddress.bind(this)
        this.handleSaveInfo = this.handleSaveInfo.bind(this)
        this.calculateTotal = this.calculateTotal.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount(){

    }

    renderMonthlyRadio(monthlyChecked) {

        let monthly = monthlyChecked;
        let single = !monthlyChecked;

        function renderCCInfo() {
            const options = []
            for(let i = 2; i <= 28; i++){
                options.push(<option key={"option" + i} value={i}>{i}</option>)
            }
            return (
                <div className="monthly-giving-day">
                    <h5 id="CCDayOfMonth">Charge automatically on day&nbsp;
                        <select id="PM_CC_RECURRING_DAY" name="PM_CC_RECURRING_DAY">
                            {options}
                        </select>
                    &nbsp;each month.</h5>
                </div>   
            )
        }
        return (
            <div id="MonthlyGivingInfo">
                <h3 className="caps">How Often Do You Want to Give This Amount?</h3>

                    <div className='monthly-radio flex flex-row flex-between'>
                        <div id="monthly-group" className='radio-group flex flex-row flex-axes-center'>
                            <input name="monthly" id="monthlygift" type="radio" checked={monthly} onChange={this.handleRadioClick}/>
                            <label htmlFor="monthlygift">Monthly Gift</label>
                        </div>
                        <div id="single-group" className='radio-group flex flex-row flex-axes-center'>
                            <input name="monthly" id="singlegift" type="radio" onChange={this.handleRadioClick} checked={single}/>
                            <label htmlFor="singlegift">Single Gift</label>
                        </div>
                    </div>

                    {monthlyChecked ? renderCCInfo() : null}
            </div>
        )
    }

    renderCountry(type) {
        const id = type == "shipping" ? "shipToCountry" : "country"
        return (
            <div id={`form-field-${id}`} className="form-group flex-grow">
                <label htmlFor={id}>Country<span>*</span></label>
                <select className="form-control " id={id} name={id} required={true}>
                    <option value="">Select</option>
                    <option value="US">USA</option>
                </select>
                <div className="error"></div>
            </div>
        )
    }

    renderShippingAddress() {
        return (
            <div id="ShippingAddressContainer">
                <div className='form-row flex flex-row  flex-axes-center'>

                    
                    <input type='checkbox' id="shipToYes" checked={false} onChange={this.handleShippingClick}/>
                    <label htmlFor="shipToYes">&nbsp;My shipping address is different than my billing address.</label>     

                </div>
                <div id="ShippingAddressInfo" className = {this.state.showShipping ? '' : 'hidden'}>
                    <div id="form-row">
    
                        <div className='flex flex-row flex-center'>
                            <hr className='line'/><div className='divider-title caps'>Shipping Address</div><hr className='line'/>
                        </div>

                    </div>
                    <div className="form-row flex flex-row flex-between">
                        <div id="form-field-shipToName" className="form-group flex-grow">
                            <label htmlFor="shipToName">Name<span>*</span></label>
                            <input className="form-control " type='text' id="shipToName" name="shipToName" placeholder="First and Last Name" required={true}/>
                            <div className="error"></div>
                        </div>
                    </div>
                    <div className="form-row flex flex-row flex-between">
                        <div id="form-field-shipToAddress1" className="form-group flex-grow">
                            <label htmlFor="shipToAddress1">Address<span>*</span></label>
                            <input className="form-control " id="shipToAddress1" type='text' name="shipToAddress1" placeholder="Address*" required={true}/>
                            <div className="error"></div>
                        </div>
                    </div>
                    <div className="form-row flex flex-row flex-between">
                        <div id="form-field-shipToCity" className="form-group flex-grow">
                            <label htmlFor="shipToCity">City<span>*</span></label>
                            <input className="form-control " id="shipToCity" type='text' name="shipToCity" placeholder="City*" required={true}/>
                            <div className="error"></div>
                        </div>
                        <div id="form-field-shipToState" className="form-group flex-grow">
                            <label htmlFor="shipToState">State<span>*</span></label>
                            <select className="form-control " id="shipToState" name="shipToState" required={true}>
                                <option value="">Select</option>
                                <option value="VA">VA</option>
                            </select>
                            <div className="error"></div>
                        </div>
                    </div>
                    <div className="form-row flex flex-row flex-between">
                        <div id="form-field-shipToZip" className="form-group flex-grow">
                            <label htmlFor="shipToZip">Zip<span>*</span>{ this.state.international ? <small style={{fontSize: "10px"}}>(Outside U.S. use NA}</small> : null }</label>
                            <input className="form-control " id="shipToZip" type='text' name="shipToZip" placeholder="Zip*" required={true}/>
                            <div className="error"></div>
                        </div>
                        { this.state.international ? this.renderCountry("shipping") : null }
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
        console.log({items})
        if(e.target.id == "singlegift") {
             this.setState({monthlyChecked: false, cart: {items}})
        } else {
            this.setState({monthlyChecked: true, cart: {items}})
        }
    }

    handleShippingClick(e) {
        this.setState({showShipping: true})
    }

    handleSaveInfo(e) {

    }

    handleSubmit(e) {

    }

    calculateTotal() {

    }

    addToCart(item) {
        const items = this.state.cart.items;
        const found = items.findIndex(el=>el && el.type == "donation")
        if(found > -1) {
            items[found] = item
        } else {
            items.push(item)
        }
        console.log({items})
        this.setState({cart: {items}})
        
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <GivingArray arrayOptions={this.state.arrayOptions} monthlyChecked={this.state.monthlyChecked} addToCart={this.addToCart}/>
                { this.state.monthlyOption ? this.renderMonthlyRadio(this.state.monthlyChecked) : null }
                <ProductDisplay productOptions={this.state.productOptions} addToCart={this.addToCart}/>
                <div id="NameAddressInfo">
                    <h3 className="caps">Please Enter Your Billing Information</h3>
                    <div className="form-row flex flex-row flex-between">
                        <div id="form-field-title" className="form-group flex-grow">
                            <label htmlFor="honorific">Title<span>*</span></label>
                            <select className="form-control " id="honorific" name='honorific' required={true} placeholder="Title*">
                                <option value="">Select</option>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                            </select>
                            <div className="error"></div>
                        </div>
                        <div id="form-field-firstname" className="form-group flex-grow">
                            <label htmlFor="firstname">First Name<span>*</span></label>
                            <input className="form-control " type='text' id="firstname" name="firstname" placeholder="First Name*" required={true}/>
                            <div className="error"></div>
                        </div>
                        <div id="form-field-lastname" className="form-group flex-grow">
                        <label htmlFor="lastname">Last Name<span>*</span></label>
                            <input className="form-control " id="lastname" type='text' name="lastname" placeholder="Last Name*" required={true}/>
                            <div className="error"></div>
                        </div>
                        
                    </div>
                    <div className="form-row flex flex-row flex-between">
                        <div id="form-field-address1" className="form-group flex-grow">
                            <label htmlFor="address1">Address<span>*</span></label>
                            <input className="form-control " id="address1" type='text' name="address1" placeholder="Address*" required={true}/>
                            <div className="error"></div>
                        </div>
                    </div>
                    <div className="form-row flex flex-row flex-between">
                        <div id="form-field-city" className="form-group flex-grow">
                            <label htmlFor="city">City<span>*</span></label>
                            <input className="form-control " id="city" type='text' name="city" placeholder="City*" required={true}/>
                            <div className="error"></div>
                        </div>
                        <div id="form-field-state" className="form-group flex-grow">
                            <label htmlFor="state">State<span>*</span></label>
                            <select className="form-control " id="state" name="state" required={true}>
                                <option value="">Select</option>
                                <option value="VA">VA</option>
                            </select>
                            <div className="error"></div>
                        </div>
                    </div>
                    <div className="form-row flex flex-row flex-between">
                        <div id="form-field-zip" className="form-group flex-grow">
                            <label htmlFor="zip">Zip<span>*</span>{ this.state.international ? <small style={{fontSize: "10px"}}>(Outside U.S. use NA}</small> : null }</label>
                            <input className="form-control " id="zip" type='text' name="zip" placeholder="Zip*" required={true}/>
                            <div className="error"></div>
                        </div>
                        { this.state.international ? this.renderCountry("") : null }
                    </div>
                    <div className="form-row flex flex-row flex-between">
                        <div id="form-field-email" className="form-group flex-grow">
                            <label htmlFor="email">Email Address<span>*</span></label>
                            <input id="email" type='email' name="email" placeholder="Email Address*" required={true} className="form-control "/>
                            <div className="error"></div>
                        </div>
                        <div id="form-field-phone" className="form-group flex-grow">
                            <label htmlFor="phonenumber">Phone Number</label>
                            <input id="phonenumber" className="form-control " type='phonenumber' name="phonenumber" placeholder="###-###-####"/>
                            <div className="error"></div>
                        </div>
                    </div>
                    { this.state.shipping ? this.renderShippingAddress() : null }                    
                </div>
                <div className='form-row flex flex-row  flex-axes-center'>

                    
                    <input type='checkbox' id="savePersonalInfo" checked={true} onChange={this.handleSaveInfo}/>
                    <label id="RememberMe" htmlFor="savePersonalInfo">&nbsp;Remember my name and address next time</label>     

                </div>
                <div className="SubmitButton flex flex-center flex-wrap flex-axes-center">
                    <button id="submit" onClick={this.handleSubmit}>Continue to Payment &#10142;</button>
                </div>
                <div id="seals"></div>
            </form>

        )
    }
}