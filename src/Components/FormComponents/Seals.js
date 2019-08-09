import React from 'react'

// TODO: ADD STYLED COMPONENTS

// .seals {
//     box-sizing: border-box;
//     margin-top: 20px;
//     padding: 0;
//     width: 100%;
// }

// .seals__seal {
//     box-sizing: border-box;
//     display: block;
//     padding: 0;
//     margin: 0;
//     width: 100%;
//     text-align: center;
// }

// a.seals__seal--link,
// img.seals__seal-img {
//     box-shadow: none !important;
//     text-decoration: none !important;
// }

// @media screen and (max-width: 550px) {
//     .seals {
//         flex-wrap: wrap;
//     }
//     .seals__seal {
//         margin-top: 20px;
//     }
// }

function Seals() {
    return (
        <div id="seals" className="styles.seals flex.flex flex.flex-row flex.flex-center flex.flex-axes-center">
            <div id="DigiCertClickID_RXDQXROF" data-language="en" className="styles.seals__seal">
                <a className="styles.seals__seal--link" href="https://www.digicert.com/ev-multi-domain-ssl.htm"></a>
            </div>
            <div id="ECFA_Logo" className="styles.seals__seal">
                <a className="styles.seals__seal--link" href="http://www.ecfa.org" target="_blank">
                    <img className="styles.seals__seal-img" src="https://www.cbn.com/source/giving/shared/ecfa-logo-blacktext_sm.png" alt="ECFA"/>
                </a>
            </div>
        </div>
    )
}

export default Seals