import React from 'react'
import styled from '@emotion/styled'

const CardSection = styled.section`
    background: white;
    margin: 30px auto;
    padding: 30px 0;
    width: 100%;
    @media screen and (max-width: 623px) {
        background: #ECEFF1;
    }
`

const CardContainer = styled.div`
    width: calc(100% - 20px);
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    aligh-items: center;
    @media screen and (max-width: 623px) {
        flex-wrap: wrap;
    }
`

const Card = styled.div`
    &.card {
        height: 250px;
        flex: 0 1 380px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
        color: #3B3B3B;
    }
    &.card + &.card {
        margin-left: 10px;
    }
    h4.card__title {
        font-weight:bold;
        font-size: 22px;
        margin: 0;
        padding: 10px 0;
        text-align: center;
        flex: 0 0 auto;
        background-color: #E1E5E8;
    }
    div.card__body {
        padding: 10px;
        flex: 1 1 auto;
        background-color: #ECEFF1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .mail-in-form, .cbn-address, .giving-links, .phone--info {
            text-align: center;
            @media screen and (max-width: 739px) {
                font-size: 16px;
                a, .cbn-address--street, .cbn-address--city-state-zip {
                    font-size: 16px;
                }
            }
            @media screen and (max-width: 623px) {
                font-size: 19px;
                a, .cbn-address--street, .cbn-address--city-state-zip {
                    font-size: 19px;
                }
            }
        }
        .phone {
            text-align: center;
            a {
                cursor: pointer;
                font-size: 28px;
                color: #3b3b3b;
                text-decoration: none;
            }
        }

    }
    a {
        color: #009BDF;
        text-decoration: none;
        text-align: center;
        &:hover, &:active, &:focus {
            text-decoration: underline;
            color: #0069AD;
        }
    }
    @media screen and (max-width: 623px) {
        &.card {
            margin: 0 auto;
        }
        &.card + &.card {
            margin: 0 auto;
            margin-top: 20px;
        }
    }
`

const OtherGivingBlock = () => (
    <CardSection>
        <CardContainer>
            <Card className="card">
                <h4 className="card__title">Give By Phone</h4>
                <div className="card__body">
                    <div className="phone"><a href="tel:18007007000">1-800-700-7000</a></div>
                    <div className="phone--info"></div>
                </div>
            </Card>
            <Card className="card">
                <h4 className="card__title">Mail-In Giving Form</h4>
                <div className="card__body">
                    <div className="mail-in-form">
                        To donate by check or to a specific cause, please complete this <a href="https://www.cbn.com/giving/700club/option.aspx?o=4">donation form</a> by printing and mailing to:
                    </div>
                    <div className="cbn-address">
                        <div className="cbn-address--street">977 Centerville Turnpike,</div>
                        <div className="cbn-address--city-state-zip">Virginia Beach, VA  23463</div>
                    </div>
                </div>
            </Card>
            <Card className="card">
                <h4 className="card__title">Some Title</h4>
                <div className="card__body">
                    <a className="giving-links" href="https://www.cbn.com/giving/700club/pledgeExpress.aspx">Pledge Giving</a>
                    <a className="giving-links" href="http://www.cbnlegacy.org/">Planned Giving & Your Legacy</a>
                    <a className="giving-links" href="https://www.cbn.com/giving/livingtributes/">Memorial & Tribute Gifts</a>
                    <a className="giving-links" href="https://www.cbn.com/partners/matchinggifts.aspx">Employer Matching</a>
                    <a className="giving-links" href="https://www.cbn.com/giving/700club/stockgifts.aspx">Stock Gifts</a>
                    <a className="giving-links" href="https://www.cbn.com/giving/700club/workplacegiving.aspx">Workplace Giving</a>
                </div>
            </Card>
        </CardContainer>
    </CardSection>
)

export default OtherGivingBlock