import React, { Component } from 'react'
import axios from 'axios'

import checkValues, {checkDigits, checkExpDate} from './helpers/cc-validation'
import main from './styles/main.css'
import flex from './styles/flex.css'
import form from './styles/form.css'

const ccVisa = require('./images/cc-Visa.gif')
const ccMasterCard = require('./images/cc-MasterCard.gif')
const ccDiscover = require('./images/cc-Discover.gif')
const ccAmericanExpress = require('./images/cc-AE.gif')

export default class ConfirmationPage extends Component {
    constructor(props) {
        super(props);
        const d = new Date();
        const curMonth = "0" + (d.getMonth() + 1);
        const curYear = d.getFullYear();
        this.state = {
            confirmationData: props.confirmationData,
            curYear: curYear,
            formData: props.formData,
            formAction: props.formAction,
            ccChecked: null,
            fields: {
                ExpiresMonth: curMonth.slice(-2),
                ExpiresYear: curYear,
                ccNumber: ""
            },
            errors: {
                ExpiresMonth: null,
                ExpiresYear: null,
                ccNumber: null
            },
            submitting: false
        }
        this.createMarkup = this.createMarkup.bind(this)
        this.assignValues = this.assignValues.bind(this)
        this.renderProductSummary = this.renderProductSummary.bind(this)
        this.renderCCInput = this.renderCCInput.bind(this)
        this.handleRadioClick = this.handleRadioClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.getCardType = this.getCardType.bind(this)
        this.getMainURL = this.getMainURL.bind(this)
        this.validateInput = this.validateInput.bind(this)
    }

    assignValues(e) {
        if (this.state.submitting) return e.preventDefault();// ie. disallow multiple submissions
        this.setState({submitting: true})
        
        let redirURL = this.getMainURL();

        if (redirURL == "" || redirURL == "undefined") {
            redirURL = 'http://www.cbn.com';
        }
        //set timeout if url does not respond in timely manner
        const timeout = setTimeout(function() {
                window.location.href = redirURL; return false;
            }, 15000);

        const {ccNumber, ExpiresYear, ExpiresMonth} = this.state.fields
        const cardType = this.state.ccChecked
        const isValid = checkValues(cardType, ccNumber, ExpiresMonth, ExpiresYear)
        if (isValid.passes) {
            document.querySelector('input[name="card_type"]').value = isValid.ccCardTyp
            document.querySelector('input[name="card_number"]').value = isValid.ccNum
            document.querySelector('input[name="card_expiry_date"]').value = isValid.ccExpDate
            if (isValid.transactionType) {
                document.querySelector('input[name="transaction_type"]').value = isValid.transactionType
                document.querySelector('input[name="signature"]').value = document.querySelector('input[name="signatureDis"]').value
            }
            /** for development testing **/
            const bodyFormData = new FormData();
            const data = document.querySelectorAll('form>input[type="hidden"]');
            data.forEach(datum=> bodyFormData.set(datum.name, datum.value))
            console.log({bodyFormData})
            //cancel redirect
            clearTimeout(timeout)
            // bubble formaction
            return true
        } else {
            // handle validation errors
            const validationErrors = isValid.errors
            const errors = this.state.errors
            validationErrors.forEach(vErr=>errors[vErr.type] = vErr.error)
            this.setState({errors, submitting: false})
            // cancel redirect
            clearTimeout(timeout)
            //cancel bubble
            return e.preventDefault();
        }
    }

    getMainURL() {
        var retnURL = "";
        var mainurlStr = document.querySelector("input[name='mainURL']").value;
        
        if (mainurlStr != "" && mainurlStr != "undefined") {
            if (mainurlStr.indexOf("?") > 0) {
                retnURL = mainurlStr + "&error=gen";
            } else {
                retnURL = mainurlStr + "?error=gen";
            }
        }

        return retnURL;
    }

    createMarkup(text) {
         return { __html: text }
    }

    renderCardInputs(checked){
        const cardInputs = [1, 2, 3, 4].map((num)=><div key={num} styleName="form.formRow flex.flex flex.flex-row flex.flex-axes-center">{this.renderCCInput(num, checked)}</div>)
        return <div>{cardInputs}</div>
    }

    renderCCInput(num, checked) {
        num = "00" + num
        const {cardType, visible, src} = this.getCardType(num)
        return (
            <div styleName="flex.flex flex.flex-row flex.flex-left flex.flex-axes-center">
                <img styleName="form.cc-img" src={src}/>
                <div id={`${cardType}-group`} styleName="flex.flex flex.flex-row flex.flex-axes-center form.radioGroup">
                    <input styleName="form.radioInput" name="creditcardoption" id={num} type="radio" checked={num == checked ? true: false} onChange={this.handleRadioClick}/>
                    <label htmlFor={num}>{visible}</label>
                </div>
            </div>
        )
    }

