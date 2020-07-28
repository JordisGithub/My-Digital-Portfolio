import React from "react";
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
                href="https://www.facebook.com/jordania.pereyra"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="icon-item">
              <a
                href="https://twitter.com/jordip515?lang=en"
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
