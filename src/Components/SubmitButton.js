import React from 'react'

import styles from './styles/form-row.module.css'

function SubmitButton({hasErrors, error, handleSubmit, submitting}){
    return (
        <div styleName="styles.form-row styles.submit-row">
            <input type="submit" styleName="styles.submit-button" id="submit" onClick={handleSubmit} disabled={submitting} value="Continue to Payment &#10142;"/>
            <div styleName="styles.error styles.submit-error">{ hasErrors && error ? error : hasErrors ? "Please scroll up to correct errors." : "" }</div>
        </div>
    )
}

export default SubmitButton