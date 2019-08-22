import React from 'react';
import styled from '@emotion/styled'
import Media from 'react-media';

const PremiumIntro = styled.div`
    @media screen and (max-width: 649px) {
        font-weight: bold;
    }
`

const PremuimInfoBlock = styled.div`
    margin: 20px 0 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div.premium-img {
        width: 160px;
        flex: 0 0 160px;
        img.img-responsive {
            display: block;
            max-width: 100%;
        }
    }
    div.premium-description{
        max-width: 530px;
        flex: 1 0 140px;
        ul {
            list-style: none;
            margin-block-start: 0;
            margin-block-end: 0;
            @media screen and (max-width: 649px) {
                padding-inline-start: 20px;
            }
            li::before {
                content: "•"; 
                color: #F7B500;
                display: inline-block; 
                width: 1em;
                margin-left: -1em
            }
            li+li {
                margin-top: 20px;
            }
            li {
                @media screen and (max-width: 649px) {
                    font-style: italic;
                    &::before {
                        display:none;
                    }
                }
            }
        }
    }

`

const PartnershipBlock = ({premiumData: {premiumTitle, premiumImgUrl, premiumDescriptions, shortDescriptions}, monthlyChecked}) => {
    return (
        <>
            <PremiumIntro>All Monthly Partners Receive:</PremiumIntro>
            <PremuimInfoBlock>
                <div className="premium-img">
                    <img className="img-responsive" alt={`DVD Premium for "${premiumTitle}"`} src={premiumImgUrl}/>
                </div>
                <div className="premium-description">
                    <Media query="(max-width: 649px)">
                    {
                        matches =>
                            matches ? (
                                <ul className="premium-description__list">
                                {
                                    shortDescriptions.map((desc, idx) => <li key={`premdesc-${idx}`} className="premium-description__list--item" dangerouslySetInnerHTML={{__html: desc}}></li>)
                                }
                                </ul>
                            ) : (
                                <ul className="premium-description__list"> 
                                {
                                    premiumDescriptions.map((desc, idx) => <li key={`premdesc-${idx}`} className="premium-description__list--item" dangerouslySetInnerHTML={{__html: desc}}></li>)
                                }
                                </ul>
                            )
                    }
                    </Media>
                </div>

            </PremuimInfoBlock>
        </>
    )
}

export default PartnershipBlock