import React, { Component } from 'react'
import easyImplementPic from '../assets/home/desktop/illustration-easy-to-implement.svg'
import '../styles/easyImplement.css'

export default class EasyImplement extends Component {
    render() {
        return (
            <div className='px-3 implement'>
                <img className="implement-pic" src={easyImplementPic} alt="Implementation" />
               <div className="implement-content">
                    <h1 className="implement-heading">Easy to Implement</h1>
                    <p className="implement-parag">Our API comes with just a few lines of code. You’ll be up and running in no time. 
                        We built our documentation page to integrate payments functionality with ease. </p>
                </div>
            </div>          
        )
    }
}
