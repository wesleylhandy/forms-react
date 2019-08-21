import React, { useState, useContext } from "react";
import { GivingFormContext } from "../../Contexts/GivingFormProvider";

import FormHeader from '../StyledComponents/FormHeader'
import { Designation, DesignationContainer, DesignationListContainer, DesignationList, DesignationCheck } from "../StyledComponents/Designation";
import DropArrow from "../StyledComponents/DropArrow";

import { MdClose, MdCheck } from 'react-icons/md'

const DesignationBlock = ({designations}) => {
    const [isOpen, toggleOpen] = useState(false)
    const [hovering, setHoverIndex] = useState(-1)
    const {designatedIndex, updateDesignation} = useContext(GivingFormContext)

    const handleClick = idx => {
        updateDesignation({
            type: "UPDATE_DESIGNATION",
            designatedIndex: idx,
            designationInfo: designations[idx]
        })
        toggleOpen(false)
    }

    const handleHover = idx => {
        setHoverIndex(idx)
    }
    return (
        <DesignationContainer className="designation-container">
            <FormHeader>Designate Gift (optional)</FormHeader>
            <Designation className="designation display" onClick={()=>toggleOpen(!isOpen)}>
                <div className="designation__image">
                    <img className="img-responsive" src={designations[designatedIndex].img}/>
                </div>
                <div className="designation__body">
                    <h4 className="designation__title" dangerouslySetInnerHTML={{__html: designations[designatedIndex].title}}></h4>
                    <div className="designation__description" dangerouslySetInnerHTML={{__html: designations[designatedIndex].description}}></div>
                </div>
                <div className="designation--arrow" >
                    <DropArrow open={isOpen}/>
                </div>
            </Designation>
            {
                isOpen && (
                    <DesignationListContainer className="designation--list-container">
                        <div className="designation-list--close"><MdClose onClick={()=>toggleOpen(!isOpen)}/></div>
                        <DesignationList>
                            {
                                designations.map(({img, title, description}, idx) =>(
                                    <Designation 
                                        key={`designation-${idx}`} 
                                        className="designation" 
                                        onMouseEnter={()=> handleHover(idx)} 
                                        onMouseLeave={()=> handleHover(-1)} 
                                        onClick={()=> handleClick(idx)}
                                    >
                                        <div className="designation__image">
                                            <img className="img-responsive" src={img}/>
                                        </div>
                                        <div className="designation__body">
                                            <h4 className="designation__title" dangerouslySetInnerHTML={{__html: title}}></h4>
                                            <div className="designation__description" dangerouslySetInnerHTML={{__html: description}}></div>
                                        </div>
                                        <DesignationCheck 
                                            className="designation--check" 
                                            selected={idx === designatedIndex} 
                                            hover={idx === hovering}
                                        >
                                            <MdCheck />
                                        </DesignationCheck>
                                    </Designation>
                                ))
                            }
                        </DesignationList>
                    </DesignationListContainer>
                )
            }
        </DesignationContainer>
    );
}

export default DesignationBlock;
