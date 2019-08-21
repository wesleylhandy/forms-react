import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

import { GivingFormContext } from "../Contexts/GivingFormProvider";

import DesignationBlock from "../FormComponents/Blocks/DesignationBlock"

import "../FormComponents/Animations/designations.css"

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
        return (
            null
        )
    }
}

ConfirmationForm.contextType = GivingFormContext;

export default ConfirmationForm;