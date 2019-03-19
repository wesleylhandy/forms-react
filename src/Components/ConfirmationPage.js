import React, { Component, Fragment } from 'react'
// import shortid from 'shortid'

import PaymentForm from './PaymentForm'
import Spinner from './Spinner'

import {callApi} from './helpers/fetch-helpers'

function handleUnload(e){
    e.returnValue = "Are you sure you want to go back?\n You may lose all your changes to this page."
    return "Are you sure you want to go back?\n You may lose all your changes to this page."
}

class ConfirmationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            confirmationSubmitted: false,
            msgUris: []
        }
        this.getGlobals = this.getGlobals.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
        this.reRenderForm = this.reRenderForm.bind(this)
        this.renderReceiptPage = this.renderReceiptPage.bind(this)
    }

    componentDidMount() {

        window.addEventListener('beforeunload', handleUnload)
        window.addEventListener('message', this.handleMessage, false)   
        try {
            this.getGlobals();
        } catch (err) {
            console.error({err})
        }
        
    }

    async getGlobals() {
        const isSecure = window.location.protocol == "https:"
        const url = !isSecure ? 'http://securegiving.cbn.local/UI/globals/form-config.json' : 'https://securegiving.cbn.com/UI/globals/form-config.json'
        try {
            const {devServicesUri,preProdServicesUri,prodServicesUri,devReceiptUri,preProdReceiptUri,prodReceiptUri} = await callApi(url)
            this.setState({ready: true, msgUris: [devServicesUri, devReceiptUri, preProdServicesUri, preProdReceiptUri, prodServicesUri, prodReceiptUri]})
        } catch (err) {
            console.error({err});
        }
    }

    handleMessage(e) {
        const { type, tracking_vars } = e.data && typeof e.data == "string" ? JSON.parse(e.data) : {}
        const types = ["go back clicked", "render receipt", "confirmation submitted", "form error"]
        if (!types.includes(type)) {
            return;
        } 
        const {origin} = e;
        const isOrigin = this.state.msgUris.includes(origin)
        if (!isOrigin) {
            return
        }
        switch(type) {
            case "go back clicked" :
                this.reRenderForm(this.props.formData);
                break;
            case "render receipt":
                this.renderReceiptPage(tracking_vars);
                break;
            case "confirmation submitted":
                // console.log(type)
                this.setState({confirmationSubmitted: true})
                break;
            case "form error" :
                this.setState({confirmationSubmitted: false});
                break;
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
        if (this.state.ready !== nextState.ready || this.state.confirmationSubmitted !== nextState.confirmationSubmitted) {
            return true
        }
        return false
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', handleUnload)
        window.removeEventListener('message', this.handleMessage)
    }

    render() {
        const { 
            ready, 
            confirmationSubmitted, 
        } = this.state
        const {
            cssConfig, 
            formAction, 
            formData
        } = this.props
        // const cacheToken = shortid.generate();
        return ( 
            <Fragment>
                { 
                    ready ? (
                        <PaymentForm cssConfig={cssConfig} formAction={formAction} formData={formData} confirmationSubmitted={confirmationSubmitted}/>  
                    ) : <Spinner />
                }            
            </Fragment>
        )
    }
}

export default ConfirmationPage