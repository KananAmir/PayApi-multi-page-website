import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import logo from '../../assets/shared/desktop/logo.svg'
import '../../pages/home/home.css'
import '../pricing/pricing.css'
import FormInput from "../../components/FormInput";
import Button from '../../components/Button';
import PricingCard from './PricingCard';
import { NavLink } from 'react-router-dom';
export default class Pricing extends Component {
    render() {
        return (
            <div className="pricing">
                <header className="my-header">
                <NavLink exact to = "/"><img className="myLogo" src={logo} alt='PayApi' /></NavLink>
                    <Navbar />
                </header>
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
