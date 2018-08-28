import React, {Component} from 'react'

import main from './styles/main.css'

export default class HiddenForm extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.forms.hiddenform.submit.click()
    }
    render() {
        const {receiptVars, thankYouUrl} = this.props;
        const inputs = receiptVars.map((v,i)=><input key={"hiddenInput-" + i} name={Object.keys(v)[0]} value={Object.values(v)[0]} type="hidden"/>)
        return (
            <form id="hiddenform" styleName="main.hidden" action={thankYouUrl} method="POST" >
                {inputs}
                <input id="submit" type="submit" hidden/>
            </form>
        )
    }

}