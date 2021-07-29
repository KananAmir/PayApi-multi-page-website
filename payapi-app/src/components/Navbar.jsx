import React, { Component } from 'react'
import menu from '../assets/shared/mobile/menu.svg'
import '../styles/navbar.css'
import Button from './Button';
import { NavLink } from "react-router-dom";
import {HamburgerMenu} from './HamburgerMenu'


export default class Navbar extends Component {
    state = {
        visible: false,
    }

    handleChangeVisible = (visible)=>{
        this.setState({
            visible
        });
    }
    render() {
        return (
            <div className='navbar'>
               
               <img onClick={() => {
                    this.handleChangeVisible(true);
                 }} className='btn-open' src={menu} alt="open" />

               {this.state.visible ? <HamburgerMenu handleCloseMenu={() => 
                    this.handleChangeVisible(false)}/> : null}


                <div className="main-nav">
                   <ul>
                       
                       <li><NavLink exact to = "/pricing">Pricing</NavLink></li>
                       <li><NavLink exact to = "/about">About</NavLink></li>
                       <li><NavLink exact to = "/contact">Contact</NavLink></li>
                   </ul>
                    
                </div>
                <div className="btn-div">
                    <Button/>
                </div>
                
            </div>
        )
    }
}
