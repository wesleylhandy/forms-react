import React, { Component } from 'react'

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

    render() {
        return (
            <iframe src={this.state.iframeSrc} width="100%"></iframe>
        )
    }
}