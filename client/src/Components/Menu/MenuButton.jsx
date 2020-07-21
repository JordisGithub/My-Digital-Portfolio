import React from "react";

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
      container: {
        // border: "red solid 2pt",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "4px",

        position: "absolute",
        top: "3rem",
        right: "5rem",
        width: "7rem",
        height: "5rem",
        justifyContent: "space-between",
        transition: "transform 650ms ease-out",
        cursor: "pointer",
        zIndex: "1500",
      },

      line: {
        transition: "all 0.2s ease",
        background: "linear-gradient(to right, #ff69b4, #c32c7f, #88004e)",

        width: "100%",
        height: "7px",
        borderRadius: ".8rem",
      },

      lineTop: {
        position: "absolute",
        top: "0",
        right: "2.9rem",
        width: "60%",

        transformOrigin: "-10% 150%",
        transform: this.state.open
          ? "rotate(-300deg) translateX(-1rem)"
          : "none",
        transition: "transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57)",
      },

      lineMiddle: {
        position: "absolute",
        top: "2rem",
        transformOrigin: "55% 390%",
        transition: "transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57)",
        transform: this.state.open
          ? "rotate(-60deg) translateX(.8rem)"
          : "none",
      },

      lineBottom: {
        position: "absolute",
        right: "-.2rem",
        bottom: "0rem",
        width: "60%",
        transformOrigin: "5% -90%",
        transformOrigin: "30% -425%",
        transform: this.state.open
          ? "rotate(-300deg) translateX(1rem)"
          : "none",
        transition: "transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57)",
      },
    };
    return (
      <>
        <div
          style={styles.container}
          onClick={
            this.props.onClick
              ? this.props.onClick
              : () => {
                  this.handleClick();
                }
          }
        >
          <div style={{ ...styles.line, ...styles.lineTop }} />
          <div style={{ ...styles.line, ...styles.lineMiddle }} />
          <div style={{ ...styles.line, ...styles.lineBottom }} />
        </div>
      </>
    );
  }
}

export default MenuButton;
