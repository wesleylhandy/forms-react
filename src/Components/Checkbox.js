import React from 'react'
import styles from './styles/checkbox.module.css'

function Checkbox(props) {
    return (
        <React.Fragment>
            <input 
                type='checkbox' 
                styleName="styles.checkbox-input"
                id={props.id} 
                name={props.id} 
                checked={props.checked} 
                onChange={props.handleInputChange}
            />
            <label htmlFor={props.id}>{props.label}</label> 
        </React.Fragment>
    )
}

export default Checkbox