import React, { Component } from "react";
import "../contact/form.css";
import checked from "../../assets/shared/desktop/icon-check.svg";
export default class Form extends Component {
  state = {
    checked: false,
    fields: {},
    errors: {},
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    //Company name
    if (!fields["company"]) {
      formIsValid = false;
      errors["company"] = "Cannot be empty";
    }

    //Title
    if (!fields["title"]) {
      formIsValid = false;
      errors["title"] = "Cannot be empty";
    }
    //Message
    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "Cannot be empty";
    }

    console.log(fields);
    console.log(errors);
    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit = (e) => {
    e.preventDefault();
    this.handleValidation();
  };

  handleChange = (field, e) => {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  };

  onChecboxClick = () => {
    if (this.state.checked) {
      this.setState({ checked: false });
    } else this.setState({ checked: true });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="contact-form">
        <form
          noValidate
          name="contactform"
          className="contactform"
          onSubmit={this.contactSubmit}
        >
          <input
            type="text"
            name="name"
            className={this.state.errors["name"] && "input-error"}
            placeholder="Name"
            onChange={(event) => this.handleChange("name", event)}
            value={this.state.fields["name"]}
          />
          <span className="error-msg">{this.state.errors["name"]}</span>

          <input
            type="email"
            name="email"
            className={this.state.errors["email"] && "input-error"}
            placeholder="Email"
            onChange={(event) => this.handleChange("email", event)}
            value={this.state.fields["email"]}
          />
          <span className="error-msg">{this.state.errors["email"]}</span>

          <input
            type="text"
            name="company"
            className={this.state.errors["company"] && "input-error"}
            placeholder="Company Name"
            onChange={(event) => this.handleChange("company", event)}
            value={this.state.fields["company"]}
          />
          <span className="error-msg">{this.state.errors["company"]}</span>

          <input
            type="text"
            name="title"
            className={this.state.errors["title"] && "input-error"}
            placeholder="Title"
            onChange={(event) => this.handleChange("title", event)}
            value={this.state.fields["title"]}
          />
          <span className="error-msg">{this.state.errors["title"]}</span>

          <textarea
            type="text"
            name="message"
            rows="4"
            cols="50"
            className={this.state.errors["message"] && "input-error"}
            placeholder="Message"
            onChange={(event) => this.handleChange("message", event)}
            value={this.state.fields["message"]}
          />
          <span className="error-msg">{this.state.errors["message"]}</span>

          <div className="check">
            {this.state.checked ? (
              <div
                onClick={this.onChecboxClick}
                className="check-div check-div-clicked"
              >
                <img
                  className="mb-2"
                  style={{ filter: "brightness(0) invert(1)" }}
                  src={checked}
                  alt=""
                />
              </div>
            ) : (
              <div onClick={this.onChecboxClick} className="check-div"></div>
            )}

            <p className="check-parag">
              Stay up-to-date with company announcements and updates to our API
            </p>
          </div>
          <button type="submit" className="form-button">
            {" "}
            Submit
          </button>
        </form>
      </div>
    );
  }
}
