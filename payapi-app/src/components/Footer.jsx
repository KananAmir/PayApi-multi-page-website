import React, { Component } from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import '../styles/footer.css'
import { NavLink } from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-logo">
                    <a href="#"><img className="footer-logo-pic" src={logo} alt='PayApi' /></a>  
                </div>
                <div className="footer-nav">
                   <ul>
                       <li><NavLink exact to = "/pricing">Pricing</NavLink></li>
                       <li><NavLink exact to = "/about">About</NavLink></li>
                       <li><NavLink exact to = "/contact">Contact</NavLink></li>
                   </ul>
                </div>
                <div className="footer-social">
                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        )
    }
}


