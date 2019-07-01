import React from 'react'

import Tab from '../Tab'
import Divider from '../StyledComponents/Divider'
import FieldSet from '../StyledComponents/FieldSet'
import FormRow from '../StyledComponents/FormRow'

function MonthlyTabGroup({monthlyChecked, handleTabClick}) {
    let monthly = monthlyChecked;
    let single = !monthlyChecked;
    return (
        <FieldSet className="monthly-giving-info">
            <legend>Select Monthly or One-Time Gift</legend>
            <FormRow className="monthly-tab">
                <Tab id="monthly" name="monthly-toggle" label="give monthly" checked={monthly} handleTabClick={handleTabClick}/>
                <Divider color="transparent"/>
                <Tab id="single" name="monthly-toggle" label="one time gift" checked={single} handleTabClick={handleTabClick}/>
            </FormRow>
        </FieldSet>
    )
}

export default MonthlyTabGroup