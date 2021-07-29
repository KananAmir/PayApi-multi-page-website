import React, { Component } from 'react'
import './pricingCard.css'
import checked from '../../assets/shared/desktop/icon-check.svg';
export default class PricingCard extends Component {
    render() {
        return (
            <div className="pricingInfo">
                <div className="pricingItems">
                    <h2 className="pricingCardHeading">Free Plan</h2>
                        <p className="pricingCardParag">Build and test using our core set of products with up to 100 API requests </p><br />
                        <span className="amount">$0.00</span>
                        <hr />
                        <div className="pricingList">
                            <img src={checked}/> <p>Transactions</p> <br />
                            <img src={checked}/> <p>Auth</p> <br />
                            <img src={checked}/> <p>Identity</p> <br />
                            <p className="unclicked">Investments</p> <br />
                            <p className="unclicked">Assets</p> <br />
                            <p className="unclicked">Liabilities</p> <br />
                            <p className="unclicked">Income</p> <br />
                            <hr />
                            <button className="requestButton"> Request Acces</button>
                        </div>
                </div>
                <div className="pricingItems">
                    <h2 className="pricingCardHeading">Basic Plan</h2>
                        <p className="pricingCardParag">Launch your project with unlimited requests and no contractual minimums </p><br />
                        <span className="amount">$249.00</span>
                        <hr />
                        <div className="pricingList">
                            <img src={checked}/> <p>Transactions</p> <br />
                            <img src={checked}/> <p>Auth</p> <br />
                            <img src={checked}/> <p>Identity</p> <br />
                            <img src={checked}/> <p>Investments</p> <br />
                            <img src={checked}/> <p>Assets</p> <br />
                            <p className="unclicked">Liabilities</p> <br />
                            <p className="unclicked">Income</p> <br />
                            <hr />
                            <button className="requestButton"> Request Acces</button>
                        </div>
                </div>
                <div className="pricingItems">
                    <h2 className="pricingCardHeading">Premium Plan</h2>
                        <p className="pricingCardParag">Get tailored solutions, volume pricing, and dedicated support for your team  </p><br />
                        <span className="amount">$499.00</span>
                        <hr />
                        <div className="pricingList">
                            <img src={checked}/> <p>Transactions</p> <br />
                            <img src={checked}/> <p>Auth</p> <br />
                            <img src={checked}/> <p>Identity</p> <br />
                            <img src={checked}/> <p>Investments</p> <br />
                            <img src={checked}/> <p>Assets</p> <br />
                            <img src={checked}/> <p>Liabilities</p> <br />
                            <img src={checked}/> <p>Income</p> <br />
                            
                            <hr />
                            <button className="requestButton"> Request Acces</button>
                        </div>
                </div>
            </div>
        )
    }
}
