import React, { Component } from "react";
import "../../pages/home/home.css";
import "../pricing/pricing.css";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import PricingCard from "./PricingCard";
export default class Pricing extends Component {
  render() {
    return (
      <div className="pricing">
        <h1 className="pricing-heading">Pricing</h1>
        <PricingCard />
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
