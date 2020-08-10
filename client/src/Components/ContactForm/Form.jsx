import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    services: "",
    message: "",
    sent: false,
  };

  //handle inputs
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleServices = (e) => {
    this.setState({
      services: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  // end of handle inputs

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      services: this.state.services,
      message: this.state.message,
    };

    axios
      .post("/api/forms", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not sent");
      }, 3000);
  };

  //resetting initial data
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      services: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    });
  };

  render() {
    return (
      <>
        <section className="form-section" id="contact">
          <div className="section-heading">
            <h1>Contact</h1>
            <h6>Let's Work Together</h6>
          </div>
          <div className="form-container">
            <form onSubmit={this.formSubmit}>
              {/* ///////////////////////// */}
              {/* //////* Single Item ///// */}
              {/* ///////////////////////// */}
              <div className="singleitem">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="name"
                  placeholder="your name..."
                  value={this.state.name}
                  onChange={this.handleName}
                />
              </div>
              {/* ///////////////////////// */}
              {/* ///////ends here///////// */}
              {/* ///////////////////////// */}

              {/* ///////////////////////// */}
              {/* //////* Single Item ///// */}
              {/* ///////////////////////// */}
              <div className="singleitem">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  className="name"
                  placeholder="Enter your email..."
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </div>
              {/* ///////////////////////// */}
              {/* ///////ends here///////// */}
              {/* ///////////////////////// */}

              {/* ///////////////////////// */}
              {/* //////* Single Item ///// */}
              {/* ///////////////////////// */}
              <div className="singleitem">
                <label htmlFor="services">Services</label>
                <select
                  name="services"
                  id="services"
                  value={this.state.services}
                  onChange={this.handleServices}
                >
                  <option value="">Web/App Design</option>
                  <option value="">Web/App Development</option>
                  <option value="">Ecommerce</option>
                  <option value="">Marketing Strategy</option>
                  <option value="">Other</option>
                </select>
              </div>
              {/* ///////////////////////// */}
              {/* ///////ends here///////// */}
              {/* ///////////////////////// */}

              {/* ///////////////////////// */}
              {/* //////* Single Item ///// */}
              {/* ///////////////////////// */}
              <div className="singleitem">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your Message..."
                  value={this.state.message}
                  onChange={this.handleMessage}
                />
              </div>
              {/* ///////////////////////// */}
              {/* ///////ends here///////// */}
              {/* ///////////////////////// */}
              <div className={this.state.sent ? "msg msgAppear" : "msg"}>
                Message has been sent
              </div>

              <div className="form-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
