import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        height: this.state.open ? "100%" : 0,
        position: "absolute",
      },
    };
    return (
      <div style={styles.container} className="nav-list">
        {this.state.open ? <div>{this.props.children}</div> : null}
      </div>
    );
  }
}

export default Menu;
