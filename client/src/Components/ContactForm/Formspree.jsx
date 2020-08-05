// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import "./Form.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <>
        <section className="form-section" id="contact">
          <div className="section-heading">
            <h1>Contact</h1>
            <h6>Let's Work Together</h6>
          </div>

          <div className="form-container">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/xaypvvbq"
              method="POST"
            >
              {/* ///////////////////////// */}
              {/* //////* Single Item ///// */}
              {/* ///////////////////////// */}
              <div className="singleitem">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="name"
                  required=""
                  placeholder="your name..."
                />
              </div>

              {/* ///////////////////////// */}
              {/* //////* Single Item ///// */}
              {/* ///////////////////////// */}
              <div className="singleitem">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="name"
                  required=""
                  placeholder="Enter your email..."
                />
              </div>

              {/* ///////////////////////// */}
              {/* //////* Single Item ///// */}
              {/* ///////////////////////// */}

              <div className="singleitem">
                <label for="telephone">Telephone Number (Optional)</label>
                <input
                  type="telephone"
                  name="telephone"
                  id="telephone"
                  className="name"
                  placeholder="(XXX) XXX-XXXX"
                ></input>
              </div>

              {/* ///////////////////////// */}
              {/* //////* Single Item ///// */}
              {/* ///////////////////////// */}
              <div className="singleitem">
                <label htmlFor="services">Services</label>
                <select
                  name="services"
                  id="services"
                  className="name"
                  required=""
                >
                  <option>SELECT</option>
                  <option value="Web/App Development">
                    Web/App Development
                  </option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Marketing Strategy">Marketing Strategy</option>
                  <option value="Other">Other</option>
                </select>
              </div>

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
              {/* ////////////////////////////// */}
              {/* ///////items ends here///////// */}
              {/* /////////////////////////////// */}

              {status === "SUCCESS" ? (
                <p>Your message was sent, I'll get back to you soon!</p>
              ) : (
                <div className={"form-btn"}>
                  <button type="submit">Submit</button>
                </div>
              )}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </section>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
