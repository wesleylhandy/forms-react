import React, { Component } from 'react'
import 'whatwg-fetch'

import main from './styles/main.css'
import form from './styles/form.css'
import spinner from './styles/spinner.css'

import {cryptCookie} from './helpers/crypt'
import logError, {checkStatus, parseJSON} from './helpers/xhr-errors'

function handleUnload(e){
    e.returnValue = "Are you sure you want to go back?\n You may lose all your changes to this page."
    return "Are you sure you want to go back?\n You may lose all your changes to this page."
}

function handleUnload(e){
    e.returnValue = "Are you sure you want to go back?\n You may lose all your changes to this page."
    return "Are you sure you want to go back?\n You may lose all your changes to this page."
}

export default class ConfirmationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cssConfig: props.cssConfig,
            formData: props.formData,
            formAction: props.formAction,
            ready: false
        }
        this.handleMessage = this.handleMessage.bind(this)
        this.reRenderForm = this.reRenderForm.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    componentDidMount() {

        window.addEventListener('beforeunload', handleUnload)
        window.addEventListener('message', this.handleMessage, false)   

        fetch('http://givingservices.cbn.local/ui/globals/form-config.json')
        .then(checkStatus)
        .then(parseJSON)
        .then(json=>{
            const {devServicesUri,preProdServicesUri,prodServicesUri,devReceiptUri,preProdReceiptUri,prodReceiptUrl} = json
            this.setState({ready: true, devServicesUri, devReceiptUri, preProdServicesUri, preProdReceiptUri, prodServicesUri, prodServicesUri})
        });
    }

    submitForm() {
        const {formData} = this.props;
        const lifetime = 60 * 1000; // 60 seconds * 1000 milliseconds
        const cookie = cryptCookie({formData, lifetime})
        localStorage.setItem("cookie", cookie);

        document.forms.hiddenform.submit.click();
    }

    handleMessage(e) {
        if (e.data !== "go back clicked" && e.data !=="render receipt") {
            return;
        } 
        const {origin} = e;
        if (origin !== this.state.devServicesUri && origin !== this.state.preProdServicesUri && origin !== this.state.prodServicesUri) {
            return
        } 
        this.reRenderForm(this.state.formData);
    }

    reRenderForm(data) {
        this.props.hydrateForm(data);
    }

    shouldComponentUpdate() {
        return false
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', handleUnload)
        window.removeEventListener('message', this.handleMessage)
    }

    render() {
        const {formData} = this.state;
        const keys = Object.keys(formData)
        const inputs = keys.map((k,i)=><input key={i + "-" + k} name={k} value={formData[k] ? formData[k] : ''} type="hidden"/>)
        return ( 
            <React.Fragment>
            { this.state.ready ? (
                    <div>
                        <form id="hiddenform" styleName="main.hidden" action={this.state.formAction} method="POST" target="paymentprocess">
                            {inputs}
                            <input type='hidden' name="cssVars" value={JSON.stringify(this.state.cssConfig)}/>
                            <input id="submit" type="submit" hidden/>
                        </form>
                        {this.submitForm()}
                        <iframe styleName="form.form-panel" name="paymentprocess" width="100%" height="1000px" data-css-vars={JSON.stringify(this.state.cssConfig)}></iframe>
                    </div>
                    
                ) : (
                    <div styleName="spinner.loading_spinner">
                        <img styleName="spinner.loading_spinner_flames" src="http://www1.cbn.com/sites/all/themes/cbn_default/images/spinner/cbn-flame-circle.png"/>
                        <img styleName="spinner.loading_spinner_back" src="http://www1.cbn.com/sites/all/themes/cbn_default/images/spinner/loader-spinner@3x.png"/>
                    </div>
                )
            }
            </React.Fragment>
        )
    }
}