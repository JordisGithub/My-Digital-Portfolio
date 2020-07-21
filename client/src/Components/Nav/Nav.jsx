import React, { useState } from "react";
// import "./Nav.css";

const Nav = () => {
  const [status, setStatus] = useState("open");

  return (
    <nav>
      <div className="hamburger">
        <div className={status} className="line"></div>
        <div className={status} className="line"></div>
        <div className={status} className="line"></div>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="https://docdro.id/eRBSl4B" target="_blank">
            My Resume
          </a>
        </li>

        <li>
          <a href="#aboutme">About Me</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
