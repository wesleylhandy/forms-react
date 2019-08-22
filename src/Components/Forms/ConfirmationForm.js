import React, { Component } from "react";
import styled from '@emotion/styled';

import { CSSTransition } from 'react-transition-group';

import { GivingFormContext } from "../Contexts/GivingFormProvider";

import FormWrapper from '../StyledComponents/FormWrapper'

import "../FormComponents/Animations/designations.css"
import SummaryBlock from "../FormComponents/Blocks/SummaryBlock";
import FormHeader from "../FormComponents/StyledComponents/FormHeader";
import LockSymbol from "../FormComponents/StyledComponents/LockSymbol";

const SafetyDisclaimer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    margin: 20px 0;
    svg {
        margin-top: -10px;
        margin-right: 10px;
    }
`

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
                <FormHeader style={{fontSize: "28px", fontWeight: "bold", letterSpacing:"0.53px",color:"#1c1c1c", paddingTop: "30px"}}>Payment Information</FormHeader>
                    <SafetyDisclaimer className="safety-disclaimer"><LockSymbol/> <span style={{color: "#54585D"}}>This is a secure 256-bit SSL encrypted payment. You&rsquo;re safe.</span></SafetyDisclaimer>
                <SummaryBlock withContainer={false}/>
            </FormWrapper>
        )
    }
}

ConfirmationForm.contextType = GivingFormContext;

export default ConfirmationForm;