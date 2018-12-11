import React from 'react'

import styles from './styles/input.module.css'

function SelectGroup({id, specialStyle, required, error, value, handleInputChange, options}) {
    return (
        <div id={`form-field-${id}`} styleName={`${specialStyle ? specialStyle : ""} styles.form-group`}>
            <label htmlFor={id}>{id}<span>{required ? '*' : ''}</span></label>
            <select styleName={`styles.form-control${error ? " styles.error" : ""}`}
                id={id}
                name={id}  
                required={required} 
                value={value} 
                onChange={handleInputChange}
                aria-invalid={error ? true : false} 
            >
                {options}
            </select>
            <div styleName="styles.error">{error}</div>
        </div>
    )
}

export default SelectGroup;