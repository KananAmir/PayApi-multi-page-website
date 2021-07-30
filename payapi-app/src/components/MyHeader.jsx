import React, { Component } from 'react'
import '../styles/myHeader.css'
import { NavLink } from 'react-router-dom';
import Button from '../components/Button'
import logo from '../assets/shared/desktop/logo.svg'
import {HamburgerMenu} from './HamburgerMenu'
import menu from '../assets/shared/mobile/menu.svg'
export default class MyHeader extends Component {

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
            <div className="my-header">
                <div className='row'>
                    <div className="col col-md-3 col-lg-2">
                        <NavLink exact to = "/"><img className="myLogo" src={logo} alt='PayApi' /> </NavLink>
                    </div>
                    <div className='navbar-div col col-md-2 col-lg-2 mt-2'>
                        <div className="main-nav">
                        <ul>
                            <li><NavLink exact to = "/pricing">Pricing</NavLink></li>
                            <li><NavLink exact to = "/about">About</NavLink></li>
                            <li><NavLink exact to = "/contact">Contact</NavLink></li>
                        </ul>
                        </div>
                    </div>      
                    <div className="btn-div col col-lg-8">
                            <Button/>
                    </div> 
                </div>
                <img onClick={() => {
                    this.handleChangeVisible(true);
                 }} className='btn-open' src={menu} alt="open" />

               {this.state.visible ? <HamburgerMenu handleCloseMenu={() => 
                    this.handleChangeVisible(false)}/> : null}
            </div>
        )
    }
}
