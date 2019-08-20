import React from "react";
import styled from "@emotion/styled";

export const DesignationContainer = styled.div`
    margin: 20px auto;
    position: relative;
    z-index: 1;
`

export const Designation = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: white;
    margin: 0 auto;
    max-width: 483px;
    padding: 18px;
    width: 100%;
    .designation__image {
        width: 84px;
        border-radius: 50%;
        justify-self: flex-start;
        overflow:hidden;
        margin-right: 10px;
        img.img-responsive {
            display: block;
            max-width: 100%;
        }
    }
    .designation__body {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: left;
        flex-basis: 1 0 274px;
        h4.designation__title {
            margin: 0;
            color: #181818;
            font-size: 17px;
            font-weight: bold;
            line-height: 1.235;
        }
        .designation__description {
            font-size: 14px;
            line-height: 1.214;
        }
    }
    .designation--arrow {
        justify-self: flex-end;
        width: 26px;
        flex: 0 0 26px;
        margin-left: 10px;
    }
    &.display {
        background-color: #F5F7F8;
        border: 1px solid #B4B2B2;
        border-radius: 3px;
        max-width: 407px;
        padding: 8px 15px;
        .designation__image {
            width: 60px;
        }
        .designation__body {
            h4.designation__title {
                font-size: 15px;
            }
            .designation__description {
                line-height: 15px;
            }
        }
    }
    &+.designation {
        border-top: 1px solid #979797;
    }
`

export const DesignationListContainer = styled.div`
    position: absolute;
    z-index: 10;
    width: 483px;
    left: 50%;
    margin-top: 30px;
    transform: translateX(-50%);
    overflow-x: hidden;
    overflow-y: scroll;
    height: 480px;
    border: 1px solid #979797;
    background-color: #F5F7F8;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.17);
    &::after {
        content: "";
        display: block;
        position: absolute;
        top: -30px;
        left: 50%;
        border-top: 15px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 15px solid #F5F7F8 !important;
    }
`
