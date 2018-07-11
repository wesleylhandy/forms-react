import React, { Component } from 'react'

import { cryptCookie } from './helpers/crypt'

import main from './styles/main.css'
import form from './styles/form.css'

export default class ConfirmationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: props.formData,
            formAction: props.formAction,
        }
    }

    componentDidMount() {
        const {formData} = this.props;
        const lifetime = 60 * 1000; // 60 seconds * 1000 milliseconds
        const cookie = cryptCookie({formData, lifetime})
        localStorage.setItem("cookie", cookie);

        document.forms.hiddenform.submit.click();
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        const {formData} = this.state;
        const keys = Object.keys(formData)
        const inputs = keys.map((k,i)=><input key={i + "-" + k} name={k} value={formData[k]} type="hidden"/>)
        return ( 
            <div>
                <form id="hiddenform" styleName="main.hidden" action={this.state.formAction} method="POST" target="paymentprocess">
                    {inputs}
                    <input id="submit" type="submit" hidden/>
                </form>
                <iframe styleName="form.form-panel" name="paymentprocess" width="100%" height="1000px"></iframe>
            </div>
        )
    }
}