import React from 'react'

import flex from './styles/flex.module.css'
import styles from './styles/radio.module.css'

function RadioButton(props) {
    return (
        <div id={`${props.id}-group`} styleName="flex.flex flex.flex-row flex.flex-axes-center styles.radio-group">
            <input styleName="styles.radio-group__input" name={props.name} id={`${props.id}gift`} type="radio" checked={props.checked} onChange={props.handleRadioClick}/>
            <label htmlFor={`${props.id}gift`}>{props.label}</label>
        </div>
    )
}

export default RadioButton