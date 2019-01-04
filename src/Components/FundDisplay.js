import React, { Component } from 'react'

import styles from './styles/funds.module.css'
import flex from './styles/flex.module.css'

class FundDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numFunds: props.fundOptions.numFunds,
            funds: [...props.fundOptions.funds],
            fields: {
                values: {}
            },
            expanded: false,
            selectedIndex: 0,
            initialUpdate: false,
            hydrated: false
        }
        this.handleDropDownClick=this.handleDropDownClick.bind(this)
        this.createMarkup=this.createMarkup.bind(this)
        this.expandSelection= this.expandSelection.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.initialUpdate && !this.state.initialUpdate) {
            return this.setState({numFunds: nextProps.fundOptions.numFunds, funds: [...nextProps.fundOptions.funds], initialUpdate: true})
        }
        const { fundInfo, hydratedFund, hydrated } = nextProps;
        // console.log({fundInfo, hydratedFund})
        if (hydratedFund && !hydrated && !this.state.hydrated) {
            const selectedIndex = this.state.funds.findIndex(fund=> fund.DetailDescription == fundInfo.DetailDescription)
            // console.log(selectedIndex)
            return this.setState({selectedIndex, hydrated: true})
        } 
    }
    handleDropDownClick(e) {
        const selectedIndex = parseInt(e.target.dataset.id);
        const {DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail} = this.state.funds[selectedIndex]
        this.props.updateDonation({DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail});
        this.setState({expanded: false, selectedIndex})
    }
    createMarkup(text) {
        return { __html: text }
    }

    expandSelection(){
        this.setState({expanded: true, selectedIndex: null})
    }

    renderFundCards(selectedIndex) {
        if (selectedIndex >= 0) {
            return this.state.funds.map((fund, i)=>{
                return (
                    <div key={`fund-${i}`} styleName={selectedIndex === i ? "styles.fund-card styles.selected flex.flex flex.flex-row flex.flex-between flex.flex-axes-center" : "styles.fund-card flex.flex flex.flex-row flex.flex-between flex.flex-axes-center"} onClick={this.expandSelection}>
                        <div styleName={fund.imgSrc ? "styles.fund-card__image" : "styles.hidden"} onClick={this.expandSelection}>
                            <img styleName="styles.img-responsive" src={fund.imgSrc}/>
                        </div>
                        <div styleName="styles.fund-card__body flex.flex flex.flex-column flex.flex-start" onClick={this.expandSelection}>
                            <div styleName="styles.fund-card__body--title" onClick={this.expandSelection}>{fund.fundTitle}</div>
                            <div styleName="styles.fund-card__body--description" dangerouslySetInnerHTML={this.createMarkup(fund.fundDescription)} onClick={this.expandSelection}></div>
                        </div>
                        <div styleName="styles.dropDownArrow" onClick={this.expandSelection}>&#9663;</div>
                    </div>
                )
            })
        }
        return null
    }

    renderExpandedCards(expanded) {
        if (expanded){
            const funds = this.state.funds.map((fund, i)=>{
                return (
                    <div key={`fundDropdown-${i}`} data-id={i} styleName="styles.fund-card__dropdown flex.flex flex.flex-row flex.flex-between flex.flex-axes-center" onClick={this.handleDropDownClick}>
                        <div styleName={fund.imgSrc ? "styles.fund-card__image" : "styles.hidden"} data-id={i}>
                            <img styleName="styles.img-responsive" src={fund.imgSrc}/>
                        </div>
                        <div styleName="styles.fund-card__body flex.flex flex.flex-column flex.flex-start" data-id={i}>
                            <div styleName="styles.fund-card__body--title" data-id={i}>{fund.fundTitle}</div>
                            <div styleName="styles.fund-card__body--description" dangerouslySetInnerHTML={this.createMarkup(fund.fundDescription)} data-id={i}></div>
                        </div>
                        <div data-id={i} styleName="styles.dropDownArrow" onClick={this.handleDropDownClick}>+</div>
                    </div>
                )
            })
            return (
                <div styleName="styles.select-fund__dropdown flex.flex flex.flex-row flex.flex-axes-center flex.flex-wrap">
                    { funds }
                </div>
            )
        }
        return null
    }

    render() {
        if (this.state.numFunds == 0) return null
        
        else {
            const {selectedIndex, expanded} = this.state
            return (
                <div styleName="styles.funds-display">
                    <h3 styleName="styles.funds__header">I Want to Support</h3>
                    <div styleName="styles.select-fund flex.flex flex.flex-row flex.flex-axes-center">
                        { this.renderFundCards(selectedIndex)}
                                   
                    </div>
                    {this.renderExpandedCards(expanded)} 
                </div>

            )
        }
    }
}

export default FundDisplay