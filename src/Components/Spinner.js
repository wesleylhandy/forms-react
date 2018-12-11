import React from 'react'
import styles from './styles/spinner.module.css'

function Spinner () {
    return (
        <div styleName="styles.loading_spinner">
            <img styleName="styles.loading_spinner__flames" src="//www1.cbn.com/sites/all/themes/cbn_default/images/spinner/cbn-flame-circle.png"/>
            <img styleName="styles.loading_spinner__back" src="//www1.cbn.com/sites/all/themes/cbn_default/images/spinner/loader-spinner@3x.png"/>
        </div>
    )
}

export default Spinner