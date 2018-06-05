import React, { Component } from 'react'

export default class ProductDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numProducts: props.productOptions.numProducts,
            products: [...props.productOptions.products]
        }
    }
    render() {
        return null
    }
}