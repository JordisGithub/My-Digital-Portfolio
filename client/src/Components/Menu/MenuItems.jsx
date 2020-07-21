import React from "react";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <>
        <div
          className="nav"
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="#stack">The Stack</a>
            </li>

            <li>
              <a href="#about">About Me</a>
            </li>

            <li>
              <a href="#specializations">Specializations</a>
            </li>

            <li>
              <a href="#work">Recent Work</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="https://docdro.id/eRBSl4B" target="_blank">
                Resume
              </a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default MenuItem;
