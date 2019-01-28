import React from 'react'

import Checkbox from './Checkbox'

import styles from './styles/form-row.module.css'
import flex from './styles/flex.module.css'

function FormOptionsBlock({id, checked, handleInputChange, label}){
    return (
        <div styleName="styles.form-row styles.ship-to-yes-row flex.flex flex.flex-row flex.flex-axes-center">
            <Checkbox id={id} checked={checked} handleInputChange={handleInputChange} label={label} />
        </div>
    )
}

export default FormOptionsBlock