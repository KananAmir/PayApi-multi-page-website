import React, { Component } from "react";
import FormInput from "./../../components/FormInput";
import Button from "../../components/Button";
import mobile_about_img from "../../assets/about/mobile/image-team-members.jpg";
import tablet_about_img from "../../assets/about/tablet/image-team-members.jpg";
import desktop_about_img from "../../assets/about/desktop/image-team-members.jpg";
import "./about.css";
export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="about-heading">
          We empower innovators by delivering access to the financial system
        </h1>

        <div className="about-content">
          <h3 className="about-content-heading">Our Vision</h3>
          <p className="about-content-parag">
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>

        <div className="about-content">
          <h3 className="about-content-heading">Our Business</h3>
          <p className="about-content-parag">
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>

        <img
          className="mobile-about-img"
          src={mobile_about_img}
          alt="team members"
        />
        <img
          className="tablet-about-img"
          src={tablet_about_img}
          alt="team members"
        />
        <img
          className="desktop-about-img"
          src={desktop_about_img}
          alt="team members"
        />

        <div className="about-statics">
          <div className="about-statics-item">
            <h5 className="about-statics-heading">Team Members</h5>
            <p className="about-statics-number">300+</p>
          </div>
          <div className="about-statics-item">
            <h5 className="about-statics-heading">Offices in the US</h5>
            <p className="about-statics-number">3</p>
          </div>
          <div className="about-statics-item">
            <h5 className="about-statics-heading">Transactions analyzed</h5>
            <p className="about-statics-number">10M+</p>
          </div>
        </div>

        <div className="about-content">
          <h3 className="about-content-heading">The Culture</h3>
          <p className="about-content-parag">
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>

        <div className="about-content">
          <h3 className="about-content-heading">The People</h3>
          <p className="about-content-parag">
            {" "}
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
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
