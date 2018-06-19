import React, { Component } from 'react'

import './styles/variables.css'
import './styles/main.css'
import './styles/flex.css'
import './styles/form.css'

export default class ConfirmationIframe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: props.submitted,
            confirmed: props.confirmed,
            iframeSrc: props.iframeSrc,
            formData: props.formData
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.iframeSrc != this.state.iframeSrc) {
            this.setState((prevState, props) => { iframeSrc: nextProps.iframeSrc })
        }
    }
    render() {
        return (
            <iframe src={this.state.iframeSrc}></iframe>
        )
    }
}