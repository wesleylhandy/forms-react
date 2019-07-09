import React, { useContext } from 'react'
import { SignUpFormContext } from "../Contexts/SignUpFormProvider";


import FormPanel from "../FormComponents/StyledComponents/FormPanel"

const createMarkup = text => {
    return { __html: text }
}

const SignUpSuccessMessage = ({submitted, successMessage}) => {
    const { fields: { Firstname, Lastname, Spousename } } = useContext(SignUpFormContext);
    return (
        submitted && <FormPanel className="success-message" dangerouslySetInnerHTML={createMarkup(successMessage)}/>
    )
}


export default SignUpSuccessMessage