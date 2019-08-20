import React, { Component } from "react";

import { GivingFormContext } from "../Contexts/GivingFormProvider";

import DesignationBlock from "../FormComponents/Blocks/DesignationBlock"

class ConfirmationForm extends Component {

    render() {
        const { errors, fields, initialized, submitting, submitted } = this.context;
        return <DesignationBlock></DesignationBlock>
    }
}

ConfirmationForm.contextType = GivingFormContext;

export default ConfirmationForm;