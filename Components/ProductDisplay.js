import React, { Component } from 'react'
import path from 'path'

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
            <div className={`additional-amount flex flex-left flex-axes-center`}>
                <input className='additional-gift-input flex-no-grow' 
                    name="additionalGift"
                    placeholder="0" 
                    onChange={this.handleInputChange} 
                    value={this.state.fields.additionalGift == 0 ? null : this.state.fields.additionalGift }
                />
                <div className="additional-gift-label">{this.state.additionalGiftMessage}</div>
                <div className="error">{this.state.additionalGiftError}</div>
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
                <div className="products-display">
                    {   this.state.products.map((product, i)=>{

                        return (
                            <div key={`product${i}`} className="product-card flex flex-row flex-left flex-axes-center">
                                <select className="select-product flex-no-grow" name={`product-select-${i}`} value={this.state.fields.values[`product-select-${i}`]} onChange={this.handleInputChange}>
                                    { renderOptions(i) }
                                </select>
                                <div className="product-card__body flex-grow">
                                    <div className="product-card__title">{product.productTitle}</div>
                                    <div className="product-card__description" dangerouslySetInnerHTML={this.createMarkup(product.productMessage)}></div>
                                </div>
                            </div>
                            )
                        })
                    }
                    { this.renderAdditionalGift(this.state.additionalGift) }
                    <div className="product-total flex flex-left flex-axes-center">
                        <input className='total-product-gift flex-no-grow' name="total-product-gift" value={this.state.totalGift} disabled={true}/>
                        <div className="total-product-gift-label caps">Total Donation</div>
                    </div>
                </div>
            )
        }
    }
}