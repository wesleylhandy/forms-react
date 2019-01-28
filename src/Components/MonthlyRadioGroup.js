import React, {Fragment} from 'react'

import RadioButton from './RadioButton'

import styles from './styles/monthly-radio.module.css'
import flex from './styles/flex.module.css'

function MonthlyRadioGroup({handleInputChange, monthlyChecked, Monthlypledgeday, handleRadioClick}) {

    let monthly = monthlyChecked;
    let single = !monthlyChecked;

    function renderCCInfo() {
        const options = []
        for(let i = 2; i <= 28; i++){
            options.push(<option key={"date-option-" + i} value={i}>{i}</option>)
        }
        return (
            <Fragment>
                <h5 styleName="styles.ccDayOfMonth">Charge automatically on day&nbsp;
                    <label htmlFor="Monthlypledgeday" styleName="styles.hidden">Select Date</label>
                    <select styleName="styles.ccdate" name="Monthlypledgeday" onChange={handleInputChange} value={Monthlypledgeday}>
                        { options }
                    </select>
                &nbsp;each month.</h5>
            </Fragment>  
        )
    }
    return (
        <div id="MonthlyGivingInfo">
            <h3 styleName="styles.form-header">How Often Do You Want to Give This Amount?</h3>
                <div styleName="flex.flex flex.flex-row flex.flex-between styles.monthly-radio">
                    <RadioButton id="monthly" name="monthly-toggle" label="Monthly Gift" checked={monthly} handleRadioClick={handleRadioClick}/>
                    <RadioButton id="single" name="monthly-toggle" label="Single Gift" checked={single} handleRadioClick={handleRadioClick}/>
                </div>
                <div styleName="styles.monthlyGivingDay">
                { monthlyChecked ? renderCCInfo() : null }
                </div>
        </div>
    )
}

export default MonthlyRadioGroup