import React, { Component } from 'react'
import '../styles/formInput.css'

export default class FormInput extends Component {
    render() {
        return (
            <div>
                <input className="input" type="email" placeholder="Enter email adress" />
            </div>
        )
    }
}