    /**
     * 
     * @param {string} num - 3 digits representing cc ['001', '002', '003', or '004']
     * @returns {Object} cardType, visible, src 
     */
    getCardType(num) {
        let cardType = "Visa";
        let visible = cardType;
        let src = ccVisa;

        switch(num) {
            case "001": 
                cardType = 'Visa'
                visible = cardType
                src = ccVisa
                break;
            case "002":
                cardType = 'MasterCard'
                visible = cardType
                src = ccMasterCard
                break;
            case "003":
                cardType = "AmericanExpress"
                visible = "American Express"
                src = ccAmericanExpress
                break;
            case "004":
                cardType = "Discover"
                visible = cardType
                src = ccDiscover
                break;
        }

        return {cardType, visible, src}
    }

    handleRadioClick(e) {
        this.setState({ccChecked: e.target.id})
    }

    handleInputChange(e) {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const errors = this.state.errors;

        const error = this.validateInput(name, value);
        errors[name] = error
        
        const fields = this.state.fields;
        fields[name] = value;

        this.setState({ fields, errors });
    }

    validateInput(name, value) {
        let error = '';
        switch(name) {
            case "ccNumber":
                if (value.length > 16) {
                    error = "Maximum digits allowed is reached"
                } else if(!checkDigits(value)) {
                    error = "Please enter a valid Credit Card number"
                }
                if (value.length && value[0] >= 3 && value[0] <= 6){
                    this.setState({ccChecked: "00" + value})
                }
                break;
            case "ExpiresMonth":
                if(!checkExpDate(this.state.fields.ExpiresYear, value)) {
                    error = "Please select a valid expiration date."
                }
                break;
            case "ExpiresYear":
                if(!checkExpDate(value, this.state.field.ExpiresMonth)) {
                    error = "Please select a valid expiration date."
                }
                break;
        }
        return error
    }

    renderProductSummary(data) {
        /** TO DO **/
        return null
    }

    render() {
        const formInputs = [], dataInputs=[], years =[];
        this.state.confirmationData.forEach((datum,i)=>{
            if (datum.name.includes("ucConfirmBody")) {
                name=datum.name.split("$")[1];
                dataInputs.push(<input key={`datum${i}`} name={name} defaultValue={datum.value ? datum.value : ""} hidden={true}/>)
            } else {
                formInputs.push(<input key={`datum${i}`} name={datum.name} defaultValue={datum.value ? datum.value: ""} hidden={true}/>)
            }
        })
        for (let i = this.state.curYear; i < this.state.curYear + 25; i++) {
            years.push(<option key={"year-option" + i} value={i}>{i}</option>)
        }
        return ( 
            <div>
                <form action={this.state.formAction} method="POST" onSubmit={this.assignValues}>
                    <div className="mboxDefault">
                        <h2 styleName="main.caps form.form-header">Almost Done!</h2>
                        <h3>Enter Payment Information and click <br />
                        "<strong>Finish Donation</strong>" below.
                        </h3>
                    </div>
                    <div styleName="form.form-subheader">Card Type*</div>
                    {this.renderCardInputs(this.state.ccChecked)}
                    <div styleName="form.form-subheader">Card Info*</div>
                    <div styleName="form.formRow flex.flex flex.flex-row flex.flex-between">
                        <div id="form-field-ccNumber" styleName="form.formGroup flex.flex-grow">
                            <label htmlFor="ccNumber">Number<span>*</span></label>
                            <input styleName="form.formControl" 
                                type='text' 
                                id="ccNumber" 
                                name="ccNumber" 
                                placeholder="####################" 
                                required={true}
                                value={this.state.fields.ccNumber}
                                onChange={this.handleInputChange}
                            />
                            <div styleName="form.error">{this.state.errors.ccNumber}</div>
                        </div>
                    </div>
                    <div styleName="form.formRow flex.flex flex.flex-row flex.flex-left">
                        <div id="form-field-expMonth" styleName="form.formGroup flex.flex-grow">
                            <label htmlFor="ExpiresMonth">Month<span>*</span></label>
                            <select styleName="form.formControl" 
                                name="ExpiresMonth"
                                required={true} 
                                id="ExpiresMonth" 
                                value={this.state.fields.ExpiresMonth} 
                                onChange={this.handleInputChange}
                            >
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <div styleName="form.error">{this.state.errors.ExpiresMonth}</div>
                        </div>
                        <div id="form-field-expYear" styleName="form.formGroup flex.flex-grow">
                            <label htmlFor="ExpiresYear">Year<span>*</span></label>
                                <select styleName="form.formControl" 
                                    name="ExpiresYear"
                                    required={true} 
                                    id="ExpiresYear" 
                                    value={this.state.fields.ExpiresYear} 
                                    onChange={this.handleInputChange}
                                >
                                    {years}
                                </select>
                                <div styleName="form.error">{this.state.errors.ExpiresYear}</div>
                            </div>
                        </div>
                    {this.renderProductSummary(this.state.formData)}
                    {formInputs}
                    <div styleName="form.SubmitButton flex.flex flex.flex-center flex.flex-wrap flex.flex-axes-center">
                        <input type="submit" styleName="form.submitButton" id="submit" disabled={this.state.submitting} value="Finish Donation &#10142;"/>
                    </div>
                    <div id="seals"></div>
                </form>
                {dataInputs}
            </div>
        )
    }
}