import React from 'react'
import spinner from './styles/spinner.css'

export default function Spinner () {
    return (
        <div styleName="spinner.loading_spinner">
            <img styleName="spinner.loading_spinner_flames" src="http://www1.cbn.com/sites/all/themes/cbn_default/images/spinner/cbn-flame-circle.png"/>
            <img styleName="spinner.loading_spinner_back" src="http://www1.cbn.com/sites/all/themes/cbn_default/images/spinner/loader-spinner@3x.png"/>
        </div>
    )
}