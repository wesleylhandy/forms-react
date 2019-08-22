import React, { useContext } from 'react'
import styled from "@emotion/styled"

import { GivingFormContext } from "../../Contexts/GivingFormProvider";

const BlockContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    &.column {
        width: calc(100%-20px);
        height: 100px;
        max-width: 360px;
        margin: 30px auto;
        border: 1px solid #DEDEDE;
        border-radius: 3px;
        background-color: #F5F7F8;
        box-shadow: 0 0 4px 0 rgba(0,0,0,0.11);
        flex-direction: column;
        .amount-block {
            margin-bottom: 10px;
        }
    }
    &.row {
        flex-direction: row;
        margin: 20px auto;
        text-align: center;
        .amount-block {
            margin-right: 10px;
        }
        .amount-block, .amount-block>span {
            font-weight: bold;
        }
    }
    a {
        color: #009BDF;
        cursor:pointer;
        text-decoration: none;
        text-align: center;
        &:hover, &:active, &:focus {
            text-decoration: underline;
            color: #0069AD;
        }
    }
`

const SummaryBlock = ({withContainer}) => {
    const { getSummary, goBack } = useContext(GivingFormContext)
    const {amount, isMonthly, designation} = getSummary();
    const duration = isMonthly ? "\/ Month Partnership" : designation;

    const handleGoBackClick = e => {
        e.preventDefault();
        goBack({ type: "GO_BACK" })
    }
    return (
        <BlockContainer className={withContainer ? "column" : "row"}>
            <div className="amount-block">${amount} <span dangerouslySetInnerHTML={{__html: duration}}></span></div>
            <a className="go-back-btn" onClick={handleGoBackClick}>Edit</a>
        </BlockContainer>
    )
}

export default SummaryBlock;