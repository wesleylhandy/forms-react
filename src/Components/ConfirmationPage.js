import React, { Component } from 'react'
import 'whatwg-fetch'

import PaymentForm from './PaymentForm'
import Spinner from './Spinner'

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
    }

    componentDidMount() {

        window.addEventListener('beforeunload', handleUnload)
        window.addEventListener('message', this.handleMessage, false)   

        fetch('http://10.100.43.50:8080/globals')
        .then(checkStatus)
        .then(parseJSON)
        .then(json=>{
            const {devServicesUri,preProdServicesUri,prodServicesUri,devReceiptUri,preProdReceiptUri,prodReceiptUri} = json
            this.setState({ready: true, devServicesUri, devReceiptUri, preProdServicesUri, preProdReceiptUri, prodServicesUri, prodReceiptUri})
        }).catch(logError)
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