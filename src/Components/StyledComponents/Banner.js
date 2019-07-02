import React from "react"
import styled from "@emotion/styled"

const DevBanner = styled.div`
    width: 100%;
    padding: 20px;
    text-align: center;
    background: lightgoldenrodyellow;
    color: maroon;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-style: normal;
    border: 1px dotted #000;
    margin: 30px 0;
    box-sizing: border-box;
`

const Banner = () => <DevBanner className="banner">Form Under Development</DevBanner>

export default Banner;