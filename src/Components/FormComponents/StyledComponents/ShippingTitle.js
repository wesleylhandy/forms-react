import React from "react";
import styled from "@emotion/styled";

const ShippingTitle = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    width: 100%;
    hr {
        background-color: #333;
        width: 100%;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -ms-flex-item-align: center;
        align-self: center;
        height: 2px;
        overflow: visible;
        margin: 20px 0;
        box-sizing: border-box;
    }
    h3 {
        box-sizing: border-box;
        color: #333;
        text-align: center;
        font-size: 19px;
        font-weight: 600;
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
        -webkit-padding-before: 0;
        -webkit-padding-start: 0;
        -webkit-padding-after: 0;
        text-transform: uppercase;
        -ms-flex-item-align: center;
        align-self: center;
        white-space: nowrap;
        padding: 0 calc(19px * .3);
        line-height: 19px;
        margin-bottom: 0;
    }
`

export default ShippingTitle