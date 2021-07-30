import React, { Component } from 'react'
import Footer from '../../components/Footer'
import '../../pages/home/home.css'
import '../pricing/pricing.css'
import FormInput from "../../components/FormInput";
import Button from '../../components/Button';
import PricingCard from './PricingCard';
import MyHeader from '../../components/MyHeader'
export default class Pricing extends Component {
    render() {
        return (
            <div className="pricing">
               <MyHeader/>
                <h1 className="pricing-heading">Pricing</h1>
                <PricingCard/>
                <div className="ready-and-email">
                    <h1 className="start-heading">Ready to start?</h1>
                    <div className="input-and-button">
                        <FormInput />
                        <Button />
                    </div>
                </div>  
                <Footer />
            </div>
        )
    }
}
