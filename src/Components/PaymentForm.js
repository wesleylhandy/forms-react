import React, {Component, Fragment} from 'react';

import Spinner from './StyledComponents/Spinner'

import styles from './styles/payment-form.module.css'

import {cryptLS} from '../helpers/ls'
import {scrollToPoint, offsetTop} from '../helpers/scrollToPoint'

class PaymentForm extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {formData} = this.props;
        const lifetime = 60 * 1000; // 60 seconds * 1000 milliseconds
        cryptLS({formData}, lifetime, 'store')

        document.forms.hiddenform.submit.click();
        
        // scroll to top of form
        const target = document.getElementById('react-form-top');
        const top = offsetTop(target);
        // console.log({top})
        scrollToPoint(top);
    }
    render() {
        const {formData, formAction, cssConfig, confirmationSubmitted} = this.props;
        const keys = Object.keys(formData)
        const inputs = keys.map((k,i)=><input key={i + "-" + k} name={k} value={formData[k] ? formData[k] : ''} type="hidden"/>)
        // console.log(JSON.stringify(this.props.cssConfig))
        return (
            <Fragment>
                <form id="hiddenform" styleName="styles.hidden" action={formAction} method="POST" target="paymentprocess">
                    {inputs}
                    <input type='hidden' name="cssVars" value={JSON.stringify(cssConfig)}/> 
                    <input id="submit" type="submit" hidden/>
                </form>
                <iframe styleName={confirmationSubmitted ? "styles.hidden" : "styles.form-panel"} name="paymentprocess" width="100%" height="1000px"></iframe>
                {
                    confirmationSubmitted && (
                        <div styleName="styles.form-panel" style={{height: "1000px"}}>
                            <Spinner />
                        </div>
                    )
                }
            </Fragment>
        )
    }
}

export default PaymentForm