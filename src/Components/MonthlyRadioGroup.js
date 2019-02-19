import React, {Fragment} from 'react'

import RadioButton from './RadioButton'
import CCInfo from './CCInfo'

import styles from './styles/monthly-radio.module.css'
import flex from './styles/flex.module.css'

function MonthlyRadioGroup({handleInputChange, monthlyChecked, Monthlypledgeday, handleRadioClick}) {
    let monthly = monthlyChecked;
    let single = !monthlyChecked;
    return (
        <div id="MonthlyGivingInfo">
            <h3 styleName="styles.form-header">How Often Do You Want to Give This Amount?</h3>
                <div styleName="flex.flex flex.flex-row flex.flex-between styles.monthly-radio">
                    <RadioButton id="monthly" name="monthly-toggle" label="Monthly Gift" checked={monthly} handleRadioClick={handleRadioClick}/>
                    <RadioButton id="single" name="monthly-toggle" label="Single Gift" checked={single} handleRadioClick={handleRadioClick}/>
                </div>
                { 
                    monthlyChecked && (
                        <CCInfo handleInputChange={handleInputChange} Monthlypledgeday={Monthlypledgeday}/> 
                    )
                }
        </div>
    )
}

export default MonthlyRadioGroup