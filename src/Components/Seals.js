import React from 'react'

import styles from './styles/seals.module.css'
import flex from './styles/flex.module.css'

function Seals() {
    return (
        <div id="seals" styleName="styles.seals flex.flex flex.flex-row flex.flex-center flex.flex-axes-center">
            <div id="DigiCertClickID_RXDQXROF" data-language="en" styleName="styles.seals__seal">
                <a styleName="styles.seals__seal--link" href="https://www.digicert.com/ev-multi-domain-ssl.htm"></a>
            </div>
            <div id="ECFA_Logo" styleName="styles.seals__seal">
                <a styleName="styles.seals__seal--link" href="http://www.ecfa.org" target="_blank">
                    <img styleName="styles.seals__seal-img" src="https://www.cbn.com/source/giving/shared/ecfa-logo-blacktext_sm.png" alt="ECFA"/>
                </a>
            </div>
        </div>
    )
}

export default Seals