import React, { Component } from 'react'

import styles from './styles/products.module.css'
import flex from './styles/flex.module.css'

class ProductDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                additionalGift: 0
            },
            errors: {
                additionalGift: ""
            },
            additionalGiftError: "",
            updated: false
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.createMarkup=this.createMarkup.bind(this)
        this.renderAdditionalGift = this.renderAdditionalGift.bind(this)
        this.calculateTotalGift = this.calculateTotalGift.bind(this)
    }

    /**
     * Calculates the total gift for displaying to donor
     * @param {Array} productInfo - list of of all products having been ordered, idx of the product and quantity
     * @param {Number} additionalGift - value of user entered additional Gift
     * @returns {Number} value of Total Gift
     */
    calculateTotalGift(productInfo, additionalGift) {
        const { products } = this.props.productOptions
        // console.log({productInfo, products, additionalGift})
        const totalGift = (products.length && productInfo.length) ? productInfo.reduce((a, b)=> a + (parseInt(products[b.idx].PledgeAmount) * b.quantity), 0) + additionalGift : additionalGift;
        return totalGift
    }

    handleInputChange(e) {
        const target = e.target;
        let value = target.value;
        const name = target.name;
        
        const fields = {...this.state.fields}, errors = {...this.state.errors};

        if (name === "additionalGift") {
            const isValid = /[0-9]+/.test(value)
            errors[name] = !isValid ? "Must be a valid whole dollar amount above 0" : ""
            if (isValid && +value > 0) {
                const { DetailCprojMail, DetailCprojCredit, DetailDescription, DetailName } = this.props.productOptions.additionalGift
                this.props.addToCart({
                    type: 'additionalGift',
                    PledgeAmount: +value,
                    DetailCprojMail,
                    DetailCprojCredit,
                    DetailDescription,
                    DetailName
                })
            } else {
                this.props.removeFromCart('additionalGift')
            }
            fields[name] = isValid ? +value : 0;
        } else {
            fields[name] = value;   
            const idx = parseInt(name.split("product-select-")[1])
            // console.log({name, idx, value})
            this.props.updateProducts({idx, quantity: value})

        }

        this.setState({ fields, errors, updated: true});
    }
    createMarkup(text) {
        return { __html: text }
    }

    renderAdditionalGift(additionalGift) {
        const {fields, errors, updated} = this.state;
        const {hydratedAdditionalGift} = this.props;
        let val = fields.additionalGift > 0 ? fields.additionalGift : 0
        if (hydratedAdditionalGift > 0 && !updated) {
            val = hydratedAdditionalGift
        }
        return additionalGift.display ? (
            <div styleName="styles.additional-amount flex.flex flex.flex-left flex.flex-axes-center">
                <label styleName="styles.product-total__input--label" htmlFor="additionalGift">$</label>
                <input styleName='styles.additional-amount__input' 
                    name="additionalGift"
                    placeholder="0"
                    onBlur={e=> e.target.value === "" ? e.target.value = 0 : true}
                    onFocus={e=> e.target.value === 0 ? e.target.value = "" : true}
                    onChange={this.handleInputChange} 
                    value={ val }
                />
                <div styleName="styles.additional-amount__input--label">{additionalGift.additionalGiftMessage}</div>
                <div styleName="styles.error">{errors.additionalGift}</div>
            </div> 
        ) : null;
    }

    render() {
        const {productOptions: { products, numProducts, additionalGift }, productInfo } = this.props
        const { fields } = this.state;
        const totalGift = this.calculateTotalGift(productInfo, fields.additionalGift)
        // console.log({totalGift})
        if (numProducts == 0) return null

        else {
            function renderOptions(ind) {
                const options = []
                for(let i = 0; i <= 99; i++){
                    options.push(<option key={`prod-option-${ind}-${i}`} value={i}>{i}</option>)
                }
                return options
            }
            return (
                <div styleName="styles.products-display">
                    {   products.map((product, i)=>{
                        const storedAmt = productInfo.reduce((val, prod)=>{
                            if (prod.idx == i) {
                                val = prod.quantity
                            }
                            return val
                        }, 0)
                        const val = storedAmt ? storedAmt : fields[`product-select-${i}`]
                        return (
                            <div key={`product${i}`} styleName="styles.product-card flex.flex flex.flex-row flex.flex-left flex.flex-axes-center">
                                <div styleName="flex.flex flex.flex-column">
                                    <label htmlFor={`product-select-${i}`} styleName="styles.select-product__label">Quantity</label>
                                    <select styleName="styles.select-product flex.flex-no-grow" 
                                        name={`product-select-${i}`} 
                                        value={val >= 0 ? val : 0} 
                                        onChange={this.handleInputChange}
                                    >

                                        { renderOptions(i) }
                                        
                                    </select>
                                </div>
                                <div styleName="styles.product-card__body flex.flex-grow">
                                    <div styleName="styles.product-card__title">{product.productTitle} - ${product.PledgeAmount}</div>
                                    <div styleName="styles.product-card__description" dangerouslySetInnerHTML={this.createMarkup(product.productMessage)}></div>
                                </div>
                            </div>
                            )
                        })
                    }
                    { this.renderAdditionalGift(additionalGift) }
                    <div styleName="styles.product-total flex.flex flex.flex-left flex.flex-axes-center">
                        <label styleName="styles.product-total__input--label" htmlFor="total-product-gift">$</label>
                        <input styleName='styles.product-total__input flex.flex-no-grow' name="total-product-gift" value={totalGift} disabled={true}/>
                        <div styleName="styles.product-total__input--label">Product Subtotal</div>
                    </div>
                </div>
            )
        }
    }
}

export default ProductDisplay