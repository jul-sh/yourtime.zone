import React from "react";

class SmartBr extends React.Component {
  constructor() {
    super();
    this.state = {
      WindowWidth:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    };
  }

  updateDimensions() {
    this.setState({
      WindowWidth:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    });
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    if (this.props.minWidth && this.props.maxWidth) {
      if (
        this.props.minWidth <= this.state.WindowWidth &&
        this.props.maxWidth >= this.state.WindowWidth
      ) {
        return <br />;
      } else {
        return " ";
      }
    } else if (this.props.minWidth) {
      if (this.props.minWidth <= this.state.WindowWidth) {
        return <br />;
      } else {
        return " ";
      }
    } else if (this.props.maxWidth) {
      if (this.props.maxWidth >= this.state.WindowWidth) {
        return <br />;
      } else {
        return " ";
      }
    }

    return " ";
  }
}

export default SmartBr;
