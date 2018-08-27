import React from 'react'

import main from './styles/main.css'

export default function RedirectForm(props) {
    const keys = Object.keys(props.receiptVars);
    const inputs = keys.map(ky=><input key={"receiptInput-" + ky} name={ky} value={props.receiptVars[ky] ? props.receiptVars[ky] : ''} type="hidden"/>)
    return (
        <form id="hiddenform" styleName="main.hidden" action={props.thankYouUrl} method="POST" onLoad={()=>document.forms.hiddenform.submit.click()}>
            {inputs}
            <input id="submit" type="submit" hidden/>
        </form>
    )

}