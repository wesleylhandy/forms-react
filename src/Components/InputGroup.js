import React from 'react'

import styles from './styles/input.module.css'

function InputGroup({id, specialStyle, label, required, international, error, value, type, maxLength, placeholder, disabled, validation, handleInputChange}) {
    return (
        <div id={`form-field-${id}`} styleName={`${specialStyle ? specialStyle : ""} styles.form-group`}>
            <label htmlFor={id}>{label}<span>{required ? '*' : ''}</span>{ international ? <small style={{fontSize: "10px"}}>(Outside U.S. use &ldquo;NA&rdquo;}</small> : null }</label>
            <input styleName={`styles.form-control${error ? " styles.error" : ""}`}
                type={type} 
                id={id}
                maxLength={maxLength} 
                name={id} 
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={handleInputChange}
                aria-invalid={error ? true : false}
                disabled={disabled}
                pattern={validation ? validation : ".*"} 
            />
            <div styleName="styles.error">{error}</div>
        </div>
    )
}

export default InputGroup;