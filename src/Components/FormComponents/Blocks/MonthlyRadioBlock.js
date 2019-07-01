import React, {Fragment} from 'react'

import RadioButtonGroup from '../RadioButtonGroup'
import FieldSet from '../StyledComponents/FieldSet'
import FormHeader from '../StyledComponents/FormHeader'
import FormRow from '../StyledComponents/FormRow'
import CCInfoBlock from './CCInfoBlock'

function MonthlyRadioGroup({handleInputChange, monthlyChecked, Monthlypledgeday, handleRadioClick}) {
    let monthly = monthlyChecked;
    let single = !monthlyChecked;
    return (
        <FieldSet className="monthly-giving-info">
            <legend>Select Monthly or One-Time Gift</legend>
            <FormHeader>How Often Do You Want to Give This Amount?</FormHeader>
                <FormRow className="monthly-radio">
                    <RadioButtonGroup id="monthly" name="monthly-toggle" label="Monthly Gift" checked={monthly} handleRadioClick={handleRadioClick}/>
                    <RadioButtonGroup id="single" name="monthly-toggle" label="Single Gift" checked={single} handleRadioClick={handleRadioClick}/>
                </FormRow>
                { 
                    monthlyChecked && (
                        <CCInfoBlock handleInputChange={handleInputChange} Monthlypledgeday={Monthlypledgeday}/> 
                    )
                }
        </FieldSet>
    )
}

export default MonthlyRadioGroup