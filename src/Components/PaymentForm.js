import React, {Component} from 'react';

import main from './styles/main.css'
import form from './styles/form.css'

import {cryptCookie} from './helpers/crypt'

export default class PaymentForm extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {formData} = this.props;
        const lifetime = 60 * 1000; // 60 seconds * 1000 milliseconds
        const cookie = cryptCookie({formData, lifetime})
        localStorage.setItem("store", cookie);

        document.forms.hiddenform.submit.click();
    }
    render() {
        const {formData} = this.props;
        const keys = Object.keys(formData)
        const inputs = keys.map((k,i)=><input key={i + "-" + k} name={k} value={formData[k] ? formData[k] : ''} type="hidden"/>)
        return (
            <React.Fragment>
                <form id="hiddenform" styleName="main.hidden" action={this.props.formAction} method="POST" target="paymentprocess">
                    {inputs}
                    <input type='hidden' name="cssVars" value={JSON.stringify(this.props.cssConfig)}/> 
                    <input id="submit" type="submit" hidden/>
                </form>
                <iframe styleName="form.form-panel" name="paymentprocess" width="100%" height="1000px" data-css-vars={JSON.stringify(this.props.cssConfig)}></iframe>
            </React.Fragment>
        )
    }
}
