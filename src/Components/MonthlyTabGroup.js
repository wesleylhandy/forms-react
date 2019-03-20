import React from 'react'

import Tab from './Tab'
import Divider from './Divider'

import styles from './styles/monthly-tab.module.css'
import flex from './styles/flex.module.css'

function MonthlyTabGroup({monthlyChecked, handleTabClick}) {
    let monthly = monthlyChecked;
    let single = !monthlyChecked;
    return (
        <div id="MonthlyGivingInfo">
            <div styleName="flex.flex flex.flex-row flex.flex-center styles.monthly-tab">
                <Tab id="monthly" name="monthly-toggle" label="give monthly" checked={monthly} handleTabClick={handleTabClick}/>
                <Divider color="transparent"/>
                <Tab id="single" name="monthly-toggle" label="one time gift" checked={single} handleTabClick={handleTabClick}/>
            </div>
        </div>
    )
}

export default MonthlyTabGroup