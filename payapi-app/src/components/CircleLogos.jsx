import React, { Component } from 'react'
import finance from '../assets/home/desktop/icon-personal-finances.svg'
import banking from '../assets/home/desktop/icon-banking-and-coverage.svg'
import payment from '../assets/home/desktop/icon-consumer-payments.svg'
import  '../styles/circleLogos.css'
export default class CircleLogos extends Component {
    render() {
        return (
            <div className="circles">
                <div className=" row m-3 mt-5">
                    <div className="col-sm-12 col-md-4">
                        <img className="circle-logo mb-4" src={finance} alt="Finance" />
                        <h5 className="circle-heading mb-3">Personal Finances</h5>
                        <p className="circle-parag mb-5">Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. 
                            Analyze reports to reconcile activities in your account. </p>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <img className="circle-logo mb-4" src={banking} alt="Banking and Coverage" />
                        <h5 className="circle-heading mb-3">Banking & Coverage</h5>
                        <p className="circle-parag mb-5">With our platform, you can speed up account onboarding and support ongoing payments for checking, 
                        savings, credit card, and brokerage accounts. </p>
                    </div>
                
                    <div className="col-sm-12 col-md-4">
                    <img className="circle-logo mb-4" src={payment} alt="Consumer Payment" />
                    <h5 className="circle-heading mb-3">Consumer Payments</h5>
                    <p className="circle-parag mb-5">It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. 
                    Customers could instantly authenticate their account. </p>
                    </div>
                 </div>
            </div>
        )
    }
}
