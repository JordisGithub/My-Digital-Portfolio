import "./ContactForm.css";
import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        messsage: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <>
        <section className="contact" id="contact">
          <div className="container">
            <div className="section-heading">
              <h1>Contact</h1>
              <h6>Let's Work Together</h6>
            </div>

            <form action="">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                required
              ></input>

              <label for="emal">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email..."
                required
              ></input>

              <label for="service">Services</label>
              <select name="services" id="service">
                <option value="">Web Design & Development</option>
                <option value="">App Design & Development</option>
                <option value="">Ecommerce / Digital Marketing</option>
                <option value="">Marketing Strategy</option>
              </select>

              <label for="subject">Subject:</label>
              <textarea
                name="subject"
                id="subject"
                cols="10"
                rows="10"
              ></textarea>
              <input type="submit" value="submit" className="btn"></input>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default ContactForm;
