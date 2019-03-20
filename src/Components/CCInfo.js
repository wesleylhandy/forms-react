import React, {Fragment} from 'react'

import styles from './styles/ccinfo.module.css'

function CCInfo({handleInputChange, Monthlypledgeday}) {
    const options = []
    for(let i = 2; i <= 28; i++){
        options.push(<option key={"date-option-" + i} value={i}>{i}</option>)
    }
    return (
        <div styleName="styles.monthlyGivingDay">
            <h5 styleName="styles.ccDayOfMonth">Charge automatically on day&nbsp;
                <label htmlFor="Monthlypledgeday" styleName="styles.hidden">Select Date</label>
                <select styleName="styles.ccdate" name="Monthlypledgeday" onChange={handleInputChange} value={Monthlypledgeday}>
                    { options }
                </select>
            &nbsp;each month.</h5>
        </div>  
    )
}

export default CCInfo