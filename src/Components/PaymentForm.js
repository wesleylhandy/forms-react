import React, {Component} from 'react';

import main from './styles/main.css'
import form from './styles/form.css'

import {crypt} from './helpers/crypt'

export default class PaymentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formAction: props.formAction,
            cssConfig: props.cssConfig
        }
    }
    componentDidMount() {
        const {formData} = this.props;
        const lifetime = 60 * 1000; // 60 seconds * 1000 milliseconds
        const cookie = crypt({formData, lifetime})
        localStorage.setItem("store", cookie);

        document.forms.hiddenform.submit.click();
    }
    render() {
        const {formData} = this.props;
        const keys = Object.keys(formData)
        const inputs = keys.map((k,i)=><input key={i + "-" + k} name={k} value={formData[k] ? formData[k] : ''} type="hidden"/>)
        // console.log(JSON.stringify(this.props.cssConfig))
        return (
            <React.Fragment>
                <form id="hiddenform" styleName="main.hidden" action={this.state.formAction} method="POST" target="paymentprocess">
                    {inputs}
                    <input type='hidden' name="cssVars" value={JSON.stringify(this.state.cssConfig)}/> 
                    <input id="submit" type="submit" hidden/>
                </form>
                <iframe styleName="form.form-panel" name="paymentprocess" width="100%" height="1000px"></iframe>
            </React.Fragment>
        )
    }
}
