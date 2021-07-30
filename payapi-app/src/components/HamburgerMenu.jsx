import { NavLink } from "react-router-dom";
import '../styles/hamburgerMenu.css'
import Button from './Button';
import close from '../assets/shared/mobile/close.svg'

export const HamburgerMenu = (props) => {
        return (
            <div className="hamburger-menu">
            <img onClick={props.handleCloseMenu} className='btn-close' src={close} alt="close" />

                <div className="line"/>
                <div className="menu-nav">
                   <ul>
                       <li><NavLink exact to = "/pricing">Pricing</NavLink></li>
                       <li><NavLink exact to = "/about">About</NavLink></li>
                       <li><NavLink exact to = "/contact">Contact</NavLink></li>
                   </ul>
                   </div>
                <Button/>
            </div>
        )
    }

