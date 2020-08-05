import React from "react";
import "./TheStack.css";

function Header() {
  return (
    <>
      <section className="stack" id="stack">
        <div className="stack-container">
          <div className="stack-heading">
            <h1>The Stack</h1>
            <h6>Engineering Skillls section</h6>
          </div>

          <div className="my-skills">
            <div className="skill">
              <div className="icon-container">
                <i className="fa fa-code" aria-hidden="true"></i>
              </div>
              <h1>Languages</h1>
              <p>JavaScript, Ruby, SQL HTML, CSS</p>
            </div>

            <div className="skill">
              <div className="icon-container">
                <i className="fa fa-desktop" aria-hidden="true"></i>
              </div>
              <h1>Framework</h1>
              <p> React</p>
            </div>

            <div className="skill">
              <div className="icon-container">
                <i className="fa fa-database" aria-hidden="true"></i>
              </div>

              <h1>Databases</h1>

              <p>Ruby on Rails, Express.js, MySQL, MongoDB</p>
            </div>

            <div className="skill">
              <div className="icon-container">
                <i className="fa fa-server" aria-hidden="true"></i>
              </div>
              <h1>Server</h1>
              <p>Node.js</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
