import React from "react";
import "./Menu.css";

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "black",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      lineTop: {
        transform: this.state.open
          ? "rotate(-300deg) translateX(-1rem)"
          : "none",
      },

      lineMiddle: {
        transform: this.state.open
          ? "rotate(-60deg) translateX(.8rem)"
          : "none",
      },

      lineBottom: {
        transform: this.state.open
          ? "rotate(-300deg) translateX(1rem)"
          : "none",
      },
    };
    return (
      <>
        <div
          className="burgermenu-lines-container"
          onClick={
            this.props.onClick
              ? this.props.onClick
              : () => {
                  this.handleClick();
                }
          }
        >
          <div className="linetop" style={{ ...styles.lineTop }} />
          <div className="linemiddle" style={{ ...styles.lineMiddle }} />
          <div className="linebottom" style={{ ...styles.lineBottom }} />
        </div>
      </>
    );
  }
}

export default MenuButton;
