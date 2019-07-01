import React from "react";
import styled from "@emotion/styled";

const OtherGiftAmountGroup = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    line-height: unset;
    &.askarray--other{
        position: relative;
        box-sizing: border-box;
        height: 80px;
        width: 100%;
        max-width: 400px;
        margin: 20px auto;
        margin-top: 0; 
    }
    div {
        display: flex;
        flex-direction:row;
        align-items: center;
        box-sizing: border-box;
        height: 80px;
        line-height: unset;
        margin-bottom: 0;
        position: relative;
        white-space: nowrap;
        width: 100%;
        label {
            font-size: calc(19px * .7);
            font-weight: 600;
            color: #333;
            box-sizing: border-box;
            position: absolute;
            left: 50%;
            top: calc(100% - (19px * .5));
            transform: translateX(-50%);
        }
    }
    div.askarray__form-group--other  {
        justify-content: center;
        max-width: 400px;
        input {
            position: relative;
            appearance: none;
            background: none;
            background-color: #f0f0f0;
            height: calc(19px * 2.5);
            width: 100%;
            -webkit-transition: border-color 200ms ease-in-out, color 200ms ease-in-out, background-color 200ms ease-in-out;
            transition: border-color 200ms ease-in-out, color 200ms ease-in-out, background-color 200ms ease-in-out;
            border: 2px solid #333;
            border-radius: 4px;
            box-sizing: border-box;
            color: #333;
            font-size: calc(19px * 1.4);
            text-align: center;
            font-weight: 600;
            max-width: 220px;
            white-space: nowrap;
        }
        input:hover,
        input:active,
        input:focus {
            border: 2px solid #333;
            background-color: #fff;
            box-sizing: border-box;
            outline: none;
        }
        div.other-amt-error{
            box-sizing: border-box;
            position: absolute;
            color: crimson;
            width: auto;
            font-weight: 800;
            font-size: calc(19px * .5);
            opacity: 1;
            overflow: hidden;
            max-width: 100%;
            white-space: nowrap;
            bottom: auto;
            top: 19px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    div.askarray__form-group--tabs {
        justify-content: space-between;
        label {
            position: relative;
            left:auto !important;
            top:auto !important;
            transform: none !important;
            font-size: 19px;
            color: #333;
            line-height: 80px !important;
            margin-bottom: 0;
        }
        div.askarray__form-group-tabs-flex-container {
            display: flex;
            position:relative;
            flex-direction:row;
            justify-content: center;
            align-items: center;
            div.form-group-tabs--dollar {
                box-sizing: border-box;
                color: #333;
                margin: 0 5px;
                font-weight: 600;
                font-size: 19px;
            }
            input {
                position: relative;
                appearance: none;
                height: calc(19px * 2.5);
                width: 100%;
                -webkit-transition: border-color 200ms ease-in-out, color 200ms ease-in-out, background-color 200ms ease-in-out;
                transition: border-color 200ms ease-in-out, color 200ms ease-in-out, background-color 200ms ease-in-out;
                border: 1px solid #333;
                border-radius: 4px;
                box-sizing: border-box;
                color: #333;
                font-size: calc(19px * 1.4);
                text-align: center;
                font-weight: 600;
                max-width: 220px;
                white-space: nowrap;
            }
            input:hover,
            input:active,
            input:focus {
                border: 1px solid #333;
                background-color: #fff;
                box-sizing: border-box;
                outline: none;
            }
            div.other-amt-error{
                box-sizing: border-box;
                position: absolute;
                color: crimson;
                width: auto;
                font-weight: 800;
                font-size: calc(19px * .5);
                opacity: 1;
                overflow: hidden;
                max-width: 100%;
                white-space: nowrap;
                bottom: auto;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        @media screen and (max-width: 450px) {
            label {
                font-size: 15px;
            }
            div input {
                max-width: 160px;
            }
        }
    }
    div.selected{

    }
`

export default OtherGiftAmountGroup;