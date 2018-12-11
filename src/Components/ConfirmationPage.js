import React, { Component } from 'react'

import PaymentForm from './PaymentForm'
import Spinner from './Spinner'

import {callApi} from './helpers/fetch-helpers'

function handleUnload(e){
    e.returnValue = "Are you sure you want to go back?\n You may lose all your changes to this page."
    return "Are you sure you want to go back?\n You may lose all your changes to this page."
}

function handleUnload(e){
    e.returnValue = "Are you sure you want to go back?\n You may lose all your changes to this page."
    return "Are you sure you want to go back?\n You may lose all your changes to this page."
}

class ConfirmationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: props.mode,
            cssConfig: props.cssConfig,
            formData: props.formData,
            formAction: props.formAction,
            ready: false
        }
        this.getGlobals = this.getGlobals.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
        this.reRenderForm = this.reRenderForm.bind(this)
        this.renderReceiptPage = this.renderReceiptPage.bind(this)
    }

    componentDidMount() {

        window.addEventListener('beforeunload', handleUnload)
        window.addEventListener('message', this.handleMessage, false)   
        this.getGlobals();
        
    }

    async getGlobals() {
        const url = this.state.mode == "development" ? 'http://securegiving.cbn.local/UI/globals/form-config.json' : 'https://securegiving.cbn.com/UI/globals/form-config.json'
        try {
            const {devServicesUri,preProdServicesUri,prodServicesUri,devReceiptUri,preProdReceiptUri,prodReceiptUri} = await callApi(url)
            this.setState({ready: true, devServicesUri, devReceiptUri, preProdServicesUri, preProdReceiptUri, prodServicesUri, prodReceiptUri})
        } catch (err) {
            console.error(err);
        }
    }

    handleMessage(e) {
        const data = e.data ? JSON.parse(e.data) : {}
        if (data.type !== "go back clicked" && data.type !=="render receipt") {
            return;
        } 
        const {origin} = e;
        const isOrigin = this.state.mode == "development" ? origin == this.state.devServicesUri || origin == this.state.preProdServicesUri : origin == this.state.prodServicesUri;
        if (!isOrigin) {
            return
        }
        if (data.type === "go back clicked") {
            this.reRenderForm(this.state.formData);
        } else if (data.type === "render receipt") {
            // console.log('Render Receipt')
            // console.log({tracking_vars:data.tracking_vars})
            this.renderReceiptPage(data.tracking_vars);
        }
        return;
    }

    reRenderForm(data) {
        this.props.hydrateForm(data);
    }

    renderReceiptPage(varsArray) {
        this.props.renderReceiptPage(varsArray);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.ready !== nextState.ready) {
            return true
        }
        return false
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', handleUnload)
        window.removeEventListener('message', this.handleMessage)
    }

    render() {

        return ( 
            <React.Fragment>
            { this.state.ready ? (
                    <PaymentForm cssConfig={this.state.cssConfig} formAction={this.state.formAction} formData={this.state.formData}  />                
                ) : (
                    <Spinner />
                )
            }
            </React.Fragment>
        )
    }
}

export default ConfirmationPage