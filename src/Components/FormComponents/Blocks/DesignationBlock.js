import React, { Component } from "react";

// class DesignationBlock
//  extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             numDesignations: props.designationOptions.numDesignations,
//             designations: [...props.designationOptions.designations],
//             fields: {
//                 values: {}
//             },
//             expanded: false,
//             selectedIndex: 0,
//             initialUpdate: false,
//             hydrated: false
//         }
//         this.handleDropDownClick=this.handleDropDownClick.bind(this)
//         this.createMarkup=this.createMarkup.bind(this)
//         this.expandSelection= this.expandSelection.bind(this)
//     }

//     componentWillReceiveProps(nextProps) {
//         if (nextProps.initialUpdate && !this.state.initialUpdate) {
//             return this.setState({numDesignations: nextProps.designationOptions.numDesignations, designations: [...nextProps.designationOptions.designations], initialUpdate: true})
//         }
//         const { designationInfo, hydratedDesignation, hydrated } = nextProps;
//         // console.log({designationInfo, hydratedDesignation})
//         if (hydratedDesignation && !hydrated && !this.state.hydrated) {
//             const selectedIndex = this.state.designations.findIndex(designation=> designation.DetailDescription == designationInfo.DetailDescription)
//             // console.log(selectedIndex)
//             return this.setState({selectedIndex, hydrated: true})
//         }
//     }
//     handleDropDownClick(e) {
//         const selectedIndex = parseInt(e.target.dataset.id);
//         const {DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail} = this.state.designations[selectedIndex]
//         this.props.updateDonation({DetailName, DetailDescription, DetailCprojCredit, DetailCprojMail});
//         this.setState({expanded: false, selectedIndex})
//     }
//     createMarkup(text) {
//         return { __html: text }
//     }

//     expandSelection(){
//         this.setState({expanded: true, selectedIndex: null})
//     }

//     renderDesignationCards(selectedIndex) {
//         if (selectedIndex >= 0) {
//             return this.state.designations.map((designation, i)=>{
//                 return (
//                     <div key={`designation-${i}`} styleName={selectedIndex === i ? "styles.designation-card styles.selected flex.flex flex.flex-row flex.flex-between flex.flex-axes-center" : "styles.designation-card flex.flex flex.flex-row flex.flex-between flex.flex-axes-center"} onClick={this.expandSelection}>
//                         <div styleName={designation.imgSrc ? "styles.designation-card__image" : "styles.hidden"} onClick={this.expandSelection}>
//                             <img styleName="styles.img-responsive" src={designation.imgSrc}/>
//                         </div>
//                         <div styleName="styles.designation-card__body flex.flex flex.flex-column flex.flex-start" onClick={this.expandSelection}>
//                             <div styleName="styles.designation-card__body--title" onClick={this.expandSelection}>{designation.designationTitle}</div>
//                             <div styleName="styles.designation-card__body--description" dangerouslySetInnerHTML={this.createMarkup(designation.designationDescription)} onClick={this.expandSelection}></div>
//                         </div>
//                         <div styleName="styles.dropDownArrow" onClick={this.expandSelection}>&#9663;</div>
//                     </div>
//                 )
//             })
//         }
//         return null
//     }

//     renderExpandedCards(expanded) {
//         if (expanded){
//             const designations = this.state.designations.map((designation, i)=>{
//                 return (
//                     <div key={`designationDropdown-${i}`} data-id={i} styleName="styles.designation-card__dropdown flex.flex flex.flex-row flex.flex-between flex.flex-axes-center" onClick={this.handleDropDownClick}>
//                         <div styleName={designation.imgSrc ? "styles.designation-card__image" : "styles.hidden"} data-id={i}>
//                             <img styleName="styles.img-responsive" src={designation.imgSrc}/>
//                         </div>
//                         <div styleName="styles.designation-card__body flex.flex flex.flex-column flex.flex-start" data-id={i}>
//                             <div styleName="styles.designation-card__body--title" data-id={i}>{designation.designationTitle}</div>
//                             <div styleName="styles.designation-card__body--description" dangerouslySetInnerHTML={this.createMarkup(designation.designationDescription)} data-id={i}></div>
//                         </div>
//                         <div data-id={i} styleName="styles.dropDownArrow" onClick={this.handleDropDownClick}>+</div>
//                     </div>
//                 )
//             })
//             return (
//                 <div styleName="styles.select-designation__dropdown flex.flex flex.flex-row flex.flex-axes-center flex.flex-wrap">
//                     { designations }
//                 </div>
//             )
//         }
//         return null
//     }

//     render() {
//         if (this.state.numDesignations == 0) return null

//         else {
//             const {selectedIndex, expanded} = this.state
//             return (
//                 <div styleName="styles.designations-display">
//                     <h3 styleName="styles.designations__header">I Want to Support</h3>
//                     <div styleName="styles.select-designation flex.flex flex.flex-row flex.flex-axes-center">
//                         { this.renderDesignationCards(selectedIndex)}

//                     </div>
//                     {this.renderExpandedCards(expanded)}
//                 </div>

//             )
//         }
//     }
// }
const DesignationBlock = () => null;

export default DesignationBlock;
