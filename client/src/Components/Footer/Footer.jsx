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
      </footer>
    </>
  );
}

export default Footer;
