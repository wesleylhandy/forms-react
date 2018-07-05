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
                additionalGift: 0
            },
            additionalGiftError: "",
            totalGift: 0,
            hydrated: props.hydratedProducts,
            productInfo: props.productInfo
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.createMarkup=this.createMarkup.bind(this)
        this.renderAdditionalGift = this.renderAdditionalGift.bind(this)
        this.hydrateProducts = this.hydrateProducts.bind(this)
    }

    componentDidMount() {
        const {productInfo} = this.props;
        this.hydrateProducts(productInfo)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.additionalGift != this.state.additionalGift) {
            this.setState({additionalGift: nextProps.additionalGift})
        }
        const {productInfo} = nextProps;
        this.hydrateProducts(productInfo);
    }

    /**
     * Sets State from a new productInfo object
     * @param {Array} productInfo - Array holding state of cart as it relates to product
     */
    hydrateProducts(productInfo) {
        const {products, fields} = this.state;
        const totalGift = productInfo.reduce((a, b)=> a + (parseInt(products[b.idx].PledgeAmount) * b.quantity), 0)
        productInfo.forEach(product=>{
            const {idx, quantity} = product;
            fields[`product-select-${idx}`] =  quantity;
        });
        this.setState({fields, totalGift});
    }

    handleInputChange(e) {
        const target = e.target;
        const value = parseInt(target.value);
        const name = target.name;
        
        const {fields} = this.state;
        fields[name] = value;

        const idx = parseInt(name.split("product-select-")[1])

        // console.log({name, idx, value})

        this.props.updateProducts({idx, quantity: value})

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
                    value={this.state.fields.additionalGift }
                />
                <div styleName="form.additional-gift-label">{this.state.additionalGiftMessage}</div>
                <div styleName="form.error">{this.state.additionalGiftError}</div>
            </div> 
        ) : null;
    }

    render() {
        if (this.state.numProducts == 0) return null

        else {
            function renderOptions(ind) {
                const options = []
                for(let i = 0; i <= 99; i++){
                    options.push(<option key={`prod-option-${ind}-${i}`} value={i}>{i}</option>)
                }
                return options
            }
            return (
                <div styleName="form.products-display">
                    {   this.state.products.map((product, i)=>{

                        return (
                            <div key={`product${i}`} styleName="form.product-card flex.flex flex.flex-row flex.flex-left flex.flex-axes-center">
                                <select styleName="form.select-product flex.flex-no-grow" name={`product-select-${i}`} value={this.state.fields[`product-select-${i}`]} onChange={this.handleInputChange}>
                                    { renderOptions(i) }
                                </select>
                                <div styleName="form.product-card__body flex.flex-grow">
                                    <div styleName="form.product-card__title">{product.productTitle} - ${product.PledgeAmount}</div>
                                    <div styleName="form.product-card__description" dangerouslySetInnerHTML={this.createMarkup(product.productMessage)}></div>
                                </div>
                            </div>
                            )
                        })
                    }
                    { this.renderAdditionalGift(this.state.additionalGift) }
                    <div styleName="form.product-total flex.flex flex.flex-left flex.flex-axes-center">
                        <input styleName='form.total-product-gift flex.flex-no-grow' name="total-product-gift" value={this.state.totalGift} disabled={true}/>
                        <div styleName="main.caps form.total-product-gift-label">Total Donation</div>
                    </div>
                </div>
            )
        }
    }
}