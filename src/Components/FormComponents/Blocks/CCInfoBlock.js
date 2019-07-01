import React from 'react'

import FormRow from '../StyledComponents/FormRow'

function CCInfoBlock({handleInputChange, Monthlypledgeday}) {
    const options = []
    for(let i = 2; i <= 28; i++){
        options.push(<option key={"date-option-" + i} value={i}>{i}</option>)
    }
    return (
        <FormRow className="monthly-giving-day">
            <h5 className="cc-day-of-month">Charge automatically on day&nbsp;
                <label htmlFor="Monthlypledgeday">Select Date</label>
                <select className="cc-date" name="Monthlypledgeday" onChange={handleInputChange} value={Monthlypledgeday}>
                    { options }
                </select>
            &nbsp;each month.</h5>
        </FormRow>  
    )
}

export default CCInfoBlock