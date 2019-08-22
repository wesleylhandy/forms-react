import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

import { GivingFormContext } from "../Contexts/GivingFormProvider";

import FormWrapper from '../StyledComponents/FormWrapper'

import "../FormComponents/Animations/designations.css"
import SummaryBlock from "../FormComponents/Blocks/SummaryBlock";

class ConfirmationForm extends Component {
    async componentWillUnmount() {
		// if user has selected to save personal info,
		const { savePersonalInfo } = this.context.fields;
		if (savePersonalInfo) {
			const days = 30;
			const lifetime = days * 24 * 60 * 60 * 1000;
			this.context.saveLS(lifetime, "info");
		} else {
			// otherwise remove any stored data from local storage
			this.context.removeOneLS("info");
		}
    }
    render() {
        const { errors, fields, initialized, submitting, submitted } = this.context;
        const { 
            allowInternational,
            getPhone,
            getHonorific,
            getSuffix,
            getMiddleName,
            getSpouseInfo,  
        } = this.props
        return submitted && (
            <FormWrapper style={{maxWidth: "818px", margin: "0 auto"}}>
                <SummaryBlock withContainer={true}/>
                <SummaryBlock withContainer={false}/>
            </FormWrapper>
        )
    }
}

ConfirmationForm.contextType = GivingFormContext;

export default ConfirmationForm;