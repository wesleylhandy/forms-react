import React from 'react'
import styled from '@emotion/styled';
import { FaQuestionCircle } from 'react-icons/fa'

import FormHeader from "../StyledComponents/FormHeader";
import LockSymbol from "../SVG/LockSymbol";
import MasterCard from '../SVG/MasterCard';
import Discover from '../SVG/Discover';
import Amex from '../SVG/Amex';
import Visa from "../SVG/Visa";
import FieldSet from "../StyledComponents/FieldSet"
import FormRow from "../StyledComponents/FormRow"
import InputGroup from "../InputGroup";
import SelectGroup from "../SelectGroup";

const PaymentBlockContainer = styled.section`
    margin: 30px auto;
    padding-top: 20px;
`

const SafetyDisclaimer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    margin: 20px 0;
    svg {
        margin-top: -10px;
        margin-right: 10px;
    }
`

const CCBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    svg {
        height: calc(78.39px / 2);
        width: calc(125.43px /2);
        .ax-1{
            fill:#0078a9;
        }
        .ax-2{
            fill:#fff;
        }
        .ds-1{
            fill:#f1f2f2;
        }
        .ds-2{
            fill:#f58220;
        }
        .ds-3{
            fill:url(#radial-gradient);
        }
        .ds-4{
            fill:#001722;
        }
        .ds-5{
            fill:#231f20;
        }
        .mc-1{
            fill:#13457c;
        }
        .mc-2{
            fill:#fbb231;
        }
        .mc-2,.mc-3,.mc-4{
            fill-rule:evenodd;
        }
        .mc-3{
            fill:#ec1c2e;
        }
        .mc-4{
            fill:#fff;
        }
        .mc-5{
            fill:none;
            stroke:#fff;
            stroke-miterlimit:2.61;
            stroke-width:0.22px;
        }
        .vs-1{
            fill:#3957a7;
        }
        .vs-2{
            fill:#fff;
        }
        .vs-3{
            fill:#f9a533;
        }
    }
    svg + svg {
        margin-left: 10px;
    }
`

const InfoCircle = styled.div`
    position: absolute;
    right: 5px;
    top: -6px;
    transform: scale(.7);
    a {
        cursor:pointer;
        text-decoration: none;
        color: #54585D;
    }
`

const PaymentBlock = ({fields, errors, curYear, curMonth, handleInputChange}) => {
    const years = [], months = [];
    years.push(
        <option key="exp-year-base-0" value="" disabled="disabled">
            Year* &#9660;
        </option>
    );
    for (let y = curYear; y < curYear + 25; y++) {
        years.push(
            <option key={"year-option-" + y} value={y}>
                {y}
            </option>
        );
    }
    months.push(
        <option key="exp-month-base-0" value="" disabled="disabled">
            Month* &#9660;
        </option>
    );
    for (let m = 1; m < 13; m++) {
        const val = ("0" + m).slice(-2);
        months.push(
            <option key={"month-option-" + val} value={val}>
                {val}
            </option>
        );
    }
    return (
        <PaymentBlockContainer>
            <FormHeader style={{fontSize: "28px", fontWeight: "bold", letterSpacing:"0.53px",color:"#1c1c1c"}}>Payment Information</FormHeader>
            <SafetyDisclaimer className="safety-disclaimer"><LockSymbol/> <span style={{color: "#54585D"}}>This is a secure 256-bit SSL encrypted payment. You&rsquo;re safe.</span></SafetyDisclaimer>
            <CCBlock>
                <Visa/>
                <MasterCard/>
                <Discover/>
                <Amex/>
            </CCBlock>
            <FieldSet style={{minWidth: "unset", width: "calc(100% - 20px)", maxWidth: "354px", margin: "30px auto"}}>
                <legend>Credit Card Information</legend>
                <FormRow className="cc-num-row">
                    <InputGroup
                        specialStyle="form-group--ccNumber"
                        type="text"
                        id="ccNumber"
                        label="CARD NUMBER"
                        required={true}
                        maxLength={16}
                        placeholder="#### #### #### #### ####"
                        value={fields.ccNumber}
                        handleInputChange={handleInputChange}
                        error={errors.ccNumber}
                        validation="\d*"
                    />
                </FormRow>
                <FormRow className="cc-exp-row" style={{alignItems: "center", position: "relative"}}>
                    <SelectGroup
                        id="ExpiresMonth"
                        specialStyle="form-group--expMonth"
                        label="MONTH"
                        required={true}
                        value={fields.ExpiresMonth}
                        error={errors.ExpiresMonth}
                        options={months}
                        handleInputChange={handleInputChange}
                    />
                    <span>&nbsp;/&nbsp;</span>
                    <SelectGroup
                        id="ExpiresYear"
                        specialStyle="form-group--expYear"
                        label="YEAR"
                        required={true}
                        value={fields.ExpiresYear}
                        error={errors.ExpiresYear}
                        options={years}
                        handleInputChange={handleInputChange}
                    />
                    <InputGroup
                        specialStyle="form-group--cvnCode"
                        type="text"
                        id="cvnCode"
                        label="CVV"
                        required={true}
                        maxLength={4}
                        placeholder="cvv"
                        value={fields.cvnCode}
                        handleInputChange={handleInputChange}
                        error={errors.cvnCode}
                        validation="\d*"
                    />
                    <InfoCircle>
                        <a href="https://www.cbn.com/CVVNumber/CVV.html" target="_blank"><FaQuestionCircle/></a>
                    </InfoCircle>
                </FormRow>
            </FieldSet>
        </PaymentBlockContainer>
    )
}

export default PaymentBlock
    