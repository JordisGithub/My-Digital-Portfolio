import React from "react";
import "./Specializations.css";

function Specializations() {
  return (
    <>
      <section className="my-specializations" id="specializations">
        <div className="specializations-highlight">
          <h2 className="section__title--services">Specializations</h2>

          <div className="services">
            <div className="service">
              <h3>Engineering</h3>
              <p>
                I am a software engineer that has skills in both the front-end
                of web applications and the back-end. I am a programmer with
                strong skills in ruby and rails, React, CSS and UI design. I
                have a passion for problem solving. Currently, I am building a
                web application that is a marketplace for sustainable fashion
                with a sustainability scoring model for the brands.
              </p>
            </div>

            <div className="service">
              <h3>Business</h3>
              <p>
                The Pandemic continues to be a challenge, I can help accelerate
                innovation, digitalization, streamlining business proposition
                for consumers. Digital opportunities from product creation to
                consumer experience. Digital style testing and omnichannel
                customer experience. Stay super close to the consumer with
                digital touchpoints. Agile to stay on top of rapidly changing
                consumer preferences.
              </p>
            </div>

            <div className="service">
              <h3>Marketing</h3>
              <p>
                Results-driven marketer. I deliver integrated, strategic,
                multi-channel marketing programs to heighten brand awareness,
                increase customer engagement and improve the customer experience
                to exceed acquisition and retention goals. I've earned an MBA
                and have a keen understanding of strategy, planning, development
                and implementation.
              </p>
            </div>
          </div>

          <a href="#work" className="btn">
            My Work
          </a>
        </div>
      </section>
    </>
  );
}

export default Specializations;
