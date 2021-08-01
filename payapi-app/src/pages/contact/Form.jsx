import React, { Component } from 'react'
import '../contact/form.css'
import checked from '../../assets/shared/desktop/icon-check.svg';
export default class Form extends Component {
    state ={
        checked: false,
    }

    // onChecboxClick = (checked) =>{
    //     this.setState({
    //         checked
    //     });
    // }

    onChecboxClick = () =>{
       if(this.state.checked) {
           this.setState({checked:false})
       }
       else this.setState({checked:true})
    }

    render() {
        return (
            <div className="contact-form">
                <form action="">
                    <input type="text"  placeholder="Name"/><br />
                    <input type="email"  placeholder="Email Address"/><br />
                    <input type="text"  placeholder="Company Name"/><br />
                    <input type="text"  placeholder="Title"/><br />
                    <textarea id="" name="" rows="4" cols="50" placeholder="Message"></textarea><br />

                    <div className="check">
                        {this.state.checked ?  <div onClick={this.onChecboxClick} className="check-div check-div-clicked"><img className="mb-2" style={{filter: "brightness(0) invert(1)"}} src={checked} alt="" /></div> : <div onClick={this.onChecboxClick} className="check-div"></div>}
                     
                        <p className="check-parag">Stay up-to-date with company announcements and updates to our API</p>
                    </div>
                    <button className="form-button"> Submit</button>
                </form>
            </div>
        )
    }
}
