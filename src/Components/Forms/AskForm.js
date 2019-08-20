import React, { Component } from "react";

import { GivingFormContext } from "../Contexts/GivingFormProvider";

class AskForm extends Component {

    render() {
        const { errors, fields, initialized, submitting, submitted } = this.context;
        return null
    }
}

AskForm.contextType = GivingFormContext;

export default AskForm;