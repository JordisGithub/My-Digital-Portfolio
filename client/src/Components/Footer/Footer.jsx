import React from "react";
// import { render } from "react-dom";
// import {
//   Link,
//   DirectLink,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="copyright">
        <div className="up" id="up">
          <i className="fas fa-chevron-up"></i>
        </div>
        <p>&copy; 2020 Jordania Pereyra</p>

        <section>
          <ul class="icon-list">
            <li class="icon-item">
              <a
                href="https://github.com/JordisGithub"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </li>
            <li class="icon-item">
              <a
                href="https://www.linkedin.com/in/jordania-pereyra/"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li class="icon-item">
              <a
                href="https://www.instagram.com/jordi_515/"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="icon-item">
              <a
                href="#"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="icon-item">
              <a
                href="#"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}

export default Footer;

{
  /* <div className="social-media">
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
    </li> */
}
{
  /* <li>
                  <a
                    href="https://twitter.com/jordip515?lang=en"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li> */
}
{
  /* 
                <li>
                  <a
                    href="https://www.facebook.com/jordania.pereyra"
                    className="icon-link"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li> */
}
//   </ul>
// </div>;
