import React, { Component } from 'react'

import main from './styles/main.css'
import flex from './styles/flex.css'
import form from './styles/form.css'

export default class ProductDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numProducts: props.productOptions.numProducts,
            products: [...props.productOptions.products],
            additionalGift: props.productOptions.additionalGift,
            additionalGiftMessage: props.productOptions.additionalGiftMessage,
            fields: {
                additionalGift: null,
                values: {}
            },
            additionalGiftError: "",
            totalGift: 0
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.createMarkup=this.createMarkup.bind(this)
        this.renderAdditionalGift = this.renderAdditionalGift.bind(this)
    }
    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        const fields = this.state.fields;
        fields[name] = value;

        this.setState({ fields });
    }
    createMarkup(text) {
        return { __html: text }
    }

    renderAdditionalGift(additionalGift) {

        return additionalGift ? (
            <div styleName="form.additional-amount flex.flex flex.flex-left flex.flex-axes-center">
                <input styleName='form.additional-gift-input flex.flex-no-grow' 
                    name="additionalGift"
                    placeholder="0" 
                    onChange={this.handleInputChange} 
                    value={this.state.fields.additionalGift == 0 ? null : this.state.fields.additionalGift }
                />
                <div styleName="form.additional-gift-label">{this.state.additionalGiftMessage}</div>
                <div styleName="form.error">{this.state.additionalGiftError}</div>
            </div> 
        ) : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.additionalGift != this.state.additionalGift) {
            this.setState({additionalGift: nextProps.additionalGift})
        }
    }

    render() {
        if (this.state.numProducts == 0) return null

        else {
            function renderOptions(ind) {
                const options = []
                for(let i = 1; i <= 99; i++){
                    options.push(<option key={`prod-option-${ind}-${i}`} value={i}>{i}</option>)
                }
                return options
            }
            return (
                <div styleName="form.products-display">
                    {   this.state.products.map((product, i)=>{

                        return (
                            <div key={`product${i}`} styleName="form.product-card flex.flex flex.flex-row flex.flex-left flex.flex-axes-center">
                                <select styleName="form.select-product flex.flex-no-grow" name={`product-select-${i}`} value={this.state.fields.values[`product-select-${i}`]} onChange={this.handleInputChange}>
                                    { renderOptions(i) }
                                </select>
                                <div styleName="form.product-card__body flex.flex-grow">
                                    <div styleName="form.product-card__title">{product.productTitle} - ${product.productAmt}</div>
                                    <div styleName="form.product-card__description" dangerouslySetInnerHTML={this.createMarkup(product.productMessage)}></div>
                                </div>
                            </div>
                            )
                        })
                    }
                    { this.renderAdditionalGift(this.state.additionalGift) }
                    <div styleName="form.product-total flex.flex flex.flex-left flex.flex-axes-center">
                        <input styleName='form.total-product-gift flex.flex-no-grow'  name="total-product-gift" value={this.state.totalGift} disabled={true}/>
                        <div styleName="main.caps form.total-product-gift-label">Total Donation</div>
                    </div>
                </div>
            )
        }
    }
}