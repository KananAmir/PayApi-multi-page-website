import React, { Component } from 'react'
import Form from './Form'
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import logo from '../../assets/shared/desktop/logo.svg';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import Footer from '../../components/Footer'
import './contact.css'
import Companies from '../../components/Companies';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <header className="my-header">
                <NavLink exact to = "/"><img className="myLogo" src={logo} alt='PayApi' /> </NavLink>
                    <Navbar />
                </header>

               <div className="contact-main">
                    <div className="submit-form">
                        <h1 className="contact-heading p-2">
                            Submit a help request and we’ll get in touch shortly.
                        </h1>
                        <Form/>
                    </div>

                    <div className="join-companies">
                        <h3 className="contact-company-heading  mb-5">Join thousands of innovators already building with us</h3>
                        <Companies/>
                    </div>
               </div>

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
