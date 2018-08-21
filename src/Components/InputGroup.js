import React from 'react'

import flex from './styles/flex.css'
import input from './styles/input.css'
import error from './styles/error.css'

export default function InputGroup(props) {
    return (
        <div id={`form-field-${props.id}`} styleName={`${props.specialStyle ? props.specialStyle : "input.form-group"} flex.flex-grow`}>
            <label htmlFor={props.id}>{props.label}<span>{props.required ? '*' : ''}</span>{ props.international ? <small style={{fontSize: "10px"}}>(Outside U.S. use &ldquo;NA&rdquo;}</small> : null }</label>
            <input styleName="input.form-control" 
                type={props.type} 
                id={props.id}
                maxLength={props.maxLength} 
                name={props.id} 
                placeholder={props.placeholder}
                required={props.required}
                value={props.value}
                onChange={props.handleInputChange}
                aria-invalid={props.error ? true : false} 
            />
            <div styleName="error.error">{props.error}</div>
        </div>
    )
}