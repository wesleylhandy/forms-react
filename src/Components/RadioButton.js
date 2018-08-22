import React from 'react'
import flex from './styles/flex.css'
import radio from './styles/radio.css'

export default function RadioButton(props) {
    return (
        <div id={`${props.name}-group`} styleName="flex.flex flex.flex-row flex.flex-axes-center radio.radio-group">
            <input styleName="radio.radio-group__input" name={props.name} id={`${props.name}Gift`} type="radio" checked={props.checked} onChange={props.handleRadioClick}/>
            <label htmlFor={`${props.name}Gift`}>{props.label}</label>
        </div>
    )
}