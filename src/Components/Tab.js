import React from 'react'

import flex from './styles/flex.module.css'
import styles from './styles/tab.module.css'

function Tab({id, name, checked, handleTabClick, label}) {
    return (
        <div id={`${id}-group`} styleName="flex.flex flex.flex-row flex.flex-center flex.flex-axes-center styles.tab-group">
            <input styleName="styles.tab-group__input" name={name} id={`${id}gift`} type="checkbox" checked={checked} onChange={handleTabClick}/>
            <label htmlFor={`${id}gift`}>{label}</label>
        </div>
    )
}

export default Tab