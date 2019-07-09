import React, { useContext } from 'react'
import { GivingFormContext } from "../Contexts/GivingFormProvider";


import FormPanel from "../FormComponents/StyledComponents/FormPanel"

const createMarkup = text => {
    return { __html: text }
}

const GivingSuccessMessage = ({confirmed, successMessage}) => {
    const {trackingVars} = useContext(GivingFormContext);
    return (
        confirmed && <FormPanel className="success-message" dangerouslySetInnerHTML={createMarkup(successMessage)}/>
    )
}


export default GivingSuccessMessage