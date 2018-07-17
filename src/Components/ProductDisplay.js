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
            singlePledgeData: props.productOptions.singlePledgeData,
            fields: {
                additionalGift: props.hydratedAmount >= 0 ? props.hydratedAmount : 0
            },
            errors: {
                additionalGift: ""
            },
            additionalGiftError: "",
            totalGift: 0,
            hydrated: false,
            hydratedAmount: props.hydratedAmount,
            productInfo: props.productInfo,
            initialUpdate: false
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.createMarkup=this.createMarkup.bind(this)
        this.renderAdditionalGift = this.renderAdditionalGift.bind(this)
        this.hydrateProducts = this.hydrateProducts.bind(this)
        this.calculateTotalGift = this.calculateTotalGift.bind(this)
    }

    componentDidMount() {
        const {productInfo, hydratedAmount} = this.props;
        if ((productInfo.length || hydratedAmount > 0) && !this.state.hydrated) {
            // console.log({mountedHydratedAmount: hydratedAmount})
            this.hydrateProducts(productInfo, hydratedAmount);
        }
    }

    componentWillReceiveProps(nextProps) {
        const {initialUpdate} = nextProps;
        if (initialUpdate && !this.state.initialUpdate) {
            const {numProducts, products, additionalGift, additionalGiftMessage, singlePledgeData} = nextProps.productOptions;
            return this.setState({numProducts, products: [...products], additionalGift, additionalGiftMessage, singlePledgeData, initialUpdate})
        }
        const {productInfo, hydratedAmount} = nextProps;
        if ((productInfo.length || hydratedAmount > 0) && !nextProps.hydrated && !this.state.hydrated) {
            // console.log({propsHydratedAmount: hydratedAmount})
            this.hydrateProducts(productInfo, hydratedAmount);
        } else {
            const {products} = this.state;
            const {additionalGift} = this.state.fields;
            const totalGift = this.calculateTotalGift(products, productInfo, additionalGift)
            this.setState({totalGift})
        }       
    }

    /**
     * Calculates the total gift for displaying to donor
     * @param {Array} products - List of All Available Product Orders with their data
     * @param {Array} productInfo - list of of all products having been ordered, idx of the product and quantity
     * @param {Number} additionalGift - value of user entered additional Gift
     * @returns {Number} value of Total Gift
     */
    calculateTotalGift(products, productInfo, additionalGift) {
        return productInfo.reduce((a, b)=> a + (parseInt(products[b.idx].PledgeAmount) * b.quantity), 0) + additionalGift
    }

    /**
     * Sets State from a new productInfo object
     * @param {Array} productInfo - Array holding state of cart as it relates to product
     * @param {Number} hydratedAmount - Value of amount pledge as additional gift
     */
    hydrateProducts(productInfo, hydratedAmount) {
        const {products, fields} = this.state;
    
        productInfo.forEach(product=>{
            const {idx, quantity} = product;
            fields[`product-select-${idx}`] =  quantity ? quantity : 0;
        });

        fields["additionalGift"] = hydratedAmount > 0 ? hydratedAmount : fields["additionalGift"]
        const totalGift = this.calculateTotalGift(products, productInfo, fields["additionalGift"])
  
        this.setState({fields, totalGift, hydrated: true});
    }

    handleInputChange(e) {
        const target = e.target;
        let value = parseInt(target.value);
        const name = target.name;
        
        const {fields, errors} = this.state;
        let {totalGift} = this.state;

        if (name === "additionalGift") {
            if (isNaN(value)) {
                value = 0
            }
            const isValid = /[0-9]+/.test(value) && value >= 0
            errors[name] = !isValid ? "Must be a valid whole dollar amount above 0" : ""
            if (isValid) {
                this.props.addToCart({
                    type: 'donation',
                    PledgeAmount: value,
                    DetailCprojMail: this.state.singlePledgeData.DetailCprojMail,
                    DetailCprojCredit: this.state.singlePledgeData.DetailCprojCredit,
                    DetailDescription: "Single Pledge",
                    DetailName: "SPGF",
                    monthly: false
                })
                fields[name] = value;
                totalGift+=value;
            }
        } else {
            fields[name] = value;   
            const idx = parseInt(name.split("product-select-")[1])
            // console.log({name, idx, value})
            this.props.updateProducts({idx, quantity: value})
        }

        this.setState({ fields, errors, totalGift});
    }
    createMarkup(text) {
        return { __html: text }
    }

    renderAdditionalGift(additionalGift) {
        return additionalGift ? (
            <div styleName="form.additional-amount flex.flex flex.flex-left flex.flex-axes-center">
                <input styleName='form.additional-gift-input' 
                    name="additionalGift"
                    placeholder="0"
                    onBlur={e=> e.target.value === "" ? e.target.value = 0 : true}
                    onFocus={e=> e.target.value === 0 ? e.target.value = "" : true}
                    onChange={this.handleInputChange} 
                    value={this.state.fields.additionalGift }
                />
                <div styleName="form.additional-gift-label">{this.state.additionalGiftMessage}</div>
                <div styleName="form.error">{this.state.errors.additionalGift}</div>
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
                                <select styleName="form.select-product flex.flex-no-grow" name={`product-select-${i}`} value={this.state.fields[`product-select-${i}`] >= 0 ? this.state.fields[`product-select-${i}`] : 0} onChange={this.handleInputChange}>
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
                        <div styleName="main.caps form.total-product-gift-label">Subtotal</div>
                    </div>
                </div>
            )
        }
    }
}