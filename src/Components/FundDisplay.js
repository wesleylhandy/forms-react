import React, { Component } from 'react'

import main from './styles/main.css'
import flex from './styles/flex.css'
import form from './styles/form.css'
import funds from './styles/funds.css'

export default class FundDisplay extends Component {
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
            initialUpdate: false
        }
        this.handleDropDownClick=this.handleDropDownClick.bind(this)
        this.createMarkup=this.createMarkup.bind(this)
        this.expandSelection= this.expandSelection.bind(this)

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.initialUpdate && !this.state.initialUpdate) {
            this.setState({numFunds: nextProps.fundOptions.numFunds, funds: [...nextProps.fundOptions.funds], initialUpdate: true})
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
                    <div key={`fund-${i}`} styleName={selectedIndex === i ? "funds.fund-card funds.selected flex.flex flex.flex-row flex.flex-between flex.flex-axes-center" : "funds.fund-card flex.flex flex.flex-row flex.flex-between flex.flex-axes-center"} onClick={this.expandSelection}>
                        <div styleName={fund.imgSrc ? "funds.fund-card__image" : "main.hidden"} onClick={this.expandSelection}>
                            <img styleName="main.img-responsive" src={fund.imgSrc}/>
                        </div>
                        <div styleName="funds.fund-card__body flex.flex flex.flex-column flex.flex-start" onClick={this.expandSelection}>
                            <div styleName="funds.fund-card__body--title" onClick={this.expandSelection}>{fund.fundTitle}</div>
                            <div styleName="funds.fund-card__body--description" dangerouslySetInnerHTML={this.createMarkup(fund.fundDescription)} onClick={this.expandSelection}></div>
                        </div>
                        <div styleName="funds.dropDownArrow" onClick={this.expandSelection}>&#9663;</div>
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
                    <div key={`fundDropdown-${i}`} data-id={i} styleName="funds.fund-card__dropdown flex.flex flex.flex-row flex.flex-between flex.flex-axes-center" onClick={this.handleDropDownClick}>
                        <div styleName={fund.imgSrc ? "funds.fund-card__image" : "main.hidden"} data-id={i}>
                            <img styleName="main.img-responsive" src={fund.imgSrc}/>
                        </div>
                        <div styleName="funds.fund-card__body flex.flex flex.flex-column flex.flex-start" data-id={i}>
                            <div styleName="funds.fund-card__body--title" data-id={i}>{fund.fundTitle}</div>
                            <div styleName="funds.fund-card__body--description" dangerouslySetInnerHTML={this.createMarkup(fund.fundDescription)} data-id={i}></div>
                        </div>
                        <div data-id={i} styleName="funds.dropDownArrow" onClick={this.handleDropDownClick}>+</div>
                    </div>
                )
            })
            return (
                <div styleName="funds.select-fund__dropdown flex.flex flex.flex-row flex.flex-axes-center flex.flex-wrap">
                    { funds }
                </div>
            )
        }
        return null
    }

    render() {
        if (this.state.numFunds == 0) return null
        
        else {

            return (
                <div styleName="funds.funds-display">
                    <h3 styleName="main.caps form.form-header">I Want to Support</h3>
                    <div styleName="funds.select-fund flex.flex flex.flex-row flex.flex-axes-center">
                        { this.renderFundCards(this.state.selectedIndex)}
                                   
                    </div>
                    {this.renderExpandedCards(this.state.expanded)} 
                </div>

            )
        }
    }
}