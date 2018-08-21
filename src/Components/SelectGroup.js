import React from 'react'

import flex from './styles/flex.css'
import input from './styles/input.css'
import error from './styles/error.css'

export default function SelectGroup(props) {
    return (
        <div id={`form-field-${props.id}`} styleName={`${props.specialStyle ? props.specialStyle : "input.form-group"} flex.flex-grow`}>
            <label htmlFor={props.id}>{props.label}<span>{props.required ? '*' : ''}</span></label>
            <select styleName="input.form-control" 
                id={props.id}
                name={props.id}  
                required={props.required} 
                value={props.value} 
                onChange={props.handleInputChange}
                aria-invalid={props.error ? true : false} 
            >
                <option value="">State* &#9663;</option>
                {props.options}
            </select>
            <div styleName="error.error">{props.error}</div>
        </div>
    )
}