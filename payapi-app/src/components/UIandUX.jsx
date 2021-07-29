import React, { Component } from 'react'
import '../styles/ui_ux.css'
import ui_ux from '../assets/home/desktop/illustration-simple-ui.svg'
export default class UIandUX extends Component {
    render() {
        return (
            <div className='px-3 ui-ux-div'>
                <img className="ui-ux" src={ui_ux} alt="UI and UX" />
                <div className="ui-ux-content">
                    <h1 className="ui-ux-heading">Simple UI&UX Design </h1>
                    <p className="ui-ux-parag">Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
                </div>
            </div>
        )
    }
}
