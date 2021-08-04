import React, { Component } from "react";
import "./home.css";
import phone from "../../assets/home/desktop/illustration-phone-mockup.svg";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import Companies from "../../components/Companies";
import EasyImplement from "../../components/EasyImplement";
import UIandUX from "../../components/UIandUX";
import CircleLogos from "../../components/CircleLogos";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="bg-circle">
        <div className="phone-and-start">
          <div className="phone-pic">
            <img src={phone} alt="mobile phone" />
          </div>
          <div className="phone-and-api">
            <h1 className="content-parag">
              Start building with out APIs for absolutely free.
            </h1>
            <div className="input-and-button">
              <FormInput />
              <Button />
            </div>
            <p>
              Have any questions?{" "}
              <b>
                <NavLink exact to="/contact">
                  Contact Us
                </NavLink>
              </b>
            </p>
          </div>
        </div>
        </div>
        <div className="companies-and-content">
          <div className="companies">
            <Companies filter="brightness(0) invert(1)" />
          </div>
          <div className="companies-content">
            <h1 className="aboutus-heading">Who we work with</h1>
            <p className="aboutus-parag">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.{" "}
            </p>
            <button className="about-us"> About Us</button>
          </div>
        </div>
        <EasyImplement />
        <UIandUX />
        <CircleLogos />
        <div className="ready-and-email">
          <h1 className="start-heading">Ready to start?</h1>
          <div className="input-and-button">
            <FormInput />
            <Button />
          </div>
        </div>
      </div>
    );
  }
}
