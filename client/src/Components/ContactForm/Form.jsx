import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  render() {
    return (
      <>
        <section className="form-section" id="contact">
          <div className="section-heading">
            <h1>Contact</h1>
            <h6>Let's Work Together</h6>
          </div>
          <div className="form-container">
            <form>
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
                <select name="services" id="service">
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
                />
              </div>
              {/* ///////////////////////// */}
              {/* ///////ends here///////// */}
              {/* ///////////////////////// */}
              <div className="msg">Your message was sent</div>
              <div className="form-btn">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
