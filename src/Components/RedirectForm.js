import React, {Component} from 'react'

class HiddenForm extends Component {
    componentDidMount() {
        // console.log("Loaded and Clicking...")
        window.name = JSON.stringify(this.props.receiptVars);
        document.forms.hiddenform.submit.click()
    }
    render() {
        const {receiptVars, thankYouUrl}  = this.props
        const inputs = receiptVars.map((v,i)=><input key={"hiddenInput-" + i} name={Object.keys(v)[0]} value={Object.values(v)[0]} type="hidden"/>)
        const styles = {
            position: "absolute",
            left: "-10000px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden"
        }
        return (
            <form id="hiddenform" style={styles} action={thankYouUrl} method="POST">
                {inputs}
                <input id="submit" type="submit" hidden/>
            </form>
        )
    }
}

export default HiddenForm