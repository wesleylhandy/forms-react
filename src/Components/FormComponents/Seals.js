import React from 'react'
import styled from "@emotion/styled"

const SealsBlock =  styled.section`
    box-sizing: border-box;
    margin: 30px auto;
    padding: 0;
    width: 100%;
    max-width: 680px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .seals__seal {
        box-sizing: border-box;
        display: block;
        padding: 0;
        margin: 0;
        width: 100%;
        text-align: center;
        a.seals__seal--link,
        img.seals__seal-img {
            box-shadow: none !important;
            text-decoration: none !important;
        }
    }
    @media screen and (max-width: 550px) {
        flex-wrap: wrap;
        .seals__seal {
            margin-top: 20px;
        }
    }
`

function Seals() {
    return (
        <SealsBlock id="seals">
            <div id="DigiCertClickID_RXDQXROF" data-language="en" className="seals__seal">
                <a className="seals__seal--link" href="https://www.digicert.com/ev-multi-domain-ssl.htm"></a>
            </div>
            <div id="ECFA_Logo" className="seals__seal">
                <a className="seals__seal--link" href="http://www.ecfa.org" target="_blank">
                    <img className="seals__seal-img" src="https://www.cbn.com/source/giving/shared/ecfa-logo-blacktext_sm.png" alt="ECFA"/>
                </a>
            </div>
        </SealsBlock>
    )
}

export default Seals