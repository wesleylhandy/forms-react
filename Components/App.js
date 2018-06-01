import React, { Component } from 'react';

import Form from "./Form"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            givingFormat: "buttons",
            monthlyOption: true,
            shipping: false,
            international: false,
            products: false,
            numProducts: 0
        }
    }

    render() {
        return (
            <div className='form-wrapper' >
                <Form {...this.state}/>
            </div>
        )
    }
}