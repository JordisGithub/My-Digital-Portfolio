import React from "react";
import "./AboutMe.css";
import Jordi_01 from "../../img/Jordi_01.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-details">
            <div className="about-heading">
              <h1>About</h1>
              <h6>Myself</h6>
            </div>

            <div className="aboutme-img-container">
              <img
                className="aboutme-img"
                src="https://i.imgur.com/NWsAAi6.jpg"
                alt=""
              />
            </div>

            <p>
              I am a highly analytical and creative User Interface Developer and
              Digital Marketer who holds over eight years’ experience working in
              Business and Finance. As both a Web Developer and Business
              Strategist, I leverage my technical understanding of both code and
              business to build scalable and user-centric applications that
              balance the needs of the organization and the user. I seek the
              opportunity to build customer-centric technologies that help
              businesses better connect with diverse audiences.
            </p>

            <div className="social-media">
              <ul className="about-nav-list">
                <li>
                  <a
                    href="https://github.com/JordisGithub"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jordania-pereyra/"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/jordi_515/"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://twitter.com/jordip515?lang=en"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li> */}
                {/* 
                <li>
                  <a
                    href="https://www.facebook.com/jordania.pereyra"
                    className="icon-link"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
