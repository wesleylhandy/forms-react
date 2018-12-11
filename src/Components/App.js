import React, { Component } from 'react'

import NameAddressForm from "./NameAddressForm"
import ConfirmationPage from "./ConfirmationPage"
import RedirectForm from './RedirectForm';
import Banner from './Banner'

import styles from './styles/app.module.css'

import {read} from "./helpers/crypt"

class App extends Component {
    constructor(props) {
        super(props)
        let formData = null;
        const store = localStorage.getItem("store")
        const info = localStorage.getItem("info")

        if (store) {
            // console.log({store})
            formData = read(store)
        }
        
        if (formData === null) {
            localStorage.removeItem('store')
            if (info) {
                formData = read(info)
            }
        }

        if (formData === null) {
            localStorage.clear()
        }

        this.state = {
            ...props.config.initialState,
            submitted: false,
            confirmed: false,
            finalized: false,
            confirmationData: null,
            finalizedData: null,
            formAction: null,
            formData: formData,
            donorID: null,
            hydratedData: formData
        }
        this.submitForm = this.submitForm.bind(this)
        this.hydrateForm = this.hydrateForm.bind(this)
        this.renderReceiptPage = this.renderReceiptPage.bind(this)
    }

    submitForm({msg, data}) {
        // console.log(msg)
        const DonorID = msg.split(";")[0].split(" - ")[1]
        const formAction = msg.split(" is ")[1]
        // console.log({DonorID, formAction})
        data.DonorID = DonorID;
        this.setState({submitted: true, formData: data, formAction});
    }

    hydrateForm(data){
        // console.log({data})
        this.setState({submitted: false, hydratedData: data})
    }

    renderReceiptPage(varsArray) {
        this.setState({finalized: true, finalizedData: [...varsArray]})
    }

    render() {
        const { cssConfig } = this.props.config
        const {
            mode, 
            finalized, 
            submitted, 
            thankYouUrl, 
            finalizedData, 
            formData, 
            formAction,
            ...formState
        } = this.state
        return ( 
            <div styleName='styles.form-wrapper' id="react-form-top"> 
                { 
                    mode !== 'production' && (
                        <Banner />
                    ) 
                }
                { 
                    (()=> {
                        if (finalized) {
                            return <RedirectForm thankYouUrl={thankYouUrl} receiptVars={finalizedData} />
                        } else if (submitted) {
                            return <ConfirmationPage 
                                mode={mode}
                                cssConfig={cssConfig}
                                formData={formData} 
                                formAction={formAction}
                                hydrateForm={this.hydrateForm}
                                renderReceiptPage={this.renderReceiptPage}
                            /> 
                        } else {
                            return <NameAddressForm { ...formState } submitForm={ this.submitForm }/> 
                        }
                    })()     
                } 
             </div>
        )
    }
}

export default App;